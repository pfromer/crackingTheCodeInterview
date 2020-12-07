function Queue() {
    this.list = new DoubleLinkedList();
}

Queue.prototype.remove = function () {
    if (!this.top()) {
        throw ('stack pop exception, no top')
    }
    this.list.RemoveFirst();
}

Queue.prototype.add = function (value) {
    this.list.AddLast(value);
}

Queue.prototype.peek = function (value) {
    return this.top();
}

Queue.prototype.isEmpty = function (value) {
    return this.list.isEmpty();
}

Queue.prototype.top = function (value) {
    return this.list.first.value;
}