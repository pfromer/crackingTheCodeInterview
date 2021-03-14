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

DoubleLinkedList.prototype.Get = function (comparor) {
    var result = this.first;

    while (result) {
        if (comparor(result)) {
            return result;
        }
        result = result.next;
    }
    return null;
}

DoubleLinkedList.prototype.Remove = function (comparor) {
    var element = this.Get(comparor);

    if (!element) {
        return null;
    }

    if (element == this.first) {
        if (this.first == this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
            this.first.previous = null;
        }
        return element;
    }

    if (element == this.last) {
        this.last = this.last.previous;
        this.last.next = null;
        return element;
    }


    var previous = element.previous;
    var next = element.next;
    previous.next = next;
    next.previous = previous;

    return element;
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

DoubleLinkedList.prototype.RemoveFirst = function () {
    if (!this.first) {
        throw ('linked list remove first, no first element')
    }

    if (this.first == this.last) {
        this.first = null;
        this.last = null;
        return;
    }

    this.first = this.first.next;
    this.first.previous = null;
}

DoubleLinkedList.prototype.RemoveLast = function () {
    if (!this.last) {
        throw ('linked list remove last, no last element')
    }

    if (this.first == this.last) {
        this.first = null;
        this.last = null;
    }

    this.last = this.last.previous;
    this.last.next = null;
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

DoubleLinkedList.prototype.isEmpty = function () {
    return this.first == null;
}

