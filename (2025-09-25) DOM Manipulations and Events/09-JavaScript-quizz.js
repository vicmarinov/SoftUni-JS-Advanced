function solve () {
    // My original solution uses the `.hidden` CSS class (defined in 
    // the external CSS file provided by SoftUni for this task) to 
    // control the visibility of sections. This approach is preferred 
    // in real-world projects, because it separates style from logic.
    
    // The alternative solution provided in the comments here is 
    // required by SoftUni Alpha Judge System, because it ignores 
    // external CSS and expects sections to be shown/hidden directly 
    // from the script via `.style.display`.

    const quizSections = document.getElementsByTagName('section');
    const resultsSection = document.getElementById('results');
    
    const answersArr = [
        'onclick',
        'JSON.stringify()',
        'A programming API for HTML and XML documents'
    ];

    let questionNo = 1;
    let correctAnswersQuantity = 0;

    // for (const section of quizSections) {
    //     section.style.display = '';
    // }

    questionNo <= quizSections.length ? loadNextQuestion() : endQuiz();

    function loadNextQuestion () {
        const section = quizSections[questionNo - 1];

        section.classList.remove('hidden');
        // questionNo === 1 ? section.style.display = '' : section.style.display = 'block';

        Array.from(section.getElementsByClassName('answer-wrap')).forEach(
            answerBtn => answerBtn.addEventListener('click', onAnswerClick)
        );
    }

    function onAnswerClick (event) {
        const answerText = event.currentTarget.children[0].textContent;

        if (answerText === answersArr[questionNo - 1]) {
            correctAnswersQuantity++;
        }

        quizSections[questionNo - 1].classList.add('hidden');
        // quizSections[questionNo - 1].style.display = 'none';
        questionNo++;

        questionNo <= quizSections.length ? loadNextQuestion() : endQuiz();
    }

    function endQuiz () {
        let resultsMessage = `You have ${correctAnswersQuantity} right answers`;

        if (correctAnswersQuantity === quizSections.length) {
            resultsMessage = 'You are recognized as top JavaScript fan!';
        }

        resultsSection.style.display = 'block';
        resultsSection.getElementsByTagName('h1')[0].textContent = resultsMessage;
    }
}