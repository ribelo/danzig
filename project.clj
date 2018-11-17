(defproject ribelo/wombat "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/core.async "0.4.474"]
                 [com.taoensso/encore "2.96.0"]
                 [net.cgrand/xforms "0.18.2"]
                 [clj-time "0.11.0"]
                 [ribelo/visby "0.1.0-SNAPSHOT"]]
  :global-vars {*warn-on-reflection* true}
  :profiles {:dev {:dependencies [[criterium "0.4.4"]
                                  [org.apache.commons/commons-math3 "3.6.1"]]}})
