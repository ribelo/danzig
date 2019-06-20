(ns ribelo.wombat
  (:refer-clojure :exclude [set replace sort-by drop fill group-by merge])
  (:require [taoensso.encore :as e]
            [net.cgrand.xforms :as x]
            [java-time :as jt]
            [ribelo.visby.stats :as stats]
            [ribelo.wombat.aggregate :as agg]
            [ribelo.wombat.utils :refer :all]))

(derive java.lang.Number ::value)
(derive java.lang.String ::value)
(derive java.util.Collection ::collection)
(derive java.util.Map ::map)
(derive clojure.lang.Keyword ::value)
(derive ::value ::any)
(derive ::collection ::any)
(derive ::map ::any)

(declare iloc)

(comment
  (def data (repeatedly 100 (fn [] {:a (* (rand-int 100) (if (e/chance 0.5) 1 -1))
                                    :b (* (rand-int 100) (if (e/chance 0.5) 1 -1))
                                    :c (* (rand-int 100) (if (e/chance 0.5) 1 -1))})))
  (def data (repeatedly 100000 (fn [] [(* (rand-int 100) (if (e/chance 0.5) 1 -1))
                                    (* (rand-int 100) (if (e/chance 0.5) 1 -1))
                                    (* (rand-int 100) (if (e/chance 0.5) 1 -1))]))))


