
let title = 'Where is the capital of Jordan';
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;


function isAnswerCorrect(index) {
    if (correctAnswerIndex === index) {
        return true;
    } else {
        return false;
    }
}
    isAnswerCorrect(1);


    function getCorrectAnswer() {
        return options[correctAnswerIndex];
    }