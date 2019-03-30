goog.provide('net.cgrand.xforms');
goog.require('cljs.core');
goog.require('net.cgrand.xforms.rfs');
goog.require('goog.structs.Queue');




/**
 * Protocol for reducing fns that accept key and val as separate arguments.
 * @interface
 */
net.cgrand.xforms.KvRfable = function(){};

/**
 * Returns a kvrf or nil
 */
net.cgrand.xforms.some_kvrf = (function net$cgrand$xforms$some_kvrf(f){
if((((!((f == null)))) && ((!((f.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 == null)))))){
return f.net$cgrand$xforms$KvRfable$some_kvrf$arity$1(f);
} else {
var x__4433__auto__ = (((f == null))?null:f);
var m__4434__auto__ = (net.cgrand.xforms.some_kvrf[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(f) : m__4434__auto__.call(null,f));
} else {
var m__4431__auto__ = (net.cgrand.xforms.some_kvrf["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(f) : m__4431__auto__.call(null,f));
} else {
throw cljs.core.missing_protocol("KvRfable.some-kvrf",f);
}
}
}
});

net.cgrand.xforms.kvreducible_QMARK_ = (function net$cgrand$xforms$kvreducible_QMARK_(coll){
if((!((coll == null)))){
if((((coll.cljs$lang$protocol_mask$partition0$ & (1048576))) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IKVReduce$)))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IKVReduce,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IKVReduce,coll);
}
});

goog.object.set(net.cgrand.xforms.KvRfable,"_",true);

var G__45424_45886 = net.cgrand.xforms.some_kvrf;
var G__45425_45887 = "_";
var G__45426_45888 = ((function (G__45424_45886,G__45425_45887){
return (function (_){
return null;
});})(G__45424_45886,G__45425_45887))
;
goog.object.set(G__45424_45886,G__45425_45887,G__45426_45888);

net.cgrand.xforms.ensure_kvrf = (function net$cgrand$xforms$ensure_kvrf(rf){
var or__4131__auto__ = net.cgrand.xforms.some_kvrf(rf);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45428 = (function (rf,or__4131__auto__,meta45429){
this.rf = rf;
this.or__4131__auto__ = or__4131__auto__;
this.meta45429 = meta45429;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (or__4131__auto__){
return (function (_45430,meta45429__$1){
var self__ = this;
var _45430__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45428(self__.rf,self__.or__4131__auto__,meta45429__$1));
});})(or__4131__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms45428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (or__4131__auto__){
return (function (_45430){
var self__ = this;
var _45430__$1 = this;
return self__.meta45429;
});})(or__4131__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms45428.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45428.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (or__4131__auto__){
return (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});})(or__4131__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms45428.prototype.call = ((function (or__4131__auto__){
return (function() {
var G__45889 = null;
var G__45889__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _45427 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__45889__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _45427 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});
var G__45889__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _45427 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
});
var G__45889__4 = (function (self__,acc,k__44857__auto__,v__44858__auto__){
var self__ = this;
var self____$1 = this;
var _45427 = self____$1;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__44857__auto__,v__44858__auto__], null);
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
});
G__45889 = function(self__,acc,k__44857__auto__,v__44858__auto__){
switch(arguments.length){
case 1:
return G__45889__1.call(this,self__);
case 2:
return G__45889__2.call(this,self__,acc);
case 3:
return G__45889__3.call(this,self__,acc,k__44857__auto__);
case 4:
return G__45889__4.call(this,self__,acc,k__44857__auto__,v__44858__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__45889.cljs$core$IFn$_invoke$arity$1 = G__45889__1;
G__45889.cljs$core$IFn$_invoke$arity$2 = G__45889__2;
G__45889.cljs$core$IFn$_invoke$arity$3 = G__45889__3;
G__45889.cljs$core$IFn$_invoke$arity$4 = G__45889__4;
return G__45889;
})()
;})(or__4131__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms45428.prototype.apply = ((function (or__4131__auto__){
return (function (self__,args45436){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45436)));
});})(or__4131__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms45428.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (or__4131__auto__){
return (function (acc,k__44857__auto__,v__44858__auto__){
var self__ = this;
var _45427 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__44857__auto__,v__44858__auto__], null);
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
});})(or__4131__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms45428.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (or__4131__auto__){
return (function (){
var self__ = this;
var _45427 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(or__4131__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms45428.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (or__4131__auto__){
return (function (acc){
var self__ = this;
var _45427 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});})(or__4131__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms45428.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (or__4131__auto__){
return (function (acc,x){
var self__ = this;
var _45427 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
});})(or__4131__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms45428.getBasis = ((function (or__4131__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"or__4131__auto__","or__4131__auto__",941665662,null),new cljs.core.Symbol(null,"meta45429","meta45429",347395808,null)], null);
});})(or__4131__auto__))
;

net.cgrand.xforms.t_net$cgrand$xforms45428.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45428.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45428";

net.cgrand.xforms.t_net$cgrand$xforms45428.cljs$lang$ctorPrWriter = ((function (or__4131__auto__){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45428");
});})(or__4131__auto__))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45428.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45428 = ((function (or__4131__auto__){
return (function net$cgrand$xforms$ensure_kvrf_$___GT_t_net$cgrand$xforms45428(rf__$1,or__4131__auto____$1,meta45429){
return (new net.cgrand.xforms.t_net$cgrand$xforms45428(rf__$1,or__4131__auto____$1,meta45429));
});})(or__4131__auto__))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45428(rf,or__4131__auto__,null));
}
});

/**
 * A transducer that reduces a collection to a 1-item collection consisting of only the reduced result.
 * Unlike reduce but like transduce it does call the completing arity (1) of the reducing fn.
 */
net.cgrand.xforms.reduce = (function net$cgrand$xforms$reduce(var_args){
var G__45441 = arguments.length;
switch (G__45441) {
case 1:
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var vacc = cljs.core.volatile_BANG_((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
var f__$1 = net.cgrand.xforms.ensure_kvrf(f);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45445 = (function (f,rf,vacc,meta45446){
this.f = f;
this.rf = rf;
this.vacc = vacc;
this.meta45446 = meta45446;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (f__$1,vacc){
return (function (_45447,meta45446__$1){
var self__ = this;
var _45447__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45445(self__.f,self__.rf,self__.vacc,meta45446__$1));
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms45445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (f__$1,vacc){
return (function (_45447){
var self__ = this;
var _45447__$1 = this;
return self__.meta45446;
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms45445.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45445.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (f__$1,vacc){
return (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms45445.prototype.call = ((function (f__$1,vacc){
return (function() {
var G__45897 = null;
var G__45897__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _45444 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__45897__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _45444 = self____$1;
var v__44860__auto__ = cljs.core.deref(self__.vacc);
if((v__44860__auto__ === self__.vacc)){
return null;
} else {
cljs.core.vreset_BANG_(self__.vacc,self__.vacc);

var f_acc = v__44860__auto__;
var G__45449 = cljs.core.unreduced((function (){var G__45450 = acc;
var G__45451 = (function (){var G__45452 = cljs.core.unreduced(f_acc);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45452) : self__.f.call(null,G__45452));
})();
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(G__45450,G__45451) : self__.rf.call(null,G__45450,G__45451));
})());
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__45449) : self__.rf.call(null,G__45449));
}
});
var G__45897__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _45444 = self____$1;
if(cljs.core.reduced_QMARK_(cljs.core._vreset_BANG_(self__.vacc,(function (){var G__45453 = cljs.core._deref(self__.vacc);
var G__45454 = x;
return (self__.f.cljs$core$IFn$_invoke$arity$2 ? self__.f.cljs$core$IFn$_invoke$arity$2(G__45453,G__45454) : self__.f.call(null,G__45453,G__45454));
})()))){
return cljs.core.reduced(acc);
} else {
return acc;
}
});
var G__45897__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _45444 = self____$1;
if(cljs.core.reduced_QMARK_(cljs.core._vreset_BANG_(self__.vacc,(function (){var G__45455 = cljs.core._deref(self__.vacc);
var G__45456 = k;
var G__45457 = v;
return (self__.f.cljs$core$IFn$_invoke$arity$3 ? self__.f.cljs$core$IFn$_invoke$arity$3(G__45455,G__45456,G__45457) : self__.f.call(null,G__45455,G__45456,G__45457));
})()))){
return cljs.core.reduced(acc);
} else {
return acc;
}
});
G__45897 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__45897__1.call(this,self__);
case 2:
return G__45897__2.call(this,self__,acc);
case 3:
return G__45897__3.call(this,self__,acc,k);
case 4:
return G__45897__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__45897.cljs$core$IFn$_invoke$arity$1 = G__45897__1;
G__45897.cljs$core$IFn$_invoke$arity$2 = G__45897__2;
G__45897.cljs$core$IFn$_invoke$arity$3 = G__45897__3;
G__45897.cljs$core$IFn$_invoke$arity$4 = G__45897__4;
return G__45897;
})()
;})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms45445.prototype.apply = ((function (f__$1,vacc){
return (function (self__,args45448){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45448)));
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms45445.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (f__$1,vacc){
return (function (){
var self__ = this;
var _45444 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms45445.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (f__$1,vacc){
return (function (acc){
var self__ = this;
var _45444 = this;
var v__44860__auto__ = cljs.core.deref(self__.vacc);
if((v__44860__auto__ === self__.vacc)){
return null;
} else {
cljs.core.vreset_BANG_(self__.vacc,self__.vacc);

var f_acc = v__44860__auto__;
var G__45461 = cljs.core.unreduced((function (){var G__45462 = acc;
var G__45463 = (function (){var G__45464 = cljs.core.unreduced(f_acc);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__45464) : self__.f.call(null,G__45464));
})();
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(G__45462,G__45463) : self__.rf.call(null,G__45462,G__45463));
})());
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__45461) : self__.rf.call(null,G__45461));
}
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms45445.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (f__$1,vacc){
return (function (acc,x){
var self__ = this;
var _45444 = this;
if(cljs.core.reduced_QMARK_(cljs.core._vreset_BANG_(self__.vacc,(function (){var G__45468 = cljs.core._deref(self__.vacc);
var G__45469 = x;
return (self__.f.cljs$core$IFn$_invoke$arity$2 ? self__.f.cljs$core$IFn$_invoke$arity$2(G__45468,G__45469) : self__.f.call(null,G__45468,G__45469));
})()))){
return cljs.core.reduced(acc);
} else {
return acc;
}
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms45445.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (f__$1,vacc){
return (function (acc,k,v){
var self__ = this;
var _45444 = this;
if(cljs.core.reduced_QMARK_(cljs.core._vreset_BANG_(self__.vacc,(function (){var G__45473 = cljs.core._deref(self__.vacc);
var G__45474 = k;
var G__45475 = v;
return (self__.f.cljs$core$IFn$_invoke$arity$3 ? self__.f.cljs$core$IFn$_invoke$arity$3(G__45473,G__45474,G__45475) : self__.f.call(null,G__45473,G__45474,G__45475));
})()))){
return cljs.core.reduced(acc);
} else {
return acc;
}
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms45445.getBasis = ((function (f__$1,vacc){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"vacc","vacc",-1937917185,null),new cljs.core.Symbol(null,"meta45446","meta45446",959484983,null)], null);
});})(f__$1,vacc))
;

net.cgrand.xforms.t_net$cgrand$xforms45445.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45445.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45445";

net.cgrand.xforms.t_net$cgrand$xforms45445.cljs$lang$ctorPrWriter = ((function (f__$1,vacc){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45445");
});})(f__$1,vacc))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45445.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45445 = ((function (f__$1,vacc){
return (function net$cgrand$xforms$__GT_t_net$cgrand$xforms45445(f__$2,rf__$1,vacc__$1,meta45446){
return (new net.cgrand.xforms.t_net$cgrand$xforms45445(f__$2,rf__$1,vacc__$1,meta45446));
});})(f__$1,vacc))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45445(f__$1,rf,vacc,null));
});
});

net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,init){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1((function() {
var G__45911 = null;
var G__45911__0 = (function (){
return init;
});
var G__45911__1 = (function (acc){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(acc) : f.call(null,acc));
});
var G__45911__2 = (function (acc,x){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(acc,x) : f.call(null,acc,x));
});
G__45911 = function(acc,x){
switch(arguments.length){
case 0:
return G__45911__0.call(this);
case 1:
return G__45911__1.call(this,acc);
case 2:
return G__45911__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45911.cljs$core$IFn$_invoke$arity$0 = G__45911__0;
G__45911.cljs$core$IFn$_invoke$arity$1 = G__45911__1;
G__45911.cljs$core$IFn$_invoke$arity$2 = G__45911__2;
return G__45911;
})()
);
});

net.cgrand.xforms.reduce.cljs$lang$maxFixedArity = 2;


net.cgrand.xforms.into_rf = (function net$cgrand$xforms$into_rf(to){
if((((!((to == null))))?(((((to.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === to.cljs$core$IEditableCollection$))))?true:(((!to.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,to):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,to))){
if(cljs.core.map_QMARK_(to)){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45480 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45480 = (function (to,meta45481){
this.to = to;
this.meta45481 = meta45481;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45482,meta45481__$1){
var self__ = this;
var _45482__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45480(self__.to,meta45481__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms45480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45482){
var self__ = this;
var _45482__$1 = this;
return self__.meta45481;
});

net.cgrand.xforms.t_net$cgrand$xforms45480.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45480.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms45480.prototype.call = (function() {
var G__45915 = null;
var G__45915__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _45479 = self____$1;
return cljs.core.transient$(self__.to);
});
var G__45915__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _45479 = self____$1;
return cljs.core.persistent_BANG_(acc);
});
var G__45915__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _45479 = self____$1;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
var G__45915__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _45479 = self____$1;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,v);
});
G__45915 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__45915__1.call(this,self__);
case 2:
return G__45915__2.call(this,self__,acc);
case 3:
return G__45915__3.call(this,self__,acc,k);
case 4:
return G__45915__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__45915.cljs$core$IFn$_invoke$arity$1 = G__45915__1;
G__45915.cljs$core$IFn$_invoke$arity$2 = G__45915__2;
G__45915.cljs$core$IFn$_invoke$arity$3 = G__45915__3;
G__45915.cljs$core$IFn$_invoke$arity$4 = G__45915__4;
return G__45915;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms45480.prototype.apply = (function (self__,args45483){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45483)));
});

net.cgrand.xforms.t_net$cgrand$xforms45480.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _45479 = this;
return cljs.core.transient$(self__.to);
});

net.cgrand.xforms.t_net$cgrand$xforms45480.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _45479 = this;
return cljs.core.persistent_BANG_(acc);
});

net.cgrand.xforms.t_net$cgrand$xforms45480.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
var self__ = this;
var _45479 = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});

net.cgrand.xforms.t_net$cgrand$xforms45480.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _45479 = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,k,v);
});

net.cgrand.xforms.t_net$cgrand$xforms45480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta45481","meta45481",-1385734326,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms45480.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45480.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45480";

net.cgrand.xforms.t_net$cgrand$xforms45480.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45480");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45480.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45480 = (function net$cgrand$xforms$into_rf_$___GT_t_net$cgrand$xforms45480(to__$1,meta45481){
return (new net.cgrand.xforms.t_net$cgrand$xforms45480(to__$1,meta45481));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45480(to,null));
} else {
return (function() {
var G__45917 = null;
var G__45917__0 = (function (){
return cljs.core.transient$(to);
});
var G__45917__1 = (function (acc){
return cljs.core.persistent_BANG_(acc);
});
var G__45917__2 = (function (acc,x){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__45917 = function(acc,x){
switch(arguments.length){
case 0:
return G__45917__0.call(this);
case 1:
return G__45917__1.call(this,acc);
case 2:
return G__45917__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45917.cljs$core$IFn$_invoke$arity$0 = G__45917__0;
G__45917.cljs$core$IFn$_invoke$arity$1 = G__45917__1;
G__45917.cljs$core$IFn$_invoke$arity$2 = G__45917__2;
return G__45917;
})()
}
} else {
if(cljs.core.map_QMARK_(to)){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45491 = (function (to,meta45492){
this.to = to;
this.meta45492 = meta45492;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45493,meta45492__$1){
var self__ = this;
var _45493__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45491(self__.to,meta45492__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms45491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45493){
var self__ = this;
var _45493__$1 = this;
return self__.meta45492;
});

net.cgrand.xforms.t_net$cgrand$xforms45491.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45491.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms45491.prototype.call = (function() {
var G__45920 = null;
var G__45920__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _45490 = self____$1;
return self__.to;
});
var G__45920__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _45490 = self____$1;
return acc;
});
var G__45920__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _45490 = self____$1;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
});
var G__45920__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _45490 = self____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
});
G__45920 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__45920__1.call(this,self__);
case 2:
return G__45920__2.call(this,self__,acc);
case 3:
return G__45920__3.call(this,self__,acc,k);
case 4:
return G__45920__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__45920.cljs$core$IFn$_invoke$arity$1 = G__45920__1;
G__45920.cljs$core$IFn$_invoke$arity$2 = G__45920__2;
G__45920.cljs$core$IFn$_invoke$arity$3 = G__45920__3;
G__45920.cljs$core$IFn$_invoke$arity$4 = G__45920__4;
return G__45920;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms45491.prototype.apply = (function (self__,args45495){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45495)));
});

