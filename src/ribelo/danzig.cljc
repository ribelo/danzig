(ns ribelo.danzig
  (:refer-clojure :exclude [set replace sort-by drop fill group-by merge update])
  #?(:cljs (:require-macros [ribelo.danzig :refer [=>> +>> and-macro or-macro where]]))
  (:require
   [net.cgrand.xforms :as x]
   #?(:clj [java-time :as jt])
   [meander.epsilon :as m]
   [ribelo.kemnath :as math]
   #?(:clj [ribelo.stade :as stats])
   #?(:clj [ribelo.danzig.aggregate :as agg])))

(comment
  (do
    (require '[taoensso.encore :as enc])
    (def data (vec (repeatedly 1000000 (fn [] {:a (* (rand-int 100) (if (enc/chance 0.5) 1 -1))
                                              :b (* (rand-int 100) (if (enc/chance 0.5) 1 -1))
                                              :c (* (rand-int 100) (if (enc/chance 0.5) 1 -1))}))))))

(defn comp-some [& fns]
  (apply comp (filter identity fns)))

(defmacro =>> [coll & forms]
  (loop [[form & forms] forms xfs [] threads [] output []]
    (if form
      (cond
        (= '[]  form)
        (recur forms xfs threads output)
        ;;
        (= '{}  form)
        (recur forms xfs threads {})
        ;;
        (= '#{} form)
        (recur forms xfs threads #{})
        ;;
        (and (list? form) (= '->  (first form)))
        (recur forms xfs (conj threads form) output)
        ;;
        (and (list? form) (= '->> (first form)))
        (recur forms xfs (conj threads form) output)
        ;;
        (or (= 'first form) (and (list? form) (= 'first (first form))))
        (recur forms (conj xfs `(take 1)) (conj threads (-> form)) output)
        ;;
        (or (= 'last form) (and (list? form) ('first (first form))))
        (recur forms (conj xfs `(x/take-last 1)) (conj threads (-> form)) output)
        ;;
        (= 'into (first form))
        (recur forms xfs threads (second form))
        ;;
        :else
        (recur forms (conj xfs form) threads output))
      (let [xfs (->> xfs (remove nil?))
            main `(into ~output ~@(when (not-empty xfs) `((comp-some ~@xfs))) ~coll)]
        (if (seq threads)
          (loop [[form & forms] threads r ['-> main]]
            (if form
              (recur forms (conj r form))
              (reverse (into (list) r))))
          main)))))

(defmacro +>> [coll & body] `(=>> ~coll ~@body '(into {})))

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
   (defmacro and-macro [coll]
     (loop [[args & coll] coll
            r             '()]
       (if args
         (let [body (args->fn-body args)]
           (recur coll (conj r body)))
         `(clojure.core/and ~@r)))))

(comment
  (and-macro [:and [:a 1] [:b 2]]))

#?(:clj
   (defmacro or-macro [coll]
     (loop [[args & coll] coll
            r             '()]
       (if args
         (let [body (args->fn-body args)]
           (recur coll (conj r body)))
         `(clojure.core/or ~@r)))))

(defn vecs->maps [ks]
  (m/match ks
    (m/pred map?)
    (map #(persistent! (reduce-kv (fn [acc i k] (assoc! acc k (nth % i ""))) (transient {}) ks)))

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

(defn- k->fn [k]
  (m/match k
    :sum     (fn [& args] (reduce + args))
    #?@(:clj [:mean  stats/mean
              :max   stats/max
              :min   stats/min])
    :abs             math/abs
    :sq              math/sq
    :sqrt            math/sqrt
    :pow             math/pow
    :root            math/root
    (m/pred fn? ?fn) ?fn))

(defmacro where* [& args]
  (m/rewrite args
    ;; f
    ((m/pred list? ?f))
    ?f
    ;; k v
    ((m/pred keyword? ?k) (m/and (m/not (m/pred (some-fn symbol? list?) ?v)) (m/some ?v)))
    (fn [m] (= ?v (m ?k)))
    ;; {?k ?v}
    ({:as ?m})
    ~`(fn [m#] (m/find m# ~?m m#))
    ;; ?k ?f
    ((m/pred keyword? ?k)
     (m/pred symbol? ?f))
    (fn [m] (?f (m ?k)))
    ;; [?f1 [[?f2 & ?xs] | ?k/?v] ...]
    ([(m/pred (some-fn symbol? list?) ?f) .
      (m/and !args (m/or (m/pred vector?) (m/some))) ...])
    ~(let [m (gensym 'map)]
       `(fn [~m] (~?f ~@(map (fn [x]
                              (m/rewrite x
                                [(m/pred (some-fn symbol? list?) ?f) . (m/cata !xs) ...]
                                (?f & ~!xs)
                                ;;
                                (m/pred keyword? ?x)
                                (~m ?x)
                                ?x ?x)) !args))))
    _ (throw (ex-info "non exhaustive pattern match" {}))))

(defmacro where [& args]
  `(filter (where* ~@args)))

(defmacro where-not [& args]
  `(remove (where* ~@args)))

(defn row-count []
  x/count)

(defn column-count []
  (comp (take 1) (mapcat keys) x/count))

(defn shape []
  (comp (x/transjuxt [(row-count) (column-count)]) (mapcat identity)))

(defn column-names [& args]
  (m/match args
    ;; all
    (m/or (::all) nil (m/pred empty? args))
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

(defmacro with* [& args]
  (m/rewrite args
    ;; ?i ?k ?v
    ((m/pred integer? ?i) (m/pred keyword? ?k) ?v)
    (fn [i m] (if (= i ?i) (assoc m ?k ?v) m))
    ;; ?i ?m
    ((m/pred integer? ?i) (m/pred map? ?m))
    (fn [i m] (if (= i ?i) (clojure.core/merge m ?m) m))
    ;; ?k ?f
    ((m/pred keyword? ?k) (m/pred (some-fn list? symbol?) ?fn))
    (fn [m] (assoc m ?k (?fn m)))
    ;; ?k ?v
    ((m/pred keyword? ?k) (m/and (m/not (m/pred vector? ?v)) (m/some ?v)))
    (fn [m] (assoc m ?k ?v))
    ;; ?k [?f1 [[?f2 & ?xs] | ?k/?v] ...]
    ((m/pred keyword? ?k)
     [(m/pred (some-fn symbol? list?) ?f) .
      (m/and !args (m/or (m/pred vector?) (m/some))) ...])
    ~(let [m (gensym 'map)]
       `(fn [~m] (assoc ~m ~?k
                       (~?f ~@(map (fn [x]
                                     (m/rewrite x
                                       [(m/pred (some-fn symbol? list?) ?f) . (m/cata !xs) ...]
                                       (?f & ~!xs)
                                       ;;
                                       (m/pred keyword? ?x)
                                       (~m ?x)
                                       ?x ?x)) !args)))))
    ;; {?k [?f . !ks]}
    ((m/and ?m (m/map-of (m/pred keyword? !ks) (m/pred vector? !args))))
    ~`(comp ~@(map (fn [[k v]] `(with* ~k ~v)) ?m))
    ;; {?k ?v}
    ((m/and ?m (m/map-of (m/pred keyword? !ks)
                         (m/not (m/pred (some-fn vector? list? symbol?) !vs)))))
    ~`(fn [m#]
        (-> m# ~@(map (fn [[k v]] `(assoc ~k ~v)) ?m)))
    ;; {k f} ...
    ((m/and ?m (m/map-of (m/pred keyword? !ks)
                         (m/pred (some-fn list? symbol?) !fns))))
    ~(let [m (gensym 'map)]
       `(fn [~m]
          (-> ~m ~@(map (fn [[k f]] `(assoc ~k (~f ~m))) ?m))))
    ;; :when ?pred ?x
    (:when ?pred & ?rest)
    ~`(fn [m#] (if ((where* ~?pred) m#) ((with* ~@?rest) m#) m#))
    ;;
    _ (throw (ex-info "non exhaustive pattern match" {}))))

(defmacro with [& args]
  (m/rewrite args
    ((m/pred number?) & _)
    ~`(map-indexed (with* ~@args))
    _
    ~`(map (with* ~@args))))

(defmacro aggregate [& arg]
  (m/rewrite arg
    ;; ...
    ;; {& [[!ks !fns] ...]}
    ({:as ?m})
    ~(let [acc (gensym 'acc)
           k   (gensym   'k)
           v   (gensym   'v)
           f   (gensym   'f)]
       `(x/transjuxt
         ~(reduce-kv
           (fn [acc k v]
             (println v)
             (let [f (m/match v
                       (m/pred (some-fn list? symbol?) ?v)
                       ?v
                       ;;
                       (m/pred keyword? ?k)
                       `((agg/agg->fn ~v) ~k)
                       ;;
                       [(m/pred keyword ?k) (m/pred keyword? ?f)]
                       `((agg/agg->fn ~?f) ~?k)
                       ;;
                       [(m/pred keyword ?k) (m/pred (some-fn list? symbol?) ?f)]
                       (comp (map ?k) ?f)
                       )]
               (assoc acc k f)))
           {}
           ?m)))
    ;; (x/transjuxt
    ;;   (persistent!
    ;;     (reduce-kv
    ;;       (fn [acc k f]
    ;;         (let [f (m/match f
    ;;                   (m/pred fn? ?f)                             ?f
    ;;                   (m/pred keyword? ?k)                        ((agg->fn ?k) k)
    ;;                   [(m/pred keyword? ?k) (m/pred keyword? ?f)] ((agg->fn ?f) ?k)
    ;;                   [(m/pred keyword? ?k) (m/pred fn? ?f)]      (comp (map ?k) ?f))]
    ;;           (assoc! acc k f)))
    ;;       (transient {})
    ;;       ?m)))
    ;; [!ks !fns ...]]}
    ;; [(m/pred (some-fn fn? keyword?) !ks) (m/pred (some-fn fn? keyword?) !fns) ...]
    ;; (x/transjuxt
    ;;   (persistent!
    ;;     (reduce
    ;;       (fn [acc [k f]]
    ;;         (conj! acc ((agg->fn f) k)))
    ;;       (transient [])
    ;;       (m/subst [[!ks !fns] ...]))))
    ))

(defmacro group-by [& args]
  (m/rewrite args
    ;; ?k/?f
    ((m/pred (some-fn list? symbol? keyword?) ?f))
    (x/by-key ?f (x/into []))
    ;; ?k/?f ?xf
    ((m/pred (some-fn list? symbol? keyword?) ?f)
     (m/pred (some-fn list? symbol?) ?xf))
    (x/by-key ?f (if (keyword? ?xf) ((agg/agg->fn ?xf) ?f) ?xf))
    ;; ?k/?f ?agg
    ((m/pred (some-fn list? symbol? keyword?) ?f)
     (m/pred keyword? ?agg))
    (x/by-key ?f ((agg/agg->fn ?agg) ?f))
    ;; ?k/?f {& [[?k ?f] ...]}
    ((m/pred (some-fn list? symbol? keyword?) ?f) (m/pred map? ?m))
    (x/by-key ?f (agg/aggregate ?m))
    ;; [?k ?j] ?xf
    ([(m/pred (some-fn list? symbol? keyword?) !fs) ...]
     (m/pred (some-fn list? symbol?) ?xf))
    (x/by-key ~`(juxt ~@!fs) ?xf)
    ;; [?k/?f ?j/?f] ?map
    ([(m/pred (some-fn list? symbol? keyword?) !fs) ...]
     (m/pred map? ?m))
    (x/by-key ~`(juxt ~@!fs) (agg/aggregate ?m))
    ;; ?f [[ks fns] ...]
    ((m/pred (some-fn list? symbol? keyword?)?f)
     (m/pred vector? ?coll))
    (x/by-key ?f (agg/aggregate ?coll))
    ;; ...
    (?k [!coll ...] '...)
    (comp (group-by ?k (into [?k :first] !coll)) (map second))
    ;;
    (?k {:as ?m} '...)
    (comp (group-by ?k (assoc ?m ?k :first)) (map second))
    ))

(comment
  (=>> [{:a 1 :c 1} {:a 1 :c 2} {:a 2 :c 3} {:a 2 :c 4}] (group-by :a {:c :sum}))
  (=>> data (group-by :a {:c :sum
                          :b :sum}))
  (=>> data (group-by :a {:c :sum
                          :b :sum} '...))
  (=>> data (group-by :a [:c :sum :b :sum]))
  (=>> data (group-by :a [:c :sum :b :sum] '...))
  (=>> data (x/by-key :a [(comp (map :a) (x/into []))]))
  [(enc/qb 1 (=>> data (group-by :a {:b-mean [:b :mean]
                                     :b-sum  [:b :sum]
                                     :c-mean [:c :mean]
                                     :c-sum  [:c :sum]})))
   (enc/qb 1 (->> data
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
          p          nil
          r          (transient [])]
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
