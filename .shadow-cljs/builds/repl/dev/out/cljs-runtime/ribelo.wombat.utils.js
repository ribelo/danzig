goog.provide('ribelo.wombat.utils');
goog.require('cljs.core');
ribelo.wombat.utils.scomp = (function ribelo$wombat$utils$scomp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44819 = arguments.length;
var i__4731__auto___44820 = (0);
while(true){
if((i__4731__auto___44820 < len__4730__auto___44819)){
args__4736__auto__.push((arguments[i__4731__auto___44820]));

var G__44821 = (i__4731__auto___44820 + (1));
i__4731__auto___44820 = G__44821;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return ribelo.wombat.utils.scomp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

ribelo.wombat.utils.scomp.cljs$core$IFn$_invoke$arity$variadic = (function (fns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,fns));
});

ribelo.wombat.utils.scomp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
ribelo.wombat.utils.scomp.cljs$lang$applyTo = (function (seq44816){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44816));
});


//# sourceMappingURL=ribelo.wombat.utils.js.map
