function DoubleLinkedList() {
    this.first = null;
    this.last = null;
}

function Node(value) {
    this.next = null;
    this.previous = null;
    this.value = value;
}

DoubleLinkedList.prototype.AddLast = function (value) {
    var node = new Node(value);
    if (this.first == null) {
        this.first = node;
        this.last = node;
        return;
    }

    if (this.first == this.last) {
        this.first = Object.assign({}, this.first);
        this.last = node;
        this.first.next = this.last;
        this.last.previous = this.first;
        return;
    }

    var currentLast = this.last;
    currentLast.next = node;
    this.last = node;
    this.last.previous = currentLast;

    return node;
}


DoubleLinkedList.prototype.Reverse = function () {
    var result = new DoubleLinkedList();
    var current = this.last;
    while (current) {
        result.AddLast(current.value);
        current = current.previous;
    }
    return result;
}

DoubleLinkedList.prototype.AddFirst = function (value) {
    var node = new Node(value);
    if (this.first == null) {
        this.first = node;
        this.last = node;
        return;
    }

    if (this.first == this.last) {
        this.last = Object.assign({}, this.last);
        this.first = node;
        this.first.next = this.last;
        this.last.previous = this.first;
        return;
    }

    var currentFirst = this.first;
    currentFirst.previous = node;
    this.first = node;
    this.first.next = currentFirst;

    return node;
}

DoubleLinkedList.prototype.AddAll = function (commaSeparated) {
    var self = this;
    var arr = commaSeparated.split(',');
    arr.forEach(element => {
        self.AddLast(element);
    });
}

DoubleLinkedList.prototype.AddReverse = function (commaSeparated) {
    var self = this;
    var arr = commaSeparated.split(',');
    arr.forEach(element => {
        self.AddFirst(element);
    });
}

DoubleLinkedList.prototype.show = function () {
    var a = [];
    var current = this.first;
    while (current) {
        a.push(current.value);
        current = current.next;
    }

    return a.join();
}

DoubleLinkedList.prototype.get = function (ithElement) {

    if (ithElement < 0) {
        return null;
    }

    var result = this.first;
    var i = 0;
    while (i < ithElement && result) {
        result = result.next;
        i++;
    }
    if (result) {
        return result.value;
    }
    return null;

}

