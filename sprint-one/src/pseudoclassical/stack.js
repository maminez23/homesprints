var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.


    this.i = 0;
};




Stack.prototype.push = function(value) {
    this[this.i] = value;
    this.i +=1;
    return this;
};
Stack.prototype.pop = function(){
    if(this.i) {
        var val = this[this.i - 1];
        delete this[this.i - 1];
        this.i = this.i - 1;
        return val;
    }
}
Stack.prototype.size = function () {
    return this.i;
}

var newStorage = new Stack();




