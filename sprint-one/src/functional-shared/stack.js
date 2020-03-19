var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    var newStorage = {};
    newStorage.i = 0;
    extend(newStorage, stackMethods )
    return newStorage;
};

var extend = function(to, from) {
    for (var key in from) {
        to[key] = from[key];
    }
};

var stackMethods = {};

stackMethods.push = function(value) {
    this[this.i] = value;
    this.i +=1;
    return this;
};

stackMethods.pop = function(){
    if(this.i) {
        var val = this[this.i - 1];
        delete this[this.i - 1];
        this.i = this.i - 1;
        return val;
    }
}

stackMethods.size = function () {
    return this.i;
}


