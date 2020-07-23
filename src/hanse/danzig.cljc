(ns hanse.danzig
  (:refer-clojure :exclude [set replace sort-by drop fill group-by merge update])
  #?(:cljs (:require-macros [hanse.danzig :refer [=>> +>> and-macro or-macro where]]))
  (:require
   [net.cgrand.xforms :as x]
   #?(:clj [java-time :as jt])
   [meander.epsilon :as m]
   [hanse.danzig.relationship]
   [hanse.rostock.math :as math]
   #?(:clj [hanse.danzig.aggregate :as agg])))

(comment
  (do
    (require '[taoensso.encore :as e])
    (def data (repeatedly 1000000 (fn [] {:a (* (rand-int 100) (if (e/chance 0.5) 1 -1))
                                          :b (* (rand-int 100) (if (e/chance 0.5) 1 -1))
                                          :c (* (rand-int 100) (if (e/chance 0.5) 1 -1))})))))

#?(:clj
   (defmacro =>>
     [coll & body]
     `(into []
            (comp-some
             ~@body)
            ~coll)))

#?(:clj
   (defmacro +>>
     [coll & body]
     `(into {}
            (comp-some
             ~@body)
            ~coll)))

#?(:clj
   (defn ^:private args->fn-body [args]
     (m/match args
       [?f (m/pred (some-fn keyword? string?) ?x) (m/pred (some-fn keyword? string?) ?y)]
       `(~?f (get ~'m ~?x) (get ~'m ~?y))
       [?f (m/pred #(instance? java.util.regex.Pattern %) ?x) (m/pred (some-fn keyword? string?) ?y)]
       `(~?f ~?x (get ~'m ~?y))
       [?f ?x ?y]
       `(~?f (get ~'m ~?x) ~?y))))

#?(:clj
   (defmacro ^:private and-macro [coll]
     (loop [[args & coll] coll
            r                   '()]
       (if args
         (let [body (args->fn-body args)]
           (recur coll (conj r body)))
         `(clojure.core/and ~@r)))))

#?(:clj
   (defmacro ^:private or-macro [coll]
     (loop [[args & coll] coll
            r                   '()]
       (if args
         (let [body (args->fn-body args)]
           (recur coll (conj r body)))
         `(clojure.core/or ~@r)))))

(defn comp-some [& fns]
  (apply comp (filter identity fns)))

(defn vecs->maps [ks]
  (m/match ks
    (m/pred map?)
    (map #(persistent! (reduce-kv (fn [acc i k] (assoc! acc k (nth % i))) (transient {}) ks)))
    (m/pred vector? ?x)
    (map #(zipmap ?x %))))

(comment
  (=>> [[0 0] [1 2] [3 4]] (vecs->maps {0 :a 1 :b}))
  ;; => [{:a 0, :b 0} {:a 1, :b 1} {:a 2, :b 2}]
  (=>> [[0 0] [1 1] [2 2]] (vecs->maps [:a :b])))

(defn row [ks vs]
  (m/match [ks vs]
    [(m/pred coll?) (m/pred coll?)]
    (zipmap ks vs)))

(comment
  (row [:a :b :c] [1 2 3])
  ;; => {:a 1, :b 2, :c 3}
  )

(defn where* [args]
  (m/match args
    ;; [:> :a :b]
    [(m/pred fn? ?f)
     (m/pred (some-fn keyword? string?) ?k)
     (m/pred (some-fn keyword? string?) ?j)]
    (filter (fn [m] (?f (get m ?k) (get m ?j))))
    ;; [:> :a 1]
    [(m/pred fn? ?f)
     (m/pred (some-fn keyword? string?) ?k)
     (m/some ?v)]
    (filter (fn [m] (?f (get m ?k) ?v)))
    ;; [even? :a]
    [(m/pred fn? ?f)
     (m/pred (some-fn keyword? string?) ?k)]
    (filter (fn [m] (?f (get m ?k))))))

(comment
  (=>> data (where* [> :a :b]) (take 1))
  ;; => [{:a 58, :b 94, :c -70}]
  )

(comment
  (=>> data (where* [even? :a]) (take 1))
  ;; => [{:a 58, :b 94, :c -70}]
  )

#?(:clj
   (defmacro where [[x & y :as args]]
     (case x
       :and `(filter (fn [~'m] (and-macro ~y)))
       :or  `(filter (fn [~'m] (or-macro ~y)))
       `(where* ~args))))



(comment
  [(e/qb 1
         (=>> data
              (where [:and
                      [> :a :b]])))
   (e/qb 1
         (=>> data
              (filter (fn [m] (> (get m :a) 0.0)))
              (filter (fn [m] (< (get m :a) 50.0)))
              (filter (fn [m] (< (get m :b) 0.0)))
              (filter (fn [m] (> (get m :b) -50.0)))))]
  ;; => [89.73 115.66]
  )

(defn row-count []
  x/count)

(defn column-count []
  (comp (take 1) (mapcat keys) x/count))

(defn shape []
  (comp (x/transjuxt [(row-count) (column-count)]) (mapcat identity)))

(defn column-names [& args]
  (m/match args
    ;; all
    (m/or (:all) nil (m/pred empty? args))
    (comp (take 1) (mapcat keys))
    ;; regex
    ((m/pred #(instance? java.util.regex.Pattern %) ?x) & _)
    (comp (take 1) (mapcat keys) (filter #(re-find ?x (str %))))
    ;; keys
    (!ks ...)
    (comp (take 1) (mapcat keys) (filter (into #{} !ks)))))

(defn select-columns [& args]
  (m/match args
    ;; all
    (m/or (:all) nil (m/pred empty? args))
    (map identity)
    ;; regex
    ((m/pred #(instance? java.util.regex.Pattern %) ?x) & _)
    (comp (x/transjuxt [(column-names ?x) (x/into [])])
          (map (fn [[ks coll]] (=>> coll (select-columns ks)))))
    ;; ks ...
    ((m/pred (some-fn keyword? string?) !ks) ...)
    (map #(persistent! (reduce (fn [acc k] (assoc! acc k (get % k))) (transient {}) !ks)))
    ;; [ks]
    (?ks)
    (map #(persistent! (reduce (fn [acc k] (assoc! acc k (get % k))) (transient {}) ?ks)))))

(defn rename-columns [m]
  (map #(clojure.set/rename-keys % m)))

(defn set [& args]
  (m/match args
    ;; i key val
    ((m/pred integer? ?i) (m/pred (some-fn keyword? string?) ?k) ?v)
    (map-indexed (fn [i m] (if (= i ?i) (assoc m ?k ?v) m)))
    ;; i map
    ((m/pred integer? ?i) (m/pred map? ?m))
    (map-indexed (fn [i m] (if (= i ?i) ?m m)))
    ;; key [fn keys/vals]
    ((m/pred (some-fn keyword? string?) ?k)
     [(m/pred fn? ?f) . !ks ...])
    (map (fn [m] (let [args (mapv (fn [k] (if ((some-fn keyword? string?) k)
                                            (get m k) k)) !ks)
                       v    (apply ?f args)]
                   (assoc m ?k v))))
    ;; key coll
    ((m/and ?k (m/pred (some-fn keyword? string?)))
     (m/pred coll? ?coll))
    (let [xs (volatile! (seq ?coll))]
      (fn [xf]
        (fn
          ([] (xf))
          ([acc] (xf acc))
          ([acc e]
           (if-let [v (first @xs)]
             (do (vswap! xs next)
                 (xf acc (assoc e ?k v)))
             (ensure-reduced acc))))))
    ;; key val
    ((m/and ?k (m/pred (some-fn keyword? string?))) ?v)
    (map (fn [m] (assoc m ?k ?v)))
    ;; {k [f kesy/vals]}
    ((m/pred map? ?mfn))
    (map (fn [m]
           (persistent!
            (reduce-kv
             (fn [acc k [f & xs]]
               (let [args (mapv (fn [k] (if ((some-fn keyword? string?) k)
                                          (get m k) k)) xs)]
                 (assoc! acc k (apply f args))))
             (transient m)
             ?mfn))))))

(comment
  (=>> data (set 0 :a 999) (take 2))
  ;; => [{:a 999, :b 43, :c 7} {:a 58, :b 94, :c -70}]
  (=>> data (set 0 {:a nil :b nil :c nil}) (take 2))
  ;; => [{:a nil, :b nil, :c nil} {:a 58, :b 94, :c -70}]
  (=>> data (set :new 0) (take 2))
  ;; => [{:a -91, :b 43, :c 7, :new 0} {:a 58, :b 94, :c -70, :new 0}]
  (=>> data (set :new [+ :a 1]) (take 2))
  ;; => [{:a -91, :b 43, :c 7, :new -48} {:a 58, :b 94, :c -70, :new 152}]
  (=>> data
       (set {:new-a [+ :a 1]
             :new-b [+ :b 1]})
       (take 2))
  ;; => [{:a 70, :b -13, :c 45, :new-a 71, :new-b -12}
  ;;     {:a -37, :b 41, :c 45, :new-a -36, :new-b 42}]
  )

(defn replace [& args]
  (m/match args
    ;; fn val
    ((m/and ?pred (m/pred fn?)) ?v)
    (map (fn [m] (if (?pred m) ?v m)))
    ;; k fn val
    ((m/and ?k (m/pred (some-fn keyword? string?)))
     (m/and ?pred (m/pred fn?)) ?v)
    (map (fn [m] (if (?pred (get m ?k)) (assoc m ?k ?v) m)))))

(comment
  (=>> data (replace :a even? :even) (take 3))
  ;; => [{:a -91, :b 43, :c 7} {:a :even, :b 94, :c -70} {:a :even, :b -69, :c 99}]
  )

(defn update [& args]
  (m/match args
    ;; k fn
    ((m/and ?k (m/pred (some-fn keyword? string?)))
     (m/and ?f (m/pred fn?)))
    (map (fn [m] (clojure.core/update m ?k ?f)))
    ;; k pred fn
    ((m/and ?k (m/pred (some-fn keyword? string?)))
     (m/and ?pred (m/pred fn?))
     (m/and ?f (m/pred fn?)))
    (map (fn [m] (if (?pred (get m ?k)) (clojure.core/update m ?k ?f) m)))
    ;; {k f}
    ((m/pred map? ?mfn))
    (map (fn [m]
           (persistent!
            (reduce-kv
             (fn [acc k v]
               (let [f (get ?mfn k)]
                 (assoc! acc k (cond-> v (identity f) f))))
             (transient {})
             m))))))

(comment
  (=>> data (update :a inc) (take 2))
  ;; => [{:a 71, :b -13, :c 45} {:a -36, :b 41, :c 45}]
  (=>> data (update :a even? inc) (take 2))
  ;; => [{:a 71, :b -13, :c 45} {:a -37, :b 41, :c 45}]
  (=>> data (update {:a inc}))
  )

(defn drop [& args]
  (m/match args
    ;; none
    (m/or (m/pred empty?) (m/pred nil?))
    (map identity)
    ;; i
    ((m/pred number? ?x))
    (clojure.core/drop ?x)
    ;; i-j
    ((m/and (m/pred number? ?x)) (m/and (m/pred number? ?y)))
    (keep-indexed (fn [i m] (when (clojure.core/and (>= i ?x) (< i ?y)) m)))
    ;; [is]
    ([(m/and (m/pred number? !ks)) ...])
    (let [?xs (into #{} !ks)]
      (keep-indexed (fn [i m] (when-not (contains? ?xs i) m))))
    ;; ks
    ((m/pred (some-fn keyword? string?) !ks) ...)
    (map (fn [m] (apply dissoc m !ks)))
    ;; [ks]
    ([(m/pred (some-fn keyword? string?) !ks) ...])
    (map (fn [m] (apply dissoc m !ks)))
    ;; fn
    ((m/pred fn? ?f))
    (remove ?f)
    ;; k fn
    ((m/pred (some-fn keyword? string?) ?k) (m/pred fn? ?f))
    (remove (fn [m] (?f (get m ?k))))
    ;; regex
    ((m/pred #(instance? java.util.regex.Pattern %) ?x) & _)
    (comp (x/transjuxt [(column-names ?x) (x/into [])])
          (map (fn [[ks coll]] (=>> coll (drop ks)))))
    ;; {k f}
    ((m/pred map? ?mfn))
    (remove (fn [m] (some (fn [[k f]] (f (get m k))) ?mfn)))))

(comment
  (do
    (e/qb 10 (into [] (drop 999995) data))
    (e/qb 10 (into [] (clojure.core/drop 999995) data))))

(comment
  (into [] (drop 0 4) (take 5 data)))

(comment
  (into [] (drop [0 2]) (take 5 data)))

(comment
  (into [] (drop :a) (take 5 data)))

(comment
  (into [] (drop :a :b :c :d) (take 5 data)))

(comment
  (into [] (drop :a neg?) data))

(comment
  (into [] (drop even?) (range 10)))

(defn dropna [& args]
  (m/match args
    (m/pred empty?)
    (dropna :axis 0)
    (:axis 0)
    (filter #(every? identity (vals %)))
    (:axis 1)
    (let [vks     (volatile! ::none)
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
                                  (dissoc acc k)) m @drop-ks)) xs)))))))

(comment
  (into [] (dropna :axis 1) [{:a 1 :b 1} {:a 2 :b nil} {:a 3 :b 3}]))

(comment
  (into [] (dropna) [{:a 1 :b 1} {:a 2 :b nil} {:a 3 :b 3}]))

(defn fillna [v]
  (map (fn [m]
         (persistent!
          (reduce-kv (fn [acc k val] (if val (assoc! acc k val) (assoc! acc k v))) (transient {}) m)))))

(comment
  (into [] (fillna 0) [{:a 1 :b 1} {:a 2 :b nil} {:a 3 :b 3}]))

(defn group-by [& args]
  (println args)
  (m/match args
    ;; k f
    ((m/pred (some-fn keyword? fn?) ?f) (m/pred fn? ?xf))
    (x/by-key ?f ?xf)
    ;; [k j] f
    ([(m/pred (some-fn keyword? fn?) !fs) ...] (m/pred fn? ?xf))
    (x/by-key (apply juxt !fs) ?xf)
    ;; k map
    ((m/pred (some-fn keyword? fn?) ?f) (m/pred map? ?m))
    (x/by-key ?f (agg/aggregate ?m))
    ;; [k j] map
    ([(m/pred (some-fn keyword? fn?) !fs) ...] (m/pred map? ?m))
    (x/by-key (apply juxt !fs) (agg/aggregate ?m))))

(comment
  (=>> [{:a 1 :c 1} {:a 1 :c 2} {:a 2 :c 3} {:a 2 :c 4}] (group-by :a {:c :sum}))
  (=>> data (group-by :a {:c :sum
                          :b :sum}))
  [(e/qb 1 (=>> data (group-by :a {:b-mean [:b :mean]
                                   :b-sum  [:b :sum]
                                   :c-mean [:c :mean]
                                   :c-sum  [:c :sum]})))
   (e/qb 1 (->> data
                (clojure.core/group-by :a)
                (mapv (fn [[v coll]]
                        (let [b-coll (->> coll (mapv :b))
                              c-coll (->> coll (mapv :c))]
                          [v {:b-mean (hanse.rostock.stats/mean b-coll)
                              :b-sum  (->> b-coll (reduce +))
                              :c-mean (hanse.rostock.stats/mean c-coll)
                              :c-sum  (->> c-coll (reduce +))}])))))]
  ;; => [515.28 531.06])
  )

(comment
  (=>> data (group-by :a (x/into []))))

(comment
  (into [] (group-by [:a :b] {:a :sum}) data))

(comment
  (=>> data (group-by [:a :b] (x/into []))))

(defn value-counts
  ([]
   (x/by-key identity x/count))
  ([k]
   (comp (map k) (value-counts))))

(comment
  (into {} (value-counts) data)
  (into {} (value-counts :a) data))

#?(:clj
   (defn- keyword->freq [[n k]]
     (case k
       :ms  (jt/millis n)
       :s   (jt/seconds n)
       :min (jt/minutes n)
       :t   (jt/minutes n)
       :h   (jt/hours n)
       :d   (jt/days n)
       :m   (jt/months n)
       :y   (jt/years n))))

#?(:clj
   (defn- as-day-freq [freq {:keys [key fill] :or {key :date fill []}}]
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

#?(:clj
   (defn- as-month-freq [freq {:keys [key fill] :or {key :date fill []}}]
     (let [fill (conj fill key)]
       (comp
        (x/sort-by key)
        (fn [rf]
          (let [lst (volatile! ::none)]
            (fn
              ([] (rf))
              ([acc] (rf acc))
              ([acc x]
               (if (identical? @lst ::none)
                 (do (vreset! lst (select-keys x fill))
                     (rf acc (clojure.core/update x key #(jt/adjust % :last-day-of-month))))
                 (let [last-date (jt/adjust (jt/plus (get @lst key) (jt/months 1)) :last-day-of-month)
                       date      (jt/adjust (get x key) :last-day-of-month)
                       dts       (take-while #(jt/before? % date)
                                             (iterate #(-> %
                                                           (jt/plus (jt/months 1))
                                                           (jt/adjust :last-day-of-month))
                                                      last-date))
                       tmps      (reduce (fn [acc d] (conj acc (assoc @lst key d)))
                                         []
                                         dts)]
                   (vreset! lst (reduce (fn [acc k] (assoc acc k (get x k)))
                                        {}
                                        fill))
                   (reduce (fn [acc v] (rf acc v)) acc tmps)
                   (rf acc (clojure.core/update x key #(jt/adjust % :last-day-of-month)))))))))))))

#?(:clj
   (defn- as-year-freq [freq {:keys [key fill] :or {key :date fill []}}]
     (let [fill (conj fill key)]
       (comp
        (x/sort-by key)
        (fn [rf]
          (let [lst (volatile! ::none)]
            (fn
              ([] (rf))
              ([acc] (rf acc))
              ([acc x]
               (if (identical? @lst ::none)
                 (do (vreset! lst (select-keys x fill))
                     (rf acc (clojure.core/update x key #(jt/adjust % :last-day-of-year))))
                 (let [last-date (jt/adjust (jt/plus (get @lst key) (jt/months 1))  :last-day-of-year)
                       date      (jt/adjust (get x key)  :last-day-of-year)
                       dts       (take-while #(jt/before? % date)
                                             (iterate #(-> %
                                                           (jt/plus (jt/months 1))
                                                           (jt/adjust  :last-day-of-year))
                                                      last-date))
                       tmps      (reduce (fn [acc d] (conj acc (assoc @lst key d)))
                                         []
                                         dts)]
                   (vreset! lst (reduce (fn [acc k] (assoc acc k (get x k)))
                                        {}
                                        fill))
                   (reduce (fn [acc v] (rf acc v)) acc tmps)
                   (rf acc (clojure.core/update x key #(jt/adjust %  :last-day-of-year)))))))))))))

(defmulti asfreq (fn [[_ k] & _] k))

(defmethod asfreq :d
  ([freq opts]
   (as-day-freq freq opts))
  ([freq]
   (as-day-freq freq {})))

(defmethod asfreq :m
  ([freq opts]
   (as-month-freq freq opts))
  ([freq]
   (as-month-freq freq {})))

(defmethod asfreq :y
  ([freq opts]
   (as-year-freq freq opts))
  ([freq]
   (as-year-freq freq {})))

(comment
  (into [] (comp (asfreq [1 :d] {:fill [:a]}))
        [{:date (jt/local-date "2019-01-01") :a 1}
         {:date (jt/local-date "2019-01-06") :a 2}
         {:date (jt/local-date "2019-01-03") :a 3}])
  (into [] (comp (asfreq [1 :m] {:fill [:a]}))
        [{:date (jt/local-date "2019-01-01") :a 1}
         {:date (jt/local-date "2019-03-06") :a 2}
         {:date (jt/local-date "2019-06-03") :a 3}]))

(defn ->month-series
  "Convert series smalest than monht to a month series"
  ([k]
   (comp
    (x/by-key (fn [m] (jt/as (get m k) :year :month-of-year))
              (x/take-last 1))
    (map second)
    (x/sort-by k)))
  ([k data]
   (loop [[m & data] data
          p nil
          r (transient [])]
     (if m
       (if (and p (not= (.getMonthValue ^java.time.LocalDate (get p k))
                        (.getMonthValue ^java.time.LocalDate (get m k))))
         (recur data m (conj! r p))
         (recur data m r))
       (persistent! (conj! r p))))))

(defn ->year-series
  "Convert series smalest than year to a year series"
  ([k]
   (comp
    (x/by-key (fn [m] (jt/as (get m k) :year))
              (x/take-last 1))
    (map second)
    (x/sort-by k)))
  ([k data]
   (loop [[m & data] data
          p          nil
          r          (transient [])]
     (if m
       (if (and p (not= (.getYear ^java.time.LocalDate (get p k))
                        (.getYear ^java.time.LocalDate (get m k))))
         (recur data m (conj! r p))
         (recur data m r))
       (persistent! (conj! r p))))))

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
  (into [] (rolling 10 x/avg) (range 100))
  (into [] (rolling 10 10 (x/reduce +)) (range 100))
  (into [] (window 10 1 x/avg) (range 10)))

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

;; (def describe
;;   (comp
;;    (x/transjuxt {:ks columns
;;                  :xs (x/into [])})
;;    (mapcat (fn [{:keys [ks xs]}]
;;              (into {}
;;                    (map (fn [k]
;;                           (x/transjuxt
;;                            {k (x/transjuxt {:count (agg/count k)
;;                                             :mean  (agg/mean k)
;;                                             :std   (agg/std k)
;;                                             :min   (agg/min k)
;;                                             :max   (agg/max k)})}
;;                            xs))
;;                         ks))))))
