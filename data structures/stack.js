function Stack() {
    this.list = new DoubleLinkedList();
    this.size = 0;
}

Stack.prototype.pop = function () {
    if (!this.top()) {
        throw ('stack pop exception, no top')
    }
    this.list.RemoveFirst();
    this.size--;
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