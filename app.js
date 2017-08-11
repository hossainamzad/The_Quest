console.log("HEY LOG!!!!!");
// const quizContainer = document.querySelector("#quiz");
const quizContainer = $("#quiz");
// const resultsContainer = document.querySelector("#results");
const resultsContainer = $("#results");
// const submitResults = document.querySelector("#submit");
const submitResults = $("#submit");
class Question {
  constructor (text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  correctAnswer (choice) {
    return choice === this.answer;
  }
}

class Quiz {
  constructor (questions) {
    this.questions = questions;
    this.score = 0;
    this.questionsIndex = 0;
  }
  getQuestion () {
    return this.questions[this.questionsIndex];
  }
  isGameOver () {
    return (this.questions.length - 1) === this.questionsIndex;
  }
  answerChoicce (answer) {
    this.questionsIndex++;
    if( this.getQuestion().correctAnswer(answer)){
      this.score++;
    }
  }
}

let questions = [
  new Question("What's the capital of Bangladesh?",["Dhaka", "Seol", "Guam", "Delhi"],"Dhaka"),
  new Question("What's the state language of Bangladesh?",["Dhaka", "Seol", "Guam", "Delhi"],"Bengali"),
  new Question("Which continents is Bangladesh located at?", ["Australia", "Asia", "South Asia", "South America"], "South Asia")

];
        console.log(questions);

 const populate = function () {
        // let w = new Question();
     // questions.forEach(function(element){
     //  console.log(element);

     // })

  var results = questions.filter(function(obj){
      for (var i = 0; i < results.length; i++){
        console.log(results[i].choices);
      }
    })

  }


const newQuiz = new Quiz (questions);

$(document).ready (function () {

    $('#btn').click (function () {
    $(this).hide();
    $("#d").draggable();
    // $("#submit").draggable();
    if(newQuiz.isGameOver()){
      console.log("Wattttttt");
    }else{
      // let b = $('<h1>');
      // let q = newQuiz.getQuestion();
      // let z = q.text;
      // b.html(z);
      // quizContainer.append(b);
      populate();
      }
  });

});

/*
const firstQuestion = questions[0];
      //let a = $("#quiz");
      let b = $('<h1>');
      b.html(newQuiz.firstQuestion);
      a.append(b);

const secondQuestion = questions[1];
      //let c = $("#quiz");
      let d = $('<h1>');
      c.html(newQuiz.secondQuestion);
      d.append(c);

*/
//   const quizQuestions = [
//   {
//     prompt: "What's the capital of Bangladesh?",
//     answer: ["Dhaka", "Seol", "Guam", "Delhi"],
//     correctAnswer: "Dhaka"
//     // correctAnswerIndex: 0
//   },
//   {
//     prompt: "What's the state language of Bangladesh?",
//     answer: ["Hindi", "Creol", "Bengali", "Urdu"],
//     correctAnswer: "Bengali"
//     // correctAnswerIndex: 2
//   },
//   {
//     prompt: "Which continents is Bangladesh located at?",
//     answer: ["Australia", "Asia", "South Asia", "South America"],
//     correctAnswer: "South Asia"
//     // correctAnswerIndex: 2
//   }
// ];

// class Question {
//   constructor (prompt,answer,correctAnswer) {
//     this.prompt = prompt;
//     this.answer = answer;
//     this.correctAnswer = correctAnswer;
//   }
//   correctChoice () {
//     return this.answer === this.correctAnswer;
//   }
//   displayThem () {
//    let targetedDiv = $('#quiz');
//    let createUl = $('<ul>');
//    let createLi = $('<li>');

//    let answerList = $('<ul>').appendTo('#quiz');
//    questionsList.attr('id', 'answerChoice');


//   }
// }

// class Quiz {
//   constructor (questions) {
//     this.questions = questions;
//     this.score = 0;
//     this.questionsIndex = 0;
//   }
// }


// function get(){
//   let place = document.getElementById('quiz')
//   console.log(place)
//   let where = document.createElement('h1')
//   console.log(where)

//   for(let i = 0; i < quizQuestions.length;i++){
//     where.innerHTML = quizQuestions[i].prompt

//   }
//   console.log(where)
//   place.appendChild(where)

// }
// get()


// const firstQuestion = new Question("What's the capital of Bangladesh?",["Dhaka", "Seol", "Guam", "Delhi"],"Dhaka");
// console.log(firstQuestion.prompt)
// const secondQuestion = new Question("What's the state language of Bangladesh?",["Dhaka", "Seol", "Guam", "Delhi"],"Bengali");
// // in javascript
// // let place = document.getElementById('quiz')
// // let where = document.createElement('h1')
// // where.innerHTML = firstQuestion.answer;
// // place.appendChild(where);

// // in jQuery
// let a = $("#quiz");
// let b = $('<h1>');
// b.html(firstQuestion.prompt);
// a.append(b)

// let place = $('#quiz')
// let where = $('<h1>');
// where.html(firstQuestion.answer);
// place.append(where)

// let rightAnswer = $("#quiz");
// let answerHeader = $('<h1>');
// answerHeader.html(firstQuestion.correctAnswer);
// rightAnswer.append(answerHeader);
// firstQuestion.correctChoice();



