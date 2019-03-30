goog.provide("goog.net.XhrIoPool");
goog.require("goog.net.XhrIo");
goog.require("goog.structs.PriorityPool");
/**
 @constructor
 @extends {goog.structs.PriorityPool}
 @param {goog.structs.Map=} opt_headers
 @param {number=} opt_minCount
 @param {number=} opt_maxCount
 @param {boolean=} opt_withCredentials
 */
goog.net.XhrIoPool = function(opt_headers, opt_minCount, opt_maxCount, opt_withCredentials) {
  /** @private @type {(goog.structs.Map|undefined)} */ this.headers_ = opt_headers;
  /** @private @type {boolean} */ this.withCredentials_ = !!opt_withCredentials;
  goog.structs.PriorityPool.call(this, opt_minCount, opt_maxCount);
};
goog.inherits(goog.net.XhrIoPool, goog.structs.PriorityPool);
/**
 @return {!goog.net.XhrIo}
 @override
 */
goog.net.XhrIoPool.prototype.createObject = function() {
  var xhrIo = new goog.net.XhrIo;
  var headers = this.headers_;
  if (headers) {
    headers.forEach(function(value, key) {
      xhrIo.headers.set(key, value);
    });
  }
  if (this.withCredentials_) {
    xhrIo.setWithCredentials(true);
  }
  return xhrIo;
};
/**
 @param {Object} obj
 @return {boolean}
 @override
 */
goog.net.XhrIoPool.prototype.objectCanBeReused = function(obj) {
  var xhr = /** @type {goog.net.XhrIo} */ (obj);
  return !xhr.isDisposed() && !xhr.isActive();
};

//# sourceMappingURL=goog.net.xhriopool.js.map