net.cgrand.xforms.t_net$cgrand$xforms45491.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _45490 = this;
return self__.to;
});

net.cgrand.xforms.t_net$cgrand$xforms45491.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _45490 = this;
return acc;
});

net.cgrand.xforms.t_net$cgrand$xforms45491.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,x){
var self__ = this;
var _45490 = this;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
});

net.cgrand.xforms.t_net$cgrand$xforms45491.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _45490 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,v);
});

net.cgrand.xforms.t_net$cgrand$xforms45491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta45492","meta45492",734095855,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms45491.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45491.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45491";

net.cgrand.xforms.t_net$cgrand$xforms45491.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45491");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45491.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45491 = (function net$cgrand$xforms$into_rf_$___GT_t_net$cgrand$xforms45491(to__$1,meta45492){
return (new net.cgrand.xforms.t_net$cgrand$xforms45491(to__$1,meta45492));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45491(to,null));
} else {
return (function() {
var G__45924 = null;
var G__45924__0 = (function (){
return to;
});
var G__45924__1 = (function (acc){
return acc;
});
var G__45924__2 = (function (acc,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__45924 = function(acc,x){
switch(arguments.length){
case 0:
return G__45924__0.call(this);
case 1:
return G__45924__1.call(this,acc);
case 2:
return G__45924__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45924.cljs$core$IFn$_invoke$arity$0 = G__45924__0;
G__45924.cljs$core$IFn$_invoke$arity$1 = G__45924__1;
G__45924.cljs$core$IFn$_invoke$arity$2 = G__45924__2;
return G__45924;
})()

}
}
});

/**
 * Like clojure.core/into but with a 1-arg arity returning a transducer which accumulate every input in a collection and outputs only the accumulated collection.
 */
net.cgrand.xforms.into = (function net$cgrand$xforms$into(var_args){
var G__45499 = arguments.length;
switch (G__45499) {
case 1:
return net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1 = (function (to){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.into_rf(to));
});

net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3(to,cljs.core.identity,from);
});

net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
var rf = (function (){var G__45500 = net.cgrand.xforms.into_rf(to);
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__45500) : xform.call(null,G__45500));
})();
var temp__5455__auto__ = (function (){var and__4120__auto__ = cljs.core.map_QMARK_(from);
if(and__4120__auto__){
var and__4120__auto____$1 = net.cgrand.xforms.kvreducible_QMARK_(from);
if(and__4120__auto____$1){
return net.cgrand.xforms.some_kvrf(rf);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var rf__$1 = temp__5455__auto__;
var G__45501 = cljs.core.reduce_kv(rf__$1,(rf__$1.cljs$core$IFn$_invoke$arity$0 ? rf__$1.cljs$core$IFn$_invoke$arity$0() : rf__$1.call(null)),from);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__45501) : rf__$1.call(null,G__45501));
} else {
var G__45502 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,(rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null)),from);
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__45502) : rf.call(null,G__45502));
}
});

net.cgrand.xforms.into.cljs$lang$maxFixedArity = 3;


net.cgrand.xforms.without_rf = (function net$cgrand$xforms$without_rf(from){
if((((!((from == null))))?(((((from.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === from.cljs$core$IEditableCollection$))))?true:(((!from.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,from):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IEditableCollection,from))){
if(cljs.core.map_QMARK_(from)){
return (function() {
var G__45929 = null;
var G__45929__0 = (function (){
return cljs.core.transient$(from);
});
var G__45929__1 = (function (acc){
return cljs.core.persistent_BANG_(acc);
});
var G__45929__2 = (function (acc,x){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__45929 = function(acc,x){
switch(arguments.length){
case 0:
return G__45929__0.call(this);
case 1:
return G__45929__1.call(this,acc);
case 2:
return G__45929__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45929.cljs$core$IFn$_invoke$arity$0 = G__45929__0;
G__45929.cljs$core$IFn$_invoke$arity$1 = G__45929__1;
G__45929.cljs$core$IFn$_invoke$arity$2 = G__45929__2;
return G__45929;
})()
} else {
return (function() {
var G__45930 = null;
var G__45930__0 = (function (){
return cljs.core.transient$(from);
});
var G__45930__1 = (function (acc){
return cljs.core.persistent_BANG_(acc);
});
var G__45930__2 = (function (acc,x){
return cljs.core.disj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__45930 = function(acc,x){
switch(arguments.length){
case 0:
return G__45930__0.call(this);
case 1:
return G__45930__1.call(this,acc);
case 2:
return G__45930__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45930.cljs$core$IFn$_invoke$arity$0 = G__45930__0;
G__45930.cljs$core$IFn$_invoke$arity$1 = G__45930__1;
G__45930.cljs$core$IFn$_invoke$arity$2 = G__45930__2;
return G__45930;
})()
}
} else {
if(cljs.core.map_QMARK_(from)){
return (function() {
var G__45931 = null;
var G__45931__0 = (function (){
return from;
});
var G__45931__1 = (function (acc){
return acc;
});
var G__45931__2 = (function (acc,x){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__45931 = function(acc,x){
switch(arguments.length){
case 0:
return G__45931__0.call(this);
case 1:
return G__45931__1.call(this,acc);
case 2:
return G__45931__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45931.cljs$core$IFn$_invoke$arity$0 = G__45931__0;
G__45931.cljs$core$IFn$_invoke$arity$1 = G__45931__1;
G__45931.cljs$core$IFn$_invoke$arity$2 = G__45931__2;
return G__45931;
})()
} else {
return (function() {
var G__45932 = null;
var G__45932__0 = (function (){
return from;
});
var G__45932__1 = (function (acc){
return acc;
});
var G__45932__2 = (function (acc,x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(acc,x);
});
G__45932 = function(acc,x){
switch(arguments.length){
case 0:
return G__45932__0.call(this);
case 1:
return G__45932__1.call(this,acc);
case 2:
return G__45932__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45932.cljs$core$IFn$_invoke$arity$0 = G__45932__0;
G__45932.cljs$core$IFn$_invoke$arity$1 = G__45932__1;
G__45932.cljs$core$IFn$_invoke$arity$2 = G__45932__2;
return G__45932;
})()

}
}
});

/**
 * The opposite of x/into: dissociate or disjoin from the target.
 */
net.cgrand.xforms.without = (function net$cgrand$xforms$without(var_args){
var G__45505 = arguments.length;
switch (G__45505) {
case 1:
return net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$1 = (function (target){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.without_rf(target));
});

net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$2 = (function (target,keys){
return net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$3(target,cljs.core.identity,keys);
});

net.cgrand.xforms.without.cljs$core$IFn$_invoke$arity$3 = (function (target,xform,keys){
var rf = (function (){var G__45507 = net.cgrand.xforms.without_rf(target);
return (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(G__45507) : xform.call(null,G__45507));
})();
var temp__5455__auto__ = (function (){var and__4120__auto__ = cljs.core.map_QMARK_(keys);
if(and__4120__auto__){
var and__4120__auto____$1 = net.cgrand.xforms.kvreducible_QMARK_(keys);
if(and__4120__auto____$1){
return net.cgrand.xforms.some_kvrf(rf);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var rf__$1 = temp__5455__auto__;
var G__45508 = cljs.core.reduce_kv(rf__$1,(rf__$1.cljs$core$IFn$_invoke$arity$0 ? rf__$1.cljs$core$IFn$_invoke$arity$0() : rf__$1.call(null)),keys);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__45508) : rf__$1.call(null,G__45508));
} else {
var G__45509 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,(rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null)),keys);
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__45509) : rf.call(null,G__45509));
}
});

net.cgrand.xforms.without.cljs$lang$maxFixedArity = 3;


net.cgrand.xforms.minimum = (function net$cgrand$xforms$minimum(var_args){
var G__45511 = arguments.length;
switch (G__45511) {
case 1:
return net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$1 = (function (comparator){
return net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$2(comparator,null);
});

net.cgrand.xforms.minimum.cljs$core$IFn$_invoke$arity$2 = (function (comparator,absolute_maximum){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.minimum.cljs$core$IFn$_invoke$arity$2(comparator,absolute_maximum));
});

net.cgrand.xforms.minimum.cljs$lang$maxFixedArity = 2;


net.cgrand.xforms.maximum = (function net$cgrand$xforms$maximum(var_args){
var G__45515 = arguments.length;
switch (G__45515) {
case 1:
return net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$1 = (function (comparator){
return net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$2(comparator,null);
});

net.cgrand.xforms.maximum.cljs$core$IFn$_invoke$arity$2 = (function (comparator,absolute_minimum){
return net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.maximum.cljs$core$IFn$_invoke$arity$2(comparator,absolute_minimum));
});

net.cgrand.xforms.maximum.cljs$lang$maxFixedArity = 2;


net.cgrand.xforms.min = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.min);

net.cgrand.xforms.max = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.max);

/**
 * When used as a value, it's an aggregating transducer that concatenates input values
 * into a single output value. 
 * When used as a function of two args (xform and coll) it's a transducing context that
 * concatenates all values in a string.
 */
net.cgrand.xforms.str = (function net$cgrand$xforms$str(var_args){
var G__45522 = arguments.length;
switch (G__45522) {
case 1:
return net.cgrand.xforms.str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.str.cljs$core$IFn$_invoke$arity$1 = (function (rf){
var fexpr__45525 = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.str);
return (fexpr__45525.cljs$core$IFn$_invoke$arity$1 ? fexpr__45525.cljs$core$IFn$_invoke$arity$1(rf) : fexpr__45525.call(null,rf));
});

net.cgrand.xforms.str.cljs$core$IFn$_invoke$arity$2 = (function (xform,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,net.cgrand.xforms.rfs.str,coll);
});

net.cgrand.xforms.str.cljs$lang$maxFixedArity = 2;


/**
 * Transducer. Adds open as the first item, and close as the last. Optionally inserts delim between each input item.
 */
net.cgrand.xforms.wrap = (function net$cgrand$xforms$wrap(var_args){
var G__45527 = arguments.length;
switch (G__45527) {
case 2:
return net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$2 = (function (open,close){
return (function (rf){
var vrf = cljs.core.volatile_BANG_(null);
cljs.core.vreset_BANG_(vrf,((function (vrf){
return (function (acc,x){
var acc__$1 = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,open) : rf.call(null,acc,open));
cljs.core.vreset_BANG_(vrf,rf);

if(cljs.core.reduced_QMARK_(acc__$1)){
return acc__$1;
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc__$1,x) : rf.call(null,acc__$1,x));
}
});})(vrf))
);

return ((function (vrf){
return (function() {
var G__45953 = null;
var G__45953__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__45953__1 = (function (acc){
var G__45534 = cljs.core.unreduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,close) : rf.call(null,acc,close)));
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__45534) : rf.call(null,G__45534));
});
var G__45953__2 = (function (acc,x){
var fexpr__45535 = cljs.core.deref(vrf);
return (fexpr__45535.cljs$core$IFn$_invoke$arity$2 ? fexpr__45535.cljs$core$IFn$_invoke$arity$2(acc,x) : fexpr__45535.call(null,acc,x));
});
G__45953 = function(acc,x){
switch(arguments.length){
case 0:
return G__45953__0.call(this);
case 1:
return G__45953__1.call(this,acc);
case 2:
return G__45953__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45953.cljs$core$IFn$_invoke$arity$0 = G__45953__0;
G__45953.cljs$core$IFn$_invoke$arity$1 = G__45953__1;
G__45953.cljs$core$IFn$_invoke$arity$2 = G__45953__2;
return G__45953;
})()
;})(vrf))
});
});

net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$3 = (function (open,close,delim){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(delim),net.cgrand.xforms.wrap.cljs$core$IFn$_invoke$arity$2(open,close));
});

net.cgrand.xforms.wrap.cljs$lang$maxFixedArity = 3;


net.cgrand.xforms.vals = (function net$cgrand$xforms$vals(rf){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45537 = (function (rf,meta45538){
this.rf = rf;
this.meta45538 = meta45538;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45539,meta45538__$1){
var self__ = this;
var _45539__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45537(self__.rf,meta45538__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms45537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45539){
var self__ = this;
var _45539__$1 = this;
return self__.meta45538;
});

net.cgrand.xforms.t_net$cgrand$xforms45537.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45537.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms45537.prototype.call = (function() {
var G__45960 = null;
var G__45960__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _45536 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__45960__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _45536 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});
var G__45960__3 = (function (self__,acc,p__45546){
var self__ = this;
var vec__45547 = p__45546;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45547,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45547,(1),null);
var self____$1 = this;
var _45536 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,v) : self__.rf.call(null,acc,v));
});
var G__45960__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _45536 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,v) : self__.rf.call(null,acc,v));
});
G__45960 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__45960__1.call(this,self__);
case 2:
return G__45960__2.call(this,self__,acc);
case 3:
return G__45960__3.call(this,self__,acc,k);
case 4:
return G__45960__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__45960.cljs$core$IFn$_invoke$arity$1 = G__45960__1;
G__45960.cljs$core$IFn$_invoke$arity$2 = G__45960__2;
G__45960.cljs$core$IFn$_invoke$arity$3 = G__45960__3;
G__45960.cljs$core$IFn$_invoke$arity$4 = G__45960__4;
return G__45960;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms45537.prototype.apply = (function (self__,args45540){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45540)));
});

net.cgrand.xforms.t_net$cgrand$xforms45537.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,p__45550){
var self__ = this;
var vec__45551 = p__45550;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45551,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45551,(1),null);
var _45536 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,v) : self__.rf.call(null,acc,v));
});

net.cgrand.xforms.t_net$cgrand$xforms45537.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _45536 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});

net.cgrand.xforms.t_net$cgrand$xforms45537.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _45536 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});

net.cgrand.xforms.t_net$cgrand$xforms45537.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _45536 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,v) : self__.rf.call(null,acc,v));
});

net.cgrand.xforms.t_net$cgrand$xforms45537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"meta45538","meta45538",-1784964478,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms45537.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45537.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45537";

net.cgrand.xforms.t_net$cgrand$xforms45537.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45537");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45537.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45537 = (function net$cgrand$xforms$vals_$___GT_t_net$cgrand$xforms45537(rf__$1,meta45538){
return (new net.cgrand.xforms.t_net$cgrand$xforms45537(rf__$1,meta45538));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45537(rf,null));
});

net.cgrand.xforms.keys = (function net$cgrand$xforms$keys(rf){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45555 = (function (rf,meta45556){
this.rf = rf;
this.meta45556 = meta45556;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45557,meta45556__$1){
var self__ = this;
var _45557__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45555(self__.rf,meta45556__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms45555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45557){
var self__ = this;
var _45557__$1 = this;
return self__.meta45556;
});

net.cgrand.xforms.t_net$cgrand$xforms45555.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45555.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms45555.prototype.call = (function() {
var G__45969 = null;
var G__45969__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _45554 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__45969__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _45554 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});
var G__45969__3 = (function (self__,acc,p__45563){
var self__ = this;
var vec__45564 = p__45563;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45564,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45564,(1),null);
var self____$1 = this;
var _45554 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,k) : self__.rf.call(null,acc,k));
});
var G__45969__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _45554 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,k) : self__.rf.call(null,acc,k));
});
G__45969 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__45969__1.call(this,self__);
case 2:
return G__45969__2.call(this,self__,acc);
case 3:
return G__45969__3.call(this,self__,acc,k);
case 4:
return G__45969__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__45969.cljs$core$IFn$_invoke$arity$1 = G__45969__1;
G__45969.cljs$core$IFn$_invoke$arity$2 = G__45969__2;
G__45969.cljs$core$IFn$_invoke$arity$3 = G__45969__3;
G__45969.cljs$core$IFn$_invoke$arity$4 = G__45969__4;
return G__45969;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms45555.prototype.apply = (function (self__,args45558){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45558)));
});

