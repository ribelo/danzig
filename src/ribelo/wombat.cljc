(ns ribelo.wombat
  (:refer-clojure :exclude [set replace sort-by drop fill group-by merge update])
  (:require
   [net.cgrand.xforms :as x]
   #?(:clj [java-time :as jt])
   [ribelo.wombat.aggregate :as agg]))

#?(:clj (derive java.lang.Number ::number)
   :cljs (derive js/Number ::number))
(derive ::number ::value)
#?(:clj (derive clojure.lang.Keyword ::keyword)
   :cljs (derive cljs.core/Keyword ::keyword))
#?(:clj (derive java.lang.String ::value)
   :cljs (derive js/String ::value))
#?(:clj (derive java.util.Collection ::collection)
   :cljs (do (derive cljs.core/PersistentVector ::collection)
             (derive cljs.core/LazySeq ::collection)))
#?(:clj (derive java.util.Map ::map)
   :cljs (do (derive cljs.core/PersistentArrayMap ::map)
             (derive cljs.core/PersistentHashMap ::map)))
(derive ::keyword ::value)
#?(:clj (derive java.lang.Object ::any)
   :cljs (derive js/Object ::any))
#?(:clj (derive clojure.lang.Fn ::fn)
   :cljs (derive js/Function ::fn))
#?(:clj (derive clojure.lang.ArraySeq ::seq)
   :cljs (derive cljs.core/IndexedSeq ::seq))

(declare iloc)

