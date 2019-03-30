goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIoPool');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('taoensso.truss');
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(96),(0)], null);
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var G__44818 = arguments.length;
switch (G__44818) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,args,null);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__44822 = ((((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44822,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44822,(1),null);
var vec__44825 = ((((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44825,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44825,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"doc","doc",1913296891),_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta(sym))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),args__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var G__44833 = arguments.length;
switch (G__44833) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if((((s == null)) || ((s === "")))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399));
var readers__$1 = (cljs.core.truth_((function (){var G__44838 = readers;
var G__44839 = new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__44838,G__44839) : taoensso.encore.kw_identical_QMARK_.call(null,G__44838,G__44839));
})())?(function (){var G__44840 = cljs.core.symbol;
var G__44841 = cljs.core.deref(cljs.reader._STAR_tag_table_STAR_);
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__44840,G__44841) : taoensso.encore.map_keys.call(null,G__44840,G__44841));
})():readers);
var default$__$1 = (cljs.core.truth_((function (){var G__44842 = default$;
var G__44843 = new cljs.core.Keyword("taoensso.encore","dynamic","taoensso.encore/dynamic",-1726758399);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__44842,G__44843) : taoensso.encore.kw_identical_QMARK_.call(null,G__44842,G__44843));
})())?cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"readers","readers",-2118263030),readers__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),s,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var G__44845 = arguments.length;
switch (G__44845) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR__orig_val__44846 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__orig_val__44847 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__temp_val__44848 = null;
var _STAR_print_length_STAR__temp_val__44849 = null;
cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__44848;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__44849;

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__44847;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__44846;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__43185__auto__ = (function (){var or__4131__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(b2__43185__auto__)){
var data_map = b2__43185__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"err-type","err-type",-116717722),cljs.core.type(err),new cljs.core.Keyword(null,"err-msg","err-msg",-1158512684),err.message,new cljs.core.Keyword(null,"err-cause","err-cause",897008749),err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string'));
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return ((x === true) || (x === false));
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if((!((x == null)))){
if((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return ((taoensso.encore.ident_QMARK_(x)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__4120__auto__ = taoensso.encore.ident_QMARK_(x);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__4120__auto____$1)){
return true;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return (((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__4120__auto__ = (x instanceof cljs.core.Symbol);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__4120__auto____$1)){
return true;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null)));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__4120__auto__ = (x instanceof cljs.core.Keyword);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__4120__auto____$1)){
return true;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return ((typeof x === 'string') && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")))));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return ((typeof x === 'string') && ((!(clojure.string.blank_QMARK_(x)))));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return (!(clojure.string.blank_QMARK_(x)));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2))));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3))));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return (!((x < (0))));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return ((typeof x === 'number') && ((!(isNaN(x)))) && ((!((x === Infinity)))));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return ((typeof x === 'number') && ((!(isNaN(x)))) && ((!((x === Infinity)))) && ((!((parseFloat(x) === parseInt(x,(10)))))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return ((typeof x === 'number') && ((!(isNaN(x)))) && ((!((x === Infinity)))) && ((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return ((typeof x === 'number') && ((!((x < (0))))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return ((typeof x === 'number') && ((x > (0))));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return ((typeof x === 'number') && ((x < (0))));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((!((x < (0))))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((x > (0))));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((x < (0))));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_(x)) && ((!((x < (0))))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_(x)) && ((x > (0))));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return ((taoensso.encore.float_QMARK_(x)) && ((x < (0))));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return ((taoensso.encore.int_QMARK_(x)) && ((!((x < (0))))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__4120__auto__ = typeof x === 'number';
if(and__4120__auto__){
var n = x;
return (((n >= 0.0)) && ((n <= 1.0)));
} else {
return and__4120__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var b2__43185__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__43185__auto__)){
var ns = b2__43185__auto__;
return [ns,"/",n].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__43185__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__43185__auto__)){
var n = b2__43185__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__43185__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__43185__auto__)){
var n = b2__43185__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__43185__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__43185__auto__)){
var n = b2__43185__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__43185__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__43185__auto__)){
var n = b2__43185__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__43185__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__43185__auto__)){
var n = b2__43185__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var b2__43185__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__43185__auto__)){
var f = b2__43185__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if(((x === true) || (x === false))){
return x;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0")))){
return false;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1")))){
return true;
} else {
return null;
}
}
}
}
});

taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find(/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim(_QMARK_s));
} else {
return null;
}
});

taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var b2__43185__auto__ = taoensso.encore.as__QMARK_email(_QMARK_s);
if(cljs.core.truth_(b2__43185__auto__)){
var email = b2__43185__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
});

taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e45005){if((e45005 instanceof Error)){
var _ = e45005;
return false;
} else {
throw e45005;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var G__45019 = arguments.length;
switch (G__45019) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`is!` ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)," failure against arg: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword(null,"fail-?data","fail-?data",1702764975),fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["`as-",cljs.core.name(as_name),"` failed against: `",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),"`"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"nzero","nzero",2053173656),x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"nblank","nblank",626815585),x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"nempty-str","nempty-str",-215700100),x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"kw","kw",1158308175),x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"name","name",1843675177),x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"qname","qname",-1983612179),x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_email(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"email","email",1415816706),x);
}
});

taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_nemail(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"nemail","nemail",318708381),x);
}
});

taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"udt","udt",2011712751),x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"int","int",-1741416922),x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"nat-int","nat-int",313429715),x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"pos-int","pos-int",15030207),x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"float","float",-1732389368),x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"nat-float","nat-float",-371030973),x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"pos-float","pos-float",-715200084),x);
}
});

taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__4131__auto__ = taoensso.encore.as__QMARK_pval(x);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"pval","pval",-274256857),x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw(new cljs.core.Keyword(null,"bool","bool",1444635321),x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var G__45084 = arguments.length;
switch (G__45084) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq(ks)){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,acc,taoensso.encore.explode_keyword(in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__45094){
var vec__45095 = p__45094;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45095,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45095,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
var inc_46225 = (function (n){
return (n + (1));
});
/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 */
taoensso.encore.reduce_indexed = ((function (inc_46225){
return (function taoensso$encore$reduce_indexed(rf,init,coll){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,inc_46225){
return (function (acc,in$){
var G__45108 = acc;
var G__45109 = i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,inc_46225(i.cljs$core$IDeref$_deref$arity$1(null)));
var G__45110 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__45108,G__45109,G__45110) : rf.call(null,G__45108,G__45109,G__45110));
});})(i,inc_46225))
,init,coll);
});})(inc_46225))
;
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__45117 = acc;
var G__45118 = k;
var G__45119 = goog.object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__45117,G__45118,G__45119) : f.call(null,G__45117,G__45118,G__45119));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__45123_SHARP_,p2__45122_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__45122_SHARP_) : proc.call(null,p2__45122_SHARP_));
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__45126_SHARP_,p2__45124_SHARP_,p3__45125_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__45124_SHARP_,p3__45125_SHARP_) : proc.call(null,p2__45124_SHARP_,p3__45125_SHARP_));
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs((function (p1__45132_SHARP_,p2__45130_SHARP_,p3__45131_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__45130_SHARP_,p3__45131_SHARP_) : proc.call(null,p2__45130_SHARP_,p3__45131_SHARP_));
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj((function (p1__45135_SHARP_,p2__45133_SHARP_,p3__45134_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__45133_SHARP_,p3__45134_SHARP_) : proc.call(null,p2__45133_SHARP_,p3__45134_SHARP_));
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var b2__43185__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(b2__43185__auto__)){
var p = b2__43185__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
var b2__43185__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__43185__auto__)){
var p = b2__43185__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});
var inc_46226 = (function (n){
return (n + (1));
});
/**
 * Returns a new stateful index fn that returns: 0, 1, 2, ...
 */
taoensso.encore.idx_fn = ((function (inc_46226){
return (function taoensso$encore$idx_fn(){
var idx_ = cljs.core.volatile_BANG_((-1));
return ((function (idx_,inc_46226){
return (function (){
return idx_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,inc_46226(idx_.cljs$core$IDeref$_deref$arity$1(null)));
});
;})(idx_,inc_46226))
});})(inc_46226))
;
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var G__45171 = arguments.length;
switch (G__45171) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((function (){var G__45175 = (x - y);
return Math.abs(G__45175);
})() < 0.001);
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return ((function (){var G__45180 = (x - y);
return Math.abs(G__45180);
})() < signf);
});

taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var G__45188 = arguments.length;
switch (G__45188) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"round","round",2009433328),null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__45189 = type;
var G__45189__$1 = (((G__45189 instanceof cljs.core.Keyword))?G__45189.fqn:null);
switch (G__45189__$1) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
var G__45194 = n;
return Math.round(G__45194);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__45201 = (n * 10.0);
return Math.round(G__45201);
})() / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return ((function (){var G__45205 = (n * 100.0);
return Math.round(G__45205);
})() / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var G__45209 = arguments.length;
switch (G__45209) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__45211){
var map__45212 = p__45211;
var map__45212__$1 = (((((!((map__45212 == null))))?(((((map__45212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45212):map__45212);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45212__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45212__$1,new cljs.core.Keyword(null,"max","max",61366548));
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45212__$1,new cljs.core.Keyword(null,"factor","factor",-2103172748),(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = (((typeof window !== 'undefined'))?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return cljs.core.deref(x);
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta(x,(function (){var G__45223 = cljs.core.meta(x);
var G__45224 = m;
return (taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(G__45223,G__45224) : taoensso.encore.merge.call(null,G__45223,G__45224));
})());
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var G__45235 = arguments.length;
switch (G__45235) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46232 = arguments.length;
var i__4731__auto___46233 = (0);
while(true){
if((i__4731__auto___46233 < len__4730__auto___46232)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46233]));

var G__46234 = (i__4731__auto___46233 + (1));
i__4731__auto___46233 = G__46234;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((taoensso.encore.some_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y)));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__4120__auto__ = taoensso.encore.some_QMARK_(x);
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__4120__auto____$1){
return taoensso.encore.revery_QMARK_(((function (and__4120__auto____$1,and__4120__auto__){
return (function (p1__45229_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__45229_SHARP_,x);
});})(and__4120__auto____$1,and__4120__auto__))
,more);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
});

/** @this {Function} */
taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq45231){
var G__45232 = cljs.core.first(seq45231);
var seq45231__$1 = cljs.core.next(seq45231);
var G__45233 = cljs.core.first(seq45231__$1);
var seq45231__$2 = cljs.core.next(seq45231__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45232,G__45233,seq45231__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var G__45253 = arguments.length;
switch (G__45253) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46236 = arguments.length;
var i__4731__auto___46237 = (0);
while(true){
if((i__4731__auto___46237 < len__4730__auto___46236)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46237]));

var G__46238 = (i__4731__auto___46237 + (1));
i__4731__auto___46237 = G__46238;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst(taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

/** @this {Function} */
taoensso.encore.nnil.cljs$lang$applyTo = (function (seq45248){
var G__45249 = cljs.core.first(seq45248);
var seq45248__$1 = cljs.core.next(seq45248);
var G__45250 = cljs.core.first(seq45248__$1);
var seq45248__$2 = cljs.core.next(seq45248__$1);
var G__45251 = cljs.core.first(seq45248__$2);
var seq45248__$3 = cljs.core.next(seq45248__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45249,G__45250,G__45251,seq45248__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__45276 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45276,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45276,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),(function (){var b2__43185__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__43185__auto__)){
var s = b2__43185__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),new cljs.core.Keyword(null,"qualifier","qualifier",125841738),(function (){var b2__43185__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__43185__auto__)){
var s = b2__43185__auto__;
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__45284 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45284,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45284,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45284,(2),null);
var vec__45287 = ((cljs.core.vector_QMARK_(min_version))?min_version:new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version(min_version)));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45287,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45287,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45287,(2),null);
var vec__45290 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__45284,xc,yc,zc,vec__45287,xm,ym,zm){
return (function (p1__45281_SHARP_){
var or__4131__auto__ = p1__45281_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
});})(vec__45284,xc,yc,zc,vec__45287,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45290,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45290,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45290,(2),null);
if((((xc > xm__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xc,xm__$1)) && ((((yc > ym__$1)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yc,ym__$1)) && ((zc >= zm__$1)))))))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-version","min-version",-1697197126),clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),new cljs.core.Keyword(null,"your-version","your-version",-351781765),clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var G__45303 = arguments.length;
switch (G__45303) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46240 = arguments.length;
var i__4731__auto___46241 = (0);
while(true){
if((i__4731__auto___46241 < len__4730__auto___46240)){
args__4736__auto__.push((arguments[i__4731__auto___46241]));

var G__46242 = (i__4731__auto___46241 + (1));
i__4731__auto___46241 = G__46242;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq45304){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45304));
});

taoensso.encore.vec_STAR_ = cljs.core.vec;

taoensso.encore.set_STAR_ = cljs.core.set;
taoensso.encore.oset = (function taoensso$encore$oset(o,k,v){
var G__45318 = (((o == null))?({}):o);
var G__45319 = k;
var G__45320 = v;
return goog.object.set(G__45318,G__45319,G__45320);
});
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var G__45332 = arguments.length;
switch (G__45332) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,k,null);
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,k,not_found);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = 3;

