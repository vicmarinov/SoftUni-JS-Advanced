function formatTheText () {
    const inputField = document.getElementById('input');
    const outputField = document.getElementById('output');

    let sentencesArr = inputField.value
        .split('.')
        .filter(el => el !== '')
        .map(el => el.trim() + '.');

    for (let i = 0; i < sentencesArr.length; i += 3) {
        let groupOfSentencesArr = [];

        for (let j = 0; j < 3; j++) {
            if (sentencesArr[i + j]) {
                groupOfSentencesArr.push(sentencesArr[i + j]);
            }
        }

        const paragraph = document.createElement('p');
        paragraph.textContent = groupOfSentencesArr.join(' ');
        outputField.appendChild(paragraph);
        console.log(paragraph);
    }
}