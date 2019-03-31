(ns ribelo.wombat.io
  (:require
    #?(:clj [clojure.java.io :as io])
    [taoensso.encore :as e]
    [net.cgrand.xforms :as x]
    #?(:clj [net.cgrand.xforms.io :as xio])
    #?(:clj [java-time :as jt])
    [ribelo.wombat.utils :refer [scomp]]
    #?(:cljs ["fs" :as fs]))
  (:import
    #?(:clj (clojure.lang Keyword Fn))))


(defn- split-sep [sep] (map #(clojure.string/split % (re-pattern sep))))


(def ^:private dtype->fn {:long     #?(:clj  #(Long/parseLong ^String %)
                                       :cljs #(js/parseInt ^String %))
                          :double   #?(:clj  #(Double/parseDouble ^String %)
                                       :cljs #(js/parseFloat ^String %))
                          :date     #?(:clj  #(jt/local-date ^String %)
                                       :cljs nil)
                          :datetime #?(:clj  #(jt/local-date-time ^String %)
                                       :cljs nil)
                          nil       identity})


(defmulti parse-dtype (fn [val] (class val)))
(defmethod parse-dtype Keyword [key] (dtype->fn key))
(defmethod parse-dtype Fn [f] f)


(defn read-csv [path & {:keys [sep header-row names encoding keywordize-headers?
                               parse columns]
                        :or   {sep                 ","
                               encoding            "utf-8"
                               keywordize-headers? false}}]
  (->> (xio/lines-in path :encoding encoding)
       (into []
             (comp
               (split-sep sep)
               (x/transjuxt
                 (cond-> {:xs (comp (if header-row (drop (inc header-row)) (map identity)) (x/into []))}
                         (and (not names) header-row)
                         (merge {:headers (comp (drop (dec header-row))
                                                (take 1)
                                                (map (if keywordize-headers? keyword identity)))})))
               (mapcat (fn [{:keys [xs headers]
                             :or   {headers names}}]
                         (into []
                               (if headers
                                 (map (fn [vals] (e/filter-keys identity (zipmap headers vals))))
                                 (map identity))
                               xs)))
               (map (if columns
                      (fn [arr]
                        (reduce
                          (fn [acc [column val]]
                            (if column
                              (assoc acc column val)
                              acc))
                          {}
                          (map vector columns arr)))
                      identity))
               (map (if parse
                      (fn [m]
                        (merge m
                               (reduce (fn [acc [k v]]
                                         (update acc k (parse-dtype v)))
                                       m parse)))
                      identity))))))


(defn to-csv [data path & {:keys [sep header? index? index-label encoding parse]
                           :or   {sep         ";"
                                  header?     true
                                  index?      true
                                  index-label ""
                                  encoding    "utf8"}}]
  (xio/lines-out
    path
    (comp
      (if index?
        (map-indexed #(assoc %2 index-label %1))
        (map identity))
      (x/transjuxt {:xs      (comp (map vals) (x/into []))
                    :headers (comp x/last (map keys))})
      (mapcat (fn [{:keys [xs headers]}]
                (into [headers] xs)))
      (map #(clojure.string/join sep %)))
    data
    :encoding encoding))

