function HashTable() {
    this.arraySize = 10;
    this.array = new Array(this.arraySize);
}

HashTable.prototype.set = function (key, value) {

    var hashCode = key.toString().hashCode();
    var list = this.array[hashCode % this.arraySize];


    if (list) {
        var current = list.first;
        while (current) {
            if (current.getValue().key == key) {
                current.setValue({ key: key, value: value });
                return;
            }
            current = current.getNext();
        }
        list.add({ key: key, value: value });
    }
    else {
        var newList = new List();
        newList.add({ key: key, value: value });
        var hashCode = key.toString().hashCode();
        this.array[hashCode % this.arraySize] = newList
    }
}

HashTable.prototype.get = function (key) {
    var hashCode = key.toString().hashCode();
    var list = this.array[hashCode % this.arraySize];
    if (list) {
        var current = list.first;
        while (current) {
            if (current.getValue().key == key) {
                return current.getValue().value;
            }
            current = current.getNext();
        }
        return null;
    }
    else {
        return null;
    }
}

String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};


function List() {
    this.first = null;
    this.last = null;
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
        return null;
    }

    var result = this.first;
    var i = 0;
    while (i < ithElement && result != null) {
        result = result.next;
        i++;
    }
    return result.getValue();

}

List.prototype.getNode = function (ithElement) {

    var result = this.first;
    var i = 0;
    while (i < ithElement && result != null) {
        result = result.next;
        i++;
    }
    if (result == null) {
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
        this.first = null;
        this.last = null;
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

    if (ithNode.getNext() != null) {
        previous.setNext(ithNode.getNext())
    } else {
        previous.setNext(null);
        this.last = previous
    }

}

function Node(value) {
    this.value = value;
    this.next = null;
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

Node.prototype.setValue = function (value) {
    this.value = value;
}