(defn map->header [header]
  (map #(reduce-kv (fn [acc k v] (assoc acc k (nth % v))) {} header)))

(into [] (map->header {:a 0 :b 1 :c 2}) data)q

(comment
  (e/qb 1 (into [] (map->header {:a 0 :b 1 :c 2}) data))
  (e/qb 1 (into [] (coll->header [:a nil :c]) data))
  (e/qb 1e4 (into [] (header->map2) data))
  (e/qb 1e4 (into [] (header->map3 {:a 0 :b 1 :c 2}) data))
  )


(defn shape [data]
  [(count data) (count (first data))])

(comment
  (shape data))

(defmulti row
  "make a map, with given kays and values"
  {:arglists '([ks vs])}
  (fn [x y] [(class x) (class y)]))

(defmethod row [java.util.Collection java.util.Collection]
  [ks vs]
  (zipmap ks vs))

(comment
  (row [:a :b :c] [1 2 3]))


(defmulti where
  {:arglists '([x & [y]])}
  (fn [x & [y]] [(class x) (class y)]))

(defmethod where [clojure.lang.Fn nil]
  [pred & _]
  (filter pred))

(comment
  (into [] (where even?) (range 10)))

(defmethod where [clojure.lang.Keyword clojure.lang.Fn]
  [k & [pred]]
  (filter #(pred (get % k))))

(comment
  (into [] (where :a even?) data))

(defmethod where [clojure.lang.Keyword ::any]
  [k & [pred]]
  (filter #(= pred (get % k))))

(comment
  (into [] (where :a 98) data))

(defmulti loc
  {:arglists '([x & [y]])}
  (fn [x & [y]] [(class x) (class y)]))

(defmethod loc [clojure.lang.Keyword nil]
  [k & _]
  (map k))

(comment
  (into [] (loc :a) data))

(defmethod loc [java.util.Collection nil]
  [ks & _]
  (map #(reduce (fn [acc k] (assoc acc k (get % k))) {} ks)))

(defmethod loc [java.util.Collection java.util.Collection]
  [x & [y & _]]
  (comp (iloc y) (loc x)))

(comment
  (into [] (loc [:a :b] [0]) data))

(defmulti iloc (fn [x & [y]] [(class x) (class y)]))

(defmethod iloc [java.lang.Number nil]
  [x & [y & args]]
  (comp (clojure.core/drop (dec x)) (take 1)))

(comment
  (into [] (iloc 0) data))

(defmethod iloc [java.lang.Number java.lang.Number]
  [x & [y & args]]
  (comp (clojure.core/drop (dec x)) (take (- y x))))

(comment
  (into [] (iloc 2 5) data))

(defmethod iloc [java.util.Collection nil]
  [xs]
  (keep-indexed (fn [idx v] (when ((clojure.core/set xs) idx) v))))

(comment
  (into [] (iloc [1 3 5]) data))

(defmulti set (fn [x & [y & [z]]] [(class x) (class y) (class z)]))

(defmethod set [java.lang.Number ::map nil]
  [x & [y & [z & args]]]
  (map-indexed (fn [i elem] (if (= i x) y elem))))

(comment
  (into [] (set 0 {:a nil :b nil :c nil}) (take 5 data)))

(defmethod set [java.lang.Number clojure.lang.Keyword ::any]
  [x & [k & [v]]]
  (map-indexed (fn [i m] (if (= i x) (assoc m k v) m))))

(comment
  (into [] (set 1 :a 999) (take 5 data)))

(defmethod set [java.lang.Number java.lang.Number ::any]
  [x & [y & [v]]]
  (map-indexed (fn [i m] (if (and (>= i x) (< i y)) v m))))

(comment
  (into [] (set 0 3 0) (take 5 data)))

(defmethod set [clojure.lang.Keyword ::value nil]
  [x & [y & [z]]]
  (map (fn [m] (assoc m x y))))

(comment
  (into [] (set :new 0) (take 5 data)))

(defmethod set [clojure.lang.Keyword java.util.Collection nil]
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
           (reduced acc)))))))

(comment
  (into [] (set :new [0 1 2]) (take 5 data)))

(defmethod set [clojure.lang.Keyword clojure.lang.Fn java.util.Collection]
  [k & [f & [coll]]]
  (map (fn [m]
         (let [v (apply f (vals (select-keys m coll)))]
         (assoc m k v)))))

(comment
  (into [] (set :new + [:a :b]) (take 5 data)))

(defmulti replace (fn [x & [y & [z]]] [(class x) (class y) (class z)]))

(defmethod replace [clojure.lang.Fn ::any nil]
  [pred v]
  (map (fn [m] (if (pred m) v m))))

(comment
  (into [] (replace even? 0) (range 10)))

(defmethod replace [clojure.lang.Keyword clojure.lang.Fn ::any]
  [k pred v]
  (map (fn [m] (if (pred (get m k)) (assoc m k v) m))))

(comment
  (into [] (replace :a even? 0) data))

(defmulti drop (fn [x & [y & z]] [(class x) (class y) (class z)]))

(defmethod drop [java.lang.Number nil nil]
  [x & _]
  (keep-indexed (fn [i m] (when-not (= i x) m))))

(comment
  (into [] (drop 0) (take 5 data)))

(defmethod drop [java.lang.Number java.lang.Number nil]
  [x & [y & _]]
  (keep-indexed (fn [i m] (when-not (and (>= i x) (< i y)) m))))

(comment
  (into [] (drop 0 4) (take 5 data)))

(defmethod drop [java.lang.Number clojure.lang.Keyword nil]
  [x & [y & _]]
  (map-indexed (fn [i m] (if (= i x) (dissoc m y) m))))

(comment
  (into [] (drop 0 :a) (take 5 data)))

(defmethod drop [java.util.Collection nil nil]
  [xs & _]
  (keep-indexed (fn [i m] (when-not ((clojure.core/set xs) i) m))))

(comment
  (into [] (drop [0 4]) (take 5 data)))

(defmethod drop [clojure.lang.Keyword nil nil]
  [x & _]
  (map #(dissoc % x)))

(comment
  (into [] (drop :a) (take 5 data)))

(defmethod drop [clojure.lang.Keyword clojure.lang.Keyword nil]
  [x & [y]]
  (map #(dissoc % x y)))

(defmethod drop [clojure.lang.Keyword clojure.lang.Keyword clojure.lang.ArraySeq]
  [x & [y & z]]
  (map #(apply dissoc % (conj z y x))))

(comment
  (into [] (drop :a :b :c :d) (take 5 data)))

(defmethod drop [clojure.lang.Keyword clojure.lang.Fn nil]
  [k & [pred & _]]
  (remove #(pred (get % k))))

(comment
  (into [] (drop :a neg?) data))

(defmethod drop [clojure.lang.Fn nil nil]
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
  (let [vks (volatile! nil)
        drop-ks (volatile! #{})]
    (comp
     (x/transjuxt {:ks (comp (mapcat keys) (distinct) (x/into []))
                   :xs (x/into [])})
     (mapcat (fn [{:keys [ks xs]}]
               (when-not (seq @vks)
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

(defn fillna [v]
  (comp (x/transjuxt {:ks (comp (mapcat keys) (distinct) (x/into []))
                      :xs (x/into [])})
        (mapcat (fn [{:keys [ks xs]}]
                  (map #(reduce (fn [acc k]
                                  (if-not (get acc k)
                                    (assoc acc k v)
                                    acc))
                                % ks) xs)))))

(comment
  (into [] (fillna 0) [{:a 1 :b 1} {:a 2 :b nil} {:a 3 :b 3}]))

(defmulti group-by (fn [f m] [(class f) (class m)]))

(defmethod group-by [clojure.lang.Fn java.util.Map]
  [f m]
  (comp
   (x/by-key f (agg/aggregate m))
   (map second)))

(defmethod group-by [clojure.lang.Keyword java.util.Map]
  [k m]
  (comp
   (x/by-key k (agg/aggregate (assoc m k :first)))
   (map second)))

(comment
  (into [] (group-by :a {:b (x/into [])
                         :c :sum}) data))

(defmethod group-by [clojure.lang.Keyword clojure.lang.Fn]
  [k f]
  (x/by-key k f))

(comment
  (into [] (group-by :a (x/into [])) data))

(defmethod group-by [java.util.Collection java.util.Map]
  [ks m]
  (comp
   (x/by-key (apply juxt ks) (agg/aggregate
                              (reduce (fn [acc k]
                                        (assoc acc k :first)) m ks)))
   (map second)))

(comment
  (into [] (group-by [:a :b] {:a :sum}) data))

(defmethod group-by [java.util.Collection clojure.lang.Fn]
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

(defn- ->freq [[k n]]
  (case k
    :ms (jt/millis (or n 1))
    :s (jt/seconds (or n 1))
    :min (jt/minutes (or n 1))
    :t (jt/minutes (or n 1))
    :h (jt/hours (or n 1))
    :d (jt/days (or n 1))
    :m (jt/months (or n 1))
    :y (jt/years (or n 1))))

(defn asfreq [freq & {:keys [key fill] :or {key :date}}]
  (let [fill' (conj fill key)]
    (comp
     (x/sort-by key)
     (fn [rf]
       (let [freq' (->freq freq)
             lst (volatile! nil)]
         (fn
           ([] (rf))
           ([acc] (rf acc))
           ([acc x]
            (if-not @lst
              (do (vreset! lst (select-keys x fill'))
                  (rf acc x))
              (let [last-date (jt/plus (get @lst key) freq')
                    date (get x key)
                    dts (take-while #(jt/before? % date)
                                    (jt/iterate jt/plus last-date freq'))
                    tmps (reduce (fn [acc d] (conj acc (assoc @lst key d))) [] dts)]
                (vreset! lst (select-keys x fill'))
                (reduce (fn [acc x] (rf acc x)) (unreduced (rf acc x)) tmps)))))))
     (x/sort-by key))))

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
  (map #(select-keys % ks)))

(comment
  (into [] (select-columns [:a :b]) data)
  (= (into [] (select-columns [:a :b]) data)
     (into [] (loc [:a :b]) data)))

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
