var Queue = function(){
  var someInstance = {};

  var storage = {};

  var end = 0;
  var first = 0;

  someInstance.queue = function(value){
    storage[end] = value;
    end++;
    return storage;
  };

  someInstance.dequeue = function(){
    if(end - first){
      var val = storage[first];
      delete storage[first];
      first++;
    }
    return val;
  };

  someInstance.size = function(){
    return end - first;
  };
  return someInstance;
};