var sentinel_46244 = ({});
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = ((function (sentinel_46244){
return (function taoensso$encore$oget_in(var_args){
var G__45352 = arguments.length;
switch (G__45352) {
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(sentinel_46244))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_46244){
return (function (o,ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
});})(sentinel_46244))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_46244){
return (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var o__$2 = (function (){var G__45360 = o__$1;
var G__45361 = cljs.core.first(ks__$1);
var G__45362 = sentinel_46244;
return goog.object.get(G__45360,G__45361,G__45362);
})();
if((o__$2 === sentinel_46244)){
return not_found;
} else {
var G__46246 = o__$2;
var G__46247 = cljs.core.next(ks__$1);
o__$1 = G__46246;
ks__$1 = G__46247;
continue;
}
} else {
return o__$1;
}
break;
}
});})(sentinel_46244))
;

taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3;

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var G__45374 = arguments.length;
switch (G__45374) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46249 = arguments.length;
var i__4731__auto___46250 = (0);
while(true){
if((i__4731__auto___46250 < len__4730__auto___46249)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46250]));

var G__46251 = (i__4731__auto___46250 + (1));
i__4731__auto___46250 = G__46251;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,x),more);
});

/** @this {Function} */
taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq45370){
var G__45372 = cljs.core.first(seq45370);
var seq45370__$1 = cljs.core.next(seq45370);
var G__45373 = cljs.core.first(seq45370__$1);
var seq45370__$2 = cljs.core.next(seq45370__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45372,G__45373,seq45370__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var G__45391 = arguments.length;
switch (G__45391) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46253 = arguments.length;
var i__4731__auto___46254 = (0);
while(true){
if((i__4731__auto___46254 < len__4730__auto___46253)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46254]));

var G__46255 = (i__4731__auto___46254 + (1));
i__4731__auto___46254 = G__46255;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_when,taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x),more);
});

/** @this {Function} */
taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq45388){
var G__45389 = cljs.core.first(seq45388);
var seq45388__$1 = cljs.core.next(seq45388);
var G__45390 = cljs.core.first(seq45388__$1);
var seq45388__$2 = cljs.core.next(seq45388__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45389,G__45390,seq45388__$2);
});

taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var G__45404 = arguments.length;
switch (G__45404) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46257 = arguments.length;
var i__4731__auto___46258 = (0);
while(true){
if((i__4731__auto___46258 < len__4730__auto___46257)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46258]));

var G__46259 = (i__4731__auto___46258 + (1));
i__4731__auto___46258 = G__46259;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

/** @this {Function} */
taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq45400){
var G__45401 = cljs.core.first(seq45400);
var seq45400__$1 = cljs.core.next(seq45400);
var G__45402 = cljs.core.first(seq45400__$1);
var seq45400__$2 = cljs.core.next(seq45400__$1);
var G__45403 = cljs.core.first(seq45400__$2);
var seq45400__$3 = cljs.core.next(seq45400__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45401,G__45402,G__45403,seq45400__$3);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var G__45414 = arguments.length;
switch (G__45414) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46261 = arguments.length;
var i__4731__auto___46262 = (0);
while(true){
if((i__4731__auto___46262 < len__4730__auto___46261)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46262]));

var G__46263 = (i__4731__auto___46262 + (1));
i__4731__auto___46262 = G__46263;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

/** @this {Function} */
taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq45410){
var G__45411 = cljs.core.first(seq45410);
var seq45410__$1 = cljs.core.next(seq45410);
var G__45412 = cljs.core.first(seq45410__$1);
var seq45410__$2 = cljs.core.next(seq45410__$1);
var G__45413 = cljs.core.first(seq45410__$2);
var seq45410__$3 = cljs.core.next(seq45410__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45411,G__45412,G__45413,seq45410__$3);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var G__45437 = arguments.length;
switch (G__45437) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46265 = arguments.length;
var i__4731__auto___46266 = (0);
while(true){
if((i__4731__auto___46266 < len__4730__auto___46265)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46266]));

var G__46267 = (i__4731__auto___46266 + (1));
i__4731__auto___46266 = G__46267;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_(m,k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

/** @this {Function} */
taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq45432){
var G__45433 = cljs.core.first(seq45432);
var seq45432__$1 = cljs.core.next(seq45432);
var G__45434 = cljs.core.first(seq45432__$1);
var seq45432__$2 = cljs.core.next(seq45432__$1);
var G__45435 = cljs.core.first(seq45432__$2);
var seq45432__$3 = cljs.core.next(seq45432__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45433,G__45434,G__45435,seq45432__$3);
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.contains_QMARK_(m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3);

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var G__45439 = arguments.length;
switch (G__45439) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count(v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,vlen);
}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$(cljs.core.count(v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,end__$1);
}
});

taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var G__45443 = arguments.length;
switch (G__45443) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count(v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,vlen);
}
}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$(cljs.core.count(v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end__$1);
}
}
}
});

taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3;

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__45458 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45458,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__45470 = xs__$1;
var seq__45471 = cljs.core.seq(vec__45470);
var first__45472 = cljs.core.first(seq__45471);
var seq__45471__$1 = cljs.core.next(seq__45471);
var x1 = first__45472;
var xn = seq__45471__$1;
if(xn){
var G__46270 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__46271 = xn;
butlast = G__46270;
xs__$1 = G__46271;
continue;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(butlast,x1) : f.call(null,butlast,x1));
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3(coll,(0),n);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return ((cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x))))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46272 = arguments.length;
var i__4731__auto___46273 = (0);
while(true){
if((i__4731__auto___46273 < len__4730__auto___46272)){
args__4736__auto__.push((arguments[i__4731__auto___46273]));

var G__46274 = (i__4731__auto___46273 + (1));
i__4731__auto___46273 = G__46274;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,taoensso.encore.fsplit_last((function (xs,lx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,(taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1(lx) : taoensso.encore.seq_kvs.call(null,lx)));
}),args));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.mapply.cljs$lang$applyTo = (function (seq45476){
var G__45477 = cljs.core.first(seq45476);
var seq45476__$1 = cljs.core.next(seq45476);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45477,seq45476__$1);
});

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var G__45488 = arguments.length;
switch (G__45488) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46276 = arguments.length;
var i__4731__auto___46277 = (0);
while(true){
if((i__4731__auto___46277 < len__4730__auto___46276)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46277]));

var G__46278 = (i__4731__auto___46277 + (1));
i__4731__auto___46277 = G__46278;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$(to),cljs.core.cons(from,more)));
});

/** @this {Function} */
taoensso.encore.into_all.cljs$lang$applyTo = (function (seq45485){
var G__45486 = cljs.core.first(seq45485);
var seq45485__$1 = cljs.core.next(seq45485);
var G__45487 = cljs.core.first(seq45485__$1);
var seq45485__$2 = cljs.core.next(seq45485__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45486,G__45487,seq45485__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if((((n > (10))) && (taoensso.encore.editable_QMARK_(coll)))){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var G__45494 = arguments.length;
switch (G__45494) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var G__45497 = arguments.length;
switch (G__45497) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__46281 = null;
var G__46281__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__46281__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__46281__2 = (function (acc,input){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(input) : keyfn.call(null,input));
if(cljs.core.contains_QMARK_(cljs.core.deref(seen_),k)){
return acc;
} else {
seen_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_.cljs$core$IDeref$_deref$arity$1(null),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,input) : rf.call(null,acc,input));
}
});
G__46281 = function(acc,input){
switch(arguments.length){
case 0:
return G__46281__0.call(this);
case 1:
return G__46281__1.call(this,acc);
case 2:
return G__46281__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__46281.cljs$core$IFn$_invoke$arity$0 = G__46281__0;
G__46281.cljs$core$IFn$_invoke$arity$1 = G__46281__1;
G__46281.cljs$core$IFn$_invoke$arity$2 = G__46281__2;
return G__46281;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),m,m);
}
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
/**
 * Returns {(f x) x} map for xs in `coll`.
 */
taoensso.encore.keys_by = (function taoensso$encore$keys_by(f,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),x);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_((function (p1__45506_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__45506_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var G__45513 = arguments.length;
switch (G__45513) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,f);
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
var b2__43185__auto__ = cljs.core.seq(ks);
if(b2__43185__auto__){
var ks_seq = b2__43185__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0));
var b2__43185__auto____$1 = cljs.core.next(ks_seq);
if(b2__43185__auto____$1){
var ks__$1 = b2__43185__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_((function (){var G__45516 = f;
var G__45517 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45516,G__45517) : taoensso.encore.kw_identical_QMARK_.call(null,G__45516,G__45517));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
var v = (function (){var G__45518 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,not_found);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45518) : f.call(null,G__45518));
})();
if(cljs.core.truth_((function (){var G__45519 = v;
var G__45520 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45519,G__45520) : taoensso.encore.kw_identical_QMARK_.call(null,G__45519,G__45520));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}
}
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
}
});

taoensso.encore.update_in.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var G__45524 = arguments.length;
switch (G__45524) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,ks),k);
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq(ks)){
return taoensso.encore.fsplit_last((function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3(coll,ks__$1,lk);
}),ks);
} else {
return false;
}
});

taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var G__45533 = arguments.length;
switch (G__45533) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46285 = arguments.length;
var i__4731__auto___46286 = (0);
while(true){
if((i__4731__auto___46286 < len__4730__auto___46285)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46286]));

var G__46287 = (i__4731__auto___46286 + (1));
i__4731__auto___46286 = G__46287;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

/** @this {Function} */
taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq45529){
var G__45530 = cljs.core.first(seq45529);
var seq45529__$1 = cljs.core.next(seq45529);
var G__45531 = cljs.core.first(seq45529__$1);
var seq45529__$2 = cljs.core.next(seq45529__$1);
var G__45532 = cljs.core.first(seq45529__$2);
var seq45529__$3 = cljs.core.next(seq45529__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45530,G__45531,G__45532,seq45529__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var G__45545 = arguments.length;
switch (G__45545) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46289 = arguments.length;
var i__4731__auto___46290 = (0);
while(true){
if((i__4731__auto___46290 < len__4730__auto___46289)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46290]));

var G__46291 = (i__4731__auto___46290 + (1));
i__4731__auto___46290 = G__46291;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if(((s1) && (s2))){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
});

/** @this {Function} */
taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq45542){
var G__45543 = cljs.core.first(seq45542);
var seq45542__$1 = cljs.core.next(seq45542);
var G__45544 = cljs.core.first(seq45542__$1);
var seq45542__$2 = cljs.core.next(seq45542__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45543,G__45544,seq45542__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if(((s1) && (s2))){
var G__46292 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__46293 = cljs.core.next(s1);
var G__46294 = cljs.core.next(s2);
v = G__46292;
s1 = G__46293;
s2 = G__46294;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
});
var not_found_46295 = ({});
taoensso.encore._merge_with = ((function (not_found_46295){
return (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (not_found_46295){
return (function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv(((function (not_found_46295){
return (function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc__$1,k,not_found_46295);
if((lv === not_found_46295)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,rv);
} else {
if(cljs.core.truth_((function (){var G__45561 = rv;
var G__45562 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45561,G__45562) : taoensso.encore.kw_identical_QMARK_.call(null,G__45561,G__45562));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.map_QMARK_(rv)) && (cljs.core.map_QMARK_(lv)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,cljs.core.reduce_kv(taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(lv,rv) : f.call(null,lv,rv));
if(cljs.core.truth_((function (){var G__45567 = new_rv;
var G__45568 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45567,G__45568) : taoensso.encore.kw_identical_QMARK_.call(null,G__45567,G__45568));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,new_rv);
}
}
}
}
});})(not_found_46295))
,(function (){var or__4131__auto__ = acc;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
});})(not_found_46295))
,null,maps);
});})(not_found_46295))
;
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46296 = arguments.length;
var i__4731__auto___46297 = (0);
while(true){
if((i__4731__auto___46297 < len__4730__auto___46296)){
args__4736__auto__.push((arguments[i__4731__auto___46297]));

var G__46298 = (i__4731__auto___46297 + (1));
i__4731__auto___46297 = G__46298;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(false,(function (x,y){
return y;
}),maps);
});

taoensso.encore.merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.merge.cljs$lang$applyTo = (function (seq45570){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45570));
});


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46299 = arguments.length;
var i__4731__auto___46300 = (0);
while(true){
if((i__4731__auto___46300 < len__4730__auto___46299)){
args__4736__auto__.push((arguments[i__4731__auto___46300]));

var G__46301 = (i__4731__auto___46300 + (1));
i__4731__auto___46300 = G__46301;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(false,f,maps);
});

taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq45574){
var G__45575 = cljs.core.first(seq45574);
var seq45574__$1 = cljs.core.next(seq45574);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45575,seq45574__$1);
});


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46302 = arguments.length;
var i__4731__auto___46303 = (0);
while(true){
if((i__4731__auto___46303 < len__4730__auto___46302)){
args__4736__auto__.push((arguments[i__4731__auto___46303]));

var G__46304 = (i__4731__auto___46303 + (1));
i__4731__auto___46303 = G__46304;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(new cljs.core.Keyword(null,"nest","nest",-314993663),(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq45577){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45577));
});


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46305 = arguments.length;
var i__4731__auto___46306 = (0);
while(true){
if((i__4731__auto___46306 < len__4730__auto___46305)){
args__4736__auto__.push((arguments[i__4731__auto___46306]));

var G__46307 = (i__4731__auto___46306 + (1));
i__4731__auto___46306 = G__46307;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(new cljs.core.Keyword(null,"nest","nest",-314993663),f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq45579){
var G__45580 = cljs.core.first(seq45579);
var seq45579__$1 = cljs.core.next(seq45579);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45580,seq45579__$1);
});


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
});

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newv","newv",-238403387,null),new cljs.core.Symbol(null,"returnv","returnv",-1488668972,null)], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped";

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"taoensso.encore/Swapped");
});

