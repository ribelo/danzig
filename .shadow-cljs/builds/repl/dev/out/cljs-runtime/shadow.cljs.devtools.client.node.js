goog.provide('shadow.cljs.devtools.client.node');
goog.require('cljs.core');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.js.shim.module$ws');
goog.require('cljs.reader');
goog.require('goog.object');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.node !== 'undefined') && (typeof shadow.cljs.devtools.client.node.client_id !== 'undefined')){
} else {
shadow.cljs.devtools.client.node.client_id = cljs.core.random_uuid();
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.node !== 'undefined') && (typeof shadow.cljs.devtools.client.node.ws_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.node.ws_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.node.ws_close = (function shadow$cljs$devtools$client$node$ws_close(){
var temp__5461__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5461__auto__ == null)){
return null;
} else {
var tcp = temp__5461__auto__;
tcp.close();

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,null);
}
});
shadow.cljs.devtools.client.node.ws_msg = (function shadow$cljs$devtools$client$node$ws_msg(msg){
var temp__5461__auto__ = cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref);
if((temp__5461__auto__ == null)){
return null;
} else {
var ws = temp__5461__auto__;
return ws.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)),((function (ws,temp__5461__auto__){
return (function (err){
if(cljs.core.truth_(err)){
return console.error("REPL msg send failed",err);
} else {
return null;
}
});})(ws,temp__5461__auto__))
);
}
});
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__41917){
var map__41918 = p__41917;
var map__41918__$1 = (((((!((map__41918 == null))))?(((((map__41918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41918):map__41918);
var msg = map__41918__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41918__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41918__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
var result = SHADOW_NODE_EVAL(js,source_map_json);
return result;
});
shadow.cljs.devtools.client.node.is_loaded_QMARK_ = (function shadow$cljs$devtools$client$node$is_loaded_QMARK_(src){
return goog.object.get(SHADOW_IMPORTED,src) === true;
});
shadow.cljs.devtools.client.node.closure_import = (function shadow$cljs$devtools$client$node$closure_import(src){
if(typeof src === 'string'){
} else {
throw (new Error("Assert failed: (string? src)"));
}

return SHADOW_IMPORT(src);
});
shadow.cljs.devtools.client.node.repl_init = (function shadow$cljs$devtools$client$node$repl_init(p__41926){
var map__41927 = p__41926;
var map__41927__$1 = (((((!((map__41927 == null))))?(((((map__41927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41927):map__41927);
var msg = map__41927__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41927__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41927__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var map__41929 = repl_state;
var map__41929__$1 = (((((!((map__41929 == null))))?(((((map__41929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41929):map__41929);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41929__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var seq__41931_42065 = cljs.core.seq(repl_sources);
var chunk__41933_42066 = null;
var count__41934_42067 = (0);
var i__41935_42068 = (0);
while(true){
if((i__41935_42068 < count__41934_42067)){
var map__41945_42069 = chunk__41933_42066.cljs$core$IIndexed$_nth$arity$2(null,i__41935_42068);
var map__41945_42070__$1 = (((((!((map__41945_42069 == null))))?(((((map__41945_42069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41945_42069.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41945_42069):map__41945_42069);
var src_42071 = map__41945_42070__$1;
var output_name_42072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41945_42070__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_42072)))){
shadow.cljs.devtools.client.node.closure_import(output_name_42072);


var G__42073 = seq__41931_42065;
var G__42074 = chunk__41933_42066;
var G__42075 = count__41934_42067;
var G__42076 = (i__41935_42068 + (1));
seq__41931_42065 = G__42073;
chunk__41933_42066 = G__42074;
count__41934_42067 = G__42075;
i__41935_42068 = G__42076;
continue;
} else {
var G__42078 = seq__41931_42065;
var G__42079 = chunk__41933_42066;
var G__42080 = count__41934_42067;
var G__42081 = (i__41935_42068 + (1));
seq__41931_42065 = G__42078;
chunk__41933_42066 = G__42079;
count__41934_42067 = G__42080;
i__41935_42068 = G__42081;
continue;
}
} else {
var temp__5457__auto___42082 = cljs.core.seq(seq__41931_42065);
if(temp__5457__auto___42082){
var seq__41931_42083__$1 = temp__5457__auto___42082;
if(cljs.core.chunked_seq_QMARK_(seq__41931_42083__$1)){
var c__4550__auto___42084 = cljs.core.chunk_first(seq__41931_42083__$1);
var G__42085 = cljs.core.chunk_rest(seq__41931_42083__$1);
var G__42086 = c__4550__auto___42084;
var G__42087 = cljs.core.count(c__4550__auto___42084);
var G__42088 = (0);
seq__41931_42065 = G__42085;
chunk__41933_42066 = G__42086;
count__41934_42067 = G__42087;
i__41935_42068 = G__42088;
continue;
} else {
var map__41947_42089 = cljs.core.first(seq__41931_42083__$1);
var map__41947_42090__$1 = (((((!((map__41947_42089 == null))))?(((((map__41947_42089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41947_42089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41947_42089):map__41947_42089);
var src_42091 = map__41947_42090__$1;
var output_name_42092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41947_42090__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_42092)))){
shadow.cljs.devtools.client.node.closure_import(output_name_42092);


var G__42093 = cljs.core.next(seq__41931_42083__$1);
var G__42094 = null;
var G__42095 = (0);
var G__42096 = (0);
seq__41931_42065 = G__42093;
chunk__41933_42066 = G__42094;
count__41934_42067 = G__42095;
i__41935_42068 = G__42096;
continue;
} else {
var G__42097 = cljs.core.next(seq__41931_42083__$1);
var G__42098 = null;
var G__42099 = (0);
var G__42100 = (0);
seq__41931_42065 = G__42097;
chunk__41933_42066 = G__42098;
count__41934_42067 = G__42099;
i__41935_42068 = G__42100;
continue;
}
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_invoke = (function shadow$cljs$devtools$client$node$repl_invoke(p__41951){
var map__41952 = p__41951;
var map__41952__$1 = (((((!((map__41952 == null))))?(((((map__41952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41952):map__41952);
var msg = map__41952__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41952__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.env.repl_call(((function (map__41952,map__41952__$1,msg,id){
return (function (){
return shadow.cljs.devtools.client.node.node_eval(msg);
});})(map__41952,map__41952__$1,msg,id))
,shadow.cljs.devtools.client.env.repl_error),new cljs.core.Keyword(null,"id","id",-1388402092),id);
return shadow.cljs.devtools.client.node.ws_msg(result);
});
shadow.cljs.devtools.client.node.repl_set_ns = (function shadow$cljs$devtools$client$node$repl_set_ns(p__41954){
var map__41955 = p__41954;
var map__41955__$1 = (((((!((map__41955 == null))))?(((((map__41955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41955):map__41955);
var msg = map__41955__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41955__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_require = (function shadow$cljs$devtools$client$node$repl_require(p__41957){
var map__41958 = p__41957;
var map__41958__$1 = (((((!((map__41958 == null))))?(((((map__41958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41958):map__41958);
var msg = map__41958__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41958__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41958__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41958__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
try{var seq__41965_42124 = cljs.core.seq(sources);
var chunk__41966_42125 = null;
var count__41967_42126 = (0);
var i__41968_42127 = (0);
while(true){
if((i__41968_42127 < count__41967_42126)){
var map__41977_42128 = chunk__41966_42125.cljs$core$IIndexed$_nth$arity$2(null,i__41968_42127);
var map__41977_42129__$1 = (((((!((map__41977_42128 == null))))?(((((map__41977_42128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41977_42128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41977_42128):map__41977_42128);
var src_42130 = map__41977_42129__$1;
var provides_42131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41977_42129__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_42132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41977_42129__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4131__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_42132)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_42131);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_42132);
} else {
}


var G__42133 = seq__41965_42124;
var G__42134 = chunk__41966_42125;
var G__42135 = count__41967_42126;
var G__42136 = (i__41968_42127 + (1));
seq__41965_42124 = G__42133;
chunk__41966_42125 = G__42134;
count__41967_42126 = G__42135;
i__41968_42127 = G__42136;
continue;
} else {
var temp__5457__auto___42137 = cljs.core.seq(seq__41965_42124);
if(temp__5457__auto___42137){
var seq__41965_42138__$1 = temp__5457__auto___42137;
if(cljs.core.chunked_seq_QMARK_(seq__41965_42138__$1)){
var c__4550__auto___42139 = cljs.core.chunk_first(seq__41965_42138__$1);
var G__42140 = cljs.core.chunk_rest(seq__41965_42138__$1);
var G__42141 = c__4550__auto___42139;
var G__42142 = cljs.core.count(c__4550__auto___42139);
var G__42143 = (0);
seq__41965_42124 = G__42140;
chunk__41966_42125 = G__42141;
count__41967_42126 = G__42142;
i__41968_42127 = G__42143;
continue;
} else {
var map__41998_42144 = cljs.core.first(seq__41965_42138__$1);
var map__41998_42145__$1 = (((((!((map__41998_42144 == null))))?(((((map__41998_42144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41998_42144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41998_42144):map__41998_42144);
var src_42146 = map__41998_42145__$1;
var provides_42147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41998_42145__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_42148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41998_42145__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4131__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_42148)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_42147);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_42148);
} else {
}


var G__42149 = cljs.core.next(seq__41965_42138__$1);
var G__42150 = null;
var G__42151 = (0);
var G__42152 = (0);
seq__41965_42124 = G__42149;
chunk__41966_42125 = G__42150;
count__41967_42126 = G__42151;
i__41968_42127 = G__42152;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e41960){var e = e41960;
console.error("repl/require failed",e);

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}});
shadow.cljs.devtools.client.node.build_complete = (function shadow$cljs$devtools$client$node$build_complete(p__42000){
var map__42001 = p__42000;
var map__42001__$1 = (((((!((map__42001 == null))))?(((((map__42001.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42001.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42001):map__42001);
var msg = map__42001__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42001__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42001__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__42003 = info;
var map__42003__$1 = (((((!((map__42003 == null))))?(((((map__42003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42003):map__42003);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42003__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42003__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__42003,map__42003__$1,sources,compiled,map__42001,map__42001__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__42005(s__42006){
return (new cljs.core.LazySeq(null,((function (map__42003,map__42003__$1,sources,compiled,map__42001,map__42001__$1,msg,info,reload_info){
return (function (){
var s__42006__$1 = s__42006;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__42006__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__42011 = cljs.core.first(xs__6012__auto__);
var map__42011__$1 = (((((!((map__42011 == null))))?(((((map__42011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42011):map__42011);
var src = map__42011__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42011__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42011__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__42006__$1,map__42011,map__42011__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__42003,map__42003__$1,sources,compiled,map__42001,map__42001__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__42005_$_iter__42007(s__42008){
return (new cljs.core.LazySeq(null,((function (s__42006__$1,map__42011,map__42011__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__42003,map__42003__$1,sources,compiled,map__42001,map__42001__$1,msg,info,reload_info){
return (function (){
var s__42008__$1 = s__42008;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__42008__$1);
if(temp__5457__auto____$1){
var s__42008__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42008__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42008__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42010 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42009 = (0);
while(true){
if((i__42009 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42009);
cljs.core.chunk_append(b__42010,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42161 = (i__42009 + (1));
i__42009 = G__42161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42010),shadow$cljs$devtools$client$node$build_complete_$_iter__42005_$_iter__42007(cljs.core.chunk_rest(s__42008__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42010),null);
}
} else {
var warning = cljs.core.first(s__42008__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$node$build_complete_$_iter__42005_$_iter__42007(cljs.core.rest(s__42008__$2)));
}
} else {
return null;
}
break;
}
});})(s__42006__$1,map__42011,map__42011__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__42003,map__42003__$1,sources,compiled,map__42001,map__42001__$1,msg,info,reload_info))
,null,null));
});})(s__42006__$1,map__42011,map__42011__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__42003,map__42003__$1,sources,compiled,map__42001,map__42001__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$node$build_complete_$_iter__42005(cljs.core.rest(s__42006__$1)));
} else {
var G__42165 = cljs.core.rest(s__42006__$1);
s__42006__$1 = G__42165;
continue;
}
} else {
var G__42166 = cljs.core.rest(s__42006__$1);
s__42006__$1 = G__42166;
continue;
}
} else {
return null;
}
break;
}
});})(map__42003,map__42003__$1,sources,compiled,map__42001,map__42001__$1,msg,info,reload_info))
,null,null));
});})(map__42003,map__42003__$1,sources,compiled,map__42001,map__42001__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var map__42013 = info;
var map__42013__$1 = (((((!((map__42013 == null))))?(((((map__42013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42013):map__42013);
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42013__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42013__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__42013,map__42013__$1,sources__$1,compiled__$1,map__42003,map__42003__$1,sources,compiled,warnings,map__42001,map__42001__$1,msg,info,reload_info){
return (function (p__42015){
var map__42016 = p__42015;
var map__42016__$1 = (((((!((map__42016 == null))))?(((((map__42016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42016):map__42016);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42016__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42016__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled__$1,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
});})(map__42013,map__42013__$1,sources__$1,compiled__$1,map__42003,map__42003__$1,sources,compiled,warnings,map__42001,map__42001__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__42013,map__42013__$1,sources__$1,compiled__$1,map__42003,map__42003__$1,sources,compiled,warnings,map__42001,map__42001__$1,msg,info,reload_info){
return (function (p__42019){
var map__42020 = p__42019;
var map__42020__$1 = (((((!((map__42020 == null))))?(((((map__42020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42020):map__42020);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42020__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__42013,map__42013__$1,sources__$1,compiled__$1,map__42003,map__42003__$1,sources,compiled,warnings,map__42001,map__42001__$1,msg,info,reload_info))
,sources__$1))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,((function (map__42013,map__42013__$1,sources__$1,compiled__$1,files_to_require,map__42003,map__42003__$1,sources,compiled,warnings,map__42001,map__42001__$1,msg,info,reload_info){
return (function (){
var seq__42022 = cljs.core.seq(files_to_require);
var chunk__42023 = null;
var count__42024 = (0);
var i__42025 = (0);
while(true){
if((i__42025 < count__42024)){
var src = chunk__42023.cljs$core$IIndexed$_nth$arity$2(null,i__42025);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__42180 = seq__42022;
var G__42181 = chunk__42023;
var G__42182 = count__42024;
var G__42183 = (i__42025 + (1));
seq__42022 = G__42180;
chunk__42023 = G__42181;
count__42024 = G__42182;
i__42025 = G__42183;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__42022);
if(temp__5457__auto__){
var seq__42022__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42022__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42022__$1);
var G__42184 = cljs.core.chunk_rest(seq__42022__$1);
var G__42185 = c__4550__auto__;
var G__42186 = cljs.core.count(c__4550__auto__);
var G__42187 = (0);
seq__42022 = G__42184;
chunk__42023 = G__42185;
count__42024 = G__42186;
i__42025 = G__42187;
continue;
} else {
var src = cljs.core.first(seq__42022__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__42188 = cljs.core.next(seq__42022__$1);
var G__42189 = null;
var G__42190 = (0);
var G__42191 = (0);
seq__42022 = G__42188;
chunk__42023 = G__42189;
count__42024 = G__42190;
i__42025 = G__42191;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__42013,map__42013__$1,sources__$1,compiled__$1,files_to_require,map__42003,map__42003__$1,sources,compiled,warnings,map__42001,map__42001__$1,msg,info,reload_info))
);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.process_message = (function shadow$cljs$devtools$client$node$process_message(p__42035){
var map__42036 = p__42035;
var map__42036__$1 = (((((!((map__42036 == null))))?(((((map__42036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42036):map__42036);
var msg = map__42036__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42036__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__42039 = type;
var G__42039__$1 = (((G__42039 instanceof cljs.core.Keyword))?G__42039.fqn:null);
switch (G__42039__$1) {
case "repl/init":
return shadow.cljs.devtools.client.node.repl_init(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.node.repl_invoke(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.node.repl_set_ns(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.node.repl_require(msg);

break;
case "build-configure":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-start":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "build-complete":
return shadow.cljs.devtools.client.node.build_complete(msg);

break;
case "build-failure":
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

break;
case "worker-shutdown":
return cljs.core.deref(shadow.cljs.devtools.client.node.ws_ref).terminate();

break;
default:
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"repl-unknown","repl-unknown",-1898463611),msg], null)], 0));

}
});
shadow.cljs.devtools.client.node.ws_connect = (function shadow$cljs$devtools$client$node$ws_connect(){
var url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"node","node",581201198));
var client = (new shadow.js.shim.module$ws(url,cljs.core.PersistentVector.EMPTY));
client.on("open",((function (url,client){
return (function (){
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.node.ws_ref,client);
});})(url,client))
);

client.on("unexpected-response",((function (url,client){
return (function (req,res){
var status = res.statusCode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((406),status)){
return console.log("REPL connection rejected, probably stale JS connecting to new server.");
} else {
return console.log("REPL unexpected error",res.statusCode);
}
});})(url,client))
);

client.on("message",((function (url,client){
return (function (data,flags){
try{return shadow.cljs.devtools.client.env.process_ws_msg(data,shadow.cljs.devtools.client.node.process_message);
}catch (e42062){var e = e42062;
return console.error("failed to process message",data,e);
}});})(url,client))
);

client.on("close",((function (url,client){
return (function (){
return console.log("REPL client disconnected");
});})(url,client))
);

return client.on("error",((function (url,client){
return (function (err){
return console.log("REPL client error",err);
});})(url,client))
);
});
if(shadow.cljs.devtools.client.env.enabled){
shadow.cljs.devtools.client.node.ws_close();

shadow.cljs.devtools.client.node.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.node.js.map
