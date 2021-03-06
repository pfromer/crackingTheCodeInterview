function List() {
    this.first = undefined;
    this.last = undefined;
    this.size = 0;
}

List.prototype.show = function () {
    var a = [];
    for (var i = 0; i < this.size; i++) {
        a.push(this.get(i));
    }

    return a.join();
}

List.prototype.add = function (value) {

    var node = new Node(value);

    if (this.first) {
        this.last.setNext(node);
        this.last = node;
    } else {
        this.first = node;
        this.last = node;
    }

    this.size = this.size + 1;
}

List.prototype.get = function (ithElement) {

    if (ithElement < 0 || ithElement > this.size - 1) {
        throw 'error';
    }

    var result = this.first;
    var i = 0;
    while (i < ithElement && result != undefined) {
        result = result.next;
        i++;
    }
    return result.getValue();
}

List.prototype.getNode = function (ithElement) {

    var result = this.first;
    var i = 0;
    while (i < ithElement && result != undefined) {
        result = result.next;
        i++;
    }
    if (result == undefined) {
        alert("there is no " + ithElement + "th element")
    }
    else {
        return result;
    }
}

List.prototype.remove = function (ithElement) {
    if (ithElement > this.size - 1) {
        return;
    }

    if (ithElement == 0 && this.size == 1) {
        this.first = undefined;
        this.last = undefined;
        this.size--;
        return;
    }

    if (ithElement == 0) {
        this.first = this.first.getNext();
        this.size--;
        return;
    }

    this.size--;

    var i = 0;

    while (i < ithElement) {
        var previous = this.getNode(i);
        i++;
    }

    var ithNode = this.getNode(ithElement);

    if (ithNode.getNext() != undefined) {
        previous.setNext(ithNode.getNext())
    } else {
        previous.setNext(undefined);
        this.last = previous
    }

}

function Node(value) {
    this.value = value;
    this.next = undefined;
}

Node.prototype.setNext = function (nextNode) {
    this.next = nextNode;
}

Node.prototype.getNext = function () {
    return this.next;
}

Node.prototype.getValue = function () {
    return this.value;
}