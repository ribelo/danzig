(ns ribelo.wombat.dataframe
  (:refer-clojure :exclude [set replace])
  (:require [taoensso.encore :as e]
            [net.cgrand.xforms :as x]
            [clj-time.core :as dt]
            [clj-time.periodic :as dtper]
            [clojure.core.async :as a]
            [ribelo.visby.stats :as stats]
            [ribelo.wombat.aggregate :as agg]
            [ribelo.wombat.utils :refer :all]))


(defn- ->freq [[k n]]
  (case k
    :ms (dt/millis (or n 1))
    :s (dt/seconds (or n 1))
    :min (dt/minutes (or n 1))
    :t (dt/minutes (or n 1))
    :h (dt/hours (or n 1))
    :d (dt/days (or n 1))
    :m (dt/months (or n 1))
    :y (dt/years (or n 1))))


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
               (let [last-date (dt/plus (get @lst key) freq')
                     date (get x key)
                     dts (dtper/periodic-seq last-date date freq')
                     tmps (reduce (fn [acc d] (conj acc (assoc @lst key d))) [] dts)]
                 (vreset! lst (select-keys x fill'))
                 (reduce (fn [acc x] (rf acc x)) (unreduced (rf acc x)) tmps)))))))
      (x/sort-by key))))


(defn fill [m]
  (let [pairs' (partition 2 m)]
    (map (fn [elem]
           (reduce (fn [acc [key [pred value]]]
                     (println key (get acc key))
                     (if (pred (get acc key)) (assoc elem key value) elem)) elem pairs')))))


(defn where [& filters]
  (apply scomp (map #(filter %) filters)))


(defn window [n]
  (x/partition n 1))


(def columns
  (comp (take 1) (map keys)))


(defn select-columns [ks]
  (map #(select-keys % ks)))


(defn head
  ([] (head 5))
  ([n] (take n)))


(defn tail
  ([] (tail 5))
  ([n] (x/take-last n)))


(def describe
  (comp (x/transjuxt {:ks columns
                      :xs (x/into [])})
        (mapcat (fn [{:keys [ks xs]}]
                  (into {}
                    (map (fn [k]
                           (x/transjuxt
                             {k (x/transjuxt {:count (agg/count k)
                                              :mean  (agg/mean k)
                                              :std   (agg/std k)
                                              :min   (agg/min k)
                                              :25%   (agg/quantile :a 0.25)
                                              :50%   (agg/quantile :a 0.5)
                                              :75%   (agg/quantile :a 0.75)
                                              :max   (agg/max :a)
                                              })}
                             xs))
                         ks))))))


(defn sort-by [k]
  (x/sort-by k))


(defprotocol DropNil
  (drop-nil [val]))


(defprotocol Dataframe
  (loc [k])
  (iloc [i] [x y])
  (set [i val] [x y val])
  (fill [m] [k v])
  (replace [m] [pred v] [k preds v]))


(extend-type clojure.lang.Fn
  Dataframe
  (replace [pred v] (map (fn [elem] (if (pred elem) v elem)))))


(extend-type java.lang.Long
  DropNil
  (drop-nil [val] val)

  Dataframe
  (iloc [i] (println i))
  (iloc [x y] (scomp (when x (drop x)) (when y (take (- y x)))))
  (set [x v] (map-indexed (fn [idx m] (if (= x idx) v m))))
  (set [x y v] (map-indexed (fn [idx m] (if (and (>= idx x)
                                                 (< idx y))
                                          v m)))))

(extend-type java.util.Collection
  DropNil
  (drop-nil [coll] (into [] (filter identity) coll))

  Dataframe
  (loc [coll] (map #(select-keys % coll)))
  (iloc [coll] (keep-indexed (fn [idx v] (when ((clojure.core/set coll) idx) v))))
  (set [coll val] (map-indexed (fn [idx m] (if ((clojure.core/set coll) idx) val m))))
  (fill [ks v] (map (fn [m] (reduce (fn [acc k] (assoc acc k v)) m ks))))
  (replace [preds v] (map (fn [elem] (if ((apply every-pred preds) elem) v elem)))))


(extend-type clojure.lang.PersistentArrayMap
  DropNil
  (drop-nil [m] (if (every? identity (vals m)) m nil))

  Dataframe
  (fill [m] (map (fn [elem] (reduce (fn [acc [k v]] (assoc acc k v)) elem m)))))


(extend-type clojure.lang.Keyword
  Dataframe
  (loc [k] (map k))
  (set [k v] (map #(assoc % k v)))
  (fill [k v] (map #(assoc % k v)))
  (replace [k pred v]
    (map (fn [elem] (if (pred (get elem k))
                      (assoc elem k v) elem)))))


(defn dropna
  ([] (comp (filter identity) (keep drop-nil))))







