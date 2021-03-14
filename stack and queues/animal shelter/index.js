function AnimalShelter() {
    this.linkedList = new DoubleLinkedList();
    this.constants = {
        cat: "CAT",
        dog: "DOG"
    }
}

AnimalShelter.prototype.enqueue = function (animal) {
    this.linkedList.AddLast(animal);
}

AnimalShelter.prototype.dequeueAny = function () {
    var result = this.linkedList.Remove((node) => true);
    if (result) {
        return result.value;
    }
    return null;

}

AnimalShelter.prototype.dequeueDog = function () {
    var result = this.linkedList.Remove((node) => node.value.type == this.constants.dog);
    if (result) {
        return result.value;
    }
    return null;
}

AnimalShelter.prototype.dequeueCat = function () {
    var result = this.linkedList.Remove((node) => node.value.type == this.constants.cat);
    if (result) {
        return result.value;
    }
    return null;
}


AnimalShelter.prototype.enqueueCat = function (catName) {
    this.enqueue({
        type: this.constants.cat,
        name: catName
    })
}

AnimalShelter.prototype.enqueueDog = function (dogName) {
    this.enqueue({
        type: this.constants.dog,
        name: dogName
    })
}