net.cgrand.xforms.t_net$cgrand$xforms45555.prototype.cljs$core$IFn$_invoke$arity$2 = (function (acc,p__45569){
var self__ = this;
var vec__45571 = p__45569;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45571,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45571,(1),null);
var _45554 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,k) : self__.rf.call(null,acc,k));
});

net.cgrand.xforms.t_net$cgrand$xforms45555.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _45554 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});

net.cgrand.xforms.t_net$cgrand$xforms45555.prototype.cljs$core$IFn$_invoke$arity$1 = (function (acc){
var self__ = this;
var _45554 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(acc) : self__.rf.call(null,acc));
});

net.cgrand.xforms.t_net$cgrand$xforms45555.prototype.cljs$core$IFn$_invoke$arity$3 = (function (acc,k,v){
var self__ = this;
var _45554 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,k) : self__.rf.call(null,acc,k));
});

net.cgrand.xforms.t_net$cgrand$xforms45555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"meta45556","meta45556",-1408377932,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms45555.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45555.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45555";

net.cgrand.xforms.t_net$cgrand$xforms45555.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45555");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45555.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45555 = (function net$cgrand$xforms$keys_$___GT_t_net$cgrand$xforms45555(rf__$1,meta45556){
return (new net.cgrand.xforms.t_net$cgrand$xforms45555(rf__$1,meta45556));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45555(rf,null));
});

net.cgrand.xforms.key_SINGLEQUOTE_ = (function net$cgrand$xforms$key_SINGLEQUOTE_(kv){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kv,(0));
});

net.cgrand.xforms.val_SINGLEQUOTE_ = (function net$cgrand$xforms$val_SINGLEQUOTE_(kv){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(kv,(1));
});

/**
 * The noop reducing function
 */
net.cgrand.xforms.nop_rf = (function net$cgrand$xforms$nop_rf(var_args){
var G__45578 = arguments.length;
switch (G__45578) {
case 1:
return net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$1 = (function (acc){
return acc;
});

net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$2 = (function (acc,_){
return acc;
});

net.cgrand.xforms.nop_rf.cljs$core$IFn$_invoke$arity$3 = (function (acc,_,___$1){
return acc;
});

net.cgrand.xforms.nop_rf.cljs$lang$maxFixedArity = 3;


/**
 * Returns a multiplexable reducing function (doesn't init or complete the uderlying rf, wraps reduced -- like preserving-reduced)
 */
net.cgrand.xforms.multiplexable = (function net$cgrand$xforms$multiplexable(rf){
var rf__$1 = net.cgrand.xforms.ensure_kvrf(rf);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45582 = (function (rf,meta45583){
this.rf = rf;
this.meta45583 = meta45583;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf__$1){
return (function (_45584,meta45583__$1){
var self__ = this;
var _45584__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45582(self__.rf,meta45583__$1));
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf__$1){
return (function (_45584){
var self__ = this;
var _45584__$1 = this;
return self__.meta45583;
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45582.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45582.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf__$1){
return (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45582.prototype.call = ((function (rf__$1){
return (function() {
var G__45985 = null;
var G__45985__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _45581 = self____$1;
return null;
});
var G__45985__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _45581 = self____$1;
return acc;
});
var G__45985__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _45581 = self____$1;
var acc__$1 = (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.reduced(acc__$1);
} else {
return acc__$1;
}
});
var G__45985__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _45581 = self____$1;
var acc__$1 = (self__.rf.cljs$core$IFn$_invoke$arity$3 ? self__.rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : self__.rf.call(null,acc,k,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.reduced(acc__$1);
} else {
return acc__$1;
}
});
G__45985 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__45985__1.call(this,self__);
case 2:
return G__45985__2.call(this,self__,acc);
case 3:
return G__45985__3.call(this,self__,acc,k);
case 4:
return G__45985__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__45985.cljs$core$IFn$_invoke$arity$1 = G__45985__1;
G__45985.cljs$core$IFn$_invoke$arity$2 = G__45985__2;
G__45985.cljs$core$IFn$_invoke$arity$3 = G__45985__3;
G__45985.cljs$core$IFn$_invoke$arity$4 = G__45985__4;
return G__45985;
})()
;})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45582.prototype.apply = ((function (rf__$1){
return (function (self__,args45585){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45585)));
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45582.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf__$1){
return (function (){
var self__ = this;
var _45581 = this;
return null;
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45582.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf__$1){
return (function (acc){
var self__ = this;
var _45581 = this;
return acc;
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45582.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf__$1){
return (function (acc,x){
var self__ = this;
var _45581 = this;
var acc__$1 = (self__.rf.cljs$core$IFn$_invoke$arity$2 ? self__.rf.cljs$core$IFn$_invoke$arity$2(acc,x) : self__.rf.call(null,acc,x));
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.reduced(acc__$1);
} else {
return acc__$1;
}
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45582.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf__$1){
return (function (acc,k,v){
var self__ = this;
var _45581 = this;
var acc__$1 = (self__.rf.cljs$core$IFn$_invoke$arity$3 ? self__.rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : self__.rf.call(null,acc,k,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
return cljs.core.reduced(acc__$1);
} else {
return acc__$1;
}
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45582.getBasis = ((function (rf__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"meta45583","meta45583",-93964360,null)], null);
});})(rf__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45582.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45582.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45582";

net.cgrand.xforms.t_net$cgrand$xforms45582.cljs$lang$ctorPrWriter = ((function (rf__$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45582");
});})(rf__$1))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45582.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45582 = ((function (rf__$1){
return (function net$cgrand$xforms$multiplexable_$___GT_t_net$cgrand$xforms45582(rf__$2,meta45583){
return (new net.cgrand.xforms.t_net$cgrand$xforms45582(rf__$2,meta45583));
});})(rf__$1))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45582(rf__$1,null));
});

/**
 * Returns a transducer which partitions items according to kfn.
 * It applies the transform specified by xform to each partition.
 * Partitions contain the "value part" (as returned by vfn) of each item.
 * The resulting transformed items are wrapped back into a "pair" using the pair function.
 * Default values for kfn, vfn and pair are first, second (or identity if kfn is specified) and vector.
 */
net.cgrand.xforms.by_key = (function net$cgrand$xforms$by_key(var_args){
var G__45588 = arguments.length;
switch (G__45588) {
case 1:
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4(null,null,cljs.core.vector,xform);
});

net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$2 = (function (kfn,xform){
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4(kfn,cljs.core.identity,cljs.core.vector,xform);
});

net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$3 = (function (kfn,vfn,xform){
return net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4(kfn,vfn,cljs.core.vector,xform);
});

net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$4 = (function (kfn,vfn,pair,xform){
var pair__$1 = (((cljs.core.vector === pair))?new cljs.core.Keyword("net.cgrand.xforms","default","net.cgrand.xforms/default",-729285165):pair);
return ((function (pair__$1){
return (function (rf){
var mrf = net.cgrand.xforms.multiplexable(rf);
var make_rf = (((pair__$1 == null))?cljs.core.constantly(mrf):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("net.cgrand.xforms","default","net.cgrand.xforms/default",-729285165),pair__$1))?((function (mrf,pair__$1){
return (function (k){
return ((function (mrf,pair__$1){
return (function() {
var G__46004 = null;
var G__46004__1 = (function (acc){
return acc;
});
var G__46004__2 = (function (acc,v){
return (mrf.cljs$core$IFn$_invoke$arity$3 ? mrf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : mrf.call(null,acc,k,v));
});
G__46004 = function(acc,v){
switch(arguments.length){
case 1:
return G__46004__1.call(this,acc);
case 2:
return G__46004__2.call(this,acc,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46004.cljs$core$IFn$_invoke$arity$1 = G__46004__1;
G__46004.cljs$core$IFn$_invoke$arity$2 = G__46004__2;
return G__46004;
})()
;})(mrf,pair__$1))
});})(mrf,pair__$1))
:((function (mrf,pair__$1){
return (function (k){
return ((function (mrf,pair__$1){
return (function() {
var G__46005 = null;
var G__46005__1 = (function (acc){
return acc;
});
var G__46005__2 = (function (acc,v){
var G__45589 = acc;
var G__45590 = (pair__$1.cljs$core$IFn$_invoke$arity$2 ? pair__$1.cljs$core$IFn$_invoke$arity$2(k,v) : pair__$1.call(null,k,v));
return (mrf.cljs$core$IFn$_invoke$arity$2 ? mrf.cljs$core$IFn$_invoke$arity$2(G__45589,G__45590) : mrf.call(null,G__45589,G__45590));
});
G__46005 = function(acc,v){
switch(arguments.length){
case 1:
return G__46005__1.call(this,acc);
case 2:
return G__46005__2.call(this,acc,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46005.cljs$core$IFn$_invoke$arity$1 = G__46005__1;
G__46005.cljs$core$IFn$_invoke$arity$2 = G__46005__2;
return G__46005;
})()
;})(mrf,pair__$1))
});})(mrf,pair__$1))

));
var m = cljs.core.volatile_BANG_(cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));
if((((kfn == null)) && ((vfn == null)))){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45593 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45593 = (function (kfn,vfn,pair,xform,rf,mrf,make_rf,m,meta45594){
this.kfn = kfn;
this.vfn = vfn;
this.pair = pair;
this.xform = xform;
this.rf = rf;
this.mrf = mrf;
this.make_rf = make_rf;
this.m = m;
this.meta45594 = meta45594;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mrf,make_rf,m,pair__$1){
return (function (_45595,meta45594__$1){
var self__ = this;
var _45595__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45593(self__.kfn,self__.vfn,self__.pair,self__.xform,self__.rf,self__.mrf,self__.make_rf,self__.m,meta45594__$1));
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mrf,make_rf,m,pair__$1){
return (function (_45595){
var self__ = this;
var _45595__$1 = this;
return self__.meta45594;
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45593.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45593.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (mrf,make_rf,m,pair__$1){
return (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45593.prototype.call = ((function (mrf,make_rf,m,pair__$1){
return (function() {
var G__46007 = null;
var G__46007__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var self = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__46007__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var v__44860__auto__ = cljs.core.deref(self__.m);
if((v__44860__auto__ === self__.m)){
return null;
} else {
cljs.core.vreset_BANG_(self__.m,self__.m);

var m__$1 = v__44860__auto__;
var G__45614 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (m__$1,v__44860__auto__,self,self____$1,mrf,make_rf,m,pair__$1){
return (function (acc__$1,krf){
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(acc__$1) : krf.call(null,acc__$1));
});})(m__$1,v__44860__auto__,self,self____$1,mrf,make_rf,m,pair__$1))
,acc,cljs.core.vals(cljs.core.persistent_BANG_(m__$1)));
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__45614) : self__.rf.call(null,G__45614));
}
});
var G__46007__3 = (function (self__,acc,p__45601){
var self__ = this;
var vec__45604 = p__45601;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45604,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45604,(1),null);
var self____$1 = this;
var self = self____$1;
var krf = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__45607 = (function (){var G__45608 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__45608) : self__.xform.call(null,G__45608));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__45607));

return G__45607;
}
})();
var acc__$1 = (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(acc,v) : krf.call(null,acc,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__45611 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__45611) : krf.call(null,G__45611));
}
} else {
return acc__$1;
}
});
var G__46007__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var krf = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__45617 = (function (){var G__45618 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__45618) : self__.xform.call(null,G__45618));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__45617));

return G__45617;
}
})();
var acc__$1 = (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(acc,v) : krf.call(null,acc,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__45619 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__45619) : krf.call(null,G__45619));
}
} else {
return acc__$1;
}
});
G__46007 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__46007__1.call(this,self__);
case 2:
return G__46007__2.call(this,self__,acc);
case 3:
return G__46007__3.call(this,self__,acc,k);
case 4:
return G__46007__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__46007.cljs$core$IFn$_invoke$arity$1 = G__46007__1;
G__46007.cljs$core$IFn$_invoke$arity$2 = G__46007__2;
G__46007.cljs$core$IFn$_invoke$arity$3 = G__46007__3;
G__46007.cljs$core$IFn$_invoke$arity$4 = G__46007__4;
return G__46007;
})()
;})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45593.prototype.apply = ((function (mrf,make_rf,m,pair__$1){
return (function (self__,args45598){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45598)));
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45593.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (mrf,make_rf,m,pair__$1){
return (function (acc,p__45620){
var self__ = this;
var vec__45621 = p__45620;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45621,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45621,(1),null);
var self = this;
var krf = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__45626 = (function (){var G__45627 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__45627) : self__.xform.call(null,G__45627));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__45626));

return G__45626;
}
})();
var acc__$1 = (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(acc,v) : krf.call(null,acc,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__45628 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__45628) : krf.call(null,G__45628));
}
} else {
return acc__$1;
}
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45593.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (mrf,make_rf,m,pair__$1){
return (function (){
var self__ = this;
var self = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45593.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (mrf,make_rf,m,pair__$1){
return (function (acc){
var self__ = this;
var self = this;
var v__44860__auto__ = cljs.core.deref(self__.m);
if((v__44860__auto__ === self__.m)){
return null;
} else {
cljs.core.vreset_BANG_(self__.m,self__.m);

var m__$1 = v__44860__auto__;
var G__45631 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (m__$1,v__44860__auto__,self,mrf,make_rf,m,pair__$1){
return (function (acc__$1,krf){
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(acc__$1) : krf.call(null,acc__$1));
});})(m__$1,v__44860__auto__,self,mrf,make_rf,m,pair__$1))
,acc,cljs.core.vals(cljs.core.persistent_BANG_(m__$1)));
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__45631) : self__.rf.call(null,G__45631));
}
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45593.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (mrf,make_rf,m,pair__$1){
return (function (acc,k,v){
var self__ = this;
var self = this;
var krf = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__45632 = (function (){var G__45633 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__45633) : self__.xform.call(null,G__45633));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__45632));

return G__45632;
}
})();
var acc__$1 = (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(acc,v) : krf.call(null,acc,v));
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__45635 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__45635) : krf.call(null,G__45635));
}
} else {
return acc__$1;
}
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45593.getBasis = ((function (mrf,make_rf,m,pair__$1){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"vfn","vfn",-868700079,null),new cljs.core.Symbol(null,"pair","pair",1193015215,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"make-rf","make-rf",44212345,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta45594","meta45594",-499447609,null)], null);
});})(mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45593.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45593.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45593";

net.cgrand.xforms.t_net$cgrand$xforms45593.cljs$lang$ctorPrWriter = ((function (mrf,make_rf,m,pair__$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45593");
});})(mrf,make_rf,m,pair__$1))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45593.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45593 = ((function (mrf,make_rf,m,pair__$1){
return (function net$cgrand$xforms$__GT_t_net$cgrand$xforms45593(kfn__$1,vfn__$1,pair__$2,xform__$1,rf__$1,mrf__$1,make_rf__$1,m__$1,meta45594){
return (new net.cgrand.xforms.t_net$cgrand$xforms45593(kfn__$1,vfn__$1,pair__$2,xform__$1,rf__$1,mrf__$1,make_rf__$1,m__$1,meta45594));
});})(mrf,make_rf,m,pair__$1))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45593(kfn,vfn,pair__$1,xform,rf,mrf,make_rf,m,null));
} else {
var kfn__$1 = (function (){var or__4131__auto__ = kfn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return net.cgrand.xforms.key_SINGLEQUOTE_;
}
})();
var vfn__$1 = (function (){var or__4131__auto__ = vfn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return net.cgrand.xforms.val_SINGLEQUOTE_;
}
})();
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45637 = (function (kfn,vfn,pair,xform,rf,mrf,make_rf,m,meta45638){
this.kfn = kfn;
this.vfn = vfn;
this.pair = pair;
this.xform = xform;
this.rf = rf;
this.mrf = mrf;
this.make_rf = make_rf;
this.m = m;
this.meta45638 = meta45638;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (_45639,meta45638__$1){
var self__ = this;
var _45639__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45637(self__.kfn,self__.vfn,self__.pair,self__.xform,self__.rf,self__.mrf,self__.make_rf,self__.m,meta45638__$1));
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (_45639){
var self__ = this;
var _45639__$1 = this;
return self__.meta45638;
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45637.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45637.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45637.prototype.call = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function() {
var G__46033 = null;
var G__46033__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var self = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__46033__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var v__44860__auto__ = cljs.core.deref(self__.m);
if((v__44860__auto__ === self__.m)){
return null;
} else {
cljs.core.vreset_BANG_(self__.m,self__.m);

var m__$1 = v__44860__auto__;
var G__45655 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (m__$1,v__44860__auto__,self,self____$1,kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc__$1,krf){
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(acc__$1) : krf.call(null,acc__$1));
});})(m__$1,v__44860__auto__,self,self____$1,kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
,acc,cljs.core.vals(cljs.core.persistent_BANG_(m__$1)));
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__45655) : self__.rf.call(null,G__45655));
}
});
var G__46033__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$1 ? self__.kfn.cljs$core$IFn$_invoke$arity$1(x) : self__.kfn.call(null,x));
var krf = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__45656 = (function (){var G__45657 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__45657) : self__.xform.call(null,G__45657));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__45656));

