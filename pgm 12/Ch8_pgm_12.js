var displayQuestion = function (questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(
      function (answer, i) {
        console.log(options[i] + " - " + answer);
      }
    );
  };
  
  var question1 = {
    question : "What is the capital of France?",
    answers : [
      "Bordeaux",
      "F",
      "Paris",
      "Brussels"
    ],
    correctAnswer : "Paris"
  };
  
  displayQuestion(question1);



  let question2 = {
    question: "What is the capital of France?",
    answer: "Paris"
};

let question3 = {
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare"
};

let question4 = {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter"
};

let question5 = {
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci"
};



let questions = [question1, question2, question3, question4];


function displayQuestion(question) {
    console.log(`Question: ${question.question}`);


}

console.log("Displaying all questions:");
questions.forEach(displayQuestion);


console.log("\nDisplaying question 2:");
displayQuestion(questions[1]); 