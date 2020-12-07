function StackWithMin() {
    this.stack = new Stack();
    this.minimumStack = new Stack();
}

StackWithMin.prototype.min = function () {
    if (this.minimumStack.isEmpty()) {
        return 999999999999;
    }
    return this.minimumStack.peek();
}

StackWithMin.prototype.push = function (value) {
    if (value <= this.min()) {
        this.minimumStack.push(value)
    }
    this.stack.push(value);
}

StackWithMin.prototype.pop = function () {
    if (this.peek() == this.min()) {
        this.minimumStack.pop();
    }
    this.stack.pop();
}

StackWithMin.prototype.peek = function () {
    return this.stack.peek();
}

StackWithMin.prototype.isEmpty = function () {
    return this.stack.isEmpty();
}