/**
 * Positional factory function for taoensso.encore/Swapped.
 */
taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = new cljs.core.Symbol(null,"clojure.lang.IAtom","clojure.lang.IAtom",2048990995,null);
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = cljs.core.deref(atom_);
var v1 = (function (){var G__45586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45586) : f.call(null,G__45586));
})();
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
return v1;
} else {
continue;
}
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = cljs.core.deref(atom_);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if((function (){
cljs.core.reset_BANG_(atom_,v1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = cljs.core.deref(atom_);
if((function (){
cljs.core.reset_BANG_(atom_,v1);

return true;
})()
){
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
} else {
continue;
}
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_((function (){var G__45591 = f;
var G__45592 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45591,G__45592) : taoensso.encore.kw_identical_QMARK_.call(null,G__45591,G__45592));
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__45596 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__45597 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__45596,G__45597) : return$.call(null,G__45596,G__45597));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__45599 = v1;
var G__45600 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45599,G__45600) : taoensso.encore.kw_identical_QMARK_.call(null,G__45599,G__45600));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1));
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__45602 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__45603 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__45602,G__45603) : return$.call(null,G__45602,G__45603));
} else {
continue;
}
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__43185__auto__ = cljs.core.seq(ks);
if(b2__43185__auto__){
var ks_seq = b2__43185__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.truth_((function (){var G__45609 = f;
var G__45610 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45609,G__45610) : taoensso.encore.kw_identical_QMARK_.call(null,G__45609,G__45610));
})())){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = taoensso.encore.fsplit_last(((function (m0,ks_seq,b2__43185__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,ks_seq,b2__43185__auto__))
,ks);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__45612 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__45613 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__45612,G__45613) : return$.call(null,G__45612,G__45613));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = cljs.core.deref(atom_);
var v0 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__45615 = v1;
var G__45616 = new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45615,G__45616) : taoensso.encore.kw_identical_QMARK_.call(null,G__45615,G__45616));
})())?taoensso.encore.fsplit_last(((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__43185__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__43185__auto__))
,ks):cljs.core.assoc_in(m0,ks,v1));
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_(return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__43185__auto__ = cljs.core.seq(ks);
if(b2__43185__auto__){
var ks_seq = b2__43185__auto__;
if(cljs.core.next(ks_seq)){
while(true){
var m0 = cljs.core.deref(atom_);
var m1 = cljs.core.assoc_in(m0,ks,v1);
if((function (){
cljs.core.reset_BANG_(atom_,m1);

return true;
})()
){
var G__45624 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__45625 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__45624,G__45625) : return$.call(null,G__45624,G__45625));
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_(return$,atom_,v1);
}
});
var return_46308 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = ((function (return_46308){
return (function taoensso$encore$swap_val_BANG_(var_args){
var G__45630 = arguments.length;
switch (G__45630) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_46308))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_46308){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_46308,atom_,k,null,f);
});})(return_46308))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_46308){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_46308,atom_,k,not_found,f);
});})(return_46308))
;

taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_46310 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = ((function (return_46310){
return (function taoensso$encore$reset_val_BANG_(var_args){
var G__45636 = arguments.length;
switch (G__45636) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_46310))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_46310){
return (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_(return_46310,atom_,k,null,val);
});})(return_46310))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_46310){
return (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_46310,atom_,k,not_found,val);
});})(return_46310))
;

taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_46312 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = ((function (return_46312){
return (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var G__45641 = arguments.length;
switch (G__45641) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_46312))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_46312){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_46312,atom_,k,null,f);
});})(return_46312))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_46312){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_46312,atom_,k,not_found,f);
});})(return_46312))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var G__45644 = arguments.length;
switch (G__45644) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3(atom_,k,null);
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
var vec__45649 = taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782));
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45649,(0),null);
return v0;
});

taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3;

var not_found_46315 = ({});
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = ((function (not_found_46315){
return (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found_46315,new_val);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val)){
return false;
} else {
return true;
}
});})(not_found_46315))
;
var return_46316 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = ((function (return_46316){
return (function taoensso$encore$swap_in_BANG_(var_args){
var G__45661 = arguments.length;
switch (G__45661) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_46316))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_46316){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_46316,atom_,f);
});})(return_46316))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_46316){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_46316,atom_,ks,null,f);
});})(return_46316))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_46316){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_46316,atom_,ks,not_found,f);
});})(return_46316))
;

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_46318 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = ((function (return_46318){
return (function taoensso$encore$reset_in_BANG_(var_args){
var G__45669 = arguments.length;
switch (G__45669) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_46318))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_46318){
return (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_46318,atom_,val);
});})(return_46318))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_46318){
return (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_46318,atom_,ks,null,val);
});})(return_46318))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_46318){
return (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_46318,atom_,ks,not_found,val);
});})(return_46318))
;

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_46320 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = ((function (return_46320){
return (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var G__45677 = arguments.length;
switch (G__45677) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(return_46320))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = ((function (return_46320){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_46320,atom_,f);
});})(return_46320))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_46320){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_46320,atom_,ks,null,f);
});})(return_46320))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_46320){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_46320,atom_,ks,not_found,f);
});})(return_46320))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__43185__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__43185__auto__)){
var perf = b2__43185__auto__;
var b2__43185__auto____$1 = (function (){var or__4131__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
var or__4131__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
if(cljs.core.truth_(or__4131__auto____$3)){
return or__4131__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__43185__auto____$1)){
var f = b2__43185__auto____$1;
return ((function (f,b2__43185__auto____$1,perf,b2__43185__auto__){
return (function (){
return ((1000000) * cljs.core.long$(f.call(perf)));
});
;})(f,b2__43185__auto____$1,perf,b2__43185__auto__))
} else {
return ((function (b2__43185__auto____$1,perf,b2__43185__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__43185__auto____$1,perf,b2__43185__auto__))
}
} else {
return ((function (b2__43185__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__43185__auto__))
}
})();
/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = ({});
return ((function (cache_,get_sentinel){
return (function() { 
var G__46322__delegate = function (xs){
var x1 = cljs.core.first(xs);
if(cljs.core.truth_((function (){var G__45684 = x1;
var G__45685 = new cljs.core.Keyword("mem","del","mem/del",574870667);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45684,G__45685) : taoensso.encore.kw_identical_QMARK_.call(null,G__45684,G__45685));
})())){
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.truth_((function (){var G__45686 = x2;
var G__45687 = new cljs.core.Keyword("mem","all","mem/all",892075139);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45686,G__45687) : taoensso.encore.kw_identical_QMARK_.call(null,G__45686,G__45687));
})())){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache_.cljs$core$IDeref$_deref$arity$1(null),xn));
}

return null;
} else {
if(cljs.core.truth_((function (){var G__45688 = x1;
var G__45689 = new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45688,G__45689) : taoensso.encore.kw_identical_QMARK_.call(null,G__45688,G__45689));
})())){
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache_.cljs$core$IDeref$_deref$arity$1(null),xn,v));

return v;
} else {
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(cache_),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cache_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache_.cljs$core$IDeref$_deref$arity$1(null),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__46322 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__46323__i = 0, G__46323__a = new Array(arguments.length -  0);
while (G__46323__i < G__46323__a.length) {G__46323__a[G__46323__i] = arguments[G__46323__i + 0]; ++G__46323__i;}
  xs = new cljs.core.IndexedSeq(G__46323__a,0,null);
} 
return G__46322__delegate.call(this,xs);};
G__46322.cljs$lang$maxFixedArity = 0;
G__46322.cljs$lang$applyTo = (function (arglist__46324){
var xs = cljs.core.seq(arglist__46324);
return G__46322__delegate(xs);
});
G__46322.cljs$core$IFn$_invoke$arity$variadic = G__46322__delegate;
return G__46322;
})()
;
;})(cache_,get_sentinel))
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return ((function (cache_){
return (function() { 
var G__46325__delegate = function (args){
return cljs.core.deref((function (){var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cache_),args);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (or__4131__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay(((function (or__4131__auto__,cache_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(or__4131__auto__,cache_))
,null))]);
}
});})(or__4131__auto__,cache_))
),args);
}
})());
};
var G__46325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46326__i = 0, G__46326__a = new Array(arguments.length -  0);
while (G__46326__i < G__46326__a.length) {G__46326__a[G__46326__i] = arguments[G__46326__i + 0]; ++G__46326__i;}
  args = new cljs.core.IndexedSeq(G__46326__a,0,null);
} 
return G__46325__delegate.call(this,args);};
G__46325.cljs$lang$maxFixedArity = 0;
G__46325.cljs$lang$applyTo = (function (arglist__46327){
var args = cljs.core.seq(arglist__46327);
return G__46325__delegate(args);
});
G__46325.cljs$core$IFn$_invoke$arity$variadic = G__46325__delegate;
return G__46325;
})()
;
;})(cache_))
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
});

taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.SimpleCacheEntry.cljs$lang$type = true;

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry";

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"taoensso.encore/SimpleCacheEntry");
});

/**
 * Positional factory function for taoensso.encore/SimpleCacheEntry.
 */
taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
});

taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"delay","delay",1066306308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"udt","udt",-642723018,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lru","tick-lru",1625824877,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tick-lfu","tick-lfu",-1976905322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.TickedCacheEntry.cljs$lang$type = true;

taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry";

taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"taoensso.encore/TickedCacheEntry");
});

/**
 * Positional factory function for taoensso.encore/TickedCacheEntry.
 */
taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var G__45697 = arguments.length;
switch (G__45697) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_(f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_46329 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e45701){if((e45701 instanceof Error)){
var e = e45701;
return e;
} else {
throw e45701;

}
}})();
if((e_46329 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1739,"(pos-int? ttl-ms)",ttl_ms,e_46329,null);
}

var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
return ((function (cache_,latch_,ttl_ms__$1){
return (function() { 
var G__46330__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__45703 = a1;
var G__45704 = new cljs.core.Keyword("mem","del","mem/del",574870667);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45703,G__45704) : taoensso.encore.kw_identical_QMARK_.call(null,G__45703,G__45704));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__45707 = a2;
var G__45708 = new cljs.core.Keyword("mem","all","mem/all",892075139);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45707,G__45708) : taoensso.encore.kw_identical_QMARK_.call(null,G__45707,G__45708));
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_46331 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_46331);

return true;
})()
){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_46331,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_46331,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(latch_46331,instant,a1,cache_,latch_,ttl_ms__$1))
,cljs.core.transient$((function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_46331,instant,a1,cache_,latch_,ttl_ms__$1))
);
} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__45711 = a1;
var G__45712 = new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45711,G__45712) : taoensso.encore.kw_identical_QMARK_.call(null,G__45711,G__45712));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__4131__auto__ = (_QMARK_e == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
,null)),instant));
} else {
return _QMARK_e;
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
);
return cljs.core.deref(e.delay);
}
};
var G__46330 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46332__i = 0, G__46332__a = new Array(arguments.length -  0);
while (G__46332__i < G__46332__a.length) {G__46332__a[G__46332__i] = arguments[G__46332__i + 0]; ++G__46332__i;}
  args = new cljs.core.IndexedSeq(G__46332__a,0,null);
} 
return G__46330__delegate.call(this,args);};
G__46330.cljs$lang$maxFixedArity = 0;
G__46330.cljs$lang$applyTo = (function (arglist__46333){
var args = cljs.core.seq(arglist__46333);
return G__46330__delegate(args);
});
G__46330.cljs$core$IFn$_invoke$arity$variadic = G__46330__delegate;
return G__46330;
})()
;
;})(cache_,latch_,ttl_ms__$1))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (){var fexpr__45722 = (function (x){
var or__4131__auto__ = (x == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__45724 = taoensso.truss.impl.non_throwing(taoensso.encore.pos_int_QMARK_);
return (fexpr__45724.cljs$core$IFn$_invoke$arity$1 ? fexpr__45724.cljs$core$IFn$_invoke$arity$1(x) : fexpr__45724.call(null,x));
}
});
return fexpr__45722(ttl_ms);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1790,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_46334 = (function (){try{if(taoensso.encore.pos_int_QMARK_(cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e45725){if((e45725 instanceof Error)){
var e = e45725;
return e;
} else {
throw e45725;

}
}})();
if((e_46334 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1791,"(pos-int? cache-size)",cache_size,e_46334,null);
}

var tick_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var cache_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ttl_ms__$1 = cljs.core.long$((function (){var or__4131__auto__ = ttl_ms;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = (!((ttl_ms__$1 === (0))));
var cache_size__$1 = cljs.core.long$(cache_size);
return ((function (tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function() { 
var G__46335__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__45734 = a1;
var G__45735 = new cljs.core.Keyword("mem","del","mem/del",574870667);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45734,G__45735) : taoensso.encore.kw_identical_QMARK_.call(null,G__45734,G__45735));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__45736 = a2;
var G__45737 = new cljs.core.Keyword("mem","all","mem/all",892075139);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45736,G__45737) : taoensso.encore.kw_identical_QMARK_.call(null,G__45736,G__45737));
})())){
cljs.core.reset_BANG_(cache_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_46336 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_46336);

return true;
})()
){
if(ttl_ms_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_46336,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_46336,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(latch_46336,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_46336,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}

var snapshot_46337 = cljs.core.deref(cache_);
var n_to_gc_46338 = (cljs.core.count(snapshot_46337) - cache_size__$1);
if((n_to_gc_46338 > (64))){
var ks_to_gc_46339 = (function (){var G__45743 = n_to_gc_46338;
var G__45744 = ((function (G__45743,snapshot_46337,n_to_gc_46338,latch_46336,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_46337,k);
return (e.tick_lru + e.tick_lfu);
});})(G__45743,snapshot_46337,n_to_gc_46338,latch_46336,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
;
var G__45745 = cljs.core.keys(snapshot_46337);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__45743,G__45744,G__45745) : taoensso.encore.top.call(null,G__45743,G__45744,G__45745));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (ks_to_gc_46339,snapshot_46337,n_to_gc_46338,latch_46336,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_gc_46339,snapshot_46337,n_to_gc_46338,latch_46336,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(ks_to_gc_46339,snapshot_46337,n_to_gc_46338,latch_46336,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__4131__auto__ = m;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_46339));
});})(ks_to_gc_46339,snapshot_46337,n_to_gc_46338,latch_46336,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}
} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__45752 = a1;
var G__45753 = new cljs.core.Keyword("mem","fresh","mem/fresh",-1179989133);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45752,G__45753) : taoensso.encore.kw_identical_QMARK_.call(null,G__45752,G__45753));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var tick = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tick_,((function (fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (n){
return (n + (1));
});})(fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__4131__auto__ = (_QMARK_e == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
return cljs.core.deref(e.delay);
}
};
var G__46335 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46340__i = 0, G__46340__a = new Array(arguments.length -  0);
while (G__46340__i < G__46340__a.length) {G__46340__a[G__46340__i] = arguments[G__46340__i + 0]; ++G__46340__i;}
  args = new cljs.core.IndexedSeq(G__46340__a,0,null);
} 
return G__46335__delegate.call(this,args);};
G__46335.cljs$lang$maxFixedArity = 0;
G__46335.cljs$lang$applyTo = (function (arglist__46341){
var args = cljs.core.seq(arglist__46341);
return G__46335__delegate(args);
});
G__46335.cljs$core$IFn$_invoke$arity$variadic = G__46335__delegate;
return G__46335;
})()
;
;})(tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
});

taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"ms","ms",487821794,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitSpec.cljs$lang$type = true;

taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec";

taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"taoensso.encore/LimitSpec");
});

/**
 * Positional factory function for taoensso.encore/LimitSpec.
 */
taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
});

taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"udt0","udt0",-969222777,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitEntry.cljs$lang$type = true;

taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry";

taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"taoensso.encore/LimitEntry");
});

/**
 * Positional factory function for taoensso.encore/LimitEntry.
 */
taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
});

taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"worst-sid","worst-sid",1427291395,null),cljs.core.with_meta(new cljs.core.Symbol(null,"worst-ms","worst-ms",1541498579,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

taoensso.encore.LimitHits.cljs$lang$type = true;

taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits";

taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"taoensso.encore/LimitHits");
});

/**
 * Positional factory function for taoensso.encore/LimitHits.
 */
taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_46342 = (function (n,ms){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e45763){if((e45763 instanceof Error)){
var e = e45763;
return e;
} else {
throw e45763;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1891,"(pos-int? n)",n,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e45764){if((e45764 instanceof Error)){
var e = e45764;
return e;
} else {
throw e45764;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1891,"(pos-int? ms)",ms,e,null);
}
})()], null);

return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = ((function (limit_spec_46342){
return (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(((function (limit_spec_46342){
return (function (acc,sid,p__45765){
var vec__45766 = p__45765;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45766,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45766,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,limit_spec_46342(n,ms));
});})(limit_spec_46342))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,limit_spec_46342){
return (function (acc,p__45772){
var vec__45773 = p__45772;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45773,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45773,(1),null);
var _QMARK_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45773,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__4131__auto__ = _QMARK_id;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return i.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(function (){var G__45782 = i.cljs$core$IDeref$_deref$arity$1(null);
var fexpr__45781 = ((function (G__45782,or__4131__auto__,vec__45773,n,ms,_QMARK_id,i,limit_spec_46342){
return (function (i__$1){
return (i__$1 + (1));
});})(G__45782,or__4131__auto__,vec__45773,n,ms,_QMARK_id,i,limit_spec_46342))
;
return fexpr__45781(G__45782);
})());
}
})(),limit_spec_46342(n,ms));
});})(i,limit_spec_46342))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});})(limit_spec_46342))
;
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_(specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly(null)], null);
} else {
var latch_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reqs_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var specs__$1 = taoensso.encore.coerce_limit_specs(specs);
var f1 = ((function (latch_,reqs_,specs__$1){
return (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if(((cljs.core.not(peek_QMARK_)) && ((Math.random() <= 6.25E-5)))){
var latch_46343 = null;
if((function (){
cljs.core.reset_BANG_(latch_,latch_46343);

return true;
})()
){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reqs_,((function (latch_46343,instant,latch_,reqs_,specs__$1){
return (function (reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_46343,instant,latch_,reqs_,specs__$1){
return (function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv(((function (latch_46343,instant,latch_,reqs_,specs__$1){
return (function (acc__$1,sid,e){
var b2__43185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__43185__auto__)){
var s = b2__43185__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
}
});})(latch_46343,instant,latch_,reqs_,specs__$1))
,entries,entries);
if(cljs.core.empty_QMARK_(new_entries)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,rid__$1,new_entries);
}
});})(latch_46343,instant,latch_,reqs_,specs__$1))
,cljs.core.transient$((function (){var or__4131__auto__ = reqs;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
});})(latch_46343,instant,latch_,reqs_,specs__$1))
);
} else {
}
} else {
}

while(true){
var reqs = cljs.core.deref(reqs_);
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv(((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
var b2__43185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__43185__auto__)){
var s = b2__43185__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([sid,tdelta]),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__4131__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__43185__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__43185__auto__)){
var h = b2__43185__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__43185__auto__ = cljs.core.deref(latch_);
if(cljs.core.truth_(b2__43185__auto__)){
var l = b2__43185__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__43185__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,(function (){var b2__43185__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,sid);
if(cljs.core.truth_(b2__43185__auto____$1)){
var e = b2__43185__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__43185__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
,entries,specs__$1);
if((function (){
cljs.core.reset_BANG_(reqs_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reqs,rid,new_entries));

return true;
})()
){
return null;
} else {
continue;
}
}
}
break;
}
});})(latch_,reqs_,specs__$1))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,((function (latch_,reqs_,specs__$1,f1){
return (function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1(null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1(req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_((function (){var G__45791 = cmd;
var G__45792 = new cljs.core.Keyword("rl","reset","rl/reset",-800926172);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45791,G__45792) : taoensso.encore.kw_identical_QMARK_.call(null,G__45791,G__45792));
})())){
if(cljs.core.truth_((function (){var G__45793 = req_id;
var G__45794 = new cljs.core.Keyword("rl","all","rl/all",892118056);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45793,G__45794) : taoensso.encore.kw_identical_QMARK_.call(null,G__45793,G__45794));
})())){
cljs.core.reset_BANG_(reqs_,null);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_((function (){var G__45797 = cmd;
var G__45798 = new cljs.core.Keyword("rl","peek","rl/peek",-291391771);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__45797,G__45798) : taoensso.encore.kw_identical_QMARK_.call(null,G__45797,G__45798));
})())){
return f1(req_id,true);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),cmd,new cljs.core.Keyword(null,"req-id","req-id",-471642231),req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
;})(latch_,reqs_,specs__$1,f1))
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
var vec__45803 = taoensso.encore.limiter_STAR_(specs);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45803,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45803,(1),null);
return f;
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var G__45811 = arguments.length;
switch (G__45811) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46345 = arguments.length;
var i__4731__auto___46346 = (0);
while(true){
if((i__4731__auto___46346 < len__4730__auto___46345)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46346]));

var G__46347 = (i__4731__auto___46346 + (1));
i__4731__auto___46346 = G__46347;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,s);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),str_builder,more);
});

/** @this {Function} */
taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq45808){
var G__45809 = cljs.core.first(seq45808);
var seq45808__$1 = cljs.core.next(seq45808);
var G__45810 = cljs.core.first(seq45808__$1);
var seq45808__$2 = cljs.core.next(seq45808__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45809,G__45810,seq45808__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_(acc)){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(((taoensso.encore.str_builder_QMARK_(acc))?acc:taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var G__45813 = arguments.length;
switch (G__45813) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__4120__auto__ = separator;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__4120__auto__;
}
})())){
var sep_xform = cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator);
var str_rf_STAR_ = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,coll));
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var G__45829 = arguments.length;
switch (G__45829) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var G__45831 = arguments.length;
switch (G__45831) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
});

taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var G__45836 = arguments.length;
switch (G__45836) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start));
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start,length));
});

taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3;

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = ["g",(cljs.core.truth_(match.ignoreCase)?"i":null),(cljs.core.truth_(match.multiline)?"m":null)].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__46352__delegate = function (args){
var G__45840 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__45840) : replacement.call(null,G__45840));
};
var G__46352 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46353__i = 0, G__46353__a = new Array(arguments.length -  0);
while (G__46353__i < G__46353__a.length) {G__46353__a[G__46353__i] = arguments[G__46353__i + 0]; ++G__46353__i;}
  args = new cljs.core.IndexedSeq(G__46353__a,0,null);
} 
return G__46352__delegate.call(this,args);};
G__46352.cljs$lang$maxFixedArity = 0;
G__46352.cljs$lang$applyTo = (function (arglist__46354){
var args = cljs.core.seq(arglist__46354);
return G__46352__delegate(args);
});
G__46352.cljs$core$IFn$_invoke$arity$variadic = G__46352__delegate;
return G__46352;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if((((void 0 === x)) || ((x == null)))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__4131__auto__ = fmt;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46355 = arguments.length;
var i__4731__auto___46356 = (0);
while(true){
if((i__4731__auto___46356 < len__4730__auto___46355)){
args__4736__auto__.push((arguments[i__4731__auto___46356]));

var G__46357 = (i__4731__auto___46356 + (1));
i__4731__auto___46356 = G__46357;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_(fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.format.cljs$lang$applyTo = (function (seq45845){
var G__45846 = cljs.core.first(seq45845);
var seq45845__$1 = cljs.core.next(seq45845);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45846,seq45845__$1);
});

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll));
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$);
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = cljs.core.deref(acc_ends_with_sep_QMARK__);
var acc_empty_QMARK_ = cljs.core.deref(acc_empty_QMARK__);
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll));
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46358 = arguments.length;
var i__4731__auto___46359 = (0);
while(true){
if((i__4731__auto___46359 < len__4730__auto___46358)){
args__4736__auto__.push((arguments[i__4731__auto___46359]));

var G__46360 = (i__4731__auto___46359 + (1));
i__4731__auto___46359 = G__46360;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.path.cljs$lang$applyTo = (function (seq45861){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45861));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var G__45865 = arguments.length;
switch (G__45865) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int((16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int((16)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex())].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46362 = arguments.length;
var i__4731__auto___46363 = (0);
while(true){
if((i__4731__auto___46363 < len__4730__auto___46362)){
args__4736__auto__.push((arguments[i__4731__auto___46363]));

var G__46364 = (i__4731__auto___46363 + (1));
i__4731__auto___46363 = G__46364;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_(in$)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs));
});

taoensso.encore.into_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.into_str.cljs$lang$applyTo = (function (seq45871){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45871));
});

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
var sentinel_46365 = ({});
var nil__GT_sentinel_46366 = ((function (sentinel_46365){
return (function (x){
if((x == null)){
return sentinel_46365;
} else {
return x;
}
});})(sentinel_46365))
;
var sentinel__GT_nil_46367 = ((function (sentinel_46365,nil__GT_sentinel_46366){
return (function (x){
if((x === sentinel_46365)){
return null;
} else {
return x;
}
});})(sentinel_46365,nil__GT_sentinel_46366))
;
/**
 * Reduces the top `n` items from `coll` of N items into in O(N.logn) time.
 *  For comparsion, (take n (sort-by ...)) is O(N.logN).
 */
taoensso.encore.reduce_top = ((function (sentinel_46365,nil__GT_sentinel_46366,sentinel__GT_nil_46367){
return (function taoensso$encore$reduce_top(var_args){
var G__45883 = arguments.length;
switch (G__45883) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});})(sentinel_46365,nil__GT_sentinel_46366,sentinel__GT_nil_46367))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_46365,nil__GT_sentinel_46366,sentinel__GT_nil_46367){
return (function (n,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,cljs.core.identity,cljs.core.compare,rf,init,coll);
});})(sentinel_46365,nil__GT_sentinel_46366,sentinel__GT_nil_46367))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = ((function (sentinel_46365,nil__GT_sentinel_46366,sentinel__GT_nil_46367){
return (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cljs.core.compare,rf,init,coll);
});})(sentinel_46365,nil__GT_sentinel_46366,sentinel__GT_nil_46367))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = ((function (sentinel_46365,nil__GT_sentinel_46366,sentinel__GT_nil_46367){
return (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count(coll);
var n__$1 = cljs.core.long$((function (){var x__4222__auto__ = coll_size;
var y__4223__auto__ = cljs.core.long$(n);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.take.cljs$core$IFn$_invoke$arity$1(n__$1),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf),init,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
} else {
return init;
}
});})(sentinel_46365,nil__GT_sentinel_46366,sentinel__GT_nil_46367))
;

taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6;

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var G__45885 = arguments.length;
switch (G__45885) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_(to)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$(to),coll));
} else {
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj,to,coll);
}
});

taoensso.encore.top_into.cljs$lang$maxFixedArity = 5;

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var G__45891 = arguments.length;
switch (G__45891) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46371 = arguments.length;
var i__4731__auto___46372 = (0);
while(true){
if((i__4731__auto___46372 < len__4730__auto___46371)){
args__4736__auto__.push((arguments[i__4731__auto___46372]));

var G__46373 = (i__4731__auto___46372 + (1));
i__4731__auto___46372 = G__46373;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__45907){
var map__45908 = p__45907;
var map__45908__$1 = (((((!((map__45908 == null))))?(((((map__45908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45908):map__45908);
var opts = map__45908__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45908__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45908__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45908__$1,new cljs.core.Keyword(null,"weeks","weeks",1844596125));
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45908__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45908__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45908__$1,new cljs.core.Keyword(null,"mins","mins",467369676));
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45908__$1,new cljs.core.Keyword(null,"secs","secs",1532330091));
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45908__$1,new cljs.core.Keyword(null,"msecs","msecs",1711980553));
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45908__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
taoensso.truss.impl.revery_QMARK_(((function (map__45908,map__45908__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_((function (){var fexpr__45910 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"msecs","msecs",1711980553),null,new cljs.core.Keyword(null,"secs","secs",1532330091),null,new cljs.core.Keyword(null,"months","months",-45571637),null,new cljs.core.Keyword(null,"days","days",-1394072564),null,new cljs.core.Keyword(null,"mins","mins",467369676),null,new cljs.core.Keyword(null,"hours","hours",58380855),null,new cljs.core.Keyword(null,"years","years",-1298579689),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null,new cljs.core.Keyword(null,"weeks","weeks",1844596125),null], null), null);
return (fexpr__45910.cljs$core$IFn$_invoke$arity$1 ? fexpr__45910.cljs$core$IFn$_invoke$arity$1(__in) : fexpr__45910.call(null,__in));
})())){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2394,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__45908,map__45908__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys(opts));

return taoensso.encore.round0((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.ms.cljs$lang$applyTo = (function (seq45906){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45906));
});

taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.console_log = (((typeof console !== 'undefined'))?(function() { 
var G__46374__delegate = function (xs){
var b2__43185__auto__ = console.log;
if(cljs.core.truth_(b2__43185__auto__)){
var f = b2__43185__auto__;
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
} else {
return null;
}
};
var G__46374 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__46375__i = 0, G__46375__a = new Array(arguments.length -  0);
while (G__46375__i < G__46375__a.length) {G__46375__a[G__46375__i] = arguments[G__46375__i + 0]; ++G__46375__i;}
  xs = new cljs.core.IndexedSeq(G__46375__a,0,null);
} 
return G__46374__delegate.call(this,xs);};
G__46374.cljs$lang$maxFixedArity = 0;
G__46374.cljs$lang$applyTo = (function (arglist__46376){
var xs = cljs.core.seq(arglist__46376);
return G__46374__delegate(xs);
});
G__46374.cljs$core$IFn$_invoke$arity$variadic = G__46374__delegate;
return G__46374;
})()
:(function() { 
var G__46377__delegate = function (xs){
return null;
};
var G__46377 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__46378__i = 0, G__46378__a = new Array(arguments.length -  0);
while (G__46378__i < G__46378__a.length) {G__46378__a[G__46378__i] = arguments[G__46378__i + 0]; ++G__46378__i;}
  xs = new cljs.core.IndexedSeq(G__46378__a,0,null);
} 
return G__46377__delegate.call(this,xs);};
G__46377.cljs$lang$maxFixedArity = 0;
G__46377.cljs$lang$applyTo = (function (arglist__46379){
var xs = cljs.core.seq(arglist__46379);
return G__46377__delegate(xs);
});
G__46377.cljs$core$IFn$_invoke$arity$variadic = G__46377__delegate;
return G__46377;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46380 = arguments.length;
var i__4731__auto___46381 = (0);
while(true){
if((i__4731__auto___46381 < len__4730__auto___46380)){
args__4736__auto__.push((arguments[i__4731__auto___46381]));

var G__46382 = (i__4731__auto___46381 + (1));
i__4731__auto___46381 = G__46382;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__45919 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__45919) : taoensso.encore.console_log.call(null,G__45919));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.logp.cljs$lang$applyTo = (function (seq45918){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45918));
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46383 = arguments.length;
var i__4731__auto___46384 = (0);
while(true){
if((i__4731__auto___46384 < len__4730__auto___46383)){
args__4736__auto__.push((arguments[i__4731__auto___46384]));

var G__46385 = (i__4731__auto___46384 + (1));
i__4731__auto___46384 = G__46385;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return alert(taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs));
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.sayp.cljs$lang$applyTo = (function (seq45921){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45921));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46386 = arguments.length;
var i__4731__auto___46387 = (0);
while(true){
if((i__4731__auto___46387 < len__4730__auto___46386)){
args__4736__auto__.push((arguments[i__4731__auto___46387]));

var G__46388 = (i__4731__auto___46387 + (1));
i__4731__auto___46387 = G__46388;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__45926 = taoensso.encore.format_STAR_(fmt,xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__45926) : taoensso.encore.console_log.call(null,G__45926));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.logf.cljs$lang$applyTo = (function (seq45922){
var G__45923 = cljs.core.first(seq45922);
var seq45922__$1 = cljs.core.next(seq45922);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45923,seq45922__$1);
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46389 = arguments.length;
var i__4731__auto___46390 = (0);
while(true){
if((i__4731__auto___46390 < len__4730__auto___46389)){
args__4736__auto__.push((arguments[i__4731__auto___46390]));

var G__46391 = (i__4731__auto___46390 + (1));
i__4731__auto___46390 = G__46391;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
return alert(taoensso.encore.format_STAR_(fmt,xs));
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.sayf.cljs$lang$applyTo = (function (seq45927){
var G__45928 = cljs.core.first(seq45927);
var seq45927__$1 = cljs.core.next(seq45927);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45928,seq45927__$1);
});

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__43185__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__43185__auto__)){
var js_win = b2__43185__auto__;
var b2__43185__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__43185__auto____$1)){
var loc = b2__43185__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"href","href",-793805698),loc.href,new cljs.core.Keyword(null,"protocol","protocol",652470118),loc.protocol,new cljs.core.Keyword(null,"hostname","hostname",2105669933),loc.hostname,new cljs.core.Keyword(null,"host","host",-1558485167),loc.host,new cljs.core.Keyword(null,"pathname","pathname",-1420497528),loc.pathname,new cljs.core.Keyword(null,"search","search",1564939822),loc.search,new cljs.core.Keyword(null,"hash","hash",-13781596),loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *  be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = cljs.core.deref(taoensso.encore.xhr_pool_).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = (((typeof FormData !== 'undefined'))?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = (((typeof File !== 'undefined'))?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq(params)){
return (function (){var G__45934 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__45934);
})().toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1(params);
var uri_with_query = ((clojure.string.blank_QMARK_(qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = ((function (url_encode){
return (function (uri,params){
if(cljs.core.truth_((taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1(params) : taoensso.encore.js_form_data_QMARK_.call(null,params)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_46392 = (function (){try{if(cljs.core.map_QMARK_(params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e45936){if((e45936 instanceof Error)){
var e = e45936;
return e;
} else {
throw e45936;

}
}})();
if((e_46392 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2702,"(map? params)",params,e_46392,null);
}

if(cljs.core.truth_((function (){var and__4120__auto__ = (typeof FormData !== 'undefined');
if(and__4120__auto__){
return taoensso.encore.rsome(taoensso.encore.js_file_QMARK_,cljs.core.vals(params));
} else {
return and__4120__auto__;
}
})())){
var form_data = (new FormData());
var seq__45938_46393 = cljs.core.seq(params);
var chunk__45939_46394 = null;
var count__45940_46395 = (0);
var i__45941_46396 = (0);
while(true){
if((i__45941_46396 < count__45940_46395)){
var vec__45950_46397 = chunk__45939_46394.cljs$core$IIndexed$_nth$arity$2(null,i__45941_46396);
var k_46398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45950_46397,(0),null);
var v_46399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45950_46397,(1),null);
form_data.append(cljs.core.name(k_46398),v_46399);


var G__46400 = seq__45938_46393;
var G__46401 = chunk__45939_46394;
var G__46402 = count__45940_46395;
var G__46403 = (i__45941_46396 + (1));
seq__45938_46393 = G__46400;
chunk__45939_46394 = G__46401;
count__45940_46395 = G__46402;
i__45941_46396 = G__46403;
continue;
} else {
var temp__5457__auto___46404 = cljs.core.seq(seq__45938_46393);
if(temp__5457__auto___46404){
var seq__45938_46405__$1 = temp__5457__auto___46404;
if(cljs.core.chunked_seq_QMARK_(seq__45938_46405__$1)){
var c__4550__auto___46406 = cljs.core.chunk_first(seq__45938_46405__$1);
var G__46407 = cljs.core.chunk_rest(seq__45938_46405__$1);
var G__46408 = c__4550__auto___46406;
var G__46409 = cljs.core.count(c__4550__auto___46406);
var G__46410 = (0);
seq__45938_46393 = G__46407;
chunk__45939_46394 = G__46408;
count__45940_46395 = G__46409;
i__45941_46396 = G__46410;
continue;
} else {
var vec__45954_46411 = cljs.core.first(seq__45938_46405__$1);
var k_46412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45954_46411,(0),null);
var v_46413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45954_46411,(1),null);
form_data.append(cljs.core.name(k_46412),v_46413);


var G__46414 = cljs.core.next(seq__45938_46405__$1);
var G__46415 = null;
var G__46416 = (0);
var G__46417 = (0);
seq__45938_46393 = G__46414;
chunk__45939_46394 = G__46415;
count__45940_46395 = G__46416;
i__45941_46396 = G__46417;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.cljs$core$IFn$_invoke$arity$1(params)], null);
}
}
});})(url_encode))
;
return ((function (url_encode,adaptive_encode){
return (function (uri,method,params){
if(cljs.core.truth_((function (){var fexpr__45962 = ((function (url_encode,adaptive_encode){
return (function (x){
var or__4131__auto__ = (x == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = (function (){var fexpr__45965 = taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_);
return (fexpr__45965.cljs$core$IFn$_invoke$arity$1 ? fexpr__45965.cljs$core$IFn$_invoke$arity$1(x) : fexpr__45965.call(null,x));
})();
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var fexpr__45966 = taoensso.truss.impl.non_throwing(taoensso.encore.js_form_data_QMARK_);
return (fexpr__45966.cljs$core$IFn$_invoke$arity$1 ? fexpr__45966.cljs$core$IFn$_invoke$arity$1(x) : fexpr__45966.call(null,x));
}
}
});})(url_encode,adaptive_encode))
;
return fexpr__45962(params);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2714,"([:or nil? map? js-form-data?] params)",params,null,null);
}

var G__45967 = method;
var G__45967__$1 = (((G__45967 instanceof cljs.core.Keyword))?G__45967.fqn:null);
switch (G__45967__$1) {
case "get":
return url_encode.cljs$core$IFn$_invoke$arity$2(uri,params);

break;
case "post":
return adaptive_encode(uri,params);

break;
case "put":
return adaptive_encode(uri,params);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45967__$1)].join('')));

}
});
;})(url_encode,adaptive_encode))
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey" :type "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback-fn [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *      ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                         :abort :http-error :exception :xhr-pool-depleted}
 *      (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__45970,callback_fn){
var map__45971 = p__45970;
var map__45971__$1 = (((((!((map__45971 == null))))?(((((map__45971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45971):map__45971);
var opts = map__45971__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45971__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45971__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45971__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45971__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45971__$1,new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"auto","auto",-566279492));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45971__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
if(cljs.core.truth_((function (){var fexpr__45975 = ((function (map__45971,map__45971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (x){
var or__4131__auto__ = (x == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__45977 = taoensso.truss.impl.non_throwing(taoensso.encore.nat_int_QMARK_);
return (fexpr__45977.cljs$core$IFn$_invoke$arity$1 ? fexpr__45977.cljs$core$IFn$_invoke$arity$1(x) : fexpr__45977.call(null,x));
}
});})(map__45971,map__45971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
return fexpr__45975(timeout_ms);
})())){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2746,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__43185__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(b2__43185__auto__)){
var xhr = b2__43185__auto__;
try{var timeout_ms__$1 = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__45984 = method;
var G__45984__$1 = (((G__45984 instanceof cljs.core.Keyword))?G__45984.fqn:null);
switch (G__45984__$1) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45984__$1)].join('')));

}
})();
var vec__45981 = (taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3(uri,method,params) : taoensso.encore.coerce_xhr_params.call(null,uri,method,params));
var xhr_uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45981,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45981,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys(((function (timeout_ms__$1,xhr_method,vec__45981,xhr_uri,xhr__QMARK_data,xhr,b2__43185__auto__,map__45971,map__45971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (p1__45968_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__45968_SHARP_));
});})(timeout_ms__$1,xhr_method,vec__45981,xhr_uri,xhr__QMARK_data,xhr,b2__43185__auto__,map__45971,map__45971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
,headers);
var headers__$2 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js(headers__$2);
})();
var _QMARK_progress_listener = (function (){var b2__43185__auto____$1 = new cljs.core.Keyword(null,"progress-fn","progress-fn",-1146547855).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__43185__auto____$1)){
var pf = b2__43185__auto____$1;
xhr.setProgressEventsEnabled(true);

var G__45986 = xhr;
var G__45987 = goog.net.EventType.PROGRESS;
var G__45988 = ((function (G__45986,G__45987,pf,b2__43185__auto____$1,timeout_ms__$1,xhr_method,vec__45981,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__43185__auto__,map__45971,map__45971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__4120__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__4120__auto__;
}
})())?(loaded / total):null);
var G__45989 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"?ratio","?ratio",-1275760831),_QMARK_ratio,new cljs.core.Keyword(null,"length-computable?","length-computable?",1915473276),length_computable_QMARK_,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),loaded,new cljs.core.Keyword(null,"total","total",1916810418),total,new cljs.core.Keyword(null,"ev","ev",-406827324),ev], null);
return (pf.cljs$core$IFn$_invoke$arity$1 ? pf.cljs$core$IFn$_invoke$arity$1(G__45989) : pf.call(null,G__45989));
});})(G__45986,G__45987,pf,b2__43185__auto____$1,timeout_ms__$1,xhr_method,vec__45981,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__43185__auto__,map__45971,map__45971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
return goog.events.listen(G__45986,G__45987,G__45988);
} else {
return null;
}
})();
var G__45990_46420 = xhr;
var G__45991_46421 = G__45990_46420;
var G__45992_46422 = goog.net.EventType.READY;
var G__45993_46423 = ((function (G__45991_46421,G__45992_46422,G__45990_46420,timeout_ms__$1,xhr_method,vec__45981,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__43185__auto__,map__45971,map__45971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (_){
return cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);
});})(G__45991_46421,G__45992_46422,G__45990_46420,timeout_ms__$1,xhr_method,vec__45981,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__43185__auto__,map__45971,map__45971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__45991_46421,G__45992_46422,G__45993_46423);

