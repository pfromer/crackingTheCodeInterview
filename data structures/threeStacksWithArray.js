function ThreeStacksWithArray() {
    this.stacks = [new Stack(), new Stack(), new Stack()];
    this.threshold = 5;
}

ThreeStacksWithArray.prototype.pop = function () {
    for (var i = this.stacks.length - 1; i > -1; i--) {
        if (this.stacks[i].top()) {
            return this.stacks[i].pop();
        }
    }
    throw ('three stacks pop error');
}

ThreeStacksWithArray.prototype.push = function (value) {
    for (var i = 0; i < this.stacks.length; i++) {
        if (this.stacks[i].size < this.threshold) {
            this.stacks[i].push(value);
            return;
        }
    }
    throw ('stack full');
}

ThreeStacksWithArray.prototype.isEmpty = function () {
    return this.stacks.every(s => s.isEmpty());
}

ThreeStacksWithArray.prototype.top = function () {
    for (var i = this.stacks.length - 1; i > -1; i--) {
        if (this.stacks[i].top()) {
            return this.stacks[i].top();
        }
    };
    throw ('three stacks top error');
}

ThreeStacksWithArray.prototype.size = function () {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this.stacks.map(s => s.size).reduce(reducer, 0);
}

ThreeStacksWithArray.prototype.forLoopReverse = function (f) {
    for (var i = this.stacks.length - 1; i > -1; i--) {
        f(i);
    };
}

ThreeStacksWithArray.prototype.forLoop = function (f) {
    for (var i = 0; i < this.stacks.length; i++) {
        f(i);
    };
}

