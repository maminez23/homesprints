class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.i = 0;
  }

  push (value){
    this[this.i] = value;
    this.i +=1;
    return this;
  }

  pop (){
    if(this.i) {
      var val = this[this.i - 1];
      delete this[this.i - 1];
      this.i = this.i - 1;
      return val;
    }
  }

  size (){
    return this.i;
  }
}

//var newStorage = new Stack()