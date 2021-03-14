function successor(node) {
    if (!node.right) {
        if (!node.parent) {
            return null
        } else {
            if (node.parent.value > node.value) {
                return node.parent;
            } else {
                if (!node.parent.parent) {
                    return null;
                } else {
                    return parent.parent;
                }
            }
        }
    } else {
        return mostLeft(node.right);
    }
}

function mostLeft(node) {
    if (!node.left) {
        return node;
    }
    var left = node.left;
    return mostLeft(left);
}