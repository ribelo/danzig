(ns hanse.danzig.io
  (:require
   #?(:clj [clojure.java.io :as io])
   [net.cgrand.xforms :as x]
   #?(:clj [net.cgrand.xforms.io :as xio])
   #?(:clj [java-time :as jt])
   [hanse.danzig :refer [vecs->maps comp-some]]
   [meander.epsilon :as m]
   [clojure.string :as str])
  (:import
   #?(:clj (clojure.lang Keyword Fn))))

(defn ^:private dtype->fn [x]
  (m/match x
    :long           #(Long/parseLong ^String %)
    :double         #(Double/parseDouble ^String %)
    :date           #(jt/local-date ^String %)
    :datetime       #(jt/local-date-time %)
    [:date ?y]      #(jt/local-date ?y %)
    [:datetime ?y]  #(jt/local-date-time ?y %)
    (m/pred fn? ?x) ?x
    nil             identity))

(defn ^:private add-header [x opts]
  (m/match [x opts]
    [(m/and ?i (m/pred int? ?i))
     (m/and
      {:keywordize-keys (m/and ?keywordize (m/pred (some-fn nil? boolean?)))
       :key-fn          (m/and ?key-fn (m/pred (some-fn nil? fn?)))})]
    (comp
     (x/transjuxt {:xs      (comp (drop (inc ?i)) (x/into []))
                   :headers (comp-some
                             (when (>= ?i 1) (drop ?i))
                             (take 1)
                             (when ?keywordize
                               (map #(map keyword %)))
                             (map #(map vector % (range))))})
     (mapcat (fn [{:keys [xs headers]}]
               (into [] (vecs->maps (into {} headers)) xs))))
    [(m/pred map? ?x) _]
    (vecs->maps ?x)))

(defn remove-quote [q]
  (fn [rf]
    (fn
      ([] (rf))
      ([acc] (rf acc))
      ([acc x]
       (let [x (reduce-kv
                (fn [acc k v]
                  (assoc acc k (str/trim (str/replace v (re-pattern q) ""))))
                {}
                x)]
         (rf acc x))))))

#?(:clj
   (defn read-csv
     ([path {:keys [sep quote header-row? header encoding keywordize-headers? parse]
             :or   {sep                 ","
                    header-row?         false
                    encoding            "utf-8"
                    keywordize-headers? false}
             :as   opts}]
      (->> (xio/lines-in path :encoding encoding)
           (into []
                 (comp-some
                  (when header-row? (drop 1))
                  (map #(clojure.string/split % (re-pattern sep))) (when header (add-header header opts))
                  (when quote (remove-quote quote))
                  (when parse
                    (map (fn [m]
                           (reduce-kv
                            (fn [acc k v]
                              (update acc k (dtype->fn v)))
                            m parse))))))))
     ([path]
      (read-csv path {}))))

#?(:clj
   (defn to-csv
     ([path data {:keys [sep add-headers? add-index? encoding format]
                  :or   {sep          ","
                         add-headers? true
                         add-index?   false
                         encoding     "utf8"}}]
      (->> data
           (into []
                 (comp-some
                  (map
                   (fn [m]
                     (persistent!
                      (reduce-kv
                       (fn [acc k v]
                         (assoc! acc (str k) v))
                       (transient {})
                       m))))
                  (when add-index?
                    (map-indexed #(merge {" idx" %1} %2)))
                  (if add-headers?
                    (comp
                     (x/transjuxt {:xs      (comp (map #(into (sorted-map) %)) (map vals) (x/into []))
                                   :headers (comp (take 1) (map #(into (sorted-map) %)) (map keys))})
                     (mapcat (fn [{:keys [xs headers]}]
                               (into [headers] xs))))
                    (comp
                     (map #(into (sorted-map) %))
                     (map vals)))
                  (when format
                    (map (fn [m]
                           (reduce-kv
                            (fn [acc k f]
                              (update acc k f))
                            m format))))
                  (map #(clojure.string/join sep %))))))
     ([path data]
      (to-csv path data {}))))
