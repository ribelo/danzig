(ns ribelo.danzig-test
  (:require [ribelo.danzig :as dz :refer [=>>]]
            #?(:clj  [clojure.test :as t]
               :cljs [cljs.test :as t :include-macros true])))

(comment
  (def data [0 1 2]))

(t/deftest comp-some
  (let [data [0 1 2]]
    (t/is
     (= [1 2 3]
        (into [] (dz/comp-some (map inc) (when false (map dec))) data)))))

(t/deftest fat-thread-last
  (let [data [0 1 2]]
    (t/is
     (= [1 2 3]
        (=>> data (map inc))))
    (t/is
     (= [1 2 3]
        (=>> data (map inc) (when false (map dec)))))
    (t/is
     (= 1
        (=>> data (map inc) first)))
    (t/is
     (= 3
        (=>> data (map inc) last)))
    (t/is
     (= #{1 2 3}
        (=>> data (map inc) (into #{}))))
    (t/is
     (= #{1 2 3}
        (=>> data (map inc) (into #{}))))))

(t/deftest vecs->maps
  (t/is
   (= [{:a 0, :b 0} {:a 1, :b 2} {:a 3, :b 4}]
      (=>> [[0 0] [1 2] [3 4]] (dz/vecs->maps {0 :a 1 :b}))
      (=>> [[0 0] [1 2] [3 4]] (dz/vecs->maps [:a :b])))))

(t/deftest row
  (t/is
   (= {:a 0, :b 0}
      (dz/row [:a :b] [0 0]))))

(comment
  (def data [{:a -1 :b 0 :c -1} {:a 0 :b 1 :c 1} {:a 1 :b 2 :c 3}]))

(t/deftest where
  (let [data [{:a -1 :b 0 :c -1} {:a 0 :b 1 :c 1} {:a 1 :b 2 :c 3}]]
    (t/testing "?f"
      (t/is
       (= [{:a -1, :b 0 :c -1}]
          (=>> data (dz/where (fn [{:keys [a]}] (= a -1)))))))
    (t/testing "?k ?v"
      (t/is
       (= [{:a -1, :b 0 :c -1}]
          (=>> data (dz/where :a -1)))))
    (t/testing "{?k ?v}"
      (t/is
       (= [{:a -1, :b 0 :c -1}]
          (=>> data (dz/where {:a -1})))))
    (t/testing "?k ?f"
      (t/is
       (= [{:a -1, :b 0 :c -1}]
          (=>> data (dz/where :a neg?)))))
    (t/testing "[?f1 [[?f2 & ?xs] | ?k/?v] ...]"
      (t/is
       (= [{:a -1, :b 0 :c -1}]
          (=>> data (dz/where [= :a :c]))))
      (t/is
       (= [{:a -1, :b 0 :c -1}]
          (=>> data (dz/where [= :a -1]))))
      (t/is
       (= [{:a :some/key}]
          (=>> [{:a :some/key} {:a :another/key}] (dz/where [= :a ':some/key]))))
      (t/is
       (= [{:a -1, :b 0, :c -1} {:a 0, :b 1, :c 1} {:a 1, :b 2, :c 3}]
          (=>> data (dz/where [= [+ :a :b] :c]))))
      (t/is
       (= [{:a 0, :b 1, :c 1}]
          (=>> data (dz/where [= [+ :a :b] [+ :a :c]]))))
      (t/is
       (= [{:a 0, :b 1, :c 1}]
          (=>> data (dz/where [= [+ :a :b] [+ [+ :a :c] [- :b 1]]])))))))

(t/deftest column-names
  (let [data [{:a -1 :b 0 :c -1} {:a 0 :b 1 :c 1} {:a 1 :b 2 :c 3}]]
    (t/is [:a :b :c]
          (=>> data (dz/column-names ::dz/all)))
    (t/is [:a :b :c]
          (=>> data (dz/column-names :a)))))

(t/deftest select-column
  (let [data [{:a -1 :b 0 :c -1} {:a 0 :b 1 :c 1} {:a 1 :b 2 :c 3}]]
    (t/is [{:a -1 :b 0 :c -1} {:a 0 :b 1 :c 1} {:a 1 :b 2 :c 3}]
          (=>> data (dz/select-columns :all)))
    (t/is [{:a -1, :b 0} {:a 0, :b 1} {:a 1, :b 2}]
          (=>> data (dz/select-columns :a :b)))
    (t/is [{:a -1, :b 0} {:a 0, :b 1} {:a 1, :b 2}]
          (=>> data (dz/select-columns #"a|b")))))

(t/deftest with
  (let [data [{:a -1 :b 0 :c -1} {:a 0 :b 1 :c 1} {:a 1 :b 2 :c 3}]]
    (t/testing "?i ?k ?v"
      (t/is
       (= [{:a 999 :b 0 :c -1} {:a 0 :b 1 :c 1} {:a 1 :b 2 :c 3}]
          (=>> data (dz/with 0 :a 999)))))
    (t/testing "?i ?m"
      (t/is
       (= [{:a 999 :b 0 :c -1} {:a 0 :b 1 :c 1} {:a 1 :b 2 :c 3}]
          (=>> data (dz/with 0 {:a 999})))))
    (t/testing "?k ?f"
      (t/is
       (= [{:a -1, :b 0, :c -1, :d 9} {:a 0, :b 1, :c 1, :d 11} {:a 1, :b 2, :c 3, :d 13}]
          (=>> data (dz/with :d (fn [{:keys [a b]}] (+ a b 10)))))))
    (t/testing "?k ?v"
      (t/is
       (= [{:a -1, :b 0, :c -1, :d 5} {:a 0, :b 1, :c 1, :d 5} {:a 1, :b 2, :c 3, :d 5}]
          (=>> data (dz/with :d 5)))))
    (t/testing "?k [?f . !ks]"
      (t/is
       (= [{:a -1, :b 0, :c -1, :d 9} {:a 0, :b 1, :c 1, :d 11} {:a 1, :b 2, :c 3, :d 13}]
          (=>> data (dz/with :d [+ :a :b 10])))))
    (t/testing "?k [?f1 [[?f2 & ?xs] | ?k/?v] ...]}"
      (t/is
       (= [{:a 0, :b 0, :c -1} {:a 1, :b 1, :c 1} {:a 2, :b 2, :c 3}]
          (=>> data (dz/with :a [+ :a 1]))))
      (t/is
       (= [{:a -1, :b 0, :c -1} {:a 1, :b 1, :c 1} {:a 3, :b 2, :c 3}]
          (=>> data (dz/with :a [+ :a :b])))))
    (t/testing "{?k [?f1 [[?f2 & ?xs] | ?k/?v] ...]}"
      (t/is
       (= [{:a 0, :b 5, :c -1} {:a 1, :b 6, :c 1} {:a 2, :b 7, :c 3}]
          (=>> data (dz/with {:a [+ :a 1] :b [+ :b 5]}))))
      (t/is
       (= [{:a 0, :b 1, :c -1} {:a 1, :b 0, :c 1} {:a 2, :b -1, :c 3}]
          (=>> data (dz/with {:a [+ :a 1] :b [- :b :c]})))))
    (t/testing "{?k ?v}"
      (t/is
       (= [{:a 5, :b 10, :c -1} {:a 5, :b 10, :c 1} {:a 5, :b 10, :c 3}]
          (=>> data (dz/with {:a 5 :b 10})))))
    (t/testing "{?k ?f}"
      (t/is
       (= [{:a 0, :b 5, :c -1} {:a 1, :b 6, :c 1} {:a 2, :b 7, :c 3}]
          (=>> data (dz/with {:a (fn [{:keys [a]}] (+ a 1))
                             :b (fn [{:keys [b]}] (+ b 5))})))))
    (t/testing ":when ?pred & ?rest"
      (t/is
       (= [{:a 0, :b 5, :c -1} {:a 1, :b 6, :c 1} {:a 2, :b 7, :c 3}]
          (=>> data (dz/with :when [= :a 0] :a 999)))))))

(comment
  (require '[ribelo.danzig.aggregate :as agg])
  (def data [{:a -1 :b [0 1 2] :c 0} {:a -1 :b [1 2 3] :c 0} {:a 1 :b [2 3 4] :c 1}]))

(t/deftest aggregate
  (let [data [{:a -1 :b [0 1 2] :c 0} {:a -1 :b [1 2 3] :c 0} {:a 1 :b [2 3 4] :c 1}]]
    (t/testing "?k/?f"
      (t/is
       (= [{:a -1, :b 18, :c 1}]
          (=>> data (dz/aggregate {:a :sum
                                   :b (comp (mapcat :b) (x/reduce +))
                                   :c :sum})))))
    ))

(t/deftest group-by
  (let [data [{:a -1 :b [0 1 2] :c 0} {:a -1 :b [1 2 3] :c 0} {:a 1 :b [2 3 4] :c 1}]]
    (t/testing "?k/?f"
      (t/is
       (= [[-1 [{:a -1, :b [0 1 2], :c 0} {:a -1, :b [1 2 3], :c 0}]] [1 [{:a 1, :b [2 3 4], :c 1}]]]
          (=>> data (dz/group-by :a)))))
    (t/testing "?k/?f ?xf"
      (t/is
       (= [[-1 [{:a -1, :b [0 1 2], :c 0} {:a -1, :b [1 2 3], :c 0}]] [1 [{:a 1, :b [2 3 4], :c 1}]]]
          (=>> data (dz/group-by :a (x/into [])))))
      (t/is
       (= [[-1 -2] [1 1]]
          (=>> data (dz/group-by :a (comp (map :a) (x/reduce +))))))
      (t/is
       (= [[-1 -2] [1 1]]
          (=>> data (dz/group-by :a (agg/sum :a)))))
      (t/is
       (= [[-1 -2] [1 1]]
          (=>> data (dz/group-by :a :sum)))))
    (t/testing "[!ks/!fs] ?xf"
      (t/is
       (= [[[-1 0] [{:a -1, :b [0 1 2], :c 0} {:a -1, :b [1 2 3], :c 0}]] [[1 1] [{:a 1, :b [2 3 4], :c 1}]]]
          (=>> data (dz/group-by [:a :c] (x/into [])))))
      )))
