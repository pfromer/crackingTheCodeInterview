function ThreeStacksWithArray() {
    this.stacks = [new Stack(), new Stack(), new Stack()];
    this.threshold = 5;
}

ThreeStacksWithArray.prototype.pop = function () {
    return this.forLoopReverse(function (stack) {
        if (stack.top()) {
            return stack.pop();
        }
    })
}

ThreeStacksWithArray.prototype.pop = function () {
    return this.forLoopReverse((stack) => stack.top() ? stack.pop() : null)
}

ThreeStacksWithArray.prototype.push = function (value) {
    var self = this;
    return this.forLoop(function (stack) {
        if (stack.size < self.threshold) {
            stack.push(value);
            return true;
        }
    });
}

ThreeStacksWithArray.prototype.isEmpty = function () {
    return this.stacks.every(s => s.isEmpty());
}

ThreeStacksWithArray.prototype.top = function () {
    return this.forLoopReverse((stack) => stack.top() ? stack.top() : null)
}

ThreeStacksWithArray.prototype.size = function () {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return this.stacks.map(s => s.size).reduce(reducer, 0);
}

ThreeStacksWithArray.prototype.forLoopReverse = function (f) {
    for (var i = this.stacks.length - 1; i > -1; i--) {
        var result = f(this.stacks[i]);
        if (result) {
            return result;
        };
    };
}

ThreeStacksWithArray.prototype.forLoop = function (f) {
    for (var i = 0; i < this.stacks.length; i++) {
        var result = f(this.stacks[i]);
        if (result) {
            return result;
        };
    };
}

