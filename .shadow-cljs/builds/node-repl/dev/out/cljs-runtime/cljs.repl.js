goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__39356){
var map__39357 = p__39356;
var map__39357__$1 = (((((!((map__39357 == null))))?(((((map__39357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39357):map__39357);
var m = map__39357__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39359_39551 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39360_39552 = null;
var count__39361_39553 = (0);
var i__39362_39554 = (0);
while(true){
if((i__39362_39554 < count__39361_39553)){
var f_39555 = chunk__39360_39552.cljs$core$IIndexed$_nth$arity$2(null,i__39362_39554);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39555], 0));


var G__39556 = seq__39359_39551;
var G__39557 = chunk__39360_39552;
var G__39558 = count__39361_39553;
var G__39559 = (i__39362_39554 + (1));
seq__39359_39551 = G__39556;
chunk__39360_39552 = G__39557;
count__39361_39553 = G__39558;
i__39362_39554 = G__39559;
continue;
} else {
var temp__5457__auto___39560 = cljs.core.seq(seq__39359_39551);
if(temp__5457__auto___39560){
var seq__39359_39561__$1 = temp__5457__auto___39560;
if(cljs.core.chunked_seq_QMARK_(seq__39359_39561__$1)){
var c__4550__auto___39562 = cljs.core.chunk_first(seq__39359_39561__$1);
var G__39563 = cljs.core.chunk_rest(seq__39359_39561__$1);
var G__39564 = c__4550__auto___39562;
var G__39565 = cljs.core.count(c__4550__auto___39562);
var G__39566 = (0);
seq__39359_39551 = G__39563;
chunk__39360_39552 = G__39564;
count__39361_39553 = G__39565;
i__39362_39554 = G__39566;
continue;
} else {
var f_39567 = cljs.core.first(seq__39359_39561__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_39567], 0));


var G__39568 = cljs.core.next(seq__39359_39561__$1);
var G__39569 = null;
var G__39570 = (0);
var G__39571 = (0);
seq__39359_39551 = G__39568;
chunk__39360_39552 = G__39569;
count__39361_39553 = G__39570;
i__39362_39554 = G__39571;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39572 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_39572], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_39572)))?cljs.core.second(arglists_39572):arglists_39572)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39383_39573 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39384_39574 = null;
var count__39385_39575 = (0);
var i__39386_39576 = (0);
while(true){
if((i__39386_39576 < count__39385_39575)){
var vec__39402_39578 = chunk__39384_39574.cljs$core$IIndexed$_nth$arity$2(null,i__39386_39576);
var name_39579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39402_39578,(0),null);
var map__39405_39580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39402_39578,(1),null);
var map__39405_39581__$1 = (((((!((map__39405_39580 == null))))?(((((map__39405_39580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39405_39580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39405_39580):map__39405_39580);
var doc_39582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405_39581__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405_39581__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39579], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39583], 0));

if(cljs.core.truth_(doc_39582)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39582], 0));
} else {
}


var G__39585 = seq__39383_39573;
var G__39586 = chunk__39384_39574;
var G__39587 = count__39385_39575;
var G__39588 = (i__39386_39576 + (1));
seq__39383_39573 = G__39585;
chunk__39384_39574 = G__39586;
count__39385_39575 = G__39587;
i__39386_39576 = G__39588;
continue;
} else {
var temp__5457__auto___39589 = cljs.core.seq(seq__39383_39573);
if(temp__5457__auto___39589){
var seq__39383_39590__$1 = temp__5457__auto___39589;
if(cljs.core.chunked_seq_QMARK_(seq__39383_39590__$1)){
var c__4550__auto___39591 = cljs.core.chunk_first(seq__39383_39590__$1);
var G__39592 = cljs.core.chunk_rest(seq__39383_39590__$1);
var G__39593 = c__4550__auto___39591;
var G__39594 = cljs.core.count(c__4550__auto___39591);
var G__39595 = (0);
seq__39383_39573 = G__39592;
chunk__39384_39574 = G__39593;
count__39385_39575 = G__39594;
i__39386_39576 = G__39595;
continue;
} else {
var vec__39407_39596 = cljs.core.first(seq__39383_39590__$1);
var name_39597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407_39596,(0),null);
var map__39410_39598 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39407_39596,(1),null);
var map__39410_39599__$1 = (((((!((map__39410_39598 == null))))?(((((map__39410_39598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39410_39598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39410_39598):map__39410_39598);
var doc_39600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39410_39599__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39410_39599__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_39597], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_39601], 0));

if(cljs.core.truth_(doc_39600)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_39600], 0));
} else {
}


