(ns ribelo.wombat.plot
  (:require [ribelo.wombat.plot.echarts :as echarts]))


(defmulti bar-plot (fn [data & {:keys [title]}] (class (first data))))


(defmethod bar-plot java.util.Map
  [data & {:keys [title x-axis]}]
  (let [ks (-> data (first) (keys))
        series (map (fn [k]
                      {:name (str k)
                       :type :bar
                       :data (into [] (map k) data)})
                    ks)]
    {:title   {:text title}
     :toolbox {:feature {:save-as-image {:pixel-ratio 2}}}
     :legend  {}
     :tooltip {}
     :x-axis  {:axis-pointer {:show true}
               :data         (if-not x-axis
                               (vec (range (count data)))
                               (map x-axis data))}
     :y-axis  {}
     :series  series}))


(defmethod bar-plot java.lang.Number
  [data & {:keys [title]}]
  (let [series [{:type :bar
                 :data data}]]
    {:title   {:text title}
     :toolbox {:feature {:save-as-image {:pixel-ratio 2}}}
     :legend  {}
     :tooltip {}
     :x-axis  {:axis-pointer {:show true}
               :data         (vec (range (count data)))}
     :y-axis  {}
     :series  series}))


(defn bar-plot [data & {:keys [title]}]
  )
