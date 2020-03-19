var Queue = function() {
  var newStorage ={}
    newStorage.start = 0;
    newStorage.end = 0;
    extend(newStorage, queueMethods )
    return newStorage;
};

var extend = function(to, from) {
    for (var key in from) {
        to[key] = from[key];
    }
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




