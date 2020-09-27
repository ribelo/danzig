(ns hanse.danzig.io
  (:require
   [net.cgrand.xforms :as x]
   #?(:clj [net.cgrand.xforms.io :as xio])
   #?(:clj [java-time :as jt])
   [hanse.danzig :as dz :refer [=>> vecs->maps comp-some some-of?]]
   [meander.epsilon :as m]
   [clojure.string :as str]))

(defn ^:private dtype->fn [x]
  (m/match x
    :string         str
    :keyword        keyword
    :long           #(Long/parseLong ^String %)
    :double         #(Double/parseDouble ^String %)
    :date           #(jt/local-date ^String %)
    :datetime       #(jt/local-date-time ^String %)
    [:date ?y]      #(jt/local-date ^String ?y ^String %)
    [:datetime ?y]  #(jt/local-date-time ^String ?y ^String %)
    (m/pred fn? ?x) ?x
    nil             identity))

(defn ^:private add-header
  ([x]
   (add-header x {}))
  ([x opts]
   (m/match [x opts]
     [(m/pred int? ?i)
      {:keywordize-keys (some-of? [nil? boolean?] ?keywordize)
       :key-fn          (some-of? [nil? fn?]      ?key-fn)}]
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
     [(m/with [%p1 (m/or [!ks & (m/or (m/pred vector? !vs) (m/app vector !vs))]
                         (m/and (some-of? [keyword? string?] !ks) (m/let [!vs []])))
               %p2 (m/seqable [!xs %p1] ...)]
        %p2) _]
     (comp-some
       (vecs->maps (zipmap !xs !ks))
       (when (some seq !vs)
         (dz/update
           (persistent!
             (reduce
               (fn [acc [k fns]]
                 (if (seq fns)
                   (assoc! acc k (apply comp (reverse (map dtype->fn fns))))
                   acc))
               (transient {})
               (map vector !ks !vs)))))))))

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