return G__45656;
}
})();
var acc__$1 = (function (){var G__45658 = acc;
var G__45659 = (self__.vfn.cljs$core$IFn$_invoke$arity$1 ? self__.vfn.cljs$core$IFn$_invoke$arity$1(x) : self__.vfn.call(null,x));
return (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(G__45658,G__45659) : krf.call(null,G__45658,G__45659));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__45662 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__45662) : krf.call(null,G__45662));
}
} else {
return acc__$1;
}
});
var G__46033__4 = (function (self__,acc,k__44857__auto__,v__44858__auto__){
var self__ = this;
var self____$1 = this;
var self = self____$1;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__44857__auto__,v__44858__auto__], null);
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$1 ? self__.kfn.cljs$core$IFn$_invoke$arity$1(x) : self__.kfn.call(null,x));
var krf = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__45645 = (function (){var G__45646 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__45646) : self__.xform.call(null,G__45646));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__45645));

return G__45645;
}
})();
var acc__$1 = (function (){var G__45647 = acc;
var G__45648 = (self__.vfn.cljs$core$IFn$_invoke$arity$1 ? self__.vfn.cljs$core$IFn$_invoke$arity$1(x) : self__.vfn.call(null,x));
return (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(G__45647,G__45648) : krf.call(null,G__45647,G__45648));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__45652 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__45652) : krf.call(null,G__45652));
}
} else {
return acc__$1;
}
});
G__46033 = function(self__,acc,k__44857__auto__,v__44858__auto__){
switch(arguments.length){
case 1:
return G__46033__1.call(this,self__);
case 2:
return G__46033__2.call(this,self__,acc);
case 3:
return G__46033__3.call(this,self__,acc,k__44857__auto__);
case 4:
return G__46033__4.call(this,self__,acc,k__44857__auto__,v__44858__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__46033.cljs$core$IFn$_invoke$arity$1 = G__46033__1;
G__46033.cljs$core$IFn$_invoke$arity$2 = G__46033__2;
G__46033.cljs$core$IFn$_invoke$arity$3 = G__46033__3;
G__46033.cljs$core$IFn$_invoke$arity$4 = G__46033__4;
return G__46033;
})()
;})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45637.prototype.apply = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (self__,args45642){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45642)));
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45637.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc,k__44857__auto__,v__44858__auto__){
var self__ = this;
var self = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__44857__auto__,v__44858__auto__], null);
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$1 ? self__.kfn.cljs$core$IFn$_invoke$arity$1(x) : self__.kfn.call(null,x));
var krf = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__45663 = (function (){var G__45664 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__45664) : self__.xform.call(null,G__45664));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__45663));

return G__45663;
}
})();
var acc__$1 = (function (){var G__45665 = acc;
var G__45666 = (self__.vfn.cljs$core$IFn$_invoke$arity$1 ? self__.vfn.cljs$core$IFn$_invoke$arity$1(x) : self__.vfn.call(null,x));
return (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(G__45665,G__45666) : krf.call(null,G__45665,G__45666));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__45667 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__45667) : krf.call(null,G__45667));
}
} else {
return acc__$1;
}
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45637.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (){
var self__ = this;
var self = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45637.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc){
var self__ = this;
var self = this;
var v__44860__auto__ = cljs.core.deref(self__.m);
if((v__44860__auto__ === self__.m)){
return null;
} else {
cljs.core.vreset_BANG_(self__.m,self__.m);

var m__$1 = v__44860__auto__;
var G__45670 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (m__$1,v__44860__auto__,self,kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc__$1,krf){
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(acc__$1) : krf.call(null,acc__$1));
});})(m__$1,v__44860__auto__,self,kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
,acc,cljs.core.vals(cljs.core.persistent_BANG_(m__$1)));
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__45670) : self__.rf.call(null,G__45670));
}
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45637.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (acc,x){
var self__ = this;
var self = this;
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$1 ? self__.kfn.cljs$core$IFn$_invoke$arity$1(x) : self__.kfn.call(null,x));
var krf = (function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.m),k);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__45671 = (function (){var G__45672 = (self__.make_rf.cljs$core$IFn$_invoke$arity$1 ? self__.make_rf.cljs$core$IFn$_invoke$arity$1(k) : self__.make_rf.call(null,k));
return (self__.xform.cljs$core$IFn$_invoke$arity$1 ? self__.xform.cljs$core$IFn$_invoke$arity$1(G__45672) : self__.xform.call(null,G__45672));
})();
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,G__45671));

return G__45671;
}
})();
var acc__$1 = (function (){var G__45673 = acc;
var G__45674 = (self__.vfn.cljs$core$IFn$_invoke$arity$1 ? self__.vfn.cljs$core$IFn$_invoke$arity$1(x) : self__.vfn.call(null,x));
return (krf.cljs$core$IFn$_invoke$arity$2 ? krf.cljs$core$IFn$_invoke$arity$2(G__45673,G__45674) : krf.call(null,G__45673,G__45674));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$1))){
cljs.core.vreset_BANG_(self__.m,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY));

return cljs.core.deref(acc__$1);
} else {
cljs.core._vreset_BANG_(self__.m,cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(self__.m),k,net.cgrand.xforms.nop_rf));

var G__45675 = cljs.core.deref(acc__$1);
return (krf.cljs$core$IFn$_invoke$arity$1 ? krf.cljs$core$IFn$_invoke$arity$1(G__45675) : krf.call(null,G__45675));
}
} else {
return acc__$1;
}
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45637.getBasis = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"vfn","vfn",-868700079,null),new cljs.core.Symbol(null,"pair","pair",1193015215,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"make-rf","make-rf",44212345,null),new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta45638","meta45638",-757973906,null)], null);
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

net.cgrand.xforms.t_net$cgrand$xforms45637.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45637.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45637";

net.cgrand.xforms.t_net$cgrand$xforms45637.cljs$lang$ctorPrWriter = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45637");
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45637.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45637 = ((function (kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1){
return (function net$cgrand$xforms$__GT_t_net$cgrand$xforms45637(kfn__$2,vfn__$2,pair__$2,xform__$1,rf__$1,mrf__$1,make_rf__$1,m__$1,meta45638){
return (new net.cgrand.xforms.t_net$cgrand$xforms45637(kfn__$2,vfn__$2,pair__$2,xform__$1,rf__$1,mrf__$1,make_rf__$1,m__$1,meta45638));
});})(kfn__$1,vfn__$1,mrf,make_rf,m,pair__$1))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45637(kfn__$1,vfn__$1,pair__$1,xform,rf,mrf,make_rf,m,null));
}
});
;})(pair__$1))
});

net.cgrand.xforms.by_key.cljs$lang$maxFixedArity = 4;


/**
 * A shorthand for the common case (comp (x/by-key ...) (x/into coll)).
 */
net.cgrand.xforms.into_by_key = (function net$cgrand$xforms$into_by_key(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46044 = arguments.length;
var i__4731__auto___46045 = (0);
while(true){
if((i__4731__auto___46045 < len__4730__auto___46044)){
args__4736__auto__.push((arguments[i__4731__auto___46045]));

var G__46046 = (i__4731__auto___46045 + (1));
i__4731__auto___46045 = G__46046;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return net.cgrand.xforms.into_by_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

net.cgrand.xforms.into_by_key.cljs$core$IFn$_invoke$arity$variadic = (function (coll,by_key_args){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(net.cgrand.xforms.by_key,by_key_args),net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(coll));
});

net.cgrand.xforms.into_by_key.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
net.cgrand.xforms.into_by_key.cljs$lang$applyTo = (function (seq45678){
var G__45679 = cljs.core.first(seq45678);
var seq45678__$1 = cljs.core.next(seq45678);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45679,seq45678__$1);
});


/**
 * Returns a partitioning transducer. Each partition is independently transformed using the xform transducer.
 */
net.cgrand.xforms.partition = (function net$cgrand$xforms$partition(var_args){
var G__45681 = arguments.length;
switch (G__45681) {
case 1:
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$1 = (function (n){
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3(n,n,net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
});

net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,step_or_xform){
if(cljs.core.fn_QMARK_(step_or_xform)){
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3(n,n,step_or_xform);
} else {
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3(n,step_or_xform,net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
}
});

net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,step,pad_or_xform){
if(cljs.core.fn_QMARK_(pad_or_xform)){
var xform = pad_or_xform;
return ((function (xform){
return (function (rf){
var mxrf = net.cgrand.xforms.multiplexable(rf);
var dq = (new goog.structs.Queue());
var barrier = cljs.core.volatile_BANG_(n);
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (mxrf,dq,barrier,xform){
return (function (p1__45405_SHARP_){
if((dq === p1__45405_SHARP_)){
return null;
} else {
return p1__45405_SHARP_;
}
});})(mxrf,dq,barrier,xform))
),xform);
return ((function (mxrf,dq,barrier,xform__$1,xform){
return (function() {
var G__46053 = null;
var G__46053__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46053__1 = (function (acc){
dq.clear();

return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__46053__2 = (function (acc,x){
var b = barrier.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(barrier.cljs$core$IDeref$_deref$arity$1(null) - (1)));
if((b < n)){
dq.enqueue((((x == null))?dq:x));
} else {
}

if((b === (0))){
var acc__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform__$1,mxrf,acc,dq.getValues());
var n__4607__auto___46054 = (function (){var x__4222__auto__ = n;
var y__4223__auto__ = step;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var __46055 = (0);
while(true){
if((__46055 < n__4607__auto___46054)){
dq.dequeue();

var G__46056 = (__46055 + (1));
__46055 = G__46056;
continue;
} else {
}
break;
}

barrier.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(barrier.cljs$core$IDeref$_deref$arity$1(null) + step));

return acc__$1;
} else {
return acc;
}
});
G__46053 = function(acc,x){
switch(arguments.length){
case 0:
return G__46053__0.call(this);
case 1:
return G__46053__1.call(this,acc);
case 2:
return G__46053__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46053.cljs$core$IFn$_invoke$arity$0 = G__46053__0;
G__46053.cljs$core$IFn$_invoke$arity$1 = G__46053__1;
G__46053.cljs$core$IFn$_invoke$arity$2 = G__46053__2;
return G__46053;
})()
;})(mxrf,dq,barrier,xform__$1,xform))
});
;})(xform))
} else {
return net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$4(n,step,pad_or_xform,net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
}
});

net.cgrand.xforms.partition.cljs$core$IFn$_invoke$arity$4 = (function (n,step,pad,xform){
return (function (rf){
var mxrf = net.cgrand.xforms.multiplexable(rf);
var dq = (new goog.structs.Queue());
var barrier = cljs.core.volatile_BANG_(n);
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (mxrf,dq,barrier){
return (function (p1__45406_SHARP_){
if((dq === p1__45406_SHARP_)){
return null;
} else {
return p1__45406_SHARP_;
}
});})(mxrf,dq,barrier))
),xform);
return ((function (mxrf,dq,barrier,xform__$1){
return (function() {
var G__46057 = null;
var G__46057__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46057__1 = (function (acc){
if((cljs.core.deref(barrier) < n)){
var xform__$2 = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.cat,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),xform__$1);
var acc__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform__$2,rf,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dq.getValues(),pad], null));
cljs.core.vreset_BANG_(barrier,n);

dq.clear();

return acc__$1;
} else {
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
}
});
var G__46057__2 = (function (acc,x){
var b = barrier.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(barrier.cljs$core$IDeref$_deref$arity$1(null) - (1)));
if((b < n)){
dq.enqueue((((x == null))?dq:x));
} else {
}

if((b === (0))){
var acc__$1 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform__$1,mxrf,acc,dq.getValues());
var n__4607__auto___46058 = (function (){var x__4222__auto__ = n;
var y__4223__auto__ = step;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var __46059 = (0);
while(true){
if((__46059 < n__4607__auto___46058)){
dq.dequeue();

var G__46060 = (__46059 + (1));
__46059 = G__46060;
continue;
} else {
}
break;
}

barrier.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(barrier.cljs$core$IDeref$_deref$arity$1(null) + step));

return acc__$1;
} else {
return acc;
}
});
G__46057 = function(acc,x){
switch(arguments.length){
case 0:
return G__46057__0.call(this);
case 1:
return G__46057__1.call(this,acc);
case 2:
return G__46057__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46057.cljs$core$IFn$_invoke$arity$0 = G__46057__0;
G__46057.cljs$core$IFn$_invoke$arity$1 = G__46057__1;
G__46057.cljs$core$IFn$_invoke$arity$2 = G__46057__2;
return G__46057;
})()
;})(mxrf,dq,barrier,xform__$1))
});
});

net.cgrand.xforms.partition.cljs$lang$maxFixedArity = 4;


net.cgrand.xforms.take_last = (function net$cgrand$xforms$take_last(n){
return (function (rf){
var dq = (new goog.structs.Queue());
return ((function (dq){
return (function() {
var G__46065 = null;
var G__46065__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46065__1 = (function (acc){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (dq){
return (function (p1__45407_SHARP_){
if((dq === p1__45407_SHARP_)){
return null;
} else {
return p1__45407_SHARP_;
}
});})(dq))
),rf,acc,dq.getValues());
});
var G__46065__2 = (function (acc,x){
dq.enqueue((((x == null))?dq:x));

if((n < dq.getCount())){
dq.dequeue();
} else {
}

return acc;
});
G__46065 = function(acc,x){
switch(arguments.length){
case 0:
return G__46065__0.call(this);
case 1:
return G__46065__1.call(this,acc);
case 2:
return G__46065__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46065.cljs$core$IFn$_invoke$arity$0 = G__46065__0;
G__46065.cljs$core$IFn$_invoke$arity$1 = G__46065__1;
G__46065.cljs$core$IFn$_invoke$arity$2 = G__46065__2;
return G__46065;
})()
;})(dq))
});
});

net.cgrand.xforms.drop_last = (function net$cgrand$xforms$drop_last(var_args){
var G__45691 = arguments.length;
switch (G__45691) {
case 0:
return net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$0 = (function (){
return net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$1((1));
});

net.cgrand.xforms.drop_last.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (rf){
var dq = (new goog.structs.Queue());
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (dq){
return (function (p1__45408_SHARP_){
if((dq === p1__45408_SHARP_)){
return null;
} else {
return p1__45408_SHARP_;
}
});})(dq))
);
var rf__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(rf) : xform.call(null,rf));
return ((function (dq,xform,rf__$1){
return (function() {
var G__46067 = null;
var G__46067__0 = (function (){
return (rf__$1.cljs$core$IFn$_invoke$arity$0 ? rf__$1.cljs$core$IFn$_invoke$arity$0() : rf__$1.call(null));
});
var G__46067__1 = (function (acc){
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(acc) : rf__$1.call(null,acc));
});
var G__46067__2 = (function (acc,x){
dq.enqueue((((x == null))?dq:x));

if((n < dq.getCount())){
var G__45692 = acc;
var G__45693 = dq.dequeue();
return (rf__$1.cljs$core$IFn$_invoke$arity$2 ? rf__$1.cljs$core$IFn$_invoke$arity$2(G__45692,G__45693) : rf__$1.call(null,G__45692,G__45693));
} else {
return acc;
}
});
G__46067 = function(acc,x){
switch(arguments.length){
case 0:
return G__46067__0.call(this);
case 1:
return G__46067__1.call(this,acc);
case 2:
return G__46067__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46067.cljs$core$IFn$_invoke$arity$0 = G__46067__0;
G__46067.cljs$core$IFn$_invoke$arity$1 = G__46067__1;
G__46067.cljs$core$IFn$_invoke$arity$2 = G__46067__2;
return G__46067;
})()
;})(dq,xform,rf__$1))
});
});