var G__39602 = cljs.core.next(seq__39383_39590__$1);
var G__39603 = null;
var G__39604 = (0);
var G__39605 = (0);
seq__39383_39573 = G__39602;
chunk__39384_39574 = G__39603;
count__39385_39575 = G__39604;
i__39386_39576 = G__39605;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__39423 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__39424 = null;
var count__39425 = (0);
var i__39426 = (0);
while(true){
if((i__39426 < count__39425)){
var role = chunk__39424.cljs$core$IIndexed$_nth$arity$2(null,i__39426);
var temp__5457__auto___39610__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39610__$1)){
var spec_39611 = temp__5457__auto___39610__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39611)], 0));
} else {
}


var G__39612 = seq__39423;
var G__39613 = chunk__39424;
var G__39614 = count__39425;
var G__39615 = (i__39426 + (1));
seq__39423 = G__39612;
chunk__39424 = G__39613;
count__39425 = G__39614;
i__39426 = G__39615;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__39423);
if(temp__5457__auto____$1){
var seq__39423__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__39423__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39423__$1);
var G__39616 = cljs.core.chunk_rest(seq__39423__$1);
var G__39617 = c__4550__auto__;
var G__39618 = cljs.core.count(c__4550__auto__);
var G__39619 = (0);
seq__39423 = G__39616;
chunk__39424 = G__39617;
count__39425 = G__39618;
i__39426 = G__39619;
continue;
} else {
var role = cljs.core.first(seq__39423__$1);
var temp__5457__auto___39621__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___39621__$2)){
var spec_39622 = temp__5457__auto___39621__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_39622)], 0));
} else {
}