var G__45994_46424 = G__45990_46420;
var G__45995_46425 = goog.net.EventType.COMPLETE;
var G__45996_46426 = ((function (G__45994_46424,G__45995_46425,G__45990_46420,timeout_ms__$1,xhr_method,vec__45981,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__43185__auto__,map__45971,map__45971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__45997 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,new cljs.core.Keyword(null,"auto","auto",-566279492)))?resp_type:(((_QMARK_content_type == null))?new cljs.core.Keyword(null,"text","text",-1790561697):(function (){var cts = clojure.string.lower_case(cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type));
var match_QMARK_ = ((function (cts,_QMARK_content_type,success_QMARK_,_status,G__45994_46424,G__45995_46425,G__45990_46420,timeout_ms__$1,xhr_method,vec__45981,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__43185__auto__,map__45971,map__45971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (s){
return taoensso.encore.str_contains_QMARK_(cts,s);
});})(cts,_QMARK_content_type,success_QMARK_,_status,G__45994_46424,G__45995_46425,G__45990_46420,timeout_ms__$1,xhr_method,vec__45981,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__43185__auto__,map__45971,map__45971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
if(match_QMARK_("/edn")){
return new cljs.core.Keyword(null,"edn","edn",1317840885);
} else {
if(match_QMARK_("/json")){
return new cljs.core.Keyword(null,"json","json",1279968570);
} else {
if(match_QMARK_("/xml")){
return new cljs.core.Keyword(null,"xml","xml",-1170142052);
} else {
return new cljs.core.Keyword(null,"text","text",-1790561697);
}
}
}
})()));
try{var G__46002 = resp_type__$1;
var G__46002__$1 = (((G__46002 instanceof cljs.core.Keyword))?G__46002.fqn:null);
switch (G__46002__$1) {
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46002__$1)].join('')));

}
}catch (e46001){if((e46001 instanceof Error)){
var _e = e46001;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("ajax","bad-response-type","ajax/bad-response-type",789441015),resp_type__$1,new cljs.core.Keyword("ajax","resp-as-text","ajax/resp-as-text",141416819),xhr.getResponseText()], null);
} else {
throw e46001;

}
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45997,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45997,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45997,(2),null);
if(cljs.core.truth_(_QMARK_progress_listener)){
goog.events.unlistenByKey(_QMARK_progress_listener);
} else {
}

var G__46003 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"raw-resp","raw-resp",-1924342506),resp,new cljs.core.Keyword(null,"xhr","xhr",-177710851),xhr,new cljs.core.Keyword(null,"success?","success?",-122854052),success_QMARK_,new cljs.core.Keyword(null,"?status","?status",938730360),_QMARK_status,new cljs.core.Keyword(null,"?content-type","?content-type",-2129759049),_QMARK_content_type,new cljs.core.Keyword(null,"?content","?content",1697782054),_QMARK_content,new cljs.core.Keyword(null,"?error","?error",1070752222),(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,new cljs.core.Keyword(null,"exception","exception",-335277064),goog.net.ErrorCode.HTTP_ERROR,new cljs.core.Keyword(null,"http-error","http-error",-1040049553),goog.net.ErrorCode.ABORT,new cljs.core.Keyword(null,"abort","abort",521193198),goog.net.ErrorCode.TIMEOUT,new cljs.core.Keyword(null,"timeout","timeout",-318625318)]),xhr.getLastErrorCode(),new cljs.core.Keyword(null,"unknown","unknown",-935977881))))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__46003) : callback_fn.call(null,G__46003));
});})(G__45994_46424,G__45995_46425,G__45990_46420,timeout_ms__$1,xhr_method,vec__45981,xhr_uri,xhr__QMARK_data,xhr_headers,_QMARK_progress_listener,xhr,b2__43185__auto__,map__45971,map__45971__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__45994_46424,G__45995_46425,G__45996_46426);


xhr.setTimeoutInterval((function (){var or__4131__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e45979){if((e45979 instanceof Error)){
var e = e45979;
cljs.core.deref(taoensso.encore.xhr_pool_).releaseObject(xhr);

var G__45980_46428 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__45980_46428) : callback_fn.call(null,G__45980_46428));

return null;
} else {
throw e45979;

}
}} else {
var G__46006_46429 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?error","?error",1070752222),new cljs.core.Keyword(null,"xhr-pool-depleted","xhr-pool-depleted",-1812092376)], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__46006_46429) : callback_fn.call(null,G__46006_46429));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(clojure.string.replace(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),s),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46430 = arguments.length;
var i__4731__auto___46431 = (0);
while(true){
if((i__4731__auto___46431 < len__4730__auto___46430)){
args__4736__auto__.push((arguments[i__4731__auto___46431]));

var G__46432 = (i__4731__auto___46431 + (1));
i__4731__auto___46431 = G__46432;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__46010){
var vec__46011 = p__46010;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46011,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq46008){
var G__46009 = cljs.core.first(seq46008);
var seq46008__$1 = cljs.core.next(seq46008);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46009,seq46008__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode(taoensso.encore.as_qname(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode((function (){var or__4131__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__4523__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__46014(s__46015){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__46015__$1 = s__46015;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__46015__$1);
if(temp__5457__auto__){
var s__46015__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__46015__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__46015__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__46017 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__46016 = (0);
while(true){
if((i__46016 < size__4522__auto__)){
var vec__46018 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__46016);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46018,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__46017,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__4131__auto__ = cljs.core.seq(v);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__46433 = (i__46016 + (1));
i__46016 = G__46433;
continue;
} else {
var G__46434 = (i__46016 + (1));
i__46016 = G__46434;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__46017),taoensso$encore$format_query_string_$_iter__46014(cljs.core.chunk_rest(s__46015__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__46017),null);
}
} else {
var vec__46021 = cljs.core.first(s__46015__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46021,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46021,(1),null);
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__4131__auto__ = cljs.core.seq(v);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__46014(cljs.core.rest(s__46015__$2)));
} else {
var G__46435 = cljs.core.rest(s__46015__$2);
s__46015__$1 = G__46435;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__4523__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__43185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__43185__auto__)){
var cur = b2__43185__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46436 = arguments.length;
var i__4731__auto___46437 = (0);
while(true){
if((i__4731__auto___46437 < len__4730__auto___46436)){
args__4736__auto__.push((arguments[i__4731__auto___46437]));

var G__46438 = (i__4731__auto___46437 + (1));
i__4731__auto___46437 = G__46438;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__46026){
var vec__46027 = p__46026;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46027,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46027,(1),null);
if(((clojure.string.blank_QMARK_(s)) || ((!(taoensso.encore.str_contains_QMARK_(s,"=")))))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__$1,vec__46027,keywordize_QMARK_,encoding){
return (function (m,param){
var b2__43185__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__43185__auto__)){
var vec__46030 = b2__43185__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46030,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46030,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([encoding], 0)));
} else {
return m;
}
});})(s__$1,vec__46027,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
}
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq46024){
var G__46025 = cljs.core.first(seq46024);
var seq46024__$1 = cljs.core.next(seq46024);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46025,seq46024__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__46034 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46034,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46034,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__43185__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__43185__auto__)){
var qstr = b2__43185__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),"?",qstr].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_((function() { 
var G__46439__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Attempting to call uninitialized stub fn (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),")"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stub","stub",1339145807),name,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
};
var G__46439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46440__i = 0, G__46440__a = new Array(arguments.length -  0);
while (G__46440__i < G__46440__a.length) {G__46440__a[G__46440__i] = arguments[G__46440__i + 0]; ++G__46440__i;}
  args = new cljs.core.IndexedSeq(G__46440__a,0,null);
} 
return G__46439__delegate.call(this,args);};
G__46439.cljs$lang$maxFixedArity = 0;
G__46439.cljs$lang$applyTo = (function (arglist__46441){
var args = cljs.core.seq(arglist__46441);
return G__46439__delegate(args);
});
G__46439.cljs$core$IFn$_invoke$arity$variadic = G__46439__delegate;
return G__46439;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_(f)){
return f;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),f,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(f)], null));
}
});
taoensso.encore.cljs_thing = "cljs-thing";


var stubfn__46442 = taoensso.encore._new_stubfn_("stub-test");
taoensso.encore._unstub_stub_test = ((function (stubfn__46442){
return (function taoensso$encore$_unstub_stub_test(f){
return cljs.core.vreset_BANG_(stubfn__46442,taoensso.encore._assert_unstub_val(f));
});})(stubfn__46442))
;

taoensso.encore.unstub_stub_test = ((function (stubfn__46442){
return (function taoensso$encore$unstub_stub_test(f){
return taoensso.encore._unstub_stub_test(f);
});})(stubfn__46442))
;

taoensso.encore.stub_test = ((function (stubfn__46442){
return (function taoensso$encore$stub_test(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46443 = arguments.length;
var i__4731__auto___46444 = (0);
while(true){
if((i__4731__auto___46444 < len__4730__auto___46443)){
args__4736__auto__.push((arguments[i__4731__auto___46444]));

var G__46445 = (i__4731__auto___46444 + (1));
i__4731__auto___46444 = G__46445;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return taoensso.encore.stub_test.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});})(stubfn__46442))
;

taoensso.encore.stub_test.cljs$core$IFn$_invoke$arity$variadic = ((function (stubfn__46442){
return (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stubfn__46442),args);
});})(stubfn__46442))
;

taoensso.encore.stub_test.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
taoensso.encore.stub_test.cljs$lang$applyTo = ((function (stubfn__46442){
return (function (seq46037){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46037));
});})(stubfn__46442))
;


taoensso.encore._unstub_stub_test(cljs.core.identity);
/**
 * Returns (fn [?ns]) -> truthy.
 */
