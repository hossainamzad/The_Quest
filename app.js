console.log("HEY LOG!!!!!");

// global values for your score counters
let counter = 0;
let scoreCounter = 0;

// const quizContainer = document.querySelector("#quiz");
const quizContainer = $("#quiz");
// const resultsContainer = document.querySelector("#results");
const resultsContainer = $("#results");
// const submitResults = document.querySelector("#submit");
const submitResults = $("#submit");
// class constructor for Question object
class Question {
  constructor (questionBody, answerChoices, answer) {
    this.questionBody = questionBody;
    this.answerChoices = answerChoices;
    this.answer = answer;
  }
  correctAnswer (choice) {
    return choice === this.answer;
  }
//   displayQuestion () {
//     let questionToDisplay = "<div id='quiz'>" + this.text + "</div><ul>";
//         let choiceCounter = 0;
//     this.answerChoices.forEach(function (eachChoice) {
//         questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
//         choiceCounter++;
//     });
//     questionToDisplay += "</ul>";
//     console.log (questionToDisplay);
// }
}
// test the Question class

const que1 = new Question("What's GA?", ["code school", "dance school", "fun act"], "code School");
que1.correctAnswer("code school");

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
    // return (this.questions.length - 1) === this.questionsIndex;
    return this.questions.length == 0;
  }
  answerChoicce (answer) {
    this.questionsIndex++;
    if( this.getQuestion().correctAnswer(answer)){
      this.score++;
    }
  }
}
//test the constructors
const quizA = new Quiz("What's GA?", ["code school", "dance school", "fun act"], "code School");
quizA.getQuestion();
quizA.isGameOver();
// quizA.answerChoicce();

let questions = [
  new Question("What's the capital of Bangladesh?",["Dhaka", "Seol", "Guam", "Delhi"],"Dhaka"),
  new Question("What's the state language of Bangladesh?",["Hindi", "Creol", "Bengali", "Urdu"],"Bengali"),
  new Question("Which continents is Bangladesh located at?", ["Australia", "Asia", "South Asia", "South America"], "South Asia")
];

 const populate = function () {
        // let w = new Question();
  questions.forEach(function(element, index){
    // element.displayQuestion();

    console.log(element.questionBody);
    console.log(element.answerChoices);
    console.log(element.answer);
    // let radioBtn = $('<input type="radio" name="rbtnCount" />');
    // radioBtn.appendTo('#quiz')
    $('<h2>').html(element.questionBody).appendTo('#quiz');
    element.answerChoices.forEach((choice) => {
      $('<h3>').html(choice).attr('id',`${index}`).appendTo('#quiz');
    });
  });

  $('h3').click(function(event) {

  // check to see if the clicked item matches with the answer
  // if matches
  // you get it.
  // else
  // you didnt get it. AND
  // move on to the next question
  // let counter = 0;
  console.log(this, parseInt(event.target.id));
  let l = $(this).html();
  console.log(l)
  // what is the current question im clicking on
  let indx = parseInt(event.target.id);
    if (l === questions[indx].answer) {
    alert("You got it!!!");
    counter++;
    scoreCounter++;
    console.log(scoreCounter);

    // return;
    // counter += 1
    console.log("You got it!!!");
    }else{
    // console.log(this.element);
    // console.log("Try again");
    alert("try again")
    // counter += 1
    scoreCounter--;
    }
    alert("Your score is: " + scoreCounter);
    $('#nameHolder').append(scoreCounter).css("visibility", "visible");
    console.log(scoreCounter);
  });

      // $('<h4>').html(element.answer).appendTo('#quiz');

  }

const newQuiz = new Quiz (questions);

$(document).ready (function () {

    $('#btn').click (function () {
    $(this).hide();
    $("#form").hide();
    $("#d").hide();
    $("#e").hide();
    $("#f").hide();
    $("#d").css("visiblity", "visible");
    $("#d").draggable();
    let text = $("input:text").val();
    alert(text);
    // to append the name of the player on the screen
    $('#nameHolder').append(text + " is playing now.").css("visibility", "visible");
    $("#submit").css("visibility", "visible");
    if(newQuiz.isGameOver()){
      console.log("Wattttttt");
    }else{
      // let b = $('<h1>');
      // let q = newQuiz.getQuestion();
      // let z = q.questionBody;
      // b.html(z);
      // quizContainer.append(b);
      populate();
      }
  });

   $("#submit").click(function(){
      $("#modal").css("visibility", "visible");
      $("#modal").hide('slow');
      $("#modal").slideUp('slow');
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



