// ---------------- QUIZ DOM ----------------
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");

// ---------------- DATA ----------------
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
    choiceC: "Cascading Style Sheets",
    choiceD: "I don't know!",
    correct: "C",
  },
];

let runningQuestionIndex = 0;
let score = 0;

// ---------------- START QUIZ ----------------
dom_start.onclick = () => {
  setActive(menuPlay);   // keep menu state correct
  hide(dom_start);
  hide(dom_scoreContainer);
  hide(dom_editor);
  show(dom_quiz);

  runningQuestionIndex = 0;
  score = 0;
  renderQuestion();
};


// ---------------- RENDER QUESTION ----------------
function renderQuestion() {
  const q = questions[runningQuestionIndex];
  dom_question.textContent = q.title;
  dom_choiceA.textContent = q.choiceA;
  dom_choiceB.textContent = q.choiceB;
  dom_choiceC.textContent = q.choiceC;
  dom_choiceD.textContent = q.choiceD;
}

// ---------------- ANSWERS ----------------
dom_choiceA.onclick = () => checkAnswer("A");
dom_choiceB.onclick = () => checkAnswer("B");
dom_choiceC.onclick = () => checkAnswer("C");
dom_choiceD.onclick = () => checkAnswer("D");

function checkAnswer(answerId) {
  if (answerId === questions[runningQuestionIndex].correct) {
    score++;
  }

  runningQuestionIndex++;

  if (runningQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    renderScore();
  }
}

// ---------------- SCORE ----------------
function renderScore() {
  hide(dom_quiz);
  show(dom_scoreContainer);

  const percent = Math.round((score / questions.length) * 100);
  dom_scoreContainer.innerHTML = `<h2>Score: ${percent}%</h2>`;
}
