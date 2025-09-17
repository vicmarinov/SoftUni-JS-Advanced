function printWordsUppercase (text) {
    console.log(text.match(/\w+/gm).map(x => x.toUpperCase()).join(', '));
}

printWordsUppercase('Hi, how are you?');
printWordsUppercase('hello');