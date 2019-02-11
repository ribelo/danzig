(ns ribelo.wombat.io
  (:require [clojure.java.io :as io]
            [taoensso.encore :as e]
            [net.cgrand.xforms :as x]
            [net.cgrand.xforms.io :as xio]
            [clj-time.coerce :as dtc]
            [ribelo.wombat.utils :refer :all]))


(defn- split-sep [sep] (map #(clojure.string/split % (re-pattern sep))))

(def ^:private dtype->fn {:long   #(Long/parseLong %)
                          :double #(Double/parseDouble %)
                          :date   dtc/from-string
                          nil     identity})


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
                               (reduce (fn [acc [k f]]
                                         (update acc k (dtype->fn f)))
                                       m parse)))
                      identity))))))


(defn to-csv [data path & {:keys [sep names header? index? index-label encoding parse]
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