taoensso.encore.compile_ns_filter = (function (){var compile1 = (function (x){
if(taoensso.encore.re_pattern_QMARK_(x)){
return (function (ns_str){
return cljs.core.re_find(x,ns_str);
});
} else {
if(typeof x === 'string'){
if(taoensso.encore.str_contains_QMARK_(x,"*")){
var re = cljs.core.re_pattern(clojure.string.replace(clojure.string.replace(["^",x,"$"].join(''),".","\\."),"*","(.*)"));
return ((function (re){
return (function (ns_str){
return cljs.core.re_find(re,ns_str);
});
;})(re))
} else {
return (function (ns_str){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_str,x);
});
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected ns-pattern type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x)], null));
}
}
});
return ((function (compile1){
return (function() {
var taoensso$encore$self = null;
var taoensso$encore$self__1 = (function (ns_pattern){
var x = ns_pattern;
if(cljs.core.map_QMARK_(x)){
return taoensso$encore$self.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"whitelist","whitelist",-979294437).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"blacklist","blacklist",1248093170).cljs$core$IFn$_invoke$arity$1(x));
} else {
if(((cljs.core.vector_QMARK_(x)) || (cljs.core.set_QMARK_(x)))){
return taoensso$encore$self.cljs$core$IFn$_invoke$arity$2(x,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"*")){
return ((function (x,compile1){
return (function (_QMARK_ns){
return true;
});
;})(x,compile1))
} else {
var match_QMARK_ = compile1(x);
return ((function (match_QMARK_,x,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__46040 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns);
return (match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? match_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46040) : match_QMARK_.call(null,G__46040));
})())){
return true;
} else {
return null;
}
});
;})(match_QMARK_,x,compile1))
}
}
}
});
var taoensso$encore$self__2 = (function (whitelist,blacklist){
var white = ((cljs.core.seq(whitelist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,whitelist);
var vec__46041 = match_fns;
var seq__46042 = cljs.core.seq(vec__46041);
var first__46043 = cljs.core.first(seq__46042);
var seq__46042__$1 = cljs.core.next(seq__46042);
var m1 = first__46043;
var mn = seq__46042__$1;
if(mn){
return ((function (match_fns,vec__46041,seq__46042,first__46043,seq__46042__$1,m1,mn,compile1){
return (function (ns_str){
return taoensso.encore.rsome(((function (match_fns,vec__46041,seq__46042,first__46043,seq__46042__$1,m1,mn,compile1){
return (function (p1__46038_SHARP_){
return (p1__46038_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46038_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__46038_SHARP_.call(null,ns_str));
});})(match_fns,vec__46041,seq__46042,first__46043,seq__46042__$1,m1,mn,compile1))
,match_fns);
});
;})(match_fns,vec__46041,seq__46042,first__46043,seq__46042__$1,m1,mn,compile1))
} else {
return ((function (match_fns,vec__46041,seq__46042,first__46043,seq__46042__$1,m1,mn,compile1){
return (function (ns_str){
return (m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str));
});
;})(match_fns,vec__46041,seq__46042,first__46043,seq__46042__$1,m1,mn,compile1))
}
})():null);
var black = ((cljs.core.seq(blacklist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,blacklist);
var vec__46047 = match_fns;
var seq__46048 = cljs.core.seq(vec__46047);
var first__46049 = cljs.core.first(seq__46048);
var seq__46048__$1 = cljs.core.next(seq__46048);
var m1 = first__46049;
var mn = seq__46048__$1;
if(mn){
return ((function (match_fns,vec__46047,seq__46048,first__46049,seq__46048__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not(taoensso.encore.rsome(((function (match_fns,vec__46047,seq__46048,first__46049,seq__46048__$1,m1,mn,white,compile1){
return (function (p1__46039_SHARP_){
return (p1__46039_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46039_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__46039_SHARP_.call(null,ns_str));
});})(match_fns,vec__46047,seq__46048,first__46049,seq__46048__$1,m1,mn,white,compile1))
,match_fns));
});
;})(match_fns,vec__46047,seq__46048,first__46049,seq__46048__$1,m1,mn,white,compile1))
} else {
return ((function (match_fns,vec__46047,seq__46048,first__46049,seq__46048__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not((m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str)));
});
;})(match_fns,vec__46047,seq__46048,first__46049,seq__46048__$1,m1,mn,white,compile1))
}
})():null);
if(cljs.core.truth_((function (){var and__4120__auto__ = white;
if(cljs.core.truth_(and__4120__auto__)){
return black;
} else {
return and__4120__auto__;
}
})())){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
var ns_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns);
if(cljs.core.truth_((white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(ns_str) : white.call(null,ns_str)))){
if(cljs.core.truth_((black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(ns_str) : black.call(null,ns_str)))){
return true;
} else {
return null;
}
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(white)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__46051 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns);
return (white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(G__46051) : white.call(null,G__46051));
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(black)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__46052 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns);
return (black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(G__46052) : black.call(null,G__46052));
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
return ((function (white,black,compile1){
return (function (_QMARK_ns){
return true;
});
;})(white,black,compile1))
}
}
}
});
taoensso$encore$self = function(whitelist,blacklist){
switch(arguments.length){
case 1:
return taoensso$encore$self__1.call(this,whitelist);
case 2:
return taoensso$encore$self__2.call(this,whitelist,blacklist);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$encore$self.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$self__1;
taoensso$encore$self.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$self__2;
return taoensso$encore$self;
})()
;})(compile1))
})();

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__4434__auto__.call(null,_,msecs,f));
} else {
var m__4431__auto__ = (taoensso.encore._schedule_timeout["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__4431__auto__.call(null,_,msecs,f));
} else {
throw cljs.core.missing_protocol("ITimeoutImpl.-schedule-timeout",_);
}
}
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
});
taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
});

taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true;

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl";

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"taoensso.encore/DefaultTimeoutImpl");
});

/**
 * Positional factory function for taoensso.encore/DefaultTimeoutImpl.
 */
taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore.default_timeout_impl_ !== 'undefined')){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = ({});

taoensso.encore._tout_cancelled = ({});

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_pending) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending)))){
return new cljs.core.Keyword("timeout","pending","timeout/pending",-1523854352);
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_cancelled) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled)))){
return new cljs.core.Keyword("timeout","cancelled","timeout/cancelled",1188007279);
} else {
return cljs.core.deref(result_);
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (taoensso.encore.tf_state["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-state",_);
}
}
}
});

/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (taoensso.encore.tf_poll["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-poll",_);
}
}
}
});

/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (taoensso.encore.tf_done_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-done?",_);
}
}
}
});

/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (taoensso.encore.tf_pending_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-pending?",_);
}
}
}
});

/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancelled?",_);
}
}
}
});

/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((((!((_ == null)))) && ((!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (taoensso.encore.tf_cancel_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancel!",_);
}
}
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),self__.f,new cljs.core.Keyword(null,"udt","udt",2011712751),self__.udt], null);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result(cljs.core.deref(self__.result__));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not((function (){var G__46076 = cljs.core.deref(self__.result__);
var G__46077 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__46076,G__46077) : taoensso.encore.kw_identical_QMARK_.call(null,G__46076,G__46077));
})());
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__46078 = cljs.core.deref(self__.result__);
var G__46079 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__46078,G__46079) : taoensso.encore.kw_identical_QMARK_.call(null,G__46078,G__46079));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__46080 = cljs.core.deref(self__.result__);
var G__46081 = taoensso.encore._tout_cancelled;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__46080,G__46081) : taoensso.encore.kw_identical_QMARK_.call(null,G__46080,G__46081));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_(self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(null);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(null);
});

taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"result__","result__",1529131748,null),new cljs.core.Symbol(null,"udt","udt",-642723018,null)], null);
});

taoensso.encore.TimeoutFuture.cljs$lang$type = true;

taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture";

taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"taoensso.encore/TimeoutFuture");
});

/**
 * Positional factory function for taoensso.encore/TimeoutFuture.
 */
taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var G__46086 = arguments.length;
switch (G__46086) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3(taoensso.encore.default_timeout_impl_,msecs,f);
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$(msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(taoensso.encore._tout_pending);
var cas_f = ((function (msecs__$1,udt,result__){
return (function (){
var result_ = (new cljs.core.Delay(((function (msecs__$1,udt,result__){
return (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(msecs__$1,udt,result__))
,null));
if(cljs.core.compare_and_set_BANG_(result__,taoensso.encore._tout_pending,result_)){
return cljs.core.deref(result_);
} else {
return null;
}
});})(msecs__$1,udt,result__))
;
var impl_46447 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_46447,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3;

taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46448 = arguments.length;
var i__4731__auto___46449 = (0);
while(true){
if((i__4731__auto___46449 < len__4730__auto___46448)){
args__4736__auto__.push((arguments[i__4731__auto___46449]));

var G__46450 = (i__4731__auto___46449 + (1));
i__4731__auto___46449 = G__46450;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__46095){
var vec__46096 = p__46095;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46096,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46096,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__4131__auto__ = type;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"round","round",2009433328);
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.round.cljs$lang$applyTo = (function (seq46092){
var G__46093 = cljs.core.first(seq46092);
var seq46092__$1 = cljs.core.next(seq46092);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46093,seq46092__$1);
});


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var G__46100 = arguments.length;
switch (G__46100) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3(signf,x,y);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46452 = arguments.length;
var i__4731__auto___46453 = (0);
while(true){
if((i__4731__auto___46453 < len__4730__auto___46452)){
args__4736__auto__.push((arguments[i__4731__auto___46453]));

var G__46454 = (i__4731__auto___46453 + (1));
i__4731__auto___46453 = G__46454;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.join_once.cljs$lang$applyTo = (function (seq46101){
var G__46102 = cljs.core.first(seq46101);
var seq46101__$1 = cljs.core.next(seq46101);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46102,seq46101__$1);
});


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x)),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome((function (p__46104){
var vec__46105 = p__46104;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46105,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46105,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46105,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter(specs);
return ((function (ids_QMARK_,lfn){
return (function() { 
var G__46455__delegate = function (args){
var b2__43185__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lfn,args);
if(cljs.core.truth_(b2__43185__auto__)){
var vec__46108 = b2__43185__auto__;
var worst_sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46108,(0),null);
var backoff_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46108,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__46455 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46456__i = 0, G__46456__a = new Array(arguments.length -  0);
while (G__46456__i < G__46456__a.length) {G__46456__a[G__46456__i] = arguments[G__46456__i + 0]; ++G__46456__i;}
  args = new cljs.core.IndexedSeq(G__46456__a,0,null);
} 
return G__46455__delegate.call(this,args);};
G__46455.cljs$lang$maxFixedArity = 0;
G__46455.cljs$lang$applyTo = (function (arglist__46457){
var args = cljs.core.seq(arglist__46457);
return G__46455__delegate(args);
});
G__46455.cljs$core$IFn$_invoke$arity$variadic = G__46455__delegate;
return G__46455;
})()
;
;})(ids_QMARK_,lfn))
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_(specs);
return ((function (rl){
return (function() { 
var G__46458__delegate = function (args){
var b2__43185__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__43185__auto__)){
var backoff = b2__43185__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),null], null);
}
};
var G__46458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46459__i = 0, G__46459__a = new Array(arguments.length -  0);
while (G__46459__i < G__46459__a.length) {G__46459__a[G__46459__i] = arguments[G__46459__i + 0]; ++G__46459__i;}
  args = new cljs.core.IndexedSeq(G__46459__a,0,null);
} 
return G__46458__delegate.call(this,args);};
G__46458.cljs$lang$maxFixedArity = 0;
G__46458.cljs$lang$applyTo = (function (arglist__46460){
var args = cljs.core.seq(arglist__46460);
return G__46458__delegate(args);
});
G__46458.cljs$core$IFn$_invoke$arity$variadic = G__46458__delegate;
return G__46458;
})()
;
;})(rl))
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__46461__delegate = function (args){
var b2__43185__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__43185__auto__)){
var backoff_ms = b2__43185__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backoff-ms","backoff-ms",1679281507),backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
}
};
var G__46461 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46462__i = 0, G__46462__a = new Array(arguments.length -  0);
while (G__46462__i < G__46462__a.length) {G__46462__a[G__46462__i] = arguments[G__46462__i + 0]; ++G__46462__i;}
  args = new cljs.core.IndexedSeq(G__46462__a,0,null);
} 
return G__46461__delegate.call(this,args);};
G__46461.cljs$lang$maxFixedArity = 0;
G__46461.cljs$lang$applyTo = (function (arglist__46463){
var args = cljs.core.seq(arglist__46463);
return G__46461__delegate(args);
});
G__46461.cljs$core$IFn$_invoke$arity$variadic = G__46461__delegate;
return G__46461;
})()
;
;})(rl))
});

taoensso.encore.logging_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"debug","debug",-1608172596));

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46464 = arguments.length;
var i__4731__auto___46465 = (0);
while(true){
if((i__4731__auto___46465 < len__4730__auto___46464)){
args__4736__auto__.push((arguments[i__4731__auto___46465]));

var G__46466 = (i__4731__auto___46465 + (1));
i__4731__auto___46465 = G__46466;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__46113){
var vec__46114 = p__46113;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46114,(0),null);
var b2__43185__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__43185__auto__)){
var js_win = b2__43185__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = nattempt;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq46111){
var G__46112 = cljs.core.first(seq46111);
var seq46111__$1 = cljs.core.next(seq46111);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46112,seq46111__$1);
});


