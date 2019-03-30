goog.provide("goog.structs.Node");
/**
 @constructor
 @param {K} key
 @param {V} value
 @template K,V
 */
goog.structs.Node = function(key, value) {
  /** @private @type {K} */ this.key_ = key;
  /** @private @type {V} */ this.value_ = value;
};
/**
 @return {K}
 */
goog.structs.Node.prototype.getKey = function() {
  return this.key_;
};
/**
 @return {V}
 */
goog.structs.Node.prototype.getValue = function() {
  return this.value_;
};
/**
 @return {!goog.structs.Node<K,V>}
 */
goog.structs.Node.prototype.clone = function() {
  return new goog.structs.Node(this.key_, this.value_);
};

//# sourceMappingURL=goog.structs.node.js.map
