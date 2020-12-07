function ThreeStacks() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
    this.stack3 = new Stack();
    this.threshold = 5;
}

ThreeStacks.prototype.pop = function () {
    if (this.stack3.top()) {
        return this.stack3.pop();
    }
    if (this.stack2.top()) {
        return this.stack2.pop();
    }
    if (this.stack1.top()) {
        return this.stack1.pop();
    }
    throw ('three stacks pop error');
}

ThreeStacks.prototype.push = function (value) {
    if (this.stack1.size < this.threshold) {
        this.stack1.push(value);
        return;
    }
    if (this.stack2.size < this.threshold) {
        this.stack2.push(value);
        return;
    }
    if (this.stack3.size < this.threshold) {
        this.stack3.push(value);
        return;
    }
    throw ('stack full');

}

ThreeStacks.prototype.isEmpty = function () {
    return this.stack1.isEmpty() && this.stack2.isEmpty() && this.stack3.isEmpty();
}

ThreeStacks.prototype.top = function () {
    if (this.stack3.top()) {
        return this.stack3.top();
    }
    if (this.stack2.top()) {
        return this.stack2.top();
    }
    if (this.stack1.top()) {
        return this.stack1.top();
    }
    throw ('three stacks top error');
}

ThreeStacks.prototype.size = function () {
    return this.stack1.size + this.stack2.size + this.stack3.size;
}