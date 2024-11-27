
var quizData = [
  {
    question: "Which tag is used to define an unordered list?",
  options: ["<ol>" , "<ul>",  "<li>", "<list>"],
  correctAnswer: "<ul>"
  },
  {
    question: "What does HTML stand for?",
  options: [ "Hyperlinks and Text Markup Language", "Home Tool Markup Language","Hyper Text Markup Language", "Hyperlink Text Marking Language"],
  correctAnswer: "Hyper Text Markup Language"
  },
  {
    question: "Which property is used to change the background color of an element?",
    options: ["color", "background-color", "bg-color", "color-background"],
    correctAnswer: "background-color"
  },
  {
    question: "How do you center a block element horizontally?",
  options: [ "center: true;", "margin: auto;", "align: center;", "text-align: center;"],
  correctAnswer: "margin: auto;"
  },
  {
    question: "What does the `alert()` function do in JavaScript?",
    options: [ "Prints text to the console", "Triggers an event", "Displays a message box", "Changes the page content"],
    correctAnswer: "Displays a message box"
  },
  {
    question: "How do you define a function in JavaScript?",
  options: [ "def myFunction()", "function: myFunction", "function myFunction()", "myFunction() =>"],
  correctAnswer: "function myFunction()"
  },
  {
    question: "Which tag is used to define a table in HTML?",
  options: [ "<tab>", "<tbody>", "<tr>" , "<table>"],
  correctAnswer: "<table>"
  },
  {
    question: "Which property is used to change the font of an element?",
  options: ["font-family", "text-font", "font-style", "font-type"],
  correctAnswer: "font-family"
  },
  {
    question: "How can you add a comment in JavaScript?",
  options: ["// This is a comment", "/* This is a comment */", "# This is a comment", "// This is a comment //"],
  correctAnswer: "// This is a comment"
  },
  {
    question: "What does the `document.getElementById()` function do?",
  options: ["Gets an element by its ID", "Gets the content of a web page", "Changes the style of an element", "Creates a new HTML element"],
  correctAnswer: "Gets an element by its ID"
  }
];

var currentQuestionIndex = 0;
var score = 0;


function displayQuestion() {
  // Check if the quiz is finished
  if (currentQuestionIndex >= quizData.length) {
    showResults();
    return; 
  }

  var questionData = quizData[currentQuestionIndex];
  var questionContainer = document.getElementById("question-container");

  // Clear previous question and options
  questionContainer.innerHTML = "";

  // Display question text
  var questionElement = document.createElement("h2");
  questionElement.textContent = questionData.question;
  questionContainer.appendChild(questionElement);

  // Create answer options buttons
  for (var i = 0; i < questionData.options.length; i++) {
    var optionBtn = document.createElement("button");
    optionBtn.className = "answer-btn"; 
    optionBtn.textContent = questionData.options[i];
    optionBtn.onclick = function() { selectAnswer(this); }; 
    questionContainer.appendChild(optionBtn);
  }
}


function selectAnswer(button) {
  var selectedAnswer = button.textContent;
  var correctAnswer = quizData[currentQuestionIndex].correctAnswer;

  button.className = "answer-btn selected"; 

  // Check if the answer is correct or incorrect
  if (selectedAnswer === correctAnswer) {
    button.className = "answer-btn correct"; 
    score++;
  } else {
    button.className = "answer-btn incorrect"; // Mark as incorrect
  }

  // Disable all buttons after selection
  var buttons = button.parentNode.children;
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }

  // Automatically show the next question after a delay (1 second)
  setTimeout(function() {
    currentQuestionIndex++;
    displayQuestion();
  }, 1000);
}

// Show the final score
function showResults() {
  var resultContainer = document.getElementById("result-container");
  var scoreElement = document.getElementById("score");

  // Display the score
  scoreElement.textContent = "You scored " + score + " out of " + quizData.length;
  
  resultContainer.style.display = "block"; // Show result container
  document.getElementById("quiz-container").style.display = "none"; // Hide quiz container
}

// Restart the quiz
function restartQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  displayQuestion();
  document.getElementById("result-container").style.display = "none"; // Hide result container
  document.getElementById("quiz-container").style.display = "block"; // Show quiz container
}

// Initialize the quiz
displayQuestion();


