var HashTable = function() {
  this._limit = 8;
  this._storage = new Array(this._limit);
  for (var i = 0; i < this._limit; i++){
    this._storage[i] = [];
  }

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var test = false
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k){
      this._storage[index][i] = [k, v];
      test = true
    }
  }
  if(!test){
    this._storage[index].push([k, v])
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

    for(var i = 0; i < this._storage[index].length; i++){
      if(this._storage[index][i]){
        if( this._storage[index][i][0] === k){
          return this._storage[index][i][1]
        }
      }
    }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for(var i = 0; i < this._storage[index].length; i++){
    if( this._storage[index][i][0] === k){
      delete this._storage[index][i]
      break;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