net.cgrand.xforms.drop_last.cljs$lang$maxFixedArity = 1;


net.cgrand.xforms.sort = (function net$cgrand$xforms$sort(var_args){
var G__45695 = arguments.length;
switch (G__45695) {
case 0:
return net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$0 = (function (){
return net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.compare);
});

net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$1 = (function (cmp){
return (function (rf){
var buf = [];
return ((function (buf){
return (function() {
var G__46069 = null;
var G__46069__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46069__1 = (function (acc){
var G__45698 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,acc,(function (){var G__45699 = buf;
G__45699.sort(cmp);

return G__45699;
})());
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__45698) : rf.call(null,G__45698));
});
var G__46069__2 = (function (acc,x){
buf.push(x);

return acc;
});
G__46069 = function(acc,x){
switch(arguments.length){
case 0:
return G__46069__0.call(this);
case 1:
return G__46069__1.call(this,acc);
case 2:
return G__46069__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46069.cljs$core$IFn$_invoke$arity$0 = G__46069__0;
G__46069.cljs$core$IFn$_invoke$arity$1 = G__46069__1;
G__46069.cljs$core$IFn$_invoke$arity$2 = G__46069__2;
return G__46069;
})()
;})(buf))
});
});

net.cgrand.xforms.sort.cljs$lang$maxFixedArity = 1;


net.cgrand.xforms.sort_by = (function net$cgrand$xforms$sort_by(var_args){
var G__45702 = arguments.length;
switch (G__45702) {
case 1:
return net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$1 = (function (kfn){
return net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$2(kfn,cljs.core.compare);
});

net.cgrand.xforms.sort_by.cljs$core$IFn$_invoke$arity$2 = (function (kfn,cmp){
return net.cgrand.xforms.sort.cljs$core$IFn$_invoke$arity$1((function (a,b){
var G__45705 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(a) : kfn.call(null,a));
var G__45706 = (kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(b) : kfn.call(null,b));
return (cmp.cljs$core$IFn$_invoke$arity$2 ? cmp.cljs$core$IFn$_invoke$arity$2(G__45705,G__45706) : cmp.call(null,G__45705,G__45706));
}));
});

net.cgrand.xforms.sort_by.cljs$lang$maxFixedArity = 2;


/**
 * Transducer version of reductions. There's a difference in behavior when init is not provided: (f) is used.
 * So x/reductions works like x/reduce or transduce, not like reduce and reductions when no init and 1-item input.
 */
net.cgrand.xforms.reductions = (function net$cgrand$xforms$reductions(var_args){
var G__45710 = arguments.length;
switch (G__45710) {
case 1:
return net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$1 = (function (f){
return net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$2(f,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
});

net.cgrand.xforms.reductions.cljs$core$IFn$_invoke$arity$2 = (function (f,init){
return (function (rf){
var prev = cljs.core.volatile_BANG_(null);
cljs.core.vreset_BANG_(prev,prev);

return ((function (prev){
return (function() {
var G__46072 = null;
var G__46072__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46072__1 = (function (acc){
if((cljs.core.deref(prev) === prev)){
var G__45713 = cljs.core.unreduced((rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,init) : rf.call(null,acc,init)));
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__45713) : rf.call(null,G__45713));
} else {
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
}
});
var G__46072__2 = (function (acc,x){
while(true){
if((cljs.core.deref(prev) === prev)){
var acc__$1 = (function (){var G__45714 = acc;
var G__45715 = cljs.core.vreset_BANG_(prev,init);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__45714,G__45715) : rf.call(null,G__45714,G__45715));
})();
if(cljs.core.reduced_QMARK_(acc__$1)){
return acc__$1;
} else {
var G__46073 = acc__$1;
var G__46074 = x;
acc = G__46073;
x = G__46074;
continue;
}
} else {
var curr = prev.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__45716 = prev.cljs$core$IDeref$_deref$arity$1(null);
var G__45717 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45716,G__45717) : f.call(null,G__45716,G__45717));
})());
if(cljs.core.reduced_QMARK_(curr)){
return cljs.core.ensure_reduced((function (){var G__45718 = acc;
var G__45719 = cljs.core.deref(curr);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__45718,G__45719) : rf.call(null,G__45718,G__45719));
})());
} else {
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,curr) : rf.call(null,acc,curr));
}
}
break;
}
});
G__46072 = function(acc,x){
switch(arguments.length){
case 0:
return G__46072__0.call(this);
case 1:
return G__46072__1.call(this,acc);
case 2:
return G__46072__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46072.cljs$core$IFn$_invoke$arity$0 = G__46072__0;
G__46072.cljs$core$IFn$_invoke$arity$1 = G__46072__1;
G__46072.cljs$core$IFn$_invoke$arity$2 = G__46072__2;
return G__46072;
})()
;})(prev))
});
});

net.cgrand.xforms.reductions.cljs$lang$maxFixedArity = 2;


net.cgrand.xforms.avg = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.avg);

net.cgrand.xforms.sd = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.sd);

/**
 * Returns a transducer which computes an accumulator over the last n items
 * using two functions: f and its inverse invf.
 * 
 * The accumulator is initialized with (f).
 * It is updated to (f (invf acc out) in) where "acc" is the current value,
 * "in" the new item entering the window, "out" the item exiting the window.
 * The value passed to the dowstream reducing function is (f acc) enabling acc to be
 * mutable and 1-arity f to project its state to a value.
 * 
 * If you don't want to see the accumulator until the window is full then you need to
 * use (drop (dec n)) to remove them.
 * 
 * If you don't have an inverse function, consider using partition and reduce: 
 * (x/partition 4 (x/reduce rf))
 */
net.cgrand.xforms.window = (function net$cgrand$xforms$window(n,f,invf){
return (function (rf){
var ring = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(n);
var vi = cljs.core.volatile_BANG_((- n));
var vwacc = cljs.core.volatile_BANG_((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
return ((function (ring,vi,vwacc){
return (function() {
var G__46075 = null;
var G__46075__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46075__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__46075__2 = (function (acc,x){
var i = cljs.core.deref(vi);
var wacc = cljs.core.deref(vwacc);
if((i < (0))){
(ring[(n + i)] = x);

cljs.core.vreset_BANG_(vi,(i + (1)));

var G__45726 = acc;
var G__45727 = (function (){var G__45728 = cljs.core.vreset_BANG_(vwacc,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(wacc,x) : f.call(null,wacc,x)));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45728) : f.call(null,G__45728));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__45726,G__45727) : rf.call(null,G__45726,G__45727));
} else {
var x_SINGLEQUOTE_ = (ring[i]);
(ring[i] = x);

cljs.core.vreset_BANG_(vi,(function (){var i__$1 = (i + (1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,i__$1)){
return (0);
} else {
return i__$1;
}
})());

var G__45729 = acc;
var G__45730 = (function (){var G__45731 = cljs.core.vreset_BANG_(vwacc,(function (){var G__45732 = (invf.cljs$core$IFn$_invoke$arity$2 ? invf.cljs$core$IFn$_invoke$arity$2(wacc,x_SINGLEQUOTE_) : invf.call(null,wacc,x_SINGLEQUOTE_));
var G__45733 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__45732,G__45733) : f.call(null,G__45732,G__45733));
})());
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45731) : f.call(null,G__45731));
})();
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__45729,G__45730) : rf.call(null,G__45729,G__45730));
}
});
G__46075 = function(acc,x){
switch(arguments.length){
case 0:
return G__46075__0.call(this);
case 1:
return G__46075__1.call(this,acc);
case 2:
return G__46075__2.call(this,acc,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46075.cljs$core$IFn$_invoke$arity$0 = G__46075__0;
G__46075.cljs$core$IFn$_invoke$arity$1 = G__46075__1;
G__46075.cljs$core$IFn$_invoke$arity$2 = G__46075__2;
return G__46075;
})()
;})(ring,vi,vwacc))
});
});

/**
 * Count the number of items. Either used directly as a transducer or invoked with two args
 * as a transducing context.
 */
