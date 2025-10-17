(function solve () {
    String.prototype.ensureStart = function (startStr) {
        if (this.startsWith(startStr)) return this.toString();
        return startStr + this;
    }

    String.prototype.ensureEnd = function (endStr) {
        if (this.endsWith(endStr)) return this.toString();
        return this + endStr;
    }

    String.prototype.isEmpty = function () {
        return this.toString() === '';
    }

    String.prototype.truncate = function (finalLength) {
        if (this.length <= finalLength) return this.toString();

        if (finalLength < 4) return '.'.repeat(finalLength);

        if (this.includes(' ')) {
            const lastWhitespaceOfResult =
                this.lastIndexOf(' ', finalLength - 3);

            return this.substring(0, lastWhitespaceOfResult) + '...';
        }

        return this.substring(0, finalLength - 3) + '...';
    }

    String.format = function (string, ...parameters) {
        for (let i = 0; i < parameters.length; i++) {
            string = string.replaceAll(`{${i}}`,  parameters[i]);
        }

        return string;
    }
})();

let str = 'my string';

str = str.ensureStart('my');
console.log(str); // 'my string'

str = str.ensureStart('hello ');
console.log(str); // 'hello my string'

str = str.truncate(16);
console.log(str); // 'hello my string'

str = str.truncate(14);
console.log(str); // 'hello my...'

str = str.truncate(8);
console.log(str); // 'hello...'

str = str.truncate(4);
console.log(str); // 'h...'

str = str.truncate(2);
console.log(str); // '..'

str = String.format(
    'The {0} {1} fox',
    'quick',
    'brown'
);
console.log(str); // 'The quick brown fox'

str = String.format(
    'jumps {0} {1}',
    'dog'
);
console.log(str); // 'jumps dog {1}'