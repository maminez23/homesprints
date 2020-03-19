var LinkedList = function() {
  var list ={};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    node = Node(value);
    if(!list.head){
      list.head = node;
      list.tail = node;
    }
    else{
      list.tail.next = node;
      list.tail = node;
    }
  }
  list.removeHead = function(){
    if(list.head){
      var res = list.head.value;
      list.head = list.head.next;
      if(!list.head){
        list.tail = null
      }
      return res
    }
  };

  list.contains = function(target) {
      var ch = list.head;
      while(ch){
        if(ch.value === target){
          return  true;
        }
        ch = ch.next;
      }
      return false
  };

  return list;
};

function Node(value){
  var node = {};
  node.value = value;
  node.next = null;
  return node;
}

