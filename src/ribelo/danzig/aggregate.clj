(ns ribelo.danzig.aggregate
  (:refer-clojure :exclude [first last min max count])
  (:require
   [net.cgrand.xforms :as x]
   [meander.epsilon :as m]
   [ribelo.kemnath :as math]
   [ribelo.stade :as stats]))

(defn map->rfs [k rf]
  (comp (map k) rf))

(defn first [k]
  (map->rfs k (take 1)))

(defn last [k]
  (map->rfs k x/last))

(defn min [k]
  (map->rfs k (stats/min)))

(defn max [k]
  (map->rfs k (stats/max)))

(defn count [k]
  (map->rfs k x/count))

(defn sum [k]
  (map->rfs k (x/reduce +)))

(defn mean [k]
  (map->rfs k (stats/mean)))

(defn median [k]
  (map->rfs k (stats/median)))

(defn std [k]
  (map->rfs k (stats/std)))

(defn quantile [k p]
  (map->rfs k (stats/quantile p)))

(defn percentile [k p]
  (map->rfs k (stats/percentile p)))

(defn iqr [k]
  (map->rfs k (stats/iqr)))

(defn variance [k]
  (map->rfs k (stats/variance)))

(defn covariance [k]
  (map->rfs k (stats/covariance)))

(defn into-vec [k]
  (map->rfs k (x/into [])))

(defn into-map [k]
  (map->rfs k (x/into {})))

(defn into-set [k]
  (map->rfs k (x/into #{})))

(defn round [k]
  (map->rfs k (map math/round)))

(defn round2 [k]
  (map->rfs k (map math/round2)))

(defn agg->fn [f]
  (m/match f
    :first           first
    :last            last
    :min             min
    :max             max
    :count           count
    :sum             sum
    :mean            mean
    :median          median
    :std             std
    :quantile        quantile
    :percentile      percentile
    :iqr             iqr
    :variance        variance
    :covariance      covariance
    :into-vec        into-vec
    :into-map        into-map
    :into-set        into-set
    (m/pred fn? ?fn) ?fn))

(defn aggregate [arg]
  (m/match arg
    ;; {& [[!ks !fns] ...]}
    {:as ?m}
    (x/transjuxt
      (persistent!
        (reduce-kv
          (fn [acc k f]
            (let [f (m/match f
                      (m/pred fn? ?f)                             ?f
                      (m/pred keyword? ?k)                        ((agg->fn ?k) k)
                      [(m/pred keyword? ?k) (m/pred keyword? ?f)] ((agg->fn ?f) ?k)
                      [(m/pred keyword? ?k) (m/pred fn? ?f)]      (comp (map ?k) ?f))]
              (assoc! acc k f)))
          (transient {})
          ?m)))
    ;; [!ks !fns ...]]}
    [(m/pred (some-fn fn? keyword?) !ks) (m/pred (some-fn fn? keyword?) !fns) ...]
    (x/transjuxt
      (persistent!
        (reduce
          (fn [acc [k f]]
            (conj! acc ((agg->fn f) k)))
          (transient [])
          (m/subst [[!ks !fns] ...]))))))
