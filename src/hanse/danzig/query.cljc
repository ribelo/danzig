(ns hanse.danzig.query
  (:refer-clojure :exclude [and or])
  (:require
   [hanse.danzig.relationship])
  (:import
   (clojure.lang Keyword)))

(defmacro select [coll]
  ())

(let [coll [{:a 1 :b 2} {:a 2 :b 3}]]
  (into []
        (where [])
        coll))

(defmulti q
  {:arglists '([x y])}
  (fn [[op k c & v]] [op (class c)]))

(defmethod q [:= :danzig/any]
  [[_ k v]]
  (filter #(= (get % k) v)))

(defmethod q [:> :danzig/any]
  [[_ k v]]
  (filter #(> (get % k) v)))

(defmethod q [:>= :danzig/any]
  [[_ k v]]
  (filter #(>= (get % k) v)))

(defmethod q [:< :danzig/any]
  [[_ k v]]
  (filter #(< (get % k) v)))

(defmethod q [:<= :danzig/any]
  [[_ k v]]
  (filter #(<= (get % k) v)))

(defmethod q [:and java.util.Collection]
  [[_ k c]]
  (and))

(defmethod q :default
  [[_ k c]]
  :default)

(stack-query [:and [:> :a 1]])

(q [:< :a 0])
