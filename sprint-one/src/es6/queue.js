class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.start = 0;
    this.end = 0;
  }

  enqueue (value) {
  this[this.end] = value;
  this.end ++;
  return this;
};

  dequeue () {
  if (this.end - this.start){
    var firstElement = this[this.start];
    delete this[this.start];
    this.start ++;
    return firstElement;
  }

};

  size () {
    return this.end - this.start;
  }

}
