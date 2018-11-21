(ns ribelo.wombat.dataframe
  (:refer-clojure :exclude [set replace sort-by drop fill group-by merge])
  (:require [taoensso.encore :as e]
            [net.cgrand.xforms :as x]
            [clj-time.core :as dt]
            [clj-time.periodic :as dtper]
            [clojure.core.async :as a]
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


(declare iloc)

(defmulti row (fn [x y] [(class x) (class y)]))


(defmethod row [java.util.Collections java.util.Collections]
  [ks vs]
  (zipmap ks vs))


(defmulti loc (fn [x & [y]] [(class x) (class y)]))


(defmethod loc [clojure.lang.Keyword nil]
  [k & _]
  (map k))


(defmethod loc [java.util.Collection nil]
  [ks & _]
  (map #(reduce (fn [acc k] (assoc acc k (get % k))) {} ks)))


(defmethod loc [java.util.Collection java.util.Collection]
  [x & [y & _]]
  (comp (loc x) (iloc y)))



(defmulti iloc (fn [x & [y]] [(class x) (class y)]))


(defmethod iloc [java.lang.Number nil]
  [arg1 & [arg2 & args]]
  (comp (clojure.core/drop (dec arg1)) (take 1)))


(defmethod iloc [java.lang.Number java.lang.Number]
  [x & [y & args]]
  (comp (clojure.core/drop (dec x)) (take (inc (- y x)))))


(defmethod iloc [java.util.Collection nil]
  [xs]
  (keep-indexed (fn [idx v] (when ((clojure.core/set xs) idx) v))))


(defmulti set (fn [x & [y & [z]]] [(class x) (class y) (class z)]))


(defmethod set [java.lang.Number ::any nil]
  [x & [y & [z & args]]]
  (map-indexed (fn [i elem] (if (= i x) y elem))))


(defmethod set [java.lang.Number clojure.lang.Keyword ::any]
  [x & [k & [v]]]
  (map-indexed (fn [i m] (if (= i x) (assoc m k v) m))))


(defmethod set [java.lang.Number java.lang.Number ::any]
  [x & [y & [v]]]
  (map-indexed (fn [i m] (if (and (>= i x) (< i y)) v m))))


(defmethod set [clojure.lang.Keyword ::value nil]
  [x & [y & [z]]]
  (map (fn [m] (assoc m x y))))


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


(defmulti replace (fn [x & [y & [z]]] [(class x) (class y) (class z)]))


(defmethod replace [clojure.lang.Fn ::any nil]
  [pred v]
  (map (fn [m] (if (pred m) v m))))


(defmethod replace [clojure.lang.Keyword clojure.lang.Fn ::any]
  [k pred v]
  (map (fn [m] (if (pred (get m k)) (assoc m k v) m))))


(defmulti drop (fn [x & [y & [z]]] [(class x) (class y) (class y)]))


(defmethod drop [java.lang.Number nil nil]
  [x & _]
  (keep-indexed (fn [i m] (when-not (= i x) m))))


(defmethod drop [java.lang.Number java.lang.Number nil]
  [x & [y & _]]
  (keep-indexed (fn [i m] (when-not (and (>= i x) (< i y)) m))))


(defmethod drop [java.lang.Number clojure.lang.Keyword nil]
  [x & [y & _]]
  (map-indexed (fn [i m] (if (= i x) (dissoc m y) m))))


(defmethod drop [java.util.Collection nil nil]
  [xs & _]
  (keep-indexed (fn [i m] (when-not ((clojure.core/set xs) i) m))))


(defmethod drop [clojure.lang.Keyword nil nil]
  [x & _]
  (map #(dissoc % x)))


(defmethod drop [clojure.lang.Keyword clojure.lang.Keyword false]
  [x & [y]]
  (map #(dissoc % x y)))


(defmethod drop [clojure.lang.Keyword clojure.lang.Keyword clojure.lang.ArraySeq]
  [x & [y & z]]
  (map #(apply dissoc % (conj z y x))))


(defmethod drop [clojure.lang.Keyword clojure.lang.Fn clojure.lang.Fn]
  [k & [pred & _]]
  (remove #(pred (get % k))))


(defmethod drop [clojure.lang.Fn nil nil]
  [pred & _]
  (remove pred))


(defmulti dropna (fn [& {:keys [axis]}] axis))


(defmethod dropna 0
  [& _]
  (filter #(every? identity (vals %))))


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


(defmethod dropna nil
  [& _]
  (dropna :axis 0))


(defn fillna [v]
  (comp (x/transjuxt {:ks (comp (mapcat keys) (distinct) (x/into []))
                      :xs (x/into [])})
        (mapcat (fn [{:keys [ks xs]}]
                  (map #(reduce (fn [acc k]
                                  (if-not (get acc k)
                                    (assoc acc k v)
                                    acc))
                                % ks) xs)))))


(defn group-by [f m]
  (comp
    (x/by-key f (agg/aggregate m))
    (map second)))


(defn unique []
  (distinct))


(defn value-counts
  ([]
   (x/by-key identity x/count))
  ([k]
   (comp (map k) (value-counts))))


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


;(defn fill [m]
;  (let [pairs' (partition 2 m)]
;    (map (fn [elem]
;           (reduce (fn [acc [key [pred value]]]
;                     (println key (get acc key))
;                     (if (pred (get acc key)) (assoc elem key value) elem)) elem pairs')))))


(defn where [& filters]
  (apply comp (map #(filter %) (remove nil? filters))))


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