if((typeof taoensso !== 'undefined') && (typeof taoensso.encore !== 'undefined') && (typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined')){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596);
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"trace","trace",-1082747415),(1),new cljs.core.Keyword(null,"debug","debug",-1608172596),(2),new cljs.core.Keyword(null,"info","info",-317069002),(3),new cljs.core.Keyword(null,"warn","warn",-436710552),(4),new cljs.core.Keyword(null,"error","error",-978969032),(5),new cljs.core.Keyword(null,"fatal","fatal",1874419888),(6),new cljs.core.Keyword(null,"report","report",1394055010),(7)], null);
return ((function (__GT_n){
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46467 = arguments.length;
var i__4731__auto___46468 = (0);
while(true){
if((i__4731__auto___46468 < len__4730__auto___46467)){
args__4736__auto__.push((arguments[i__4731__auto___46468]));

var G__46469 = (i__4731__auto___46468 + (1));
i__4731__auto___46468 = G__46469;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__46120 = new cljs.core.Keyword(null,"trace","trace",-1082747415);
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46120) : taoensso.encore.log_QMARK_.call(null,G__46120));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.tracef.cljs$lang$applyTo = (function (seq46118){
var G__46119 = cljs.core.first(seq46118);
var seq46118__$1 = cljs.core.next(seq46118);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46119,seq46118__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46470 = arguments.length;
var i__4731__auto___46471 = (0);
while(true){
if((i__4731__auto___46471 < len__4730__auto___46470)){
args__4736__auto__.push((arguments[i__4731__auto___46471]));

var G__46472 = (i__4731__auto___46471 + (1));
i__4731__auto___46471 = G__46472;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__46123 = new cljs.core.Keyword(null,"debug","debug",-1608172596);
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46123) : taoensso.encore.log_QMARK_.call(null,G__46123));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.debugf.cljs$lang$applyTo = (function (seq46121){
var G__46122 = cljs.core.first(seq46121);
var seq46121__$1 = cljs.core.next(seq46121);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46122,seq46121__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46473 = arguments.length;
var i__4731__auto___46474 = (0);
while(true){
if((i__4731__auto___46474 < len__4730__auto___46473)){
args__4736__auto__.push((arguments[i__4731__auto___46474]));

var G__46475 = (i__4731__auto___46474 + (1));
i__4731__auto___46474 = G__46475;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__46126 = new cljs.core.Keyword(null,"info","info",-317069002);
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46126) : taoensso.encore.log_QMARK_.call(null,G__46126));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.infof.cljs$lang$applyTo = (function (seq46124){
var G__46125 = cljs.core.first(seq46124);
var seq46124__$1 = cljs.core.next(seq46124);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46125,seq46124__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46476 = arguments.length;
var i__4731__auto___46477 = (0);
while(true){
if((i__4731__auto___46477 < len__4730__auto___46476)){
args__4736__auto__.push((arguments[i__4731__auto___46477]));

var G__46478 = (i__4731__auto___46477 + (1));
i__4731__auto___46477 = G__46478;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__46129 = new cljs.core.Keyword(null,"warn","warn",-436710552);
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46129) : taoensso.encore.log_QMARK_.call(null,G__46129));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["WARN: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.warnf.cljs$lang$applyTo = (function (seq46127){
var G__46128 = cljs.core.first(seq46127);
var seq46127__$1 = cljs.core.next(seq46127);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46128,seq46127__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46479 = arguments.length;
var i__4731__auto___46480 = (0);
while(true){
if((i__4731__auto___46480 < len__4730__auto___46479)){
args__4736__auto__.push((arguments[i__4731__auto___46480]));

var G__46481 = (i__4731__auto___46480 + (1));
i__4731__auto___46480 = G__46481;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__46132 = new cljs.core.Keyword(null,"error","error",-978969032);
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46132) : taoensso.encore.log_QMARK_.call(null,G__46132));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["ERROR: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.errorf.cljs$lang$applyTo = (function (seq46130){
var G__46131 = cljs.core.first(seq46130);
var seq46130__$1 = cljs.core.next(seq46130);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46131,seq46130__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46482 = arguments.length;
var i__4731__auto___46483 = (0);
while(true){
if((i__4731__auto___46483 < len__4730__auto___46482)){
args__4736__auto__.push((arguments[i__4731__auto___46483]));

var G__46484 = (i__4731__auto___46483 + (1));
i__4731__auto___46483 = G__46484;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__46136 = new cljs.core.Keyword(null,"fatal","fatal",1874419888);
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46136) : taoensso.encore.log_QMARK_.call(null,G__46136));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,["FATAL: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq46134){
var G__46135 = cljs.core.first(seq46134);
var seq46134__$1 = cljs.core.next(seq46134);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46135,seq46134__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46485 = arguments.length;
var i__4731__auto___46486 = (0);
while(true){
if((i__4731__auto___46486 < len__4730__auto___46485)){
args__4736__auto__.push((arguments[i__4731__auto___46486]));

var G__46487 = (i__4731__auto___46486 + (1));
i__4731__auto___46486 = G__46487;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__46139 = new cljs.core.Keyword(null,"report","report",1394055010);
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__46139) : taoensso.encore.log_QMARK_.call(null,G__46139));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.reportf.cljs$lang$applyTo = (function (seq46137){
var G__46138 = cljs.core.first(seq46137);
var seq46137__$1 = cljs.core.next(seq46137);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46138,seq46137__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46488 = arguments.length;
var i__4731__auto___46489 = (0);
while(true){
if((i__4731__auto___46489 < len__4730__auto___46488)){
args__4736__auto__.push((arguments[i__4731__auto___46489]));

var G__46490 = (i__4731__auto___46489 + (1));
i__4731__auto___46489 = G__46490;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__46142){
var vec__46143 = p__46142;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46143,(0),null);
var comparator = (function (){var or__4131__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__46143,_QMARK_comparator){
return (function (p1__46088_SHARP_,p2__46089_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__46088_SHARP_,p2__46089_SHARP_) : comparator.call(null,p1__46088_SHARP_,p2__46089_SHARP_)) > (0))){
return p2__46089_SHARP_;
} else {
return p1__46088_SHARP_;
}
});})(comparator,vec__46143,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.greatest.cljs$lang$applyTo = (function (seq46140){
var G__46141 = cljs.core.first(seq46140);
var seq46140__$1 = cljs.core.next(seq46140);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46141,seq46140__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46491 = arguments.length;
var i__4731__auto___46492 = (0);
while(true){
if((i__4731__auto___46492 < len__4730__auto___46491)){
args__4736__auto__.push((arguments[i__4731__auto___46492]));

var G__46493 = (i__4731__auto___46492 + (1));
i__4731__auto___46492 = G__46493;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__46150){
var vec__46151 = p__46150;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46151,(0),null);
var comparator = (function (){var or__4131__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__46151,_QMARK_comparator){
return (function (p1__46090_SHARP_,p2__46091_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__46090_SHARP_,p2__46091_SHARP_) : comparator.call(null,p1__46090_SHARP_,p2__46091_SHARP_)) < (0))){
return p2__46091_SHARP_;
} else {
return p1__46090_SHARP_;
}
});})(comparator,vec__46151,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.least.cljs$lang$applyTo = (function (seq46147){
var G__46148 = cljs.core.first(seq46147);
var seq46147__$1 = cljs.core.next(seq46147);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46148,seq46147__$1);
});


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__4131__auto__ = x;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
var fexpr__46158 = (function (p__46159,seen__$1){
while(true){
var vec__46160 = p__46159;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46160,(0),null);
var xs__$1 = vec__46160;
var b2__43185__auto__ = cljs.core.seq(xs__$1);
if(b2__43185__auto__){
var s = b2__43185__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__46494 = cljs.core.rest(s);
var G__46495 = seen__$1;
p__46159 = G__46494;
seen__$1 = G__46495;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
});
return fexpr__46158(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var G__46164 = arguments.length;
switch (G__46164) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__46165,in$){
var vec__46166 = p__46165;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46166,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46166,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_((function (){var G__46169 = kf;
var G__46170 = new cljs.core.Keyword(null,"keywordize","keywordize",1381210758);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__46169,G__46170) : taoensso.encore.kw_identical_QMARK_.call(null,G__46169,G__46170));
})())?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46497 = arguments.length;
var i__4731__auto___46498 = (0);
while(true){
if((i__4731__auto___46498 < len__4730__auto___46497)){
args__4736__auto__.push((arguments[i__4731__auto___46498]));

var G__46499 = (i__4731__auto___46498 + (1));
i__4731__auto___46498 = G__46499;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__46173){
var vec__46174 = p__46173;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46174,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46174,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__46174,kf,vf){
return (function (_,v){
return v;
});})(vec__46174,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__46174,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__46174,kf,vf))
:(cljs.core.truth_((function (){var G__46177 = kf;
var G__46178 = new cljs.core.Keyword(null,"keywordize","keywordize",1381210758);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__46177,G__46178) : taoensso.encore.kw_identical_QMARK_.call(null,G__46177,G__46178));
})())?((function (vf__$1,vec__46174,kf,vf){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1,vec__46174,kf,vf))
:kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs(((function (vf__$1,kf__$1,vec__46174,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1,vec__46174,kf,vf))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.as_map.cljs$lang$applyTo = (function (seq46171){
var G__46172 = cljs.core.first(seq46171);
var seq46171__$1 = cljs.core.next(seq46171);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46172,seq46171__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return ((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n)));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46500 = arguments.length;
var i__4731__auto___46501 = (0);
while(true){
if((i__4731__auto___46501 < len__4730__auto___46500)){
args__4736__auto__.push((arguments[i__4731__auto___46501]));

var G__46502 = (i__4731__auto___46501 + (1));
i__4731__auto___46501 = G__46502;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
return cljs.core.deref(taoensso.encore._swap_val_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
})));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.encore.memoized.cljs$lang$applyTo = (function (seq46179){
var G__46180 = cljs.core.first(seq46179);
var seq46179__$1 = cljs.core.next(seq46179);
var G__46181 = cljs.core.first(seq46179__$1);
var seq46179__$2 = cljs.core.next(seq46179__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46180,G__46181,seq46179__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__4222__auto__ = signed_idx;
var y__4223__auto__ = max_idx;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
} else {
var x__4219__auto__ = (0);
var y__4220__auto__ = (signed_idx + max_idx);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46503 = arguments.length;
var i__4731__auto___46504 = (0);
while(true){
if((i__4731__auto___46504 < len__4730__auto___46503)){
args__4736__auto__.push((arguments[i__4731__auto___46504]));

var G__46505 = (i__4731__auto___46504 + (1));
i__4731__auto___46504 = G__46505;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__46185){
var map__46186 = p__46185;
var map__46186__$1 = (((((!((map__46186 == null))))?(((((map__46186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46186):map__46186);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46186__$1,new cljs.core.Keyword(null,"max-len","max-len",-18846016));
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46186__$1,new cljs.core.Keyword(null,"end-idx","end-idx",-85750788));
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__43644__auto__ = (start_idx_STAR_ + max_len);
var n2__43645__auto__ = xlen;
if((n1__43644__auto__ > n2__43645__auto__)){
return n2__43645__auto__;
} else {
return n1__43644__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq46182){
var G__46183 = cljs.core.first(seq46182);
var seq46182__$1 = cljs.core.next(seq46182);
var G__46184 = cljs.core.first(seq46182__$1);
var seq46182__$2 = cljs.core.next(seq46182__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46183,G__46184,seq46182__$2);
});


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46506 = arguments.length;
var i__4731__auto___46507 = (0);
while(true){
if((i__4731__auto___46507 < len__4730__auto___46506)){
args__4736__auto__.push((arguments[i__4731__auto___46507]));

var G__46508 = (i__4731__auto___46507 + (1));
i__4731__auto___46507 = G__46508;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__46191){
var vec__46192 = p__46191;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46192,(0),null);
var vec__46195 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46195,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46195,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.encore.substr.cljs$lang$applyTo = (function (seq46188){
var G__46189 = cljs.core.first(seq46188);
var seq46188__$1 = cljs.core.next(seq46188);
var G__46190 = cljs.core.first(seq46188__$1);
var seq46188__$2 = cljs.core.next(seq46188__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46189,G__46190,seq46188__$2);
});



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46509 = arguments.length;
var i__4731__auto___46510 = (0);
while(true){
if((i__4731__auto___46510 < len__4730__auto___46509)){
args__4736__auto__.push((arguments[i__4731__auto___46510]));

var G__46511 = (i__4731__auto___46510 + (1));
i__4731__auto___46510 = G__46511;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__46201){
var vec__46202 = p__46201;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46202,(0),null);
var vec__46205 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max-len","max-len",-18846016),_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46205,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46205,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq46198){
var G__46199 = cljs.core.first(seq46198);
var seq46198__$1 = cljs.core.next(seq46198);
var G__46200 = cljs.core.first(seq46198__$1);
var seq46198__$2 = cljs.core.next(seq46198__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46199,G__46200,seq46198__$2);
});


taoensso.encore.sentinel = ({});

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(taoensso.encore.sentinel_QMARK_(x)){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(taoensso.encore.singleton_QMARK_(coll)){
var vec__46210 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46210,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if(((ks__$1) && (vs__$1))){
var G__46512 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__46513 = cljs.core.next(ks__$1);
var G__46514 = cljs.core.next(vs__$1);
m = G__46512;
ks__$1 = G__46513;
vs__$1 = G__46514;
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46515 = arguments.length;
var i__4731__auto___46516 = (0);
while(true){
if((i__4731__auto___46516 < len__4730__auto___46515)){
args__4736__auto__.push((arguments[i__4731__auto___46516]));

var G__46517 = (i__4731__auto___46516 + (1));
i__4731__auto___46516 = G__46517;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__46215 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46215,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46215,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46215,(2),null);
var f = (cljs.core.truth_((function (){var G__46218 = type;
var G__46219 = new cljs.core.Keyword(null,"reset","reset",-800929946);
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__46218,G__46219) : taoensso.encore.kw_identical_QMARK_.call(null,G__46218,G__46219));
})())?((function (vec__46215,type,ks,valf){
return (function (_){
return valf;
});})(vec__46215,type,ks,valf))
:valf);
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq46213){
var G__46214 = cljs.core.first(seq46213);
var seq46213__$1 = cljs.core.next(seq46213);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46214,seq46213__$1);
});


//# sourceMappingURL=taoensso.encore.js.map
