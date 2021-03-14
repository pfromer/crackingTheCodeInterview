function Graph(nodes) {
    this.nodes = nodes;
}


function GraphNode(value, children) {
    this.value = value;
    this.children = children;
}


GraphNode.prototype.addChildren = function (_children) {
    this.children = this.children.concat(_children);
}


