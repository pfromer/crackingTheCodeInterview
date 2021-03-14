function Stack() {
    this.list = new DoubleLinkedList();
    this.size = 0;
}

Stack.prototype.pop = function () {
    var top = this.top();
    if (!top) {
        return null;
    }
    this.list.RemoveFirst();
    this.size--;
    return top;
}

Stack.prototype.push = function (value) {
    this.list.AddFirst(value);
    this.size++;
}

Stack.prototype.peek = function () {
    return this.top();
}

Stack.prototype.isEmpty = function () {
    return this.list.isEmpty();
}

Stack.prototype.top = function () {
    if (this.list.first) {
        return this.list.first.value;
    }
    return null;

}