(comment
  (require '[taoensso.encore :as e])
  (def data (repeatedly 100 (fn [] {:a (* (rand-int 100) (if (e/chance 0.5) 1 -1))
                                    :b (* (rand-int 100) (if (e/chance 0.5) 1 -1))
                                    :c (* (rand-int 100) (if (e/chance 0.5) 1 -1))}))))

(defn map->header [header]
  (map #(reduce-kv (fn [acc k v] (assoc acc k (nth % v))) {} header)))

(comment
  (into [] (map->header {:a 0 :b 1}) [[0 0] [1 1] [2 2]]))

(defn shape [data]
  [(count data) (count (first data))])

(comment
  (shape data))

(defmulti row
  "make a map, with given kays and values"
  {:arglists '([ks vs])}
  (fn [x y] [(type x) (type y)]))

(defmethod row [::collection ::collection]
  [ks vs]
  (zipmap ks vs))

(comment
  (row [:a :b :c] [1 2 3]))

(defmulti where
  {:arglists '([x & [y]])}
  (fn [x & [y]] [(type x) (type y)]))

(defmethod where [::fn nil]
  [pred & _]
  (filter pred))

(comment
  (into [] (where even?) (range 10)))

(defmethod where [::keyword ::fn]
  [k & [pred]]
  (filter #(pred (get % k))))

(comment
  (into [] (where :a even?) data))

(defmethod where [::keyword ::any]
  [k & [pred]]
  (filter #(= pred (get % k))))

(comment
  (into [] (where :a 0) data))

(defmulti loc
  {:arglists '([x & [y]])}
  (fn [x & [y]] [(type x) (type y)]))

(defmethod loc [::keyword nil]
  [k & _]
  (map k))

(comment
  (into [] (loc :a) data))

(defmethod loc [::collection nil]
  [ks & _]
  (map #(reduce (fn [acc k] (assoc acc k (get % k))) {} ks)))

(comment
  (into [] (loc [:a :b]) data))

(defmethod loc [::collection ::collection]
  [x & [y & _]]
  (comp (iloc y) (loc x)))

(comment
  (into [] (loc [:a :b] [0 1]) data))

(defmulti iloc (fn [x & [y]] [(type x) (type y)]))

(defmethod iloc [::number nil]
  [x & [_ & _]]
  (comp (clojure.core/drop (dec x)) (take 1)))

(comment
  (into [] (iloc 0) data))

(defmethod iloc [::number ::number]
  [x & [y & _]]
  (comp (clojure.core/drop (dec x)) (take (- y x))))

(comment
  (into [] (iloc 2 5) data))

(defmethod iloc [::collection nil]
  [xs]
  (keep-indexed (fn [idx v] (when ((clojure.core/set xs) idx) v))))

(comment
  (into [] (iloc [1 3 5]) data))

(defmulti set (fn [x & [y & [z]]] [(type x) (type y) (type z)]))

(defmethod set [::number ::map nil]
  [x & [y & [_ & _]]]
  (map-indexed (fn [i elem] (if (= i x) y elem))))

(comment
  (into [] (set 0 {:a nil :b nil :c nil}) (take 5 data)))

(defmethod set [::number ::keyword ::any]
  [x & [k & [v]]]
  (map-indexed (fn [i m] (if (= i x) (assoc m k v) m))))

(comment
  (into [] (set 1 :a 999) (take 5 data)))

(defmethod set [::number ::number ::any]
  [x & [y & [v]]]
  (map-indexed (fn [i m] (if (and (>= i x) (< i y)) v m))))

(comment
  (into [] (set 0 3 0) (take 5 data)))

(defmethod set [::keyword ::value nil]
  [x & [y & [_]]]
  (map (fn [m] (assoc m x y))))

(comment
  (into [] (set :new 0) (take 5 data)))

(defmethod set [::keyword ::collection nil]
  [k & [coll & _]]
  (fn [rf]
    (let [xs (volatile! coll)]
      (fn
        ([] (rf))
        ([acc] (rf acc))
        ([acc x]
         (if-let [[y] @xs]
           (do
             (vswap! xs next)
             (rf acc (assoc x k y)))
           (ensure-reduced acc)))))))

(comment
  (into [] (set :new [0 2 4]) (take 5 data)))

(defmethod set [::keyword ::fn ::collection]
  [k & [f & [ks]]]
  (map (fn [m]
         (let [v (apply f (persistent! (reduce (fn [acc k] (conj! acc (get m k))) (transient []) ks)))]
           (assoc m k v)))))

(comment
  (into [] (set :new + [:a :b]) data) q)

(defmulti replace (fn [x & [y & [z]]] [(type x) (type y) (type z)]))

(defmethod replace [::fn ::any nil]
  [pred v]
  (map (fn [m] (if (pred m) v m))))

(comment
  (into [] (replace even? 0) (range 10)))

(defmethod replace [::keyword ::fn ::any]
  [k pred v]
  (map (fn [m] (if (pred (get m k)) (assoc m k v) m))))

(comment
  (into [] (replace :a even? 0) (take 5 data)))

(defmulti update (fn [x & [y & [z]]] [(type x) (type y) (type z)]))

(defmethod update [::keyword ::fn nil]
  [k f]
  (map (fn [m] (update m k f))))

(defmethod update [::keyword ::fn ::fn]
  [k pred f]
  (map (fn [m] (if (pred (get m k)) (update m k f) m))))

(defmulti drop (fn [x & [y & z]] [(type x) (type y) (type z)]))

(defmethod drop [::number nil nil]
  [x & _]
  (keep-indexed (fn [i m] (when-not (> i x) m))))

(comment
  (into [] (drop 2) data))

(defmethod drop [::number ::number nil]
  [x & [y & _]]
  (keep-indexed (fn [i m] (when-not (and (>= i x) (< i y)) m))))

(comment
  (into [] (drop 0 4) (take 5 data)))

(defmethod drop [::collection nil nil]
  [xs & _]
  (let [set_ (clojure.core/set xs)]
    (keep-indexed (fn [i m] (when-not (contains? set_ i) m)))))

(comment
  (into [] (drop [0 4]) (take 5 data)))

(defmethod drop [::keyword nil nil]
  [x & _]
  (map #(dissoc % x)))

(comment
  (into [] (drop :a) (take 5 data)))

(defmethod drop [::keyword ::keyword nil]
  [x & [y]]
  (map #(dissoc % x y)))

(defmethod drop [::keyword ::keyword ::seq]
  [x & [y & z]]
  (map #(apply dissoc % (conj z y x))))

(comment
  (into [] (drop :a :b :c :d) (take 5 data)))

(defmethod drop [::keyword ::fn nil]
  [k & [pred & _]]
  (remove #(pred (get % k))))

(comment
  (into [] (drop :a neg?) data))

(defmethod drop [::fn nil nil]
  [pred & _]
  (remove pred))

(comment
  (into [] (drop even?) (range 10)))

(defmulti dropna (fn [& {:keys [axis]}] axis))

(defmethod dropna 0
  [& _]
  (filter #(every? identity (vals %))))

(comment
  (into [] (dropna :axis 0) [{:a 1 :b 1} {:a 2 :b nil} {:a 3 :b 3}]))

(defmethod dropna 1
  [& _]
  (let [vks (volatile! ::none)
        drop-ks (volatile! #{})]
    (comp
     (x/transjuxt {:ks (comp (take 1) (mapcat keys) (x/into []))
                   :xs (x/into [])})
     (mapcat (fn [{:keys [ks xs]}]
               (when (identical? @vks ::none)
                 (vreset! vks ks)
                 (doseq [k ks]
                   (when-not (every? identity (map k xs))
                     (vswap! drop-ks conj k))))
               (map (fn [m]
                      (reduce (fn [acc k]
                                (dissoc acc k)) m @drop-ks)) xs))))))

(comment
  (into [] (dropna :axis 1) [{:a 1 :b 1} {:a 2 :b nil} {:a 3 :b 3}]))

(defmethod dropna nil
  [& _]
  (dropna :axis 0))

(comment
  (into [] (dropna) [{:a 1 :b 1} {:a 2 :b nil} {:a 3 :b 3}]))

(defn fillna1 [v]
  (comp (x/transjuxt {:ks (comp (mapcat keys) (distinct) (x/into []))
                      :xs (x/into [])})
        (mapcat (fn [{:keys [ks xs]}]
                  (map #(persistent! (reduce (fn [acc k]
                                               (if-not (get acc k)
                                                 (assoc! acc k v)
                                                 acc))
                                             (transient %) ks)) xs)))))

(comment
  (into [] (fillna 0) [{:a 1 :b 1} {:a 2 :b nil} {:a 3 :b 3}]))

(defmulti group-by (fn [f m] [(type f) (type m)]))

(defmethod group-by [::fn ::fn]
  [f xf]
  (comp
   (x/by-key f xf)))

(defmethod group-by [::fn ::map]
  [f m]
  (comp
   (x/by-key f (agg/aggregate m))))

(defmethod group-by [::keyword ::map]
  [k m]
  (comp
   (x/by-key k (agg/aggregate (assoc m k :first)))))

(comment
  (into [] (group-by :a {:c :sum}) [{:a 1 :c 1} {:a 1 :c 2} {:a 2 :c 3} {:a 2 :c 4}])
  (into [] (group-by :a {:c :sum}) data))

(defmethod group-by [::keyword ::fn]
  [k f]
  (x/by-key k f))

(comment
  (into [] (group-by :a (x/into [])) data))

(defmethod group-by [::collection ::map]
  [ks m]
  (comp
   (x/by-key (apply juxt ks) (agg/aggregate
                              (reduce (fn [acc k]
                                        (assoc acc k :first)) m ks)))))

(comment
  (into [] (group-by [:a :b] {:a :sum}) data))

(defmethod group-by [::collection ::fn]
  [ks f]
  (x/by-key (apply juxt ks) f))

(comment
  (into [] (group-by [:a :b] (x/into [])) data))

(defn unique []
  (distinct))

(comment
  (into [] (unique) data))

(defn value-counts
  ([]
   (x/by-key identity x/count))
  ([k]
   (comp (map k) (value-counts))))

(comment
  (into [] (value-counts) data)
  (into [] (value-counts :a) data))

#?(:clj
   (defn- keyword->freq [[n k]]
     (case k
       :ms (jt/millis n)
       :s (jt/seconds n)
       :min (jt/minutes n)
       :t (jt/minutes n)
       :h (jt/hours n)
       :d (jt/days n)
       :m (jt/months n)
       :y (jt/years n))))

#?(:clj
   (defn asfreq [freq & {:keys [key fill] :or {key :date fill []}}]
     (let [fill (conj fill key)]
       (comp
        (x/sort-by key)
        (fn [rf]
          (let [freq (keyword->freq freq)
                lst  (volatile! ::none)]
            (fn
              ([] (rf))
              ([acc] (rf acc))
              ([acc x]
               (if (identical? @lst ::none)
                 (do (vreset! lst (select-keys x fill))
                     (rf acc x))
                 (let [last-date (jt/plus (get @lst key) freq)
                       date      (get x key)
                       dts       (take-while #(jt/before? % date)
                                             (jt/iterate jt/plus last-date freq))
                       tmps      (reduce (fn [acc d] (conj acc (assoc @lst key d)))
                                         []
                                         dts)]
                   (vreset! lst (reduce (fn [acc k] (assoc acc k (get x k)))
                                        {}
                                        fill))
                   (vreset! lst (select-keys x fill))
                   (reduce (fn [acc v] (rf acc v)) acc tmps)
                   (rf acc x)))))))))))

(comment
  (into [] (comp (asfreq [1 :d] :fill [:a])
                 (map :a))
        [{:date (jt/local-date "2019-01-01") :a 1}
         {:date (jt/local-date "2019-01-06") :a 2}
         {:date (jt/local-date "2019-01-03") :a 3}]))

(defn window
  ([n]
   (x/partition n 1))
  ([n step]
   (x/partition n step))
  ([n step xform]
   (x/partition n step xform)))

(comment
  (into [] (window 3) (range 10))
  (into [] (window 3 10) (range 100))
  (into [] (window 10 1 x/avg) (range 100)))

(defn rolling [n xform]
  (comp
   (window n 1 xform)
   (x/into (vec (repeat (dec n) nil)))
   (mapcat identity)))

(comment
  (into [] (rolling 3 x/avg) (range 10))
  (into [] (rolling 10 10 (x/reduce +)) (range 100))
  (into [] (window 10 1 x/avg) (range 100)))

(def columns
  (comp (take 1) (map keys)))

(comment
  (into [] columns data))

(defn select-columns [ks]
  (map #(reduce (fn [acc k] (assoc acc k (get % k))) {} ks)))

(defn head
  ([] (head 5))
  ([n] (take n)))

(comment
  (into [] (head) data))

(defn tail
  ([] (tail 5))
  ([n] (x/take-last n)))

(comment
  (into [] (tail) data))

(def describe
  (comp
   (x/transjuxt {:ks columns
                 :xs (x/into [])})
   (mapcat (fn [{:keys [ks xs]}]
             (into {}
                   (map (fn [k]
                          (x/transjuxt
                           {k (x/transjuxt {:count (agg/count k)
                                            :mean  (agg/mean k)
                                            :std   (agg/std k)
                                            :min   (agg/min k)
                                            :25%   (agg/quantile k 0.25)
                                            :50%   (agg/quantile k 0.5)
                                            :75%   (agg/quantile k 0.75)
                                            :max   (agg/max k)})}
                           xs))
                        ks))))))

(comment
  (into {} describe data))

(defn sort-by
  ([k]
   (x/sort-by k))
  ([k f]
   (x/sort-by k f)))
