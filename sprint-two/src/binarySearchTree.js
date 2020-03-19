 var BinarySearchTree = function(value) {
    var tree = Object.create(binaryMethods);
    tree.value = value;
    tree.left  = Object.create(binaryMethods);
    tree.right = Object.create(binaryMethods);
    return tree;

};

var binaryMethods = {};

binaryMethods.insert = function(value) {

    if (value < this.value) {
        if (!this.left.value) {

            this.left = BinarySearchTree(value);
        } else {
            this.left.insert(value)
        }

    }
    if (value > this.value) {
        if (!this.right.value) {

            this.right = BinarySearchTree(value);
        } else {
            this.right.insert(value)
        }

    }
    return BinarySearchTree(value);
};

binaryMethods.contains = function(value){
    if(value === this.value){
        return true
    }
    else if (value < this.value){
        if(this.left.value){
            if(this.left.contains(value)){
                return true
            }
        }
    }
    else {
        if(this.right.value){
            if(this.right.contains(value)){
                return true
            }
        }
    }
return false;
};

binaryMethods.depthFirstLog = function(func){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
