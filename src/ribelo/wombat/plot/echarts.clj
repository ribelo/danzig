(ns ribelo.wombat.plot.echarts
  (:require [clojure.string :as str]
            [clojupyter.misc.display :as display]
            [clojupyter.misc.helper :as helper]
            [cheshire.core :as json]))


(defn- split-words [s]
  (remove empty?
          (-> s
              (str/replace #"_|-" " ")
              (str/replace #"(\p{javaUpperCase})((\p{javaUpperCase})[(\p{javaLowerCase})0-9])"
                           "$1 $2")
              (str/replace
                #"(\p{javaLowerCase})(\p{javaUpperCase})" "$1 $2")
              (str/split
                #"[^\w0-9]+"))))


(defn camel-case ^String [^String s]
  (let [words (split-words s)]
    (str/join "" (conj (map str/capitalize (rest words)) (str/lower-case (first words))))))


(defn init []
  (let [code "require.config({
                            paths: {
                              echarts: 'https://cdnjs.cloudflare.com/ajax/libs/echarts/4.1.0/echarts-en'
                            }
                          });
                          require(['echarts'], function(echarts){
                            window.echarts = echarts
                          });"]
    (display/hiccup-html
      [:div [:script code]])))


(defn plot [{:keys [width height]
             :or   {width 900 height 400}
             :as   opts}]
  (let [id (str (java.util.UUID/randomUUID))
        code (format "var chart = echarts.init(document.getElementById('%s'));
                          chart.setOption(%s)"
                     id (json/generate-string (-> opts (dissoc :width) (dissoc :height))
                                              {:key-fn camel-case}))]
    (display/hiccup-html
      [:div [:div {:id id :style (format "width:%spx;
                                                height:%spx"
                                         width height)}]
       [:script code]])))