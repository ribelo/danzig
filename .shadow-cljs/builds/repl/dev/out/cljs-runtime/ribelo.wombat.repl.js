goog.provide('ribelo.wombat.repl');
goog.require('cljs.core');
ribelo.wombat.repl.main = (function ribelo$wombat$repl$main(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42059 = arguments.length;
var i__4731__auto___42060 = (0);
while(true){
if((i__4731__auto___42060 < len__4730__auto___42059)){
args__4736__auto__.push((arguments[i__4731__auto___42060]));

var G__42061 = (i__4731__auto___42060 + (1));
i__4731__auto___42060 = G__42061;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return ribelo.wombat.repl.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

ribelo.wombat.repl.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["repl!"], 0));
});

ribelo.wombat.repl.main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
ribelo.wombat.repl.main.cljs$lang$applyTo = (function (seq42051){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42051));
});


//# sourceMappingURL=ribelo.wombat.repl.js.map
