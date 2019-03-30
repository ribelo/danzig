goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width,cljs.core.count(s))){
return s;
} else {
if((width < cljs.core.count(s))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__41268 = b.append("0");
b = G__41268;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod(num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return (!(cljs.reader.divisible_QMARK_(num,div)));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
return ((cljs.reader.divisible_QMARK_(year,(4))) && (((cljs.reader.indivisible_QMARK_(year,(100))) || (cljs.reader.divisible_QMARK_(year,(400))))));
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not(isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if((((low <= n)) && ((n <= high)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__41146 = cljs.core.re_matches(cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41146,(0),null);
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41146,(1),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41146,(2),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41146,(3),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41146,(4),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41146,(5),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41146,(6),null);
var fraction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41146,(7),null);
var offset_sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41146,(8),null);
var offset_hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41146,(9),null);
var offset_minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41146,(10),null);
var v = vec__41146;
if(cljs.core.not(v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int(years);
var months__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(months);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(days);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(hours);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(minutes);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(seconds);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(cljs.reader.zero_fill_right_and_truncate(fraction,(3)));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(offset_hours);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__4131__auto__ = cljs.reader.parse_int(offset_minutes);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check((1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check((1),days__$1,(function (){var G__41149 = months__$1;
var G__41150 = cljs.reader.leap_year_QMARK_(years__$1);
return (cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2 ? cljs.reader.days_in_month.cljs$core$IFn$_invoke$arity$2(G__41149,G__41150) : cljs.reader.days_in_month.call(null,G__41149,G__41150));
})(),"timestamp day field must be in range 1..last day in month"),cljs.reader.check((0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check((0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check((0),seconds__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check((0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__5455__auto__ = cljs.reader.parse_and_validate_timestamp(ts);
if(cljs.core.truth_(temp__5455__auto__)){
var vec__41151 = temp__5455__auto__;
var years = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41151,(0),null);
var months = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41151,(1),null);
var days = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41151,(2),null);
var hours = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41151,(3),null);
var minutes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41151,(4),null);
var seconds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41151,(5),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41151,(6),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41151,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp(s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_(elems)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_(form)){
var arr = [];
var seq__41170_41360 = cljs.core.seq(form);
var chunk__41171_41361 = null;
var count__41172_41362 = (0);
var i__41173_41363 = (0);
while(true){
if((i__41173_41363 < count__41172_41362)){
var x_41364 = chunk__41171_41361.cljs$core$IIndexed$_nth$arity$2(null,i__41173_41363);
arr.push(x_41364);


var G__41365 = seq__41170_41360;
var G__41366 = chunk__41171_41361;
var G__41367 = count__41172_41362;
var G__41368 = (i__41173_41363 + (1));
seq__41170_41360 = G__41365;
chunk__41171_41361 = G__41366;
count__41172_41362 = G__41367;
i__41173_41363 = G__41368;
continue;
} else {
var temp__5457__auto___41369 = cljs.core.seq(seq__41170_41360);
if(temp__5457__auto___41369){
var seq__41170_41370__$1 = temp__5457__auto___41369;
if(cljs.core.chunked_seq_QMARK_(seq__41170_41370__$1)){
var c__4550__auto___41371 = cljs.core.chunk_first(seq__41170_41370__$1);
var G__41372 = cljs.core.chunk_rest(seq__41170_41370__$1);
var G__41373 = c__4550__auto___41371;
var G__41374 = cljs.core.count(c__4550__auto___41371);
var G__41375 = (0);
seq__41170_41360 = G__41372;
chunk__41171_41361 = G__41373;
count__41172_41362 = G__41374;
i__41173_41363 = G__41375;
continue;
} else {
var x_41376 = cljs.core.first(seq__41170_41370__$1);
arr.push(x_41376);


var G__41377 = cljs.core.next(seq__41170_41370__$1);
var G__41378 = null;
var G__41379 = (0);
var G__41380 = (0);
seq__41170_41360 = G__41377;
chunk__41171_41361 = G__41378;
count__41172_41362 = G__41379;
i__41173_41363 = G__41380;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_(form)){
var obj = ({});
var seq__41176_41381 = cljs.core.seq(form);
var chunk__41177_41382 = null;
var count__41178_41383 = (0);
var i__41179_41384 = (0);
while(true){
if((i__41179_41384 < count__41178_41383)){
var vec__41217_41386 = chunk__41177_41382.cljs$core$IIndexed$_nth$arity$2(null,i__41179_41384);
var k_41387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41217_41386,(0),null);
var v_41388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41217_41386,(1),null);
var G__41220_41389 = obj;
var G__41221_41390 = cljs.core.name(k_41387);
var G__41222_41391 = v_41388;
goog.object.set(G__41220_41389,G__41221_41390,G__41222_41391);


var G__41392 = seq__41176_41381;
var G__41393 = chunk__41177_41382;
var G__41394 = count__41178_41383;
var G__41395 = (i__41179_41384 + (1));
seq__41176_41381 = G__41392;
chunk__41177_41382 = G__41393;
count__41178_41383 = G__41394;
i__41179_41384 = G__41395;
continue;
} else {
var temp__5457__auto___41398 = cljs.core.seq(seq__41176_41381);
if(temp__5457__auto___41398){
var seq__41176_41399__$1 = temp__5457__auto___41398;
if(cljs.core.chunked_seq_QMARK_(seq__41176_41399__$1)){
var c__4550__auto___41400 = cljs.core.chunk_first(seq__41176_41399__$1);
var G__41402 = cljs.core.chunk_rest(seq__41176_41399__$1);
var G__41403 = c__4550__auto___41400;
var G__41404 = cljs.core.count(c__4550__auto___41400);
var G__41405 = (0);
seq__41176_41381 = G__41402;
chunk__41177_41382 = G__41403;
count__41178_41383 = G__41404;
i__41179_41384 = G__41405;
continue;
} else {
var vec__41226_41408 = cljs.core.first(seq__41176_41399__$1);
var k_41409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41226_41408,(0),null);
var v_41410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41226_41408,(1),null);
var G__41229_41412 = obj;
var G__41230_41413 = cljs.core.name(k_41409);
var G__41231_41414 = v_41410;
goog.object.set(G__41229_41412,G__41230_41413,G__41231_41414);


var G__41415 = cljs.core.next(seq__41176_41399__$1);
var G__41416 = null;
var G__41417 = (0);
var G__41418 = (0);
seq__41176_41381 = G__41415;
chunk__41177_41382 = G__41416;
count__41178_41383 = G__41417;
i__41179_41384 = G__41418;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid(uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY], 0)));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__41239 = arguments.length;
switch (G__41239) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__41242,reader){
var map__41243 = p__41242;
var map__41243__$1 = (((((!((map__41243 == null))))?(((((map__41243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41243):map__41243);
var opts = map__41243__$1;
var eof = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41243__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),((function (map__41243,map__41243__$1,opts,eof){
return (function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
});})(map__41243,map__41243__$1,opts,eof))
),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.cljs$core$IFn$_invoke$arity$4(reader,eof_error_QMARK_,eof,cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null)], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})));
});

cljs.reader.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__41248 = arguments.length;
switch (G__41248) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts], 0)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),m], 0));
})),s);
});

cljs.reader.read_string.cljs$lang$maxFixedArity = 2;

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});

//# sourceMappingURL=cljs.reader.js.map
