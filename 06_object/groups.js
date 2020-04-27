class Group {
    constructor() {
        this.array = []
    }
    add(value) {
        if(!this.has(value)) {
            this.array.push(value);
        }
    }
    delete(value) {
        if (this.has(value)) {
            let index = this.array.indexOf(value);
            this.array.splice(index, 1);
        }
    }
    has(value) {
        return this.array.includes(value);
    }
    static from(elements) {
        let group = new Group;
        for (let value of elements) {
            group.add(value)
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        if (this.position >= this.group.array.length) {
            return {done: true}
        } else {
            let result = {value: this.group.array[this.position], done: false}
            this.position++
            return result;
        }
    }
}
let group = Group.from([10, 20]);
console.log(group.has(10));

console.log(group.has(30));

group.add(10);
group.delete(10);
console.log(group.has(10));

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }