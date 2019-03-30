goog.provide("goog.structs.PriorityQueue");
goog.require("goog.structs.Heap");
/**
 @final
 @constructor
 @extends {goog.structs.Heap<number,VALUE>}
 @template VALUE
 */
goog.structs.PriorityQueue = function() {
  goog.structs.Heap.call(this);
};
goog.inherits(goog.structs.PriorityQueue, goog.structs.Heap);
/**
 @param {number} priority
 @param {VALUE} value
 */
goog.structs.PriorityQueue.prototype.enqueue = function(priority, value) {
  this.insert(priority, value);
};
/**
 @return {VALUE}
 */
goog.structs.PriorityQueue.prototype.dequeue = function() {
  return this.remove();
};

//# sourceMappingURL=goog.structs.priorityqueue.js.map
