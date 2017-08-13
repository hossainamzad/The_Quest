// This file is for myself. I wrote it to rehash my understadning on
// javaScript object Oriented style. My app is working fine in the
// console log. It also uses Super class for the inheritance purposes.
//
class User {
  constructor (name, email) {
    this.name = name;
    this.email = email;
    this.quizScores = [];
    this.currentScore = 0;
  }
 saveScore (theScoreToAdd) {
    this.quizScores.push(theScoreToAdd);
  }

  showNameAndScore () {
    // see if there are any scores, if there are join them together
    let score = this.quizScores.length > 0 ? this.quizScores.join(","): "Not scored yet";
    // now show the score and the name of the player who scores it.
    return this.name + "Scores: " + score;
  }
  changeEmail (newEmail) {
    this.email = newEmail;
    return "New email saved: " + newEmail;
  }
}

const john = new User("JOhn", "johnny@gmail.com");
john.saveScore(10);
john.showNameAndScore();
john.changeEmail("jony@yahoo.com");

class Question {
  constructor (theQuestion, theChoices, theAnswer) {
    // initialize the instance properties
    // this.name = "Question";
    this.theQuestion = theQuestion;
    this.theChoices = theChoices;
    this.theAnswer = theAnswer;
    this.userAnswer = "";
  }
  getAnswer () {
    return this.theAnswer;
  }
  getUserAnswer () {
    return this.userAnswer;
  }
  displayQuestion () {
    let questionToDisplay = "<div class= 'question'>" + this.question + "</div><ul>";
    choiceCounter = 0;
    this.theChoices.forEach(function(choices){
      questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + choices + '</li>';
      choiceCounter++;
    })
    questionToDisplay += "</ul>";
    console.log(questionToDisplay);
  }
}

const me = new Question("ha", "ba", "b");
me.getAnswer();
me.getUserAnswer();
me.theQuestion;
me.theAnswer;

// MultipleChoiceQuestion
class MultipleChoiceQuestion extends Question {
  constructor (theQuestion, theChoices, theAnswer) {
    super (theQuestion, theChoices, theAnswer);
    // this.name = "MultipleChoiceQuestion";
  }
}

let questions = [
  new Question("What's the capital of Bangladesh?",["Dhaka", "Seol", "Guam", "Delhi"],"Dhaka"),
  new MultipleChoiceQuestion("What's the state language of Bangladesh?",["Hindi", "Creol", "Bengali", "Urdu"],"Bengali"),
  new MultipleChoiceQuestion("Which continents is Bangladesh located at?", ["Australia", "Asia", "South Asia", "South America"], "South Asia")
];
// to iterate over the questions array
questions.forEach(function (eachQuestion) {
    eachQuestion.displayQuestion();
})

const qset1 = new MultipleChoiceQuestion("which is the coolest?", ["a", "b", "c", "d"], "c");
qset1.getAnswer();
qset1.getUserAnswer();
qset1.theQuestion;
qset1.theAnswer;


