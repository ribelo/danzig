goog.provide("goog.structs.Set");
goog.require("goog.structs");
goog.require("goog.structs.Collection");
goog.require("goog.structs.Map");
/**
 @final
 @constructor
 @implements {goog.structs.Collection<T>}
 @param {(Array<T>|Object<?,T>)=} opt_values
 @template T
 @deprecated This type is misleading: use ES6 Set instead.
 */
goog.structs.Set = function(opt_values) {
  this.map_ = new goog.structs.Map;
  if (opt_values) {
    this.addAll(opt_values);
  }
};
/** @private @const @type {function(?Object):number} */ goog.structs.Set.getUid_ = goog.getUid;
/**
 @private
 @param {*} val
 @return {string}
 */
goog.structs.Set.getKey_ = function(val) {
  var type = typeof val;
  if (type == "object" && val || type == "function") {
    return "o" + goog.structs.Set.getUid_(/** @type {Object} */ (val));
  } else {
    return type.substr(0, 1) + val;
  }
};
/**
 @return {number}
 @override
 */
goog.structs.Set.prototype.getCount = function() {
  return this.map_.getCount();
};
/**
 @param {T} element
 @override
 */
goog.structs.Set.prototype.add = function(element) {
  this.map_.set(goog.structs.Set.getKey_(element), element);
};
/**
 @param {(Array<T>|goog.structs.Collection<T>|Object<?,T>)} col
 */
goog.structs.Set.prototype.addAll = function(col) {
  var values = goog.structs.getValues(col);
  var l = values.length;
  for (var i = 0; i < l; i++) {
    this.add(values[i]);
  }
};
/**
 @param {(Array<T>|goog.structs.Collection<T>|Object<?,T>)} col
 */
goog.structs.Set.prototype.removeAll = function(col) {
  var values = goog.structs.getValues(col);
  var l = values.length;
  for (var i = 0; i < l; i++) {
    this.remove(values[i]);
  }
};
/**
 @param {T} element
 @return {boolean}
 @override
 */
goog.structs.Set.prototype.remove = function(element) {
  return this.map_.remove(goog.structs.Set.getKey_(element));
};
goog.structs.Set.prototype.clear = function() {
  this.map_.clear();
};
/**
 @return {boolean}
 */
goog.structs.Set.prototype.isEmpty = function() {
  return this.map_.isEmpty();
};
/**
 @param {T} element
 @return {boolean}
 @override
 */
goog.structs.Set.prototype.contains = function(element) {
  return this.map_.containsKey(goog.structs.Set.getKey_(element));
};
/**
 @param {(goog.structs.Collection<T>|Object)} col
 @return {boolean}
 */
goog.structs.Set.prototype.containsAll = function(col) {
  return goog.structs.every(col, this.contains, this);
};
/**
 @param {(Array<S>|Object<?,S>)} col
 @return {!goog.structs.Set<(T|S)>}
 @template S
 */
goog.structs.Set.prototype.intersection = function(col) {
  var result = new goog.structs.Set;
  var values = goog.structs.getValues(col);
  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    if (this.contains(value)) {
      result.add(value);
    }
  }
  return result;
};
/**
 @param {(Array<T>|goog.structs.Collection<T>|Object<?,T>)} col
 @return {!goog.structs.Set}
 */
goog.structs.Set.prototype.difference = function(col) {
  var result = this.clone();
  result.removeAll(col);
  return result;
};
/**
 @return {!Array<T>}
 */
goog.structs.Set.prototype.getValues = function() {
  return this.map_.getValues();
};
/**
 @return {!goog.structs.Set<T>}
 */
goog.structs.Set.prototype.clone = function() {
  return new goog.structs.Set(this);
};
/**
 @param {(goog.structs.Collection<T>|Object)} col
 @return {boolean}
 */
goog.structs.Set.prototype.equals = function(col) {
  return this.getCount() == goog.structs.getCount(col) && this.isSubsetOf(col);
};
/**
 @param {(goog.structs.Collection<T>|Object)} col
 @return {boolean}
 */
goog.structs.Set.prototype.isSubsetOf = function(col) {
  var colCount = goog.structs.getCount(col);
  if (this.getCount() > colCount) {
    return false;
  }
  if (!(col instanceof goog.structs.Set) && colCount > 5) {
    col = new goog.structs.Set(col);
  }
  return goog.structs.every(this, function(value) {
    return goog.structs.contains(col, value);
  });
};
/**
 @param {boolean=} opt_keys
 @return {!goog.iter.Iterator}
 */
goog.structs.Set.prototype.__iterator__ = function(opt_keys) {
  return this.map_.__iterator__(false);
};

//# sourceMappingURL=goog.structs.set.js.map