net.cgrand.xforms.count = (function net$cgrand$xforms$count(var_args){
var G__45739 = arguments.length;
switch (G__45739) {
case 1:
return net.cgrand.xforms.count.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.count.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.count.cljs$core$IFn$_invoke$arity$1 = (function (rf){
var n = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return ((function (n){
return (function() {
var G__46083 = null;
var G__46083__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46083__1 = (function (acc){
var G__45740 = cljs.core.unreduced((function (){var G__45741 = acc;
var G__45742 = cljs.core.deref(n);
return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(G__45741,G__45742) : rf.call(null,G__45741,G__45742));
})());
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__45740) : rf.call(null,G__45740));
});
var G__46083__2 = (function (acc,_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(n,cljs.core.inc);

return acc;
});
G__46083 = function(acc,_){
switch(arguments.length){
case 0:
return G__46083__0.call(this);
case 1:
return G__46083__1.call(this,acc);
case 2:
return G__46083__2.call(this,acc,_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46083.cljs$core$IFn$_invoke$arity$0 = G__46083__0;
G__46083.cljs$core$IFn$_invoke$arity$1 = G__46083__1;
G__46083.cljs$core$IFn$_invoke$arity$2 = G__46083__2;
return G__46083;
})()
;})(n))
});

net.cgrand.xforms.count.cljs$core$IFn$_invoke$arity$2 = (function (xform,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,net.cgrand.xforms.count),net.cgrand.xforms.rfs.last,coll);
});

net.cgrand.xforms.count.cljs$lang$maxFixedArity = 2;


/**
 * Returns a transducer that runs several transducers (sepcified by xforms) in parallel.
 * If xforms is a map, values of the map are transducers and keys are used to tag each
 * transducer output:
 * => (into [] (x/multiplex [(map inc) (map dec)]) (range 3))
 * [1 -1 2 0 3 1] ; no map, no tag
 * => (into [] (x/multiplex {:up (map inc) :down (map dec)}) (range 3))
 * [[:up 1] [:down -1] [:up 2] [:down 0] [:up 3] [:down 1]]
 */
net.cgrand.xforms.multiplex = (function net$cgrand$xforms$multiplex(xforms){
return (function (rf){
var mrf = net.cgrand.xforms.multiplexable(net.cgrand.xforms.ensure_kvrf(rf));
var rfs = cljs.core.volatile_BANG_(((cljs.core.map_QMARK_(xforms))?net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,((function (mrf){
return (function (rf45746){
var rf45746__$1 = net.cgrand.xforms.ensure_kvrf(rf45746);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45749 = (function (xforms,rf,mrf,rf45746,meta45750){
this.xforms = xforms;
this.rf = rf;
this.mrf = mrf;
this.rf45746 = rf45746;
this.meta45750 = meta45750;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf45746__$1,mrf){
return (function (_45751,meta45750__$1){
var self__ = this;
var _45751__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45749(self__.xforms,self__.rf,self__.mrf,self__.rf45746,meta45750__$1));
});})(rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf45746__$1,mrf){
return (function (_45751){
var self__ = this;
var _45751__$1 = this;
return self__.meta45750;
});})(rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45749.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45749.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf45746__$1,mrf){
return (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});})(rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45749.prototype.call = ((function (rf45746__$1,mrf){
return (function() {
var G__46085 = null;
var G__46085__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _45748 = self____$1;
return (self__.rf45746.cljs$core$IFn$_invoke$arity$0 ? self__.rf45746.cljs$core$IFn$_invoke$arity$0() : self__.rf45746.call(null));
});
var G__46085__2 = (function (self__,acc45747){
var self__ = this;
var self____$1 = this;
var _45748 = self____$1;
return (self__.rf45746.cljs$core$IFn$_invoke$arity$1 ? self__.rf45746.cljs$core$IFn$_invoke$arity$1(acc45747) : self__.rf45746.call(null,acc45747));
});
var G__46085__3 = (function (self__,acc45747,p__45755){
var self__ = this;
var vec__45776 = p__45755;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45776,(0),null);
var xform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45776,(1),null);
var self____$1 = this;
var _45748 = self____$1;
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,((function (_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf){
return (function (rf45779){
var rf45779__$1 = net.cgrand.xforms.ensure_kvrf(rf45779);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45784 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45784 = (function (self__,rf45746,_45748,mrf,meta45750,rf45779,xform,rf,acc45747,p__45755,vec__45776,k,xforms,meta45785){
this.self__ = self__;
this.rf45746 = rf45746;
this._45748 = _45748;
this.mrf = mrf;
this.meta45750 = meta45750;
this.rf45779 = rf45779;
this.xform = xform;
this.rf = rf;
this.acc45747 = acc45747;
this.p__45755 = p__45755;
this.vec__45776 = vec__45776;
this.k = k;
this.xforms = xforms;
this.meta45785 = meta45785;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf){
return (function (_45786,meta45785__$1){
var self__ = this;
var _45786__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45784(self__.self__,self__.rf45746,self__._45748,self__.mrf,self__.meta45750,self__.rf45779,self__.xform,self__.rf,self__.acc45747,self__.p__45755,self__.vec__45776,self__.k,self__.xforms,meta45785__$1));
});})(rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45784.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf){
return (function (_45786){
var self__ = this;
var _45786__$1 = this;
return self__.meta45785;
});})(rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45784.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45784.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf){
return (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});})(rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45784.prototype.call = ((function (rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf){
return (function() {
var G__46087 = null;
var G__46087__1 = (function (self____$1){
var self__ = this;
var self____$2 = this;
var _45783 = self____$2;
return (self__.rf45779.cljs$core$IFn$_invoke$arity$0 ? self__.rf45779.cljs$core$IFn$_invoke$arity$0() : self__.rf45779.call(null));
});
var G__46087__2 = (function (self____$1,acc45780){
var self__ = this;
var self____$2 = this;
var _45783 = self____$2;
return (self__.rf45779.cljs$core$IFn$_invoke$arity$1 ? self__.rf45779.cljs$core$IFn$_invoke$arity$1(acc45780) : self__.rf45779.call(null,acc45780));
});
var G__46087__3 = (function (self____$1,acc45780,x){
var self__ = this;
var self____$2 = this;
var _45783 = self____$2;
var acc__44856__auto__ = (self__.rf45779.cljs$core$IFn$_invoke$arity$3 ? self__.rf45779.cljs$core$IFn$_invoke$arity$3(acc45780,self__.k,x) : self__.rf45779.call(null,acc45780,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});
var G__46087__4 = (function (self____$1,acc45780,k__44857__auto__,v__44858__auto__){
var self__ = this;
var self____$2 = this;
var _45783 = self____$2;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__44857__auto__,v__44858__auto__], null);
var acc__44856__auto__ = (self__.rf45779.cljs$core$IFn$_invoke$arity$3 ? self__.rf45779.cljs$core$IFn$_invoke$arity$3(acc45780,self__.k,x) : self__.rf45779.call(null,acc45780,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});
G__46087 = function(self____$1,acc45780,k__44857__auto__,v__44858__auto__){
switch(arguments.length){
case 1:
return G__46087__1.call(this,self____$1);
case 2:
return G__46087__2.call(this,self____$1,acc45780);
case 3:
return G__46087__3.call(this,self____$1,acc45780,k__44857__auto__);
case 4:
return G__46087__4.call(this,self____$1,acc45780,k__44857__auto__,v__44858__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__46087.cljs$core$IFn$_invoke$arity$1 = G__46087__1;
G__46087.cljs$core$IFn$_invoke$arity$2 = G__46087__2;
G__46087.cljs$core$IFn$_invoke$arity$3 = G__46087__3;
G__46087.cljs$core$IFn$_invoke$arity$4 = G__46087__4;
return G__46087;
})()
;})(rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45784.prototype.apply = ((function (rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf){
return (function (self____$1,args45787){
var self__ = this;
var self____$2 = this;
return self____$2.call.apply(self____$2,[self____$2].concat(cljs.core.aclone(args45787)));
});})(rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45784.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf){
return (function (acc45780,k__44857__auto__,v__44858__auto__){
var self__ = this;
var _45783 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__44857__auto__,v__44858__auto__], null);
var acc__44856__auto__ = (self__.rf45779.cljs$core$IFn$_invoke$arity$3 ? self__.rf45779.cljs$core$IFn$_invoke$arity$3(acc45780,self__.k,x) : self__.rf45779.call(null,acc45780,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});})(rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45784.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf){
return (function (){
var self__ = this;
var _45783 = this;
return (self__.rf45779.cljs$core$IFn$_invoke$arity$0 ? self__.rf45779.cljs$core$IFn$_invoke$arity$0() : self__.rf45779.call(null));
});})(rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45784.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf){
return (function (acc45780){
var self__ = this;
var _45783 = this;
return (self__.rf45779.cljs$core$IFn$_invoke$arity$1 ? self__.rf45779.cljs$core$IFn$_invoke$arity$1(acc45780) : self__.rf45779.call(null,acc45780));
});})(rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45784.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf){
return (function (acc45780,x){
var self__ = this;
var _45783 = this;
var acc__44856__auto__ = (self__.rf45779.cljs$core$IFn$_invoke$arity$3 ? self__.rf45779.cljs$core$IFn$_invoke$arity$3(acc45780,self__.k,x) : self__.rf45779.call(null,acc45780,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});})(rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45784.getBasis = ((function (rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("net.cgrand.xforms","t_net$cgrand$xforms45749","net.cgrand.xforms/t_net$cgrand$xforms45749",-1671336509,null)], null)),new cljs.core.Symbol(null,"rf45746","rf45746",1742053122,null),new cljs.core.Symbol(null,"_45748","_45748",787785956,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"meta45750","meta45750",-1463337849,null),new cljs.core.Symbol(null,"rf45779","rf45779",-129370873,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc45747","acc45747",1193206220,null),new cljs.core.Symbol(null,"p__45755","p__45755",1951335437,null),new cljs.core.Symbol(null,"vec__45776","vec__45776",-1874508912,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"meta45785","meta45785",-1096883926,null)], null);
});})(rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45784.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45784.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45784";

net.cgrand.xforms.t_net$cgrand$xforms45784.cljs$lang$ctorPrWriter = ((function (rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45784");
});})(rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45784.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45784 = ((function (rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms45784(self____$2,rf45746__$1,_45748__$1,mrf__$1,meta45750__$1,rf45779__$2,xform__$1,rf__$1,acc45747__$1,p__45755__$1,vec__45776__$1,k__$1,xforms__$1,meta45785){
return (new net.cgrand.xforms.t_net$cgrand$xforms45784(self____$2,rf45746__$1,_45748__$1,mrf__$1,meta45750__$1,rf45779__$2,xform__$1,rf__$1,acc45747__$1,p__45755__$1,vec__45776__$1,k__$1,xforms__$1,meta45785));
});})(rf45779__$1,_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45784(self____$1,self__.rf45746,_45748,self__.mrf,self__.meta45750,rf45779__$1,xform,self__.rf,acc45747,p__45755,vec__45776,k,self__.xforms,null));
});})(_45748,self____$1,vec__45776,k,xform,rf45746__$1,mrf))
);
var acc__44856__auto__ = (function (){var G__45788 = acc45747;
var G__45789 = k;
var G__45790 = (xform__$1.cljs$core$IFn$_invoke$arity$1 ? xform__$1.cljs$core$IFn$_invoke$arity$1(self__.mrf) : xform__$1.call(null,self__.mrf));
return (self__.rf45746.cljs$core$IFn$_invoke$arity$3 ? self__.rf45746.cljs$core$IFn$_invoke$arity$3(G__45788,G__45789,G__45790) : self__.rf45746.call(null,G__45788,G__45789,G__45790));
})();
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});
var G__46085__4 = (function (self__,acc45747,k,xform){
var self__ = this;
var self____$1 = this;
var _45748 = self____$1;
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,((function (_45748,self____$1,rf45746__$1,mrf){
return (function (rf45756){
var rf45756__$1 = net.cgrand.xforms.ensure_kvrf(rf45756);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45759 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45759 = (function (self__,rf45746,rf45756,_45748,mrf,meta45750,xform,rf,acc45747,k,xforms,meta45760){
this.self__ = self__;
this.rf45746 = rf45746;
this.rf45756 = rf45756;
this._45748 = _45748;
this.mrf = mrf;
this.meta45750 = meta45750;
this.xform = xform;
this.rf = rf;
this.acc45747 = acc45747;
this.k = k;
this.xforms = xforms;
this.meta45760 = meta45760;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf45756__$1,_45748,self____$1,rf45746__$1,mrf){
return (function (_45761,meta45760__$1){
var self__ = this;
var _45761__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45759(self__.self__,self__.rf45746,self__.rf45756,self__._45748,self__.mrf,self__.meta45750,self__.xform,self__.rf,self__.acc45747,self__.k,self__.xforms,meta45760__$1));
});})(rf45756__$1,_45748,self____$1,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45759.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf45756__$1,_45748,self____$1,rf45746__$1,mrf){
return (function (_45761){
var self__ = this;
var _45761__$1 = this;
return self__.meta45760;
});})(rf45756__$1,_45748,self____$1,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45759.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45759.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf45756__$1,_45748,self____$1,rf45746__$1,mrf){
return (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});})(rf45756__$1,_45748,self____$1,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45759.prototype.call = ((function (rf45756__$1,_45748,self____$1,rf45746__$1,mrf){
return (function() {
var G__46094 = null;
var G__46094__1 = (function (self____$1){
var self__ = this;
var self____$2 = this;
var _45758 = self____$2;
return (self__.rf45756.cljs$core$IFn$_invoke$arity$0 ? self__.rf45756.cljs$core$IFn$_invoke$arity$0() : self__.rf45756.call(null));
});
var G__46094__2 = (function (self____$1,acc45757){
var self__ = this;
var self____$2 = this;
var _45758 = self____$2;
return (self__.rf45756.cljs$core$IFn$_invoke$arity$1 ? self__.rf45756.cljs$core$IFn$_invoke$arity$1(acc45757) : self__.rf45756.call(null,acc45757));
});
var G__46094__3 = (function (self____$1,acc45757,x){
var self__ = this;
var self____$2 = this;
var _45758 = self____$2;
var acc__44856__auto__ = (self__.rf45756.cljs$core$IFn$_invoke$arity$3 ? self__.rf45756.cljs$core$IFn$_invoke$arity$3(acc45757,self__.k,x) : self__.rf45756.call(null,acc45757,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});
var G__46094__4 = (function (self____$1,acc45757,k__44857__auto__,v__44858__auto__){
var self__ = this;
var self____$2 = this;
var _45758 = self____$2;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__44857__auto__,v__44858__auto__], null);
var acc__44856__auto__ = (self__.rf45756.cljs$core$IFn$_invoke$arity$3 ? self__.rf45756.cljs$core$IFn$_invoke$arity$3(acc45757,self__.k,x) : self__.rf45756.call(null,acc45757,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});
G__46094 = function(self____$1,acc45757,k__44857__auto__,v__44858__auto__){
switch(arguments.length){
case 1:
return G__46094__1.call(this,self____$1);
case 2:
return G__46094__2.call(this,self____$1,acc45757);
case 3:
return G__46094__3.call(this,self____$1,acc45757,k__44857__auto__);
case 4:
return G__46094__4.call(this,self____$1,acc45757,k__44857__auto__,v__44858__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__46094.cljs$core$IFn$_invoke$arity$1 = G__46094__1;
G__46094.cljs$core$IFn$_invoke$arity$2 = G__46094__2;
G__46094.cljs$core$IFn$_invoke$arity$3 = G__46094__3;
G__46094.cljs$core$IFn$_invoke$arity$4 = G__46094__4;
return G__46094;
})()
;})(rf45756__$1,_45748,self____$1,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45759.prototype.apply = ((function (rf45756__$1,_45748,self____$1,rf45746__$1,mrf){
return (function (self____$1,args45762){
var self__ = this;
var self____$2 = this;
return self____$2.call.apply(self____$2,[self____$2].concat(cljs.core.aclone(args45762)));
});})(rf45756__$1,_45748,self____$1,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45759.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf45756__$1,_45748,self____$1,rf45746__$1,mrf){
return (function (acc45757,k__44857__auto__,v__44858__auto__){
var self__ = this;
var _45758 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__44857__auto__,v__44858__auto__], null);
var acc__44856__auto__ = (self__.rf45756.cljs$core$IFn$_invoke$arity$3 ? self__.rf45756.cljs$core$IFn$_invoke$arity$3(acc45757,self__.k,x) : self__.rf45756.call(null,acc45757,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});})(rf45756__$1,_45748,self____$1,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45759.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf45756__$1,_45748,self____$1,rf45746__$1,mrf){
return (function (){
var self__ = this;
var _45758 = this;
return (self__.rf45756.cljs$core$IFn$_invoke$arity$0 ? self__.rf45756.cljs$core$IFn$_invoke$arity$0() : self__.rf45756.call(null));
});})(rf45756__$1,_45748,self____$1,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45759.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf45756__$1,_45748,self____$1,rf45746__$1,mrf){
return (function (acc45757){
var self__ = this;
var _45758 = this;
return (self__.rf45756.cljs$core$IFn$_invoke$arity$1 ? self__.rf45756.cljs$core$IFn$_invoke$arity$1(acc45757) : self__.rf45756.call(null,acc45757));
});})(rf45756__$1,_45748,self____$1,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45759.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf45756__$1,_45748,self____$1,rf45746__$1,mrf){
return (function (acc45757,x){
var self__ = this;
var _45758 = this;
var acc__44856__auto__ = (self__.rf45756.cljs$core$IFn$_invoke$arity$3 ? self__.rf45756.cljs$core$IFn$_invoke$arity$3(acc45757,self__.k,x) : self__.rf45756.call(null,acc45757,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});})(rf45756__$1,_45748,self____$1,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45759.getBasis = ((function (rf45756__$1,_45748,self____$1,rf45746__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("net.cgrand.xforms","t_net$cgrand$xforms45749","net.cgrand.xforms/t_net$cgrand$xforms45749",-1671336509,null)], null)),new cljs.core.Symbol(null,"rf45746","rf45746",1742053122,null),new cljs.core.Symbol(null,"rf45756","rf45756",-1332846397,null),new cljs.core.Symbol(null,"_45748","_45748",787785956,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"meta45750","meta45750",-1463337849,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc45747","acc45747",1193206220,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"meta45760","meta45760",-136201002,null)], null);
});})(rf45756__$1,_45748,self____$1,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45759.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45759.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45759";

net.cgrand.xforms.t_net$cgrand$xforms45759.cljs$lang$ctorPrWriter = ((function (rf45756__$1,_45748,self____$1,rf45746__$1,mrf){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45759");
});})(rf45756__$1,_45748,self____$1,rf45746__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45759.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45759 = ((function (rf45756__$1,_45748,self____$1,rf45746__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms45759(self____$2,rf45746__$1,rf45756__$2,_45748__$1,mrf__$1,meta45750__$1,xform__$1,rf__$1,acc45747__$1,k__$1,xforms__$1,meta45760){
return (new net.cgrand.xforms.t_net$cgrand$xforms45759(self____$2,rf45746__$1,rf45756__$2,_45748__$1,mrf__$1,meta45750__$1,xform__$1,rf__$1,acc45747__$1,k__$1,xforms__$1,meta45760));
});})(rf45756__$1,_45748,self____$1,rf45746__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45759(self____$1,self__.rf45746,rf45756__$1,_45748,self__.mrf,self__.meta45750,xform,self__.rf,acc45747,k,self__.xforms,null));
});})(_45748,self____$1,rf45746__$1,mrf))
);
var acc__44856__auto__ = (function (){var G__45769 = acc45747;
var G__45770 = k;
var G__45771 = (xform__$1.cljs$core$IFn$_invoke$arity$1 ? xform__$1.cljs$core$IFn$_invoke$arity$1(self__.mrf) : xform__$1.call(null,self__.mrf));
return (self__.rf45746.cljs$core$IFn$_invoke$arity$3 ? self__.rf45746.cljs$core$IFn$_invoke$arity$3(G__45769,G__45770,G__45771) : self__.rf45746.call(null,G__45769,G__45770,G__45771));
})();
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});
G__46085 = function(self__,acc45747,k,xform){
switch(arguments.length){
case 1:
return G__46085__1.call(this,self__);
case 2:
return G__46085__2.call(this,self__,acc45747);
case 3:
return G__46085__3.call(this,self__,acc45747,k);
case 4:
return G__46085__4.call(this,self__,acc45747,k,xform);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__46085.cljs$core$IFn$_invoke$arity$1 = G__46085__1;
G__46085.cljs$core$IFn$_invoke$arity$2 = G__46085__2;
G__46085.cljs$core$IFn$_invoke$arity$3 = G__46085__3;
G__46085.cljs$core$IFn$_invoke$arity$4 = G__46085__4;
return G__46085;
})()
;})(rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45749.prototype.apply = ((function (rf45746__$1,mrf){
return (function (self__,args45754){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45754)));
});})(rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45749.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf45746__$1,mrf){
return (function (acc45747,k,xform){
var self__ = this;
var _45748 = this;
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,((function (_45748,rf45746__$1,mrf){
return (function (rf45795){
var rf45795__$1 = net.cgrand.xforms.ensure_kvrf(rf45795);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45800 = (function (rf45746,_45748,mrf,meta45750,xform,rf,acc45747,k,xforms,rf45795,meta45801){
this.rf45746 = rf45746;
this._45748 = _45748;
this.mrf = mrf;
this.meta45750 = meta45750;
this.xform = xform;
this.rf = rf;
this.acc45747 = acc45747;
this.k = k;
this.xforms = xforms;
this.rf45795 = rf45795;
this.meta45801 = meta45801;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf45795__$1,_45748,rf45746__$1,mrf){
return (function (_45802,meta45801__$1){
var self__ = this;
var _45802__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45800(self__.rf45746,self__._45748,self__.mrf,self__.meta45750,self__.xform,self__.rf,self__.acc45747,self__.k,self__.xforms,self__.rf45795,meta45801__$1));
});})(rf45795__$1,_45748,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45800.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf45795__$1,_45748,rf45746__$1,mrf){
return (function (_45802){
var self__ = this;
var _45802__$1 = this;
return self__.meta45801;
});})(rf45795__$1,_45748,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45800.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45800.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf45795__$1,_45748,rf45746__$1,mrf){
return (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});})(rf45795__$1,_45748,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45800.prototype.call = ((function (rf45795__$1,_45748,rf45746__$1,mrf){
return (function() {
var G__46103 = null;
var G__46103__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _45799 = self____$1;
return (self__.rf45795.cljs$core$IFn$_invoke$arity$0 ? self__.rf45795.cljs$core$IFn$_invoke$arity$0() : self__.rf45795.call(null));
});
var G__46103__2 = (function (self__,acc45796){
var self__ = this;
var self____$1 = this;
var _45799 = self____$1;
return (self__.rf45795.cljs$core$IFn$_invoke$arity$1 ? self__.rf45795.cljs$core$IFn$_invoke$arity$1(acc45796) : self__.rf45795.call(null,acc45796));
});
var G__46103__3 = (function (self__,acc45796,x){
var self__ = this;
var self____$1 = this;
var _45799 = self____$1;
var acc__44856__auto__ = (self__.rf45795.cljs$core$IFn$_invoke$arity$3 ? self__.rf45795.cljs$core$IFn$_invoke$arity$3(acc45796,self__.k,x) : self__.rf45795.call(null,acc45796,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});
var G__46103__4 = (function (self__,acc45796,k__44857__auto__,v__44858__auto__){
var self__ = this;
var self____$1 = this;
var _45799 = self____$1;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__44857__auto__,v__44858__auto__], null);
var acc__44856__auto__ = (self__.rf45795.cljs$core$IFn$_invoke$arity$3 ? self__.rf45795.cljs$core$IFn$_invoke$arity$3(acc45796,self__.k,x) : self__.rf45795.call(null,acc45796,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});
G__46103 = function(self__,acc45796,k__44857__auto__,v__44858__auto__){
switch(arguments.length){
case 1:
return G__46103__1.call(this,self__);
case 2:
return G__46103__2.call(this,self__,acc45796);
case 3:
return G__46103__3.call(this,self__,acc45796,k__44857__auto__);
case 4:
return G__46103__4.call(this,self__,acc45796,k__44857__auto__,v__44858__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__46103.cljs$core$IFn$_invoke$arity$1 = G__46103__1;
G__46103.cljs$core$IFn$_invoke$arity$2 = G__46103__2;
G__46103.cljs$core$IFn$_invoke$arity$3 = G__46103__3;
G__46103.cljs$core$IFn$_invoke$arity$4 = G__46103__4;
return G__46103;
})()
;})(rf45795__$1,_45748,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45800.prototype.apply = ((function (rf45795__$1,_45748,rf45746__$1,mrf){
return (function (self__,args45806){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45806)));
});})(rf45795__$1,_45748,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45800.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf45795__$1,_45748,rf45746__$1,mrf){
return (function (acc45796,k__44857__auto__,v__44858__auto__){
var self__ = this;
var _45799 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__44857__auto__,v__44858__auto__], null);
var acc__44856__auto__ = (self__.rf45795.cljs$core$IFn$_invoke$arity$3 ? self__.rf45795.cljs$core$IFn$_invoke$arity$3(acc45796,self__.k,x) : self__.rf45795.call(null,acc45796,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});})(rf45795__$1,_45748,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45800.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf45795__$1,_45748,rf45746__$1,mrf){
return (function (){
var self__ = this;
var _45799 = this;
return (self__.rf45795.cljs$core$IFn$_invoke$arity$0 ? self__.rf45795.cljs$core$IFn$_invoke$arity$0() : self__.rf45795.call(null));
});})(rf45795__$1,_45748,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45800.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf45795__$1,_45748,rf45746__$1,mrf){
return (function (acc45796){
var self__ = this;
var _45799 = this;
return (self__.rf45795.cljs$core$IFn$_invoke$arity$1 ? self__.rf45795.cljs$core$IFn$_invoke$arity$1(acc45796) : self__.rf45795.call(null,acc45796));
});})(rf45795__$1,_45748,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45800.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf45795__$1,_45748,rf45746__$1,mrf){
return (function (acc45796,x){
var self__ = this;
var _45799 = this;
var acc__44856__auto__ = (self__.rf45795.cljs$core$IFn$_invoke$arity$3 ? self__.rf45795.cljs$core$IFn$_invoke$arity$3(acc45796,self__.k,x) : self__.rf45795.call(null,acc45796,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});})(rf45795__$1,_45748,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45800.getBasis = ((function (rf45795__$1,_45748,rf45746__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rf45746","rf45746",1742053122,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_45748","_45748",787785956,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("net.cgrand.xforms","t_net$cgrand$xforms45749","net.cgrand.xforms/t_net$cgrand$xforms45749",-1671336509,null)], null)),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"meta45750","meta45750",-1463337849,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc45747","acc45747",1193206220,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"rf45795","rf45795",417959550,null),new cljs.core.Symbol(null,"meta45801","meta45801",46018842,null)], null);
});})(rf45795__$1,_45748,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45800.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45800.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45800";

net.cgrand.xforms.t_net$cgrand$xforms45800.cljs$lang$ctorPrWriter = ((function (rf45795__$1,_45748,rf45746__$1,mrf){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45800");
});})(rf45795__$1,_45748,rf45746__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45800.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45800 = ((function (rf45795__$1,_45748,rf45746__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms45800(rf45746__$1,_45748__$1,mrf__$1,meta45750__$1,xform__$1,rf__$1,acc45747__$1,k__$1,xforms__$1,rf45795__$2,meta45801){
return (new net.cgrand.xforms.t_net$cgrand$xforms45800(rf45746__$1,_45748__$1,mrf__$1,meta45750__$1,xform__$1,rf__$1,acc45747__$1,k__$1,xforms__$1,rf45795__$2,meta45801));
});})(rf45795__$1,_45748,rf45746__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45800(self__.rf45746,_45748,self__.mrf,self__.meta45750,xform,self__.rf,acc45747,k,self__.xforms,rf45795__$1,null));
});})(_45748,rf45746__$1,mrf))
);
var acc__44856__auto__ = (function (){var G__45814 = acc45747;
var G__45815 = k;
var G__45816 = (xform__$1.cljs$core$IFn$_invoke$arity$1 ? xform__$1.cljs$core$IFn$_invoke$arity$1(self__.mrf) : xform__$1.call(null,self__.mrf));
return (self__.rf45746.cljs$core$IFn$_invoke$arity$3 ? self__.rf45746.cljs$core$IFn$_invoke$arity$3(G__45814,G__45815,G__45816) : self__.rf45746.call(null,G__45814,G__45815,G__45816));
})();
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});})(rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45749.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf45746__$1,mrf){
return (function (){
var self__ = this;
var _45748 = this;
return (self__.rf45746.cljs$core$IFn$_invoke$arity$0 ? self__.rf45746.cljs$core$IFn$_invoke$arity$0() : self__.rf45746.call(null));
});})(rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45749.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf45746__$1,mrf){
return (function (acc45747){
var self__ = this;
var _45748 = this;
return (self__.rf45746.cljs$core$IFn$_invoke$arity$1 ? self__.rf45746.cljs$core$IFn$_invoke$arity$1(acc45747) : self__.rf45746.call(null,acc45747));
});})(rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45749.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf45746__$1,mrf){
return (function (acc45747,p__45817){
var self__ = this;
var vec__45818 = p__45817;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45818,(0),null);
var xform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45818,(1),null);
var _45748 = this;
var xform__$1 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,((function (_45748,vec__45818,k,xform,rf45746__$1,mrf){
return (function (rf45821){
var rf45821__$1 = net.cgrand.xforms.ensure_kvrf(rf45821);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45824 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45824 = (function (vec__45818,rf45746,p__45817,_45748,mrf,meta45750,xform,rf45821,rf,acc45747,k,xforms,meta45825){
this.vec__45818 = vec__45818;
this.rf45746 = rf45746;
this.p__45817 = p__45817;
this._45748 = _45748;
this.mrf = mrf;
this.meta45750 = meta45750;
this.xform = xform;
this.rf45821 = rf45821;
this.rf = rf;
this.acc45747 = acc45747;
this.k = k;
this.xforms = xforms;
this.meta45825 = meta45825;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf){
return (function (_45826,meta45825__$1){
var self__ = this;
var _45826__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45824(self__.vec__45818,self__.rf45746,self__.p__45817,self__._45748,self__.mrf,self__.meta45750,self__.xform,self__.rf45821,self__.rf,self__.acc45747,self__.k,self__.xforms,meta45825__$1));
});})(rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf){
return (function (_45826){
var self__ = this;
var _45826__$1 = this;
return self__.meta45825;
});})(rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45824.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45824.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf){
return (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});})(rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45824.prototype.call = ((function (rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf){
return (function() {
var G__46117 = null;
var G__46117__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _45823 = self____$1;
return (self__.rf45821.cljs$core$IFn$_invoke$arity$0 ? self__.rf45821.cljs$core$IFn$_invoke$arity$0() : self__.rf45821.call(null));
});
var G__46117__2 = (function (self__,acc45822){
var self__ = this;
var self____$1 = this;
var _45823 = self____$1;
return (self__.rf45821.cljs$core$IFn$_invoke$arity$1 ? self__.rf45821.cljs$core$IFn$_invoke$arity$1(acc45822) : self__.rf45821.call(null,acc45822));
});
var G__46117__3 = (function (self__,acc45822,x){
var self__ = this;
var self____$1 = this;
var _45823 = self____$1;
var acc__44856__auto__ = (self__.rf45821.cljs$core$IFn$_invoke$arity$3 ? self__.rf45821.cljs$core$IFn$_invoke$arity$3(acc45822,self__.k,x) : self__.rf45821.call(null,acc45822,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});
var G__46117__4 = (function (self__,acc45822,k__44857__auto__,v__44858__auto__){
var self__ = this;
var self____$1 = this;
var _45823 = self____$1;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__44857__auto__,v__44858__auto__], null);
var acc__44856__auto__ = (self__.rf45821.cljs$core$IFn$_invoke$arity$3 ? self__.rf45821.cljs$core$IFn$_invoke$arity$3(acc45822,self__.k,x) : self__.rf45821.call(null,acc45822,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});
G__46117 = function(self__,acc45822,k__44857__auto__,v__44858__auto__){
switch(arguments.length){
case 1:
return G__46117__1.call(this,self__);
case 2:
return G__46117__2.call(this,self__,acc45822);
case 3:
return G__46117__3.call(this,self__,acc45822,k__44857__auto__);
case 4:
return G__46117__4.call(this,self__,acc45822,k__44857__auto__,v__44858__auto__);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__46117.cljs$core$IFn$_invoke$arity$1 = G__46117__1;
G__46117.cljs$core$IFn$_invoke$arity$2 = G__46117__2;
G__46117.cljs$core$IFn$_invoke$arity$3 = G__46117__3;
G__46117.cljs$core$IFn$_invoke$arity$4 = G__46117__4;
return G__46117;
})()
;})(rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45824.prototype.apply = ((function (rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf){
return (function (self__,args45827){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45827)));
});})(rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45824.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf){
return (function (acc45822,k__44857__auto__,v__44858__auto__){
var self__ = this;
var _45823 = this;
var x = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__44857__auto__,v__44858__auto__], null);
var acc__44856__auto__ = (self__.rf45821.cljs$core$IFn$_invoke$arity$3 ? self__.rf45821.cljs$core$IFn$_invoke$arity$3(acc45822,self__.k,x) : self__.rf45821.call(null,acc45822,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});})(rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45824.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf){
return (function (){
var self__ = this;
var _45823 = this;
return (self__.rf45821.cljs$core$IFn$_invoke$arity$0 ? self__.rf45821.cljs$core$IFn$_invoke$arity$0() : self__.rf45821.call(null));
});})(rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45824.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf){
return (function (acc45822){
var self__ = this;
var _45823 = this;
return (self__.rf45821.cljs$core$IFn$_invoke$arity$1 ? self__.rf45821.cljs$core$IFn$_invoke$arity$1(acc45822) : self__.rf45821.call(null,acc45822));
});})(rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45824.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf){
return (function (acc45822,x){
var self__ = this;
var _45823 = this;
var acc__44856__auto__ = (self__.rf45821.cljs$core$IFn$_invoke$arity$3 ? self__.rf45821.cljs$core$IFn$_invoke$arity$3(acc45822,self__.k,x) : self__.rf45821.call(null,acc45822,self__.k,x));
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});})(rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45824.getBasis = ((function (rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__45818","vec__45818",-229045248,null),new cljs.core.Symbol(null,"rf45746","rf45746",1742053122,null),new cljs.core.Symbol(null,"p__45817","p__45817",-228098845,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_45748","_45748",787785956,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("net.cgrand.xforms","t_net$cgrand$xforms45749","net.cgrand.xforms/t_net$cgrand$xforms45749",-1671336509,null)], null)),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"meta45750","meta45750",-1463337849,null),new cljs.core.Symbol(null,"xform","xform",-85179481,null),new cljs.core.Symbol(null,"rf45821","rf45821",1041575016,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"acc45747","acc45747",1193206220,null),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"meta45825","meta45825",56709976,null)], null);
});})(rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45824.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45824.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45824";

net.cgrand.xforms.t_net$cgrand$xforms45824.cljs$lang$ctorPrWriter = ((function (rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45824");
});})(rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45824.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45824 = ((function (rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms45824(vec__45818__$1,rf45746__$1,p__45817__$1,_45748__$1,mrf__$1,meta45750__$1,xform__$1,rf45821__$2,rf__$1,acc45747__$1,k__$1,xforms__$1,meta45825){
return (new net.cgrand.xforms.t_net$cgrand$xforms45824(vec__45818__$1,rf45746__$1,p__45817__$1,_45748__$1,mrf__$1,meta45750__$1,xform__$1,rf45821__$2,rf__$1,acc45747__$1,k__$1,xforms__$1,meta45825));
});})(rf45821__$1,_45748,vec__45818,k,xform,rf45746__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45824(vec__45818,self__.rf45746,p__45817,_45748,self__.mrf,self__.meta45750,xform,rf45821__$1,self__.rf,acc45747,k,self__.xforms,null));
});})(_45748,vec__45818,k,xform,rf45746__$1,mrf))
);
var acc__44856__auto__ = (function (){var G__45832 = acc45747;
var G__45833 = k;
var G__45834 = (xform__$1.cljs$core$IFn$_invoke$arity$1 ? xform__$1.cljs$core$IFn$_invoke$arity$1(self__.mrf) : xform__$1.call(null,self__.mrf));
return (self__.rf45746.cljs$core$IFn$_invoke$arity$3 ? self__.rf45746.cljs$core$IFn$_invoke$arity$3(G__45832,G__45833,G__45834) : self__.rf45746.call(null,G__45832,G__45833,G__45834));
})();
if(cljs.core.reduced_QMARK_(acc__44856__auto__)){
return acc__44856__auto__;
} else {
return acc__44856__auto__;
}
});})(rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45749.getBasis = ((function (rf45746__$1,mrf){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"rf45746","rf45746",1742053122,null),new cljs.core.Symbol(null,"meta45750","meta45750",-1463337849,null)], null);
});})(rf45746__$1,mrf))
;

