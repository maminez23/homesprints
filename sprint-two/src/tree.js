var Tree = function(value){
    var newTree = Object.create(treeMethods);
    newTree.value = value;
    newTree.children = [];
    return newTree;
};
var treeMethods = {};

treeMethods.addChild = function(value){
    var node = Tree(value);
    this.children.push(node);
    return value;
};


treeMethods.contains = function(target){
    var res = this.children;
    if (this.value === target) {
        return true;
    }
    for (var i = 0; i < res.length; i++) {
        if (res[i].contains(target)) {
            return true;
        }
    }
    return false;
};
