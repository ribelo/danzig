goog.provide("goog.structs.Heap");
goog.require("goog.array");
goog.require("goog.object");
goog.require("goog.structs.Node");
/**
 @constructor
 @param {(goog.structs.Heap|Object)=} opt_heap
 @template K,V
 */
goog.structs.Heap = function(opt_heap) {
  /** @private @type {Array<goog.structs.Node>} */ this.nodes_ = [];
  if (opt_heap) {
    this.insertAll(opt_heap);
  }
};
/**
 @param {K} key
 @param {V} value
 */
goog.structs.Heap.prototype.insert = function(key, value) {
  var node = new goog.structs.Node(key, value);
  var nodes = this.nodes_;
  nodes.push(node);
  this.moveUp_(nodes.length - 1);
};
/**
 @param {(goog.structs.Heap|Object)} heap
 */
goog.structs.Heap.prototype.insertAll = function(heap) {
  var keys, values;
  if (heap instanceof goog.structs.Heap) {
    keys = heap.getKeys();
    values = heap.getValues();
    if (this.getCount() <= 0) {
      var nodes = this.nodes_;
      for (var i = 0; i < keys.length; i++) {
        nodes.push(new goog.structs.Node(keys[i], values[i]));
      }
      return;
    }
  } else {
    keys = goog.object.getKeys(heap);
    values = goog.object.getValues(heap);
  }
  for (var i = 0; i < keys.length; i++) {
    this.insert(keys[i], values[i]);
  }
};
/**
 @return {V}
 */
goog.structs.Heap.prototype.remove = function() {
  var nodes = this.nodes_;
  var count = nodes.length;
  var rootNode = nodes[0];
  if (count <= 0) {
    return undefined;
  } else {
    if (count == 1) {
      goog.array.clear(nodes);
    } else {
      nodes[0] = nodes.pop();
      this.moveDown_(0);
    }
  }
  return rootNode.getValue();
};
/**
 @return {V}
 */
goog.structs.Heap.prototype.peek = function() {
  var nodes = this.nodes_;
  if (nodes.length == 0) {
    return undefined;
  }
  return nodes[0].getValue();
};
/**
 @return {K}
 */
goog.structs.Heap.prototype.peekKey = function() {
  return this.nodes_[0] && this.nodes_[0].getKey();
};
/**
 @private
 @param {number} index
 */
goog.structs.Heap.prototype.moveDown_ = function(index) {
  var nodes = this.nodes_;
  var count = nodes.length;
  var node = nodes[index];
  while (index < count >> 1) {
    var leftChildIndex = this.getLeftChildIndex_(index);
    var rightChildIndex = this.getRightChildIndex_(index);
    var smallerChildIndex = rightChildIndex < count && nodes[rightChildIndex].getKey() < nodes[leftChildIndex].getKey() ? rightChildIndex : leftChildIndex;
    if (nodes[smallerChildIndex].getKey() > node.getKey()) {
      break;
    }
    nodes[index] = nodes[smallerChildIndex];
    index = smallerChildIndex;
  }
  nodes[index] = node;
};
/**
 @private
 @param {number} index
 */
goog.structs.Heap.prototype.moveUp_ = function(index) {
  var nodes = this.nodes_;
  var node = nodes[index];
  while (index > 0) {
    var parentIndex = this.getParentIndex_(index);
    if (nodes[parentIndex].getKey() > node.getKey()) {
      nodes[index] = nodes[parentIndex];
      index = parentIndex;
    } else {
      break;
    }
  }
  nodes[index] = node;
};
/**
 @private
 @param {number} index
 @return {number}
 */
goog.structs.Heap.prototype.getLeftChildIndex_ = function(index) {
  return index * 2 + 1;
};
/**
 @private
 @param {number} index
 @return {number}
 */
goog.structs.Heap.prototype.getRightChildIndex_ = function(index) {
  return index * 2 + 2;
};
/**
 @private
 @param {number} index
 @return {number}
 */
goog.structs.Heap.prototype.getParentIndex_ = function(index) {
  return index - 1 >> 1;
};
/**
 @return {!Array<V>}
 */
goog.structs.Heap.prototype.getValues = function() {
  var nodes = this.nodes_;
  var rv = [];
  var l = nodes.length;
  for (var i = 0; i < l; i++) {
    rv.push(nodes[i].getValue());
  }
  return rv;
};
/**
 @return {!Array<K>}
 */
goog.structs.Heap.prototype.getKeys = function() {
  var nodes = this.nodes_;
  var rv = [];
  var l = nodes.length;
  for (var i = 0; i < l; i++) {
    rv.push(nodes[i].getKey());
  }
  return rv;
};
/**
 @param {V} val
 @return {boolean}
 */
goog.structs.Heap.prototype.containsValue = function(val) {
  return goog.array.some(this.nodes_, function(node) {
    return node.getValue() == val;
  });
};
/**
 @param {K} key
 @return {boolean}
 */
goog.structs.Heap.prototype.containsKey = function(key) {
  return goog.array.some(this.nodes_, function(node) {
    return node.getKey() == key;
  });
};
/**
 @return {!goog.structs.Heap}
 */
goog.structs.Heap.prototype.clone = function() {
  return new goog.structs.Heap(this);
};
/**
 @return {number}
 */
goog.structs.Heap.prototype.getCount = function() {
  return this.nodes_.length;
};
/**
 @return {boolean}
 */
goog.structs.Heap.prototype.isEmpty = function() {
  return goog.array.isEmpty(this.nodes_);
};
goog.structs.Heap.prototype.clear = function() {
  goog.array.clear(this.nodes_);
};

//# sourceMappingURL=goog.structs.heap.js.map