net.cgrand.xforms.t_net$cgrand$xforms45749.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45749.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45749";

net.cgrand.xforms.t_net$cgrand$xforms45749.cljs$lang$ctorPrWriter = ((function (rf45746__$1,mrf){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45749");
});})(rf45746__$1,mrf))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45749.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45749 = ((function (rf45746__$1,mrf){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms45749(xforms__$1,rf__$1,mrf__$1,rf45746__$2,meta45750){
return (new net.cgrand.xforms.t_net$cgrand$xforms45749(xforms__$1,rf__$1,mrf__$1,rf45746__$2,meta45750));
});})(rf45746__$1,mrf))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45749(xforms,rf,mrf,rf45746__$1,null));
});})(mrf))
,xforms):net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (mrf){
return (function (p1__45415_SHARP_){
return (p1__45415_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45415_SHARP_.cljs$core$IFn$_invoke$arity$1(mrf) : p1__45415_SHARP_.call(null,mrf));
});})(mrf))
),xforms)));
var invoke_rfs = ((cljs.core.map_QMARK_(xforms))?((function (mrf,rfs){
return (function (acc,invoke){
return cljs.core.reduce_kv(((function (mrf,rfs){
return (function (acc__$1,tag,rf__$1){
var acc__$2 = (invoke.cljs$core$IFn$_invoke$arity$2 ? invoke.cljs$core$IFn$_invoke$arity$2(rf__$1,acc__$1) : invoke.call(null,rf__$1,acc__$1));
if(cljs.core.reduced_QMARK_(acc__$2)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$2))){
cljs.core.vreset_BANG_(rfs,null);

return acc__$2;
} else {
rfs.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(rfs.cljs$core$IDeref$_deref$arity$1(null),tag));

var G__45837 = cljs.core.deref(acc__$2);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__45837) : rf__$1.call(null,G__45837));
}
} else {
return acc__$2;
}
});})(mrf,rfs))
,acc,cljs.core.deref(rfs));
});})(mrf,rfs))
:((function (mrf,rfs){
return (function (acc,invoke){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (mrf,rfs){
return (function (acc__$1,rf__$1){
var acc__$2 = (invoke.cljs$core$IFn$_invoke$arity$2 ? invoke.cljs$core$IFn$_invoke$arity$2(rf__$1,acc__$1) : invoke.call(null,rf__$1,acc__$1));
if(cljs.core.reduced_QMARK_(acc__$2)){
if(cljs.core.reduced_QMARK_(cljs.core.deref(acc__$2))){
cljs.core.vreset_BANG_(rfs,null);

return acc__$2;
} else {
rfs.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(rfs.cljs$core$IDeref$_deref$arity$1(null),rf__$1));

var G__45838 = cljs.core.deref(acc__$2);
return (rf__$1.cljs$core$IFn$_invoke$arity$1 ? rf__$1.cljs$core$IFn$_invoke$arity$1(G__45838) : rf__$1.call(null,G__45838));
}
} else {
return acc__$2;
}
});})(mrf,rfs))
,acc,cljs.core.deref(rfs));
});})(mrf,rfs))
);
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45841 = (function (xforms,rf,mrf,rfs,invoke_rfs,meta45842){
this.xforms = xforms;
this.rf = rf;
this.mrf = mrf;
this.rfs = rfs;
this.invoke_rfs = invoke_rfs;
this.meta45842 = meta45842;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mrf,rfs,invoke_rfs){
return (function (_45843,meta45842__$1){
var self__ = this;
var _45843__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45841(self__.xforms,self__.rf,self__.mrf,self__.rfs,self__.invoke_rfs,meta45842__$1));
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms45841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mrf,rfs,invoke_rfs){
return (function (_45843){
var self__ = this;
var _45843__$1 = this;
return self__.meta45842;
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms45841.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45841.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = ((function (mrf,rfs,invoke_rfs){
return (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms45841.prototype.call = ((function (mrf,rfs,invoke_rfs){
return (function() {
var G__46133 = null;
var G__46133__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _45839 = self____$1;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});
var G__46133__2 = (function (self__,acc){
var self__ = this;
var self____$1 = this;
var _45839 = self____$1;
var G__45847 = (function (){var G__45848 = acc;
var G__45849 = ((function (G__45848,_45839,self____$1,mrf,rfs,invoke_rfs){
return (function (p1__45416_SHARP_,p2__45417_SHARP_){
return (p1__45416_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45416_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__45417_SHARP_) : p1__45416_SHARP_.call(null,p2__45417_SHARP_));
});})(G__45848,_45839,self____$1,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__45848,G__45849) : self__.invoke_rfs.call(null,G__45848,G__45849));
})();
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__45847) : self__.rf.call(null,G__45847));
});
var G__46133__3 = (function (self__,acc,x){
var self__ = this;
var self____$1 = this;
var _45839 = self____$1;
var acc__$1 = (function (){var G__45850 = acc;
var G__45851 = ((function (G__45850,_45839,self____$1,mrf,rfs,invoke_rfs){
return (function (p1__45418_SHARP_,p2__45419_SHARP_){
return (p1__45418_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__45418_SHARP_.cljs$core$IFn$_invoke$arity$2(p2__45419_SHARP_,x) : p1__45418_SHARP_.call(null,p2__45419_SHARP_,x));
});})(G__45850,_45839,self____$1,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__45850,G__45851) : self__.invoke_rfs.call(null,G__45850,G__45851));
})();
if((cljs.core.count(cljs.core.deref(self__.rfs)) === (0))){
return cljs.core.ensure_reduced(acc__$1);
} else {
return acc__$1;
}
});
var G__46133__4 = (function (self__,acc,k,v){
var self__ = this;
var self____$1 = this;
var _45839 = self____$1;
var acc__$1 = (function (){var G__45852 = acc;
var G__45853 = ((function (G__45852,_45839,self____$1,mrf,rfs,invoke_rfs){
return (function (p1__45420_SHARP_,p2__45421_SHARP_){
return (p1__45420_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__45420_SHARP_.cljs$core$IFn$_invoke$arity$3(p2__45421_SHARP_,k,v) : p1__45420_SHARP_.call(null,p2__45421_SHARP_,k,v));
});})(G__45852,_45839,self____$1,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__45852,G__45853) : self__.invoke_rfs.call(null,G__45852,G__45853));
})();
if((cljs.core.count(cljs.core.deref(self__.rfs)) === (0))){
return cljs.core.ensure_reduced(acc__$1);
} else {
return acc__$1;
}
});
G__46133 = function(self__,acc,k,v){
switch(arguments.length){
case 1:
return G__46133__1.call(this,self__);
case 2:
return G__46133__2.call(this,self__,acc);
case 3:
return G__46133__3.call(this,self__,acc,k);
case 4:
return G__46133__4.call(this,self__,acc,k,v);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__46133.cljs$core$IFn$_invoke$arity$1 = G__46133__1;
G__46133.cljs$core$IFn$_invoke$arity$2 = G__46133__2;
G__46133.cljs$core$IFn$_invoke$arity$3 = G__46133__3;
G__46133.cljs$core$IFn$_invoke$arity$4 = G__46133__4;
return G__46133;
})()
;})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms45841.prototype.apply = ((function (mrf,rfs,invoke_rfs){
return (function (self__,args45844){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45844)));
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms45841.prototype.cljs$core$IFn$_invoke$arity$0 = ((function (mrf,rfs,invoke_rfs){
return (function (){
var self__ = this;
var _45839 = this;
return (self__.rf.cljs$core$IFn$_invoke$arity$0 ? self__.rf.cljs$core$IFn$_invoke$arity$0() : self__.rf.call(null));
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms45841.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (mrf,rfs,invoke_rfs){
return (function (acc){
var self__ = this;
var _45839 = this;
var G__45854 = (function (){var G__45855 = acc;
var G__45856 = ((function (G__45855,_45839,mrf,rfs,invoke_rfs){
return (function (p1__45416_SHARP_,p2__45417_SHARP_){
return (p1__45416_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45416_SHARP_.cljs$core$IFn$_invoke$arity$1(p2__45417_SHARP_) : p1__45416_SHARP_.call(null,p2__45417_SHARP_));
});})(G__45855,_45839,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__45855,G__45856) : self__.invoke_rfs.call(null,G__45855,G__45856));
})();
return (self__.rf.cljs$core$IFn$_invoke$arity$1 ? self__.rf.cljs$core$IFn$_invoke$arity$1(G__45854) : self__.rf.call(null,G__45854));
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms45841.prototype.cljs$core$IFn$_invoke$arity$2 = ((function (mrf,rfs,invoke_rfs){
return (function (acc,x){
var self__ = this;
var _45839 = this;
var acc__$1 = (function (){var G__45857 = acc;
var G__45858 = ((function (G__45857,_45839,mrf,rfs,invoke_rfs){
return (function (p1__45418_SHARP_,p2__45419_SHARP_){
return (p1__45418_SHARP_.cljs$core$IFn$_invoke$arity$2 ? p1__45418_SHARP_.cljs$core$IFn$_invoke$arity$2(p2__45419_SHARP_,x) : p1__45418_SHARP_.call(null,p2__45419_SHARP_,x));
});})(G__45857,_45839,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__45857,G__45858) : self__.invoke_rfs.call(null,G__45857,G__45858));
})();
if((cljs.core.count(cljs.core.deref(self__.rfs)) === (0))){
return cljs.core.ensure_reduced(acc__$1);
} else {
return acc__$1;
}
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms45841.prototype.cljs$core$IFn$_invoke$arity$3 = ((function (mrf,rfs,invoke_rfs){
return (function (acc,k,v){
var self__ = this;
var _45839 = this;
var acc__$1 = (function (){var G__45859 = acc;
var G__45860 = ((function (G__45859,_45839,mrf,rfs,invoke_rfs){
return (function (p1__45420_SHARP_,p2__45421_SHARP_){
return (p1__45420_SHARP_.cljs$core$IFn$_invoke$arity$3 ? p1__45420_SHARP_.cljs$core$IFn$_invoke$arity$3(p2__45421_SHARP_,k,v) : p1__45420_SHARP_.call(null,p2__45421_SHARP_,k,v));
});})(G__45859,_45839,mrf,rfs,invoke_rfs))
;
return (self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2 ? self__.invoke_rfs.cljs$core$IFn$_invoke$arity$2(G__45859,G__45860) : self__.invoke_rfs.call(null,G__45859,G__45860));
})();
if((cljs.core.count(cljs.core.deref(self__.rfs)) === (0))){
return cljs.core.ensure_reduced(acc__$1);
} else {
return acc__$1;
}
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms45841.getBasis = ((function (mrf,rfs,invoke_rfs){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xforms","xforms",2065058426,null),new cljs.core.Symbol(null,"rf","rf",-651557526,null),new cljs.core.Symbol(null,"mrf","mrf",-887894298,null),new cljs.core.Symbol(null,"rfs","rfs",-70956169,null),new cljs.core.Symbol(null,"invoke-rfs","invoke-rfs",1691366545,null),new cljs.core.Symbol(null,"meta45842","meta45842",1452333972,null)], null);
});})(mrf,rfs,invoke_rfs))
;

net.cgrand.xforms.t_net$cgrand$xforms45841.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45841.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45841";

net.cgrand.xforms.t_net$cgrand$xforms45841.cljs$lang$ctorPrWriter = ((function (mrf,rfs,invoke_rfs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45841");
});})(mrf,rfs,invoke_rfs))
;

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45841.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45841 = ((function (mrf,rfs,invoke_rfs){
return (function net$cgrand$xforms$multiplex_$___GT_t_net$cgrand$xforms45841(xforms__$1,rf__$1,mrf__$1,rfs__$1,invoke_rfs__$1,meta45842){
return (new net.cgrand.xforms.t_net$cgrand$xforms45841(xforms__$1,rf__$1,mrf__$1,rfs__$1,invoke_rfs__$1,meta45842));
});})(mrf,rfs,invoke_rfs))
;

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45841(xforms,rf,mrf,rfs,invoke_rfs,null));
});
});

net.cgrand.xforms.last = net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1(net.cgrand.xforms.rfs.last);

/**
 * Process coll through the specified xform and returns the first local true value.
 */
net.cgrand.xforms.some = (function net$cgrand$xforms$some(xform,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,net.cgrand.xforms.rfs.some,null,coll);
});

/**
 * Performs several transductions over coll at once. xforms-map can be a map or a sequential collection.
 * When xforms-map is a map, returns a map with the same keyset as xforms-map.
 * When xforms-map is a sequential collection returns a vector of same length as xforms-map.
 * Returns a transducer when coll is omitted.
 */
net.cgrand.xforms.transjuxt = (function net$cgrand$xforms$transjuxt(var_args){
var G__45863 = arguments.length;
switch (G__45863) {
case 1:
return net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$1 = (function (xforms_map){
var collect_xform = ((cljs.core.map_QMARK_(xforms_map))?net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY):net.cgrand.xforms.reduce.cljs$core$IFn$_invoke$arity$1((function (){
if((typeof net !== 'undefined') && (typeof net.cgrand !== 'undefined') && (typeof net.cgrand.xforms !== 'undefined') && (typeof net.cgrand.xforms.t_net$cgrand$xforms45867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {net.cgrand.xforms.KvRfable}
 * @implements {cljs.core.IWithMeta}
*/
net.cgrand.xforms.t_net$cgrand$xforms45867 = (function (xforms_map,meta45868){
this.xforms_map = xforms_map;
this.meta45868 = meta45868;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
net.cgrand.xforms.t_net$cgrand$xforms45867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45869,meta45868__$1){
var self__ = this;
var _45869__$1 = this;
return (new net.cgrand.xforms.t_net$cgrand$xforms45867(self__.xforms_map,meta45868__$1));
});

net.cgrand.xforms.t_net$cgrand$xforms45867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45869){
var self__ = this;
var _45869__$1 = this;
return self__.meta45868;
});

net.cgrand.xforms.t_net$cgrand$xforms45867.prototype.net$cgrand$xforms$KvRfable$ = cljs.core.PROTOCOL_SENTINEL;

net.cgrand.xforms.t_net$cgrand$xforms45867.prototype.net$cgrand$xforms$KvRfable$some_kvrf$arity$1 = (function (this__44859__auto__){
var self__ = this;
var this__44859__auto____$1 = this;
return this__44859__auto____$1;
});

net.cgrand.xforms.t_net$cgrand$xforms45867.prototype.call = (function() {
var G__46149 = null;
var G__46149__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var _45866 = self____$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_45866,self____$1){
return (function (v,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,null);
});})(_45866,self____$1))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.xforms_map)));
});
var G__46149__2 = (function (self__,v){
var self__ = this;
var self____$1 = this;
var _45866 = self____$1;
return cljs.core.persistent_BANG_(v);
});
var G__46149__3 = (function (self__,v,p__45872){
var self__ = this;
var vec__45873 = p__45872;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45873,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45873,(1),null);
var self____$1 = this;
var _45866 = self____$1;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,i,x);
});
var G__46149__4 = (function (self__,v,i,x){
var self__ = this;
var self____$1 = this;
var _45866 = self____$1;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,i,x);
});
G__46149 = function(self__,v,i,x){
switch(arguments.length){
case 1:
return G__46149__1.call(this,self__);
case 2:
return G__46149__2.call(this,self__,v);
case 3:
return G__46149__3.call(this,self__,v,i);
case 4:
return G__46149__4.call(this,self__,v,i,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__46149.cljs$core$IFn$_invoke$arity$1 = G__46149__1;
G__46149.cljs$core$IFn$_invoke$arity$2 = G__46149__2;
G__46149.cljs$core$IFn$_invoke$arity$3 = G__46149__3;
G__46149.cljs$core$IFn$_invoke$arity$4 = G__46149__4;
return G__46149;
})()
;

net.cgrand.xforms.t_net$cgrand$xforms45867.prototype.apply = (function (self__,args45870){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args45870)));
});

net.cgrand.xforms.t_net$cgrand$xforms45867.prototype.cljs$core$IFn$_invoke$arity$2 = (function (v,p__45878){
var self__ = this;
var vec__45879 = p__45878;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45879,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45879,(1),null);
var _45866 = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,i,x);
});

net.cgrand.xforms.t_net$cgrand$xforms45867.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var _45866 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (_45866){
return (function (v,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,null);
});})(_45866))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.xforms_map)));
});

net.cgrand.xforms.t_net$cgrand$xforms45867.prototype.cljs$core$IFn$_invoke$arity$1 = (function (v){
var self__ = this;
var _45866 = this;
return cljs.core.persistent_BANG_(v);
});

net.cgrand.xforms.t_net$cgrand$xforms45867.prototype.cljs$core$IFn$_invoke$arity$3 = (function (v,i,x){
var self__ = this;
var _45866 = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(v,i,x);
});

net.cgrand.xforms.t_net$cgrand$xforms45867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"xforms-map","xforms-map",-1836515838,null),new cljs.core.Symbol(null,"meta45868","meta45868",780263372,null)], null);
});

