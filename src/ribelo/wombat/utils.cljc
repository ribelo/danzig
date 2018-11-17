(ns ribelo.wombat.utils)

(defn scomp [& fns]
  (apply comp (filter identity fns)))