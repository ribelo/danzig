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
shadow.cljs.devtools.client.node.node_eval = (function shadow$cljs$devtools$client$node$node_eval(p__41923){
var map__41924 = p__41923;
var map__41924__$1 = (((((!((map__41924 == null))))?(((((map__41924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41924):map__41924);
var msg = map__41924__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41924__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var source_map_json = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41924__$1,new cljs.core.Keyword(null,"source-map-json","source-map-json",-299460036));
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
shadow.cljs.devtools.client.node.repl_init = (function shadow$cljs$devtools$client$node$repl_init(p__41931){
var map__41932 = p__41931;
var map__41932__$1 = (((((!((map__41932 == null))))?(((((map__41932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41932):map__41932);
var msg = map__41932__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41932__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41932__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var map__41934 = repl_state;
var map__41934__$1 = (((((!((map__41934 == null))))?(((((map__41934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41934):map__41934);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41934__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var seq__41936_42100 = cljs.core.seq(repl_sources);
var chunk__41938_42101 = null;
var count__41939_42102 = (0);
var i__41940_42103 = (0);
while(true){
if((i__41940_42103 < count__41939_42102)){
var map__41948_42104 = chunk__41938_42101.cljs$core$IIndexed$_nth$arity$2(null,i__41940_42103);
var map__41948_42105__$1 = (((((!((map__41948_42104 == null))))?(((((map__41948_42104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41948_42104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41948_42104):map__41948_42104);
var src_42106 = map__41948_42105__$1;
var output_name_42107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41948_42105__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_42107)))){
shadow.cljs.devtools.client.node.closure_import(output_name_42107);


var G__42108 = seq__41936_42100;
var G__42109 = chunk__41938_42101;
var G__42110 = count__41939_42102;
var G__42111 = (i__41940_42103 + (1));
seq__41936_42100 = G__42108;
chunk__41938_42101 = G__42109;
count__41939_42102 = G__42110;
i__41940_42103 = G__42111;
continue;
} else {
var G__42112 = seq__41936_42100;
var G__42113 = chunk__41938_42101;
var G__42114 = count__41939_42102;
var G__42115 = (i__41940_42103 + (1));
seq__41936_42100 = G__42112;
chunk__41938_42101 = G__42113;
count__41939_42102 = G__42114;
i__41940_42103 = G__42115;
continue;
}
} else {
var temp__5457__auto___42116 = cljs.core.seq(seq__41936_42100);
if(temp__5457__auto___42116){
var seq__41936_42117__$1 = temp__5457__auto___42116;
if(cljs.core.chunked_seq_QMARK_(seq__41936_42117__$1)){
var c__4550__auto___42118 = cljs.core.chunk_first(seq__41936_42117__$1);
var G__42119 = cljs.core.chunk_rest(seq__41936_42117__$1);
var G__42120 = c__4550__auto___42118;
var G__42121 = cljs.core.count(c__4550__auto___42118);
var G__42122 = (0);
seq__41936_42100 = G__42119;
chunk__41938_42101 = G__42120;
count__41939_42102 = G__42121;
i__41940_42103 = G__42122;
continue;
} else {
var map__41950_42123 = cljs.core.first(seq__41936_42117__$1);
var map__41950_42124__$1 = (((((!((map__41950_42123 == null))))?(((((map__41950_42123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41950_42123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41950_42123):map__41950_42123);
var src_42125 = map__41950_42124__$1;
var output_name_42126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41950_42124__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if((!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_42126)))){
shadow.cljs.devtools.client.node.closure_import(output_name_42126);


var G__42127 = cljs.core.next(seq__41936_42117__$1);
var G__42128 = null;
var G__42129 = (0);
var G__42130 = (0);
seq__41936_42100 = G__42127;
chunk__41938_42101 = G__42128;
count__41939_42102 = G__42129;
i__41940_42103 = G__42130;
continue;
} else {
var G__42131 = cljs.core.next(seq__41936_42117__$1);
var G__42132 = null;
var G__42133 = (0);
var G__42134 = (0);
seq__41936_42100 = G__42131;
chunk__41938_42101 = G__42132;
count__41939_42102 = G__42133;
i__41940_42103 = G__42134;
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
shadow.cljs.devtools.client.node.repl_invoke = (function shadow$cljs$devtools$client$node$repl_invoke(p__41952){
var map__41953 = p__41952;
var map__41953__$1 = (((((!((map__41953 == null))))?(((((map__41953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41953):map__41953);
var msg = map__41953__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41953__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var result = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.env.repl_call(((function (map__41953,map__41953__$1,msg,id){
return (function (){
return shadow.cljs.devtools.client.node.node_eval(msg);
});})(map__41953,map__41953__$1,msg,id))
,shadow.cljs.devtools.client.env.repl_error),new cljs.core.Keyword(null,"id","id",-1388402092),id);
return shadow.cljs.devtools.client.node.ws_msg(result);
});
shadow.cljs.devtools.client.node.repl_set_ns = (function shadow$cljs$devtools$client$node$repl_set_ns(p__41955){
var map__41956 = p__41955;
var map__41956__$1 = (((((!((map__41956 == null))))?(((((map__41956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41956):map__41956);
var msg = map__41956__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41956__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});
shadow.cljs.devtools.client.node.repl_require = (function shadow$cljs$devtools$client$node$repl_require(p__41958){
var map__41959 = p__41958;
var map__41959__$1 = (((((!((map__41959 == null))))?(((((map__41959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41959):map__41959);
var msg = map__41959__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41959__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41959__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41959__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
try{var seq__41962_42135 = cljs.core.seq(sources);
var chunk__41963_42136 = null;
var count__41964_42137 = (0);
var i__41965_42138 = (0);
while(true){
if((i__41965_42138 < count__41964_42137)){
var map__41996_42139 = chunk__41963_42136.cljs$core$IIndexed$_nth$arity$2(null,i__41965_42138);
var map__41996_42140__$1 = (((((!((map__41996_42139 == null))))?(((((map__41996_42139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41996_42139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41996_42139):map__41996_42139);
var src_42141 = map__41996_42140__$1;
var provides_42142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41996_42140__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_42143 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41996_42140__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4131__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_42143)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_42142);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_42143);
} else {
}


var G__42147 = seq__41962_42135;
var G__42148 = chunk__41963_42136;
var G__42149 = count__41964_42137;
var G__42150 = (i__41965_42138 + (1));
seq__41962_42135 = G__42147;
chunk__41963_42136 = G__42148;
count__41964_42137 = G__42149;
i__41965_42138 = G__42150;
continue;
} else {
var temp__5457__auto___42151 = cljs.core.seq(seq__41962_42135);
if(temp__5457__auto___42151){
var seq__41962_42152__$1 = temp__5457__auto___42151;
if(cljs.core.chunked_seq_QMARK_(seq__41962_42152__$1)){
var c__4550__auto___42153 = cljs.core.chunk_first(seq__41962_42152__$1);
var G__42154 = cljs.core.chunk_rest(seq__41962_42152__$1);
var G__42155 = c__4550__auto___42153;
var G__42156 = cljs.core.count(c__4550__auto___42153);
var G__42157 = (0);
seq__41962_42135 = G__42154;
chunk__41963_42136 = G__42155;
count__41964_42137 = G__42156;
i__41965_42138 = G__42157;
continue;
} else {
var map__41999_42158 = cljs.core.first(seq__41962_42152__$1);
var map__41999_42159__$1 = (((((!((map__41999_42158 == null))))?(((((map__41999_42158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41999_42158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41999_42158):map__41999_42158);
var src_42160 = map__41999_42159__$1;
var provides_42161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41999_42159__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var output_name_42162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41999_42159__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
if(cljs.core.truth_((function (){var or__4131__auto__ = (!(shadow.cljs.devtools.client.node.is_loaded_QMARK_(output_name_42162)));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.some(reload_namespaces,provides_42161);
}
})())){
shadow.cljs.devtools.client.node.closure_import(output_name_42162);
} else {
}


var G__42163 = cljs.core.next(seq__41962_42152__$1);
var G__42164 = null;
var G__42165 = (0);
var G__42166 = (0);
seq__41962_42135 = G__42163;
chunk__41963_42136 = G__42164;
count__41964_42137 = G__42165;
i__41965_42138 = G__42166;
continue;
}
} else {
}
}
break;
}

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e41961){var e = e41961;
console.error("repl/require failed",e);

return shadow.cljs.devtools.client.node.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}});
shadow.cljs.devtools.client.node.build_complete = (function shadow$cljs$devtools$client$node$build_complete(p__42001){
var map__42002 = p__42001;
var map__42002__$1 = (((((!((map__42002 == null))))?(((((map__42002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42002):map__42002);
var msg = map__42002__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42002__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42002__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__42004 = info;
var map__42004__$1 = (((((!((map__42004 == null))))?(((((map__42004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42004):map__42004);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42004__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42004__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__42004,map__42004__$1,sources,compiled,map__42002,map__42002__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__42006(s__42007){
return (new cljs.core.LazySeq(null,((function (map__42004,map__42004__$1,sources,compiled,map__42002,map__42002__$1,msg,info,reload_info){
return (function (){
var s__42007__$1 = s__42007;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__42007__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__42012 = cljs.core.first(xs__6012__auto__);
var map__42012__$1 = (((((!((map__42012 == null))))?(((((map__42012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42012):map__42012);
var src = map__42012__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42012__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42012__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__42007__$1,map__42012,map__42012__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__42004,map__42004__$1,sources,compiled,map__42002,map__42002__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$node$build_complete_$_iter__42006_$_iter__42008(s__42009){
return (new cljs.core.LazySeq(null,((function (s__42007__$1,map__42012,map__42012__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__42004,map__42004__$1,sources,compiled,map__42002,map__42002__$1,msg,info,reload_info){
return (function (){
var s__42009__$1 = s__42009;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__42009__$1);
if(temp__5457__auto____$1){
var s__42009__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42009__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42009__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42011 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42010 = (0);
while(true){
if((i__42010 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42010);
cljs.core.chunk_append(b__42011,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42179 = (i__42010 + (1));
i__42010 = G__42179;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42011),shadow$cljs$devtools$client$node$build_complete_$_iter__42006_$_iter__42008(cljs.core.chunk_rest(s__42009__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42011),null);
}
} else {
var warning = cljs.core.first(s__42009__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$node$build_complete_$_iter__42006_$_iter__42008(cljs.core.rest(s__42009__$2)));
}
} else {
return null;
}
break;
}
});})(s__42007__$1,map__42012,map__42012__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__42004,map__42004__$1,sources,compiled,map__42002,map__42002__$1,msg,info,reload_info))
,null,null));
});})(s__42007__$1,map__42012,map__42012__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__42004,map__42004__$1,sources,compiled,map__42002,map__42002__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$node$build_complete_$_iter__42006(cljs.core.rest(s__42007__$1)));
} else {
var G__42180 = cljs.core.rest(s__42007__$1);
s__42007__$1 = G__42180;
continue;
}
} else {
var G__42181 = cljs.core.rest(s__42007__$1);
s__42007__$1 = G__42181;
continue;
}
} else {
return null;
}
break;
}
});})(map__42004,map__42004__$1,sources,compiled,map__42002,map__42002__$1,msg,info,reload_info))
,null,null));
});})(map__42004,map__42004__$1,sources,compiled,map__42002,map__42002__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
if(((shadow.cljs.devtools.client.env.autoload) && (((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))))){
var map__42014 = info;
var map__42014__$1 = (((((!((map__42014 == null))))?(((((map__42014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42014):map__42014);
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42014__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42014__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var files_to_require = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"output-name","output-name",-1769107767),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__42014,map__42014__$1,sources__$1,compiled__$1,map__42004,map__42004__$1,sources,compiled,warnings,map__42002,map__42002__$1,msg,info,reload_info){
return (function (p__42017){
var map__42018 = p__42017;
var map__42018__$1 = (((((!((map__42018 == null))))?(((((map__42018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42018):map__42018);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42018__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42018__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(compiled__$1,resource_id)) || (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)));
});})(map__42014,map__42014__$1,sources__$1,compiled__$1,map__42004,map__42004__$1,sources,compiled,warnings,map__42002,map__42002__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__42014,map__42014__$1,sources__$1,compiled__$1,map__42004,map__42004__$1,sources,compiled,warnings,map__42002,map__42002__$1,msg,info,reload_info){
return (function (p__42040){
var map__42041 = p__42040;
var map__42041__$1 = (((((!((map__42041 == null))))?(((((map__42041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42041):map__42041);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42041__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__42014,map__42014__$1,sources__$1,compiled__$1,map__42004,map__42004__$1,sources,compiled,warnings,map__42002,map__42002__$1,msg,info,reload_info))
,sources__$1))));
if(cljs.core.seq(files_to_require)){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$2(msg,((function (map__42014,map__42014__$1,sources__$1,compiled__$1,files_to_require,map__42004,map__42004__$1,sources,compiled,warnings,map__42002,map__42002__$1,msg,info,reload_info){
return (function (){
var seq__42045 = cljs.core.seq(files_to_require);
var chunk__42046 = null;
var count__42047 = (0);
var i__42048 = (0);
while(true){
if((i__42048 < count__42047)){
var src = chunk__42046.cljs$core$IIndexed$_nth$arity$2(null,i__42048);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__42192 = seq__42045;
var G__42193 = chunk__42046;
var G__42194 = count__42047;
var G__42195 = (i__42048 + (1));
seq__42045 = G__42192;
chunk__42046 = G__42193;
count__42047 = G__42194;
i__42048 = G__42195;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__42045);
if(temp__5457__auto__){
var seq__42045__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42045__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42045__$1);
var G__42196 = cljs.core.chunk_rest(seq__42045__$1);
var G__42197 = c__4550__auto__;
var G__42198 = cljs.core.count(c__4550__auto__);
var G__42199 = (0);
seq__42045 = G__42196;
chunk__42046 = G__42197;
count__42047 = G__42198;
i__42048 = G__42199;
continue;
} else {
var src = cljs.core.first(seq__42045__$1);
shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.node.closure_import(src);


var G__42200 = cljs.core.next(seq__42045__$1);
var G__42201 = null;
var G__42202 = (0);
var G__42203 = (0);
seq__42045 = G__42200;
chunk__42046 = G__42201;
count__42047 = G__42202;
i__42048 = G__42203;
continue;
}
} else {
return null;
}
}
break;
}
});})(map__42014,map__42014__$1,sources__$1,compiled__$1,files_to_require,map__42004,map__42004__$1,sources,compiled,warnings,map__42002,map__42002__$1,msg,info,reload_info))
);
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.node.process_message = (function shadow$cljs$devtools$client$node$process_message(p__42054){
var map__42055 = p__42054;
var map__42055__$1 = (((((!((map__42055 == null))))?(((((map__42055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42055):map__42055);
var msg = map__42055__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42055__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__42057 = type;
var G__42057__$1 = (((G__42057 instanceof cljs.core.Keyword))?G__42057.fqn:null);
switch (G__42057__$1) {
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
}catch (e42060){var e = e42060;
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