var G__39623 = cljs.core.next(seq__39423__$1);
var G__39624 = null;
var G__39625 = (0);
var G__39626 = (0);
seq__39423 = G__39623;
chunk__39424 = G__39624;
count__39425 = G__39625;
i__39426 = G__39626;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__39633 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__39634 = cljs.core.ex_cause(t);
via = G__39633;
t = G__39634;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__39457 = datafied_throwable;
var map__39457__$1 = (((((!((map__39457 == null))))?(((((map__39457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39457):map__39457);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39457__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39457__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39457__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__39458 = cljs.core.last(via);
var map__39458__$1 = (((((!((map__39458 == null))))?(((((map__39458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39458):map__39458);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39458__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39458__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39458__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__39459 = data;
var map__39459__$1 = (((((!((map__39459 == null))))?(((((map__39459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39459):map__39459);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39459__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39459__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39459__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__39460 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__39460__$1 = (((((!((map__39460 == null))))?(((((map__39460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39460):map__39460);
var top_data = map__39460__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39460__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39472 = phase;
var G__39472__$1 = (((G__39472 instanceof cljs.core.Keyword))?G__39472.fqn:null);
switch (G__39472__$1) {
case "read-source":
var map__39474 = data;
var map__39474__$1 = (((((!((map__39474 == null))))?(((((map__39474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39474):map__39474);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39474__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39474__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__39476 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__39476__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39476,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39476);
var G__39476__$2 = (cljs.core.truth_((function (){var fexpr__39477 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39477.cljs$core$IFn$_invoke$arity$1 ? fexpr__39477.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39477.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39476__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39476__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39476__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39476__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__39478 = top_data;
var G__39478__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39478,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__39478);
var G__39478__$2 = (cljs.core.truth_((function (){var fexpr__39479 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39479.cljs$core$IFn$_invoke$arity$1 ? fexpr__39479.cljs$core$IFn$_invoke$arity$1(source) : fexpr__39479.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__39478__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__39478__$1);
var G__39478__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39478__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39478__$2);
var G__39478__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39478__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39478__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39478__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39478__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__39480 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39480,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39480,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39480,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39480,(3),null);
var G__39483 = top_data;
var G__39483__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39483,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__39483);
var G__39483__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39483__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__39483__$1);
var G__39483__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39483__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__39483__$2);
var G__39483__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39483__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__39483__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39483__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__39483__$4;
}

break;
case "execution":
var vec__39484 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39484,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39484,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39484,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39484,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__39484,source__$1,method,file,line,G__39472,G__39472__$1,map__39457,map__39457__$1,via,trace,phase,map__39458,map__39458__$1,type,message,data,map__39459,map__39459__$1,problems,fn,caller,map__39460,map__39460__$1,top_data,source){
return (function (p1__39452_SHARP_){
var or__4131__auto__ = (p1__39452_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__39488 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__39488.cljs$core$IFn$_invoke$arity$1 ? fexpr__39488.cljs$core$IFn$_invoke$arity$1(p1__39452_SHARP_) : fexpr__39488.call(null,p1__39452_SHARP_));
}
});})(vec__39484,source__$1,method,file,line,G__39472,G__39472__$1,map__39457,map__39457__$1,via,trace,phase,map__39458,map__39458__$1,type,message,data,map__39459,map__39459__$1,problems,fn,caller,map__39460,map__39460__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__39489 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__39489__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39489,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__39489);
var G__39489__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39489__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__39489__$1);
var G__39489__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39489__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__39489__$2);
var G__39489__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39489__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__39489__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__39489__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__39489__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39472__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__39494){
var map__39495 = p__39494;
var map__39495__$1 = (((((!((map__39495 == null))))?(((((map__39495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39495):map__39495);
var triage_data = map__39495__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39495__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39495__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39495__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39495__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39495__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39495__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39495__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39495__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__39499 = phase;
var G__39499__$1 = (((G__39499 instanceof cljs.core.Keyword))?G__39499.fqn:null);
switch (G__39499__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__39502 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__39503 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39504 = loc;
var G__39505 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39506_39673 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39507_39674 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39508_39675 = true;
var _STAR_print_fn_STAR__temp_val__39509_39676 = ((function (_STAR_print_newline_STAR__orig_val__39506_39673,_STAR_print_fn_STAR__orig_val__39507_39674,_STAR_print_newline_STAR__temp_val__39508_39675,sb__4661__auto__,G__39502,G__39503,G__39504,G__39499,G__39499__$1,loc,class_name,simple_class,cause_type,format,map__39495,map__39495__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__39506_39673,_STAR_print_fn_STAR__orig_val__39507_39674,_STAR_print_newline_STAR__temp_val__39508_39675,sb__4661__auto__,G__39502,G__39503,G__39504,G__39499,G__39499__$1,loc,class_name,simple_class,cause_type,format,map__39495,map__39495__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39508_39675;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39509_39676;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__39506_39673,_STAR_print_fn_STAR__orig_val__39507_39674,_STAR_print_newline_STAR__temp_val__39508_39675,_STAR_print_fn_STAR__temp_val__39509_39676,sb__4661__auto__,G__39502,G__39503,G__39504,G__39499,G__39499__$1,loc,class_name,simple_class,cause_type,format,map__39495,map__39495__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__39506_39673,_STAR_print_fn_STAR__orig_val__39507_39674,_STAR_print_newline_STAR__temp_val__39508_39675,_STAR_print_fn_STAR__temp_val__39509_39676,sb__4661__auto__,G__39502,G__39503,G__39504,G__39499,G__39499__$1,loc,class_name,simple_class,cause_type,format,map__39495,map__39495__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__39492_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39492_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__39506_39673,_STAR_print_fn_STAR__orig_val__39507_39674,_STAR_print_newline_STAR__temp_val__39508_39675,_STAR_print_fn_STAR__temp_val__39509_39676,sb__4661__auto__,G__39502,G__39503,G__39504,G__39499,G__39499__$1,loc,class_name,simple_class,cause_type,format,map__39495,map__39495__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__39506_39673,_STAR_print_fn_STAR__orig_val__39507_39674,_STAR_print_newline_STAR__temp_val__39508_39675,_STAR_print_fn_STAR__temp_val__39509_39676,sb__4661__auto__,G__39502,G__39503,G__39504,G__39499,G__39499__$1,loc,class_name,simple_class,cause_type,format,map__39495,map__39495__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39507_39674;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39506_39673;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39502,G__39503,G__39504,G__39505) : format.call(null,G__39502,G__39503,G__39504,G__39505));

break;
case "macroexpansion":
var G__39511 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__39512 = cause_type;
var G__39513 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39514 = loc;
var G__39515 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39511,G__39512,G__39513,G__39514,G__39515) : format.call(null,G__39511,G__39512,G__39513,G__39514,G__39515));

break;
case "compile-syntax-check":
var G__39516 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__39517 = cause_type;
var G__39518 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39519 = loc;
var G__39520 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39516,G__39517,G__39518,G__39519,G__39520) : format.call(null,G__39516,G__39517,G__39518,G__39519,G__39520));

break;
case "compilation":
var G__39521 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__39522 = cause_type;
var G__39523 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39524 = loc;
var G__39525 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39521,G__39522,G__39523,G__39524,G__39525) : format.call(null,G__39521,G__39522,G__39523,G__39524,G__39525));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__39526 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__39527 = symbol;
var G__39528 = loc;
var G__39529 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__39533_39683 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__39534_39684 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__39535_39685 = true;
var _STAR_print_fn_STAR__temp_val__39536_39686 = ((function (_STAR_print_newline_STAR__orig_val__39533_39683,_STAR_print_fn_STAR__orig_val__39534_39684,_STAR_print_newline_STAR__temp_val__39535_39685,sb__4661__auto__,G__39526,G__39527,G__39528,G__39499,G__39499__$1,loc,class_name,simple_class,cause_type,format,map__39495,map__39495__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__39533_39683,_STAR_print_fn_STAR__orig_val__39534_39684,_STAR_print_newline_STAR__temp_val__39535_39685,sb__4661__auto__,G__39526,G__39527,G__39528,G__39499,G__39499__$1,loc,class_name,simple_class,cause_type,format,map__39495,map__39495__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__39535_39685;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__39536_39686;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__39533_39683,_STAR_print_fn_STAR__orig_val__39534_39684,_STAR_print_newline_STAR__temp_val__39535_39685,_STAR_print_fn_STAR__temp_val__39536_39686,sb__4661__auto__,G__39526,G__39527,G__39528,G__39499,G__39499__$1,loc,class_name,simple_class,cause_type,format,map__39495,map__39495__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__39533_39683,_STAR_print_fn_STAR__orig_val__39534_39684,_STAR_print_newline_STAR__temp_val__39535_39685,_STAR_print_fn_STAR__temp_val__39536_39686,sb__4661__auto__,G__39526,G__39527,G__39528,G__39499,G__39499__$1,loc,class_name,simple_class,cause_type,format,map__39495,map__39495__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__39493_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__39493_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__39533_39683,_STAR_print_fn_STAR__orig_val__39534_39684,_STAR_print_newline_STAR__temp_val__39535_39685,_STAR_print_fn_STAR__temp_val__39536_39686,sb__4661__auto__,G__39526,G__39527,G__39528,G__39499,G__39499__$1,loc,class_name,simple_class,cause_type,format,map__39495,map__39495__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__39533_39683,_STAR_print_fn_STAR__orig_val__39534_39684,_STAR_print_newline_STAR__temp_val__39535_39685,_STAR_print_fn_STAR__temp_val__39536_39686,sb__4661__auto__,G__39526,G__39527,G__39528,G__39499,G__39499__$1,loc,class_name,simple_class,cause_type,format,map__39495,map__39495__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__39534_39684;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__39533_39683;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__39526,G__39527,G__39528,G__39529) : format.call(null,G__39526,G__39527,G__39528,G__39529));
} else {
var G__39538 = "Execution error%s at %s(%s).\n%s\n";
var G__39539 = cause_type;
var G__39540 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__39541 = loc;
var G__39542 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__39538,G__39539,G__39540,G__39541,G__39542) : format.call(null,G__39538,G__39539,G__39540,G__39541,G__39542));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39499__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
