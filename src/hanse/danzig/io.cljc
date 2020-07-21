(ns hanse.danzig.io
  (:require
   #?(:clj [clojure.java.io :as io])
   [net.cgrand.xforms :as x]
   #?(:clj [net.cgrand.xforms.io :as xio])
   #?(:clj [java-time :as jt])
   [hanse.danzig :as dz :refer [=>> vecs->maps comp-some]]
   [meander.epsilon :as m]
   [clojure.string :as str])
  (:import
   #?(:clj (clojure.lang Keyword Fn))))

(defn ^:private dtype->fn [x]
  (m/match x
    :string         str
    :keyword        keyword
    :long           #(Long/parseLong ^String %)
    :double         #(Double/parseDouble ^String %)
    :date           #(jt/local-date ^String %)
    :datetime       #(jt/local-date-time %)
    [:date ?y]      #(jt/local-date ?y %)
    [:datetime ?y]  #(jt/local-date-time ?y %)
    (m/pred fn? ?x) ?x
    nil             identity))

(defn ^:private add-header
  ([x]
   (add-header x {}))
  ([x opts]
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
     [(m/with [%p1 (m/or [!ks (m/or (m/pred vector? !vs) (m/app vector !vs))]
                         (m/and (m/pred (some-fn keyword? string?) !ks) (m/let [!vs []])))
               %p2 (m/seqable [!xs %p1] ...)]
        %p2) _]
     (comp
      (vecs->maps (zipmap !xs !ks))
      (dz/update (zipmap !ks (map #(apply comp (reverse (map dtype->fn %))) !vs)))))))

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

(defn lines-in
  ([path]
   (lines-in path {}))
  ([path opts]
   (apply xio/lines-in path (flatten (vec opts)))))

#?(:clj
   (defn read-csv
     ([path {:keys [sep quote header-row? header encoding parse]
             :or   {sep                 ","
                    header-row?         false
                    encoding            "utf-8"
                    keywordize-headers? false}
             :as   opts}]
      (=>> (xio/lines-in path :encoding encoding)
           (when header-row? (drop 1))
           (map #(clojure.string/split % (re-pattern sep)))
           (when header (add-header header opts))
           (when quote (remove-quote quote))
           (when parse
             (map (fn [m]
                    (reduce-kv
                     (fn [acc k v]
                       (update acc k (dtype->fn v)))
                     m parse))))))
     ([path]
      (read-csv path {}))))

#?(:clj
   (defn to-csv
     ([path data {:keys [sep add-headers? add-index? encoding format]
                  :or   {sep          ","
                         add-headers? true
                         add-index?   false
                         encoding     "utf8"}}]
      (xio/lines-out
       path
       (comp-some
        (map ;; stringify keys
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
        (map #(clojure.string/join sep %)))
       data
       :encoding encoding))
     ([path data]
      (to-csv path data {}))))
