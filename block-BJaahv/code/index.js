// function  createObj(name,score){
//     let user = {};
//     user.name = name;
//     user.score = score

//     user.changeName = function(name){
//         user.name = name
//         return name;
//     },
//     user.UpdateScore(value = 1){
//         user.score = user.score + value;
//         return user.score;
//     }
// }
// let user1 = createObj("ravindra",10);


// let data = {
    //     isAnswerCorrect: function(index){
    //      return  index === this.correctAnswerIndex;
    //     },
    //     getCorrectAnswer: function(options){
    //       return this.options[this.correctAnswerIndex];
    //     },
    // };
    
    // function Question(title,options,correctAnswerIndex){
    //     let newQuestion = Object.create(data);
    //     newQuestion.title = title;
    //     newQuestion.options = options;
    //     newQuestion.correctAnswerIndex = correctAnswerIndex;
    //     return newQuestion;
    // }
    
    // pesuso class pattern
    
    // function Question(title,options,correctAnswerIndex){
    //     this.title = title;
    //     this.options = options;
    //     this.correctAnswerIndex = correctAnswerIndex;
    // }
    
    // Question.prototype = {
    //     isAnswerCorrect: function(index){
    //         return  index === this.correctAnswerIndex;
    //        },
    //        getCorrectAnswer: function(options){
    //          return this.options[this.correctAnswerIndex];
    //        },
    // }
    
    // let firstQuestion = new Question(
    //     'Where is the capital of Jordan',
    //     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    //     1
    //   );
    //   let secondQuestion = new Question(
    //     'Where is the capital of Jamaica',
    //     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    //     2
    //   );
    

      
class Question{
    constructor(title,options,correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
        isAnswerCorrect(index){
            return  index === this.correctAnswerIndex;
           }
           getCorrectAnswer(options){
             return this.options[this.correctAnswerIndex];
           }
}


console.log(firstQuestion);
console.group(firstQuestion.title);
console.log(firstQuestion.correctAnswerIndex);
console.log(firstQuestion.getCorrectAnswer());

console.log(secondQuestion);
console.group(secondQuestion.title);
console.log(secondQuestion.correctAnswerIndex);
console.log(secondQuestion.getCorrectAnswer());