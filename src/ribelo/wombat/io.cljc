(ns ribelo.wombat.io
  (:require
   #?(:clj [clojure.java.io :as io])
   [taoensso.encore :as e]
   [net.cgrand.xforms :as x]
   #?(:clj [net.cgrand.xforms.io :as xio])
   #?(:clj [java-time :as jt])
   [ribelo.wombat :refer [map->header]]
   [ribelo.wombat.utils :refer [comp-some]]
   #?(:cljs ["fs" :as fs])
   [clojure.string :as str])
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

(defmethod ^:private add-header #?(:clj java.lang.Long :cljs js/Number)
  [i & [keywordize-headers?]]
  (comp
   (x/transjuxt {:xs (comp (drop (inc i)) (x/into []))
                 :headers (comp-some
                           (when (<= 1 i) (drop i))
                           (take 1)
                           (when keywordize-headers?
                             (map #(map keyword %)))
                           (map #(map vector % (range))))})
   (mapcat (fn [{:keys [xs headers]}]
             (into [] (map->header (into {} headers)) xs)))))

(defmethod ^:private add-header #?(:clj java.lang.Long :cljs js/Number)
  [i & [keywordize-headers?]]
  (fn [rf]
    (let [_n      (volatile! 0)
          _headers (volatile! ::none)]
      (fn
        ([] (rf))
        ([acc] (rf acc))
        ([acc x]
         (cond
           (and (identical? @_headers ::none) (< @_n i))
           (do
             (vswap! _n inc)
             acc)

           (identical? @_n i)
           (let [ks (cond->> x
                      keywordize-headers?
                      (map #(-> % str/trim (str/replace " " "-") (str/replace "\"" "") keyword)))]
             (vswap! _n inc)
             (vreset! _headers ks)
             acc)

           :else
           (rf acc (into {} (map vector @_headers x)))))))))

(defmethod ^:private add-header clojure.lang.IPersistentMap
  [m & _]
  (map->header m))

(defn remove-quote [q]
  (fn [rf]
    (fn
      ([] (rf))
      ([acc] (rf acc))
      ([acc x]
       (let [x (persistent!
                (reduce-kv
                 (fn [acc k v]
                   (assoc! acc k (str/trim (str/replace v (re-pattern q) ""))))
                 (transient {})
                 x))]
         (rf acc x))))))

(defn read-csv
  ([path {:keys [sep quote drop-lines header encoding keywordize-headers? parse]
          :or {sep                 ","
               drop-lines          nil
               encoding            "utf-8"
               keywordize-headers? false}}]
   (->> (xio/lines-in path :encoding encoding)
        (into []
         (comp-some
          (when drop-lines (drop drop-lines))
          (split-sep sep)
          (when header (add-header header keywordize-headers?))
          (when quote (remove-quote quote))
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
    (comp-some
     (when add-index?
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
