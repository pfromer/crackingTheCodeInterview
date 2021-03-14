function getListsOfDepths(binaryTree) {
    var listsOfDepths = {};

    function add(binaryTree, depth) {
        if (listsOfDepths[depth]) {
            listsOfDepths[depth].push(binaryTree.value);
        } else {
            listsOfDepths[depth] = [binaryTree.value];
        }

        if (binaryTree.right) {
            add(binaryTree.right, depth + 1);
        }
        if (binaryTree.left) {
            add(binaryTree.left, depth + 1);
        }
    }


    add(binaryTree, 0);
    return listsOfDepths;
}


function checkAllLeafsSameDepth(binaryTree) {
    var leafsDepths = [];

    function add(binaryTree, depth) {
        if (!binaryTree.right && !binaryTree.left) {
            leafsDepths.push(depth);
        }
        if (binaryTree.right) {
            add(binaryTree.right, depth + 1);
        }
        if (binaryTree.left) {
            add(binaryTree.left, depth + 1);
        }
    }

    add(binaryTree, 0);

    var balanced = true;

    for (var i = 0; i < leafsDepths.length; i++) {
        for (var j = i; j < leafsDepths.length; j++) {
            if (Math.abs(leafsDepths[i] - leafsDepths[j]) > 1) {
                return false;
            }
        }
    }

    return balanced;
}

function checkBalanced(binaryTree) {

    if (!binaryTree.right && !binaryTree.left) {
        return true;
    }

    if (!binaryTree.right) {
        return depth(binaryTree.left) == 1;
    }

    if (!binaryTree.left) {
        return depth(binaryTree.right) == 1;
    }

    return (Math.abs(depth(binaryTree.right) - depth(binaryTree.left)) <= 1) && checkBalanced(binaryTree.right) && checkBalanced(binaryTree.left);
}

function depth(binaryTree) {

    if (!binaryTree) return 0;

    if (!binaryTree.right && !binaryTree.left) {
        return 1;
    }

    return 1 + Math.max(depth(binaryTree.right), depth(binaryTree.left));
}

function checkBalanced2(binaryTree) {

    var allDepths = {};

    function addDepth(binaryTree) {

        if (!binaryTree) return 0;

        if (!binaryTree.right && !binaryTree.left) {
            allDepths[binaryTree.value] = 1;
            return 1;
        }

        var d = 1 + Math.max(addDepth(binaryTree.right), addDepth(binaryTree.left));
        allDepths[binaryTree.value] = d;
        return d;
    }

    addDepth(binaryTree);


    return doCheckBalance(binaryTree, allDepths);
}

function doCheckBalance(binaryTree, allDepths) {
    if (!binaryTree) {
        return true;
    }


    if (!binaryTree.right && !binaryTree.left) {
        return true;
    }

    if (!binaryTree.right) {
        return allDepths[binaryTree.left.value] == 1;
    }

    if (!binaryTree.left) {
        return allDepths[binaryTree.right.value] == 1;
    }

    return (Math.abs(allDepths[binaryTree.right.value] - allDepths[binaryTree.left.value]) < 2)
        && doCheckBalance(binaryTree.right, allDepths)
        && doCheckBalance(binaryTree.left, allDepths);
}