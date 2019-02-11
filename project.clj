(defproject ribelo/wombat "0.1.1-SNAPSHOT"
  :description "FIXME: write description"
  :url "https://github.com/ribelo/ribelo.wombat"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-tools-deps "0.4.3"]]
  :middleware [lein-tools-deps.plugin/resolve-dependencies-with-deps-edn]
  :lein-tools-deps/config {:config-files [:install :user :project]}
  :global-vars {*warn-on-reflection* true})