net.cgrand.xforms.t_net$cgrand$xforms45867.cljs$lang$type = true;

net.cgrand.xforms.t_net$cgrand$xforms45867.cljs$lang$ctorStr = "net.cgrand.xforms/t_net$cgrand$xforms45867";

net.cgrand.xforms.t_net$cgrand$xforms45867.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"net.cgrand.xforms/t_net$cgrand$xforms45867");
});

/**
 * Positional factory function for net.cgrand.xforms/t_net$cgrand$xforms45867.
 */
net.cgrand.xforms.__GT_t_net$cgrand$xforms45867 = (function net$cgrand$xforms$__GT_t_net$cgrand$xforms45867(xforms_map__$1,meta45868){
return (new net.cgrand.xforms.t_net$cgrand$xforms45867(xforms_map__$1,meta45868));
});

}

return (new net.cgrand.xforms.t_net$cgrand$xforms45867(xforms_map,null));
})()
));
var xforms_map__$1 = ((cljs.core.map_QMARK_(xforms_map))?xforms_map:cljs.core.zipmap(cljs.core.range.cljs$core$IFn$_invoke$arity$0(),xforms_map));
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(net.cgrand.xforms.multiplex(net.cgrand.xforms.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,net.cgrand.xforms.by_key.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (collect_xform,xforms_map__$1){
return (function (p1__45422_SHARP_){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(p1__45422_SHARP_,cljs.core.take.cljs$core$IFn$_invoke$arity$1((1)));
});})(collect_xform,xforms_map__$1))
)),xforms_map__$1)),collect_xform);
});

net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$2 = (function (xforms_map,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(net.cgrand.xforms.transjuxt.cljs$core$IFn$_invoke$arity$1(xforms_map),net.cgrand.xforms.rfs.last,coll);
});

net.cgrand.xforms.transjuxt.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=net.cgrand.xforms.js.map
