// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)
// let data = {
//     isAnswerCorrect: function(index){
//      return  index === this.correctAnswerIndex;
//     },
//     getCorrectAnswer: function(options){
//       return this.options[correctAnswerIndex];
//     }
// };

// function Question(title,options,correctAnswerIndex){
//     let newQuestion = Object.create(data);
//     newQuestion.title = title;
//     newQuestion.options = options;
//     newQuestion.correctAnswerIndex = correctAnswerIndex;
//     return newQuestion;
// }




// pesuso class pattern

function Question(title,options,correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.correctAnswerIndex = correctAnswerIndex;
}

Question.prototype = {
    isAnswerCorrect: function(index){
        return  index === this.correctAnswerIndex;
       },
       getCorrectAnswer: function(options){
         return this.options[correctAnswerIndex];
       }
}

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );


  console.log(firstQuestion);
  console.log(Question.getCorrectAnswer(1));
  console.log(title);