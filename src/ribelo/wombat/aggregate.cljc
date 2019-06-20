(ns ribelo.wombat.aggregate
  (:refer-clojure :exclude [first last min max count])
  (:require [net.cgrand.xforms :as x]
            [ribelo.visby.stats :as stats]
            [taoensso.encore :as e]))

(defn map->rfs [k rf]
  (comp (map k) rf))

(defn first [k]
  (map->rfs k (take 1)))

(defn last [k]
  (map->rfs k x/last))

(defn min [k]
  (map->rfs k stats/min))

(defn max [k]
  (map->rfs k stats/max))

(defn count [k]
  (map->rfs k x/count))

(defn sum [k]
  (map->rfs k (x/reduce +)))

(defn mean [k]
  (map->rfs k stats/mean))

(defn median [k]
  (map->rfs k stats/median))

(defn std [k]
  (map->rfs k stats/std))

(defn quantile [k p]
  (map->rfs k (stats/quantile p)))

(defn percentile [k p]
  (map->rfs k (stats/percentile p)))

(defn iqr [k]
  (map->rfs k stats/iqr))

(defn variance [k]
  (map->rfs k stats/variance))

(defn covariance [k]
  (map->rfs k stats/covariance))

(defn kurtosis [k]
  (map->rfs k stats/kurtosis))

(defn mode [k]
  (map->rfs k stats/mode))

(defn agg->fn [k]
  {:first      first
   :last       last
   :min        min
   :max        max
   :count      count
   :sum        sum
   :mean       mean
   :median     median
   :std        std
   :quantile   quantile
   :percentile percentile
   :iqr        iqr
   :variance   variance
   :covariance covariance
   :kurtosis   kurtosis
   :mode       mode})

(defn agg->fn [k]
  (when (#{:first :last :min :max :count :sum :mean :median
           :std :quantile :percentile :iqr :variance
           :covariance :kurtosis :mode} k)
    (resolve (symbol "ribelo.wombat.aggregate" (name k)))))

(defn aggregate [m]
  (let [pairs (partition 2 (reduce-kv conj [] m))]
    (x/transjuxt
     (reduce (fn [acc [k f]]
               (let [f' (cond
                          (fn? f) f
                          (keyword? f) ((agg->fn f) k))]
                 (assoc acc k f'))) {} pairs))))
