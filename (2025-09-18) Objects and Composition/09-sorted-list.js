function createSortedList () {
    return {
        _list: [],
        _sortList() {
            this._list.sort((a, b) => a - b);
        },
        size: 0,
        add (element) {
            if (typeof element !== 'number') {
                console.log('ERROR: The sorted list must contain only numbers!')
                return;
            }

            this._list.push(element);
            this._sortList();
            this.size++;
        },
        remove (index) {
            if (index < 0 || index >= this.size) {
                console.log('ERROR: The index is invalid!')
                return;
            }

            this._list.splice(index, 1);
            this.size--;
        },
        get (index) {
            if (index < 0 || index >= this.size) {
                console.log('ERROR: The index is invalid!')
                return;
            }

            return this._list[index];
        }
    };
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));