var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    var newStorage = Object.create(queueMethods);
    newStorage.start = 0;
    newStorage.end = 0;
    return newStorage;
};



var queueMethods = {};

queueMethods.enqueue = function(value) {
    this[this.end] = value;
    this.end ++;
    return this;
};
queueMethods.dequeue = function() {
    if (this.end > this.start){
        var firstElement = this[this.start];
        delete this[this.start];
        this.start ++;
        return firstElement;
    }

};

queueMethods.size = function() {
    return this.end - this.start ;
};

