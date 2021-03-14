function validateBST(treeNode) {
    return isOrdered(inOrderTraverse(treeNode));
}

function isOrdered(_array) {
    if (_array.length < 2) {
        return true;
    }
    for (var i = 1; i < _array.length; i++) {
        if (_array[i - 1] > _array[i]) {
            return false;
        }
    }
    return true;
}

function inOrderTraverse(treeNode) {

    var result = [];

    function add(node) {
        if (node) {
            add(node.left);
            result.push(node.value);
            add(node.right);
        }
    }

    add(treeNode);
    return result;
}