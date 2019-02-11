# ribelo.wombat

A easy-to-use data structures and data analysis tools for the Clojure programming language.
Wombat pretends to be clojure pandas...but it will never happen.

Created mainly to learn how to use transducers, and bring the basic functionality 
of python pandas, which I use on a daily basis.
The problem may be that I do not know anything about programming.

## Usage

```clojure
(require '[ribelo.wombat.dataframe :as df])

(let [data (map (fn [_] {:a (rand-int 10) :b (rand-int 10)}) (range 10))]
  (into [] (df/loc :a) data))
  
;;=> [8 5 6 6 4 6 7 1 5 6]

(let [data (map (fn [_] {:a (rand-int 10) :b (rand-int 10)}) (range 10))]
  (into [] (comp (df/loc [:a :b]) (df/head)) data)
  
;;=> [{:a 1, :b 4} {:a 3, :b 5} {:a 6, :b 2} {:a 1, :b 3} {:a 8, :b 8}]

(into [] (df/iloc 3) (range 10 20))

;;=> [13]

(into [] (df/iloc 3 5) (range 10 20))

;;=> [13 14 15]

(into [] (df/iloc 3 nil) (range 10 20))

;;=> [13 14 15 16 17 18 19]

(into [] (df/iloc [0 3 6]) (range 10 20))

;;=> [10 13 16]

(into [] (df/set 1 100) (range 10 20))

;;=> [10 100 12 13 14 15 16 17 18 19]

(into [] (df/set 1 5 100) (range 10 20))

;;=> [10 100 100 100 100 15 16 17 18 19]

(into [] (df/set [0 5 9] 100) (range 10 20))

;;=> [100 11 12 13 14 100 16 17 18 100]

(let [data (map (fn [_] {:a (rand-int 10) :b (rand-int 10)}) (range 10))]
  (into [] (comp (df/fill :a 0) (df/head)) data))
  
;;=> [{:a 0, :b 0} {:a 0, :b 2} {:a 0, :b 6} {:a 0, :b 0} {:a 0, :b 7}]

(let [data (map (fn [_] {:a (rand-int 10) :b (rand-int 10)}) (range 10))]
  (into [] (comp (df/fill [:a :b] 0) (df/head)) data))

;;=> [{:a 0, :b 0} {:a 0, :b 0} {:a 0, :b 0} {:a 0, :b 0} {:a 0, :b 0}]

(let [data (map (fn [_] {:a (rand-int 10) :b (rand-int 10)}) (range 10))]
  (into [] (comp (df/fill {:a 0 :b 1}) (df/head)) data))

;;=> [{:a 0, :b 1} {:a 0, :b 1} {:a 0, :b 1} {:a 0, :b 1} {:a 0, :b 1}]

(let [data (map (fn [_] {:a (rand-int 10) :b (rand-int 10)}) (range 10))]
  (into [] (comp (replace :a even? :even) (df/head)) data))
  
;;=> [{:a :even, :b 4} {:a 7, :b 0} {:a :even, :b 5} {:a 3, :b 8} {:a 5, :b 6}]

(let [data (map (fn [_] {:a (rand-int 10) :b (rand-int 10)}) (range 10))]
  (into [] df/describe data))
  
;;=> [[:a
;;     {:count 10, :mean 4.7, :std 2.6267851073127395, :min 2, :25% 2.75, :50% 4.0, :75% 6.75, :max 9}]
;;     [:b
;;     {:count 10, :mean 3.4, :std 3.2041639575194445, :min 0, :25% 2.75, :50% 4.0, :75% 6.75, :max 9}]]

(require 'ribelo.wombat.aggregate :as agg)
(let [data (map (fn [_] {:a (rand-int 10) :b (rand-int 10)}) (range 10))]
  (into [] (agg/aggregate {:a :sum :b :mean}) data))
  
;;=> [{:a 38, :b 5.0}]

(let [data (map (fn [_] {:a (rand-int 10) :b (rand-int 10)}) (range 10))]
  (into [] (agg/aggregate {:a-sum  (agg/sum :a)
                           :a-mean (agg/mean :a)}) data))
                           
;;=> [{:a-sum 40, :a-mean 4.0}]

(let [data (map (fn [_] {:a (rand-nth [nil (rand-int 10)]) :b (rand-nth [nil (rand-int 10)])}) (range 10))]
  (into [] (df/dropna) data))
  
;;=> [{:a 0, :b 9} {:a 6, :b 5}]

(let [data [1 nil 3 nil 5]]
  (into [] (df/dropna) data))
  
;;=> [1 3 5]

(let [data (map (fn [_] {:a (rand-int 10) :b (rand-int 10)}) (range 10))]
  (into [] (df/where #(> (:a %) 5) #(< (:b %) 5)) data))
  
;;=> [{:a 8, :b 2} {:a 6, :b 0} {:a 8, :b 4}]

(require '[clj-time.core :as dt])

(let [data [{:a 1 :b 2 :date (dt/date-time 2018 11 10)} {:a 1 :b 2 :date (dt/date-time 2018 11 15)}]]
  (into [] (df/asfreq [:d 1]) data))
  
;;=>
;;[{:a 1, :b 2, :date #object[org.joda.time.DateTime 0x30dcefc9 "2018-11-10T00:00:00.000Z"]}
;; {:date #object[org.joda.time.DateTime 0x11eab30c "2018-11-11T00:00:00.000Z"]}
;;  :date #object[org.joda.time.DateTime 0x500116ff "2018-11-12T00:00:00.000Z"]}
;;  :date #object[org.joda.time.DateTime 0x3f45f380 "2018-11-13T00:00:00.000Z"]}
;;  :date #object[org.joda.time.DateTime 0x68b0e106 "2018-11-14T00:00:00.000Z"]}
;;  :a 1, :b 2, :date #object[org.joda.time.DateTime 0x2c865dcf "2018-11-15T00:00:00.000Z"]}]
 
(let [data [{:a 1 :b 2 :date (dt/date-time 2018 11 10)} {:a 1 :b 2 :date (dt/date-time 2018 11 15)}]]
  (into [] (df/asfreq [:d 1] :fill [:a :b]) data))
;;=>  
;;[{:a 1, :b 2, :date #object[org.joda.time.DateTime 0x4f1c8fd6 "2018-11-10T00:00:00.000Z"]}
;; {:a 1, :b 2, :date #object[org.joda.time.DateTime 0x580789d0 "2018-11-11T00:00:00.000Z"]}
;; {:a 1, :b 2, :date #object[org.joda.time.DateTime 0x5a7c4f73 "2018-11-12T00:00:00.000Z"]}
;; {:a 1, :b 2, :date #object[org.joda.time.DateTime 0x7ce679e7 "2018-11-13T00:00:00.000Z"]}
;; {:a 1, :b 2, :date #object[org.joda.time.DateTime 0x57af2b92 "2018-11-14T00:00:00.000Z"]}
;; {:a 1, :b 2, :date #object[org.joda.time.DateTime 0x330261be "2018-11-15T00:00:00.000Z"]}]

```

## License

Copyright © 2018 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
