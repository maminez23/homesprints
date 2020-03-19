var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    var newStorage = Object.create(stackMethods);
    newStorage._size = 0;
    return newStorage;
};


var stackMethods = {};

stackMethods.push = function(value) {
    this[this._size] = value;
    this._size +=1;
    return this;
};

stackMethods.pop = function(){
    if(this.i) {
        var val = this[this._size - 1];
        delete this[this._size - 1];
        this._size = this._size - 1;
        return val;
    }
}

stackMethods.size = function () {
    return this._size;
}


