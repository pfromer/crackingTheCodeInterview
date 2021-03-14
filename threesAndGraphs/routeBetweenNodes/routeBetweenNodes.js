/*function routeBetweenNodes(a, b) {
    var visited = [a]
    addAllDescendants(a, visited);
    return visited.contains(b);
}

function addAllDescendants(node, visited) {
    node.children.forEach(element => {
        if (!visited.contains(element)) {
            visited.push(element);
            addAllDescendants(element, visited);
        }
    });
}
*/



function thereIsARouteBetweenNodes(a, b) {
    var visited = [a]

    function addAllDescendants(node) {
        node.children.forEach(element => {
            if (!visited.some(v => v == element)) {
                visited.push(element);
                addAllDescendants(element);
            }
        });
    }

    addAllDescendants(a);
    return visited.some(v => v == b)
}