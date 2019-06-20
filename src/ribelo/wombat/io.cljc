(ns ribelo.wombat.io
  (:require
   #?(:clj [clojure.java.io :as io])
   [taoensso.encore :as e]
   [net.cgrand.xforms :as x]
   #?(:clj [net.cgrand.xforms.io :as xio])
   #?(:clj [java-time :as jt])
   [ribelo.wombat :refer [map->header]]
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

(defmulti ^:private add-header (fn [x & _] (class x)))

(defmethod ^:private add-header java.lang.Long
  [i & [keywordize-headers?]]
  (comp
   (x/transjuxt {:xs (comp (drop (inc i)) (x/into []))
                 :headers (scomp
                           (when (<= 1 i) (drop i))
                           (take 1)
                           (when keywordize-headers?
                             (map #(map keyword %)))
                           (map #(map vector % (range)))
                           )})
   (mapcat (fn [{:keys [xs headers]}]
             (into [] (map->header (into {} headers)) xs)))))

(defn read-csv
  ([path {:keys [sep header encoding keywordize-headers? parse]
          :or {sep                 ","
               encoding            "utf-8"
               keywordize-headers? false}}]
   (->> (xio/lines-in path :encoding encoding)
        (into []
              (scomp
               (split-sep sep)
               (when header (add-header header keywordize-headers?))
               (when parse
                 (map (fn [m]
                        (reduce-kv (fn [acc k v]
                                  (update acc k (parse-dtype v)))
                                m parse))))))))
  ([path]
   (read-csv path {})))

(defn to-csv
  ([path data {:keys [sep add-headers? add-index? encoding format]
               :or   {sep          ","
                      add-headers? true
                      add-index?   true
                      encoding     "utf8"}}]
   (xio/lines-out
    path
    (scomp
     (if add-index?
       (map-indexed #(assoc %2 :_index %1)))
     (when add-headers?
       (comp
        (x/transjuxt {:xs           (comp (map vals) (x/into []))
                      :headers (comp (take 1) (map keys))})
        (mapcat (fn [{:keys [xs headers]}]
                  (into [headers] xs)))))
     (when format
       (map (fn [m]
              (reduce-kv (fn [acc k f]
                           (update acc k f))
                         m format))))
     (map #(clojure.string/join sep %)))
    data
    :encoding encoding))
  ([path data]
   (to-csv {})))
