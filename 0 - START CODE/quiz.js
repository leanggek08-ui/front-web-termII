// // DOMS ELEMENTS  ---------------------------------------------------------
// const dom_quiz = document.querySelector("#quiz");
// const dom_question = document.querySelector("#question");
// const dom_choiceA = document.querySelector("#A");
// const dom_choiceB = document.querySelector("#B");
// const dom_choiceC = document.querySelector("#C");
// const dom_choiceD = document.querySelector("#D");
// const dom_score = document.querySelector("#score");
// const dom_start = document.querySelector("#start");

// dom_start.addEventListener("click", onStart);

// // DATA  ---------------------------------------------------------
// let questions = [
//   {
//     title: "What does HTML stand for?",
//     choiceA: "Hi Thierry More Laught",
//     choiceB: "How To move Left",
//     choiceC: "Ho Theary Missed the Laundry !",
//     choiceD: "Hypertext Markup Language",
//     correct: "D",
//   },
//   {
//     title: "What does CSS stand for?",
//     choiceA: "Cisco and Super Start",
//     choiceB: "Ci So Sa",
//     choiceC: "Cascading Style Sheets ",
//     choiceD: "I don't know !",
//     correct: "C",
//   },
//   {
//     title: "What does JS stand for?",
//     choiceA: "Junior stars",
//     choiceB: "Justing Star",
//     choiceC: "Javascript",
//     choiceD: "RonanScript",
//     correct: "C",
//   },
// ];
// let runningQuestionIndex = 0;
// let score = 0;

// // FUNCTIONS ---------------------------------------------------------

// // Hide a given element
// function hide(element) {
//   // TODO
// }

// function show(element) {
//   // TODO
// }

// function onStart() {
//   // Render the current question
//   // Display the quiz view,
// }

// function renderQuestion() {
//   // Render the current question on the quiz view
// }

// function onPlayerSubmit(answer) {
//   // Update the score, display the next question or the score view
// }

// function renderSCore() {
//   // calculate the amount of question percent answered by the user
//   // choose the image based on the scorePerCent
// }

// // FUNCTIONS ---------------------------------------------------------
// show(dom_start);
// hide(dom_quiz);
// hide(dom_score);



// DOM ELEMENTS ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_scoreContainer = document.querySelector("#scoreContainer");
const dom_start = document.querySelector("#start");

// DATA ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];

let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "flex";
}

// Start quiz
function onStart() {
  hide(dom_start);
  show(dom_quiz);
  runningQuestionIndex = 0;
  score = 0;
  renderQuestion();
}

// Render a question
function renderQuestion() {
  const q = questions[runningQuestionIndex];
  dom_question.textContent = q.title;
  dom_choiceA.textContent = q.choiceA;
  dom_choiceB.textContent = q.choiceB;
  dom_choiceC.textContent = q.choiceC;
  dom_choiceD.textContent = q.choiceD;
}

// Handle answer click
function checkAnswer(answerId) {
  const correctAnswer = questions[runningQuestionIndex].correct;

  if (answerId === correctAnswer) score++;

  runningQuestionIndex++;

  if (runningQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    renderScore();
  }
}

// Render final score
function renderScore() {
  hide(dom_quiz);
  show(dom_scoreContainer);

  const scorePercent = Math.round((score / questions.length) * 100);

  let emoji = "";
  if (scorePercent === 100) emoji = "🏆 Perfect!";
  else if (scorePercent >= 70) emoji = "😎 Great!";
  else if (scorePercent >= 40) emoji = "🙂 Not bad";
  else emoji = "😢 Try again";

  dom_scoreContainer.innerHTML = `
    <h2>Your Score: ${score} / ${questions.length} (${scorePercent}%)</h2>
    <p>${emoji}</p>
  `;
}

// EVENT ---------------------------------------------------------
dom_start.addEventListener("click", onStart);

// INITIAL STATE ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_scoreContainer);
