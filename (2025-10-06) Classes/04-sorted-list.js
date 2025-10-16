class sortedList {
    size = 0;
    _arr = [];

    add (number) {
        number = Number(number);
        if (Number.isNaN(number)) {
            throw new TypeError('Cannot add non-numbers to the sorted list!')
        }

        this._arr.push(Number(number));
        this._arr.sort((a, b) => a - b);
        this.size++;
    }

    remove (index) {
        if (index < 0 || index >= this._arr.length) {
            throw new Error('Invalid index!');
        }

        this._arr.splice(index, 1);
        this.size--;
    }

    get (index) {
        if (index < 0 || index >= this._arr.length) {
            throw new Error('Invalid index!');
        }

        return this._arr[index];
    }
}

const list = new sortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));