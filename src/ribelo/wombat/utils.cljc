(ns ribelo.wombat.utils)

(defn comp-some [& fns]
  (apply comp (filter identity fns)))
