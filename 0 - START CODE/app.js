// ---------------- DOM (shared) ----------------
const dom_start = document.querySelector("#start");
const dom_quiz = document.querySelector("#quiz");
const dom_scoreContainer = document.querySelector("#scoreContainer");
const dom_editor = document.querySelector("#editor");

const menuPlay = document.querySelector("#menu-play");
const menuEdit = document.querySelector("#menu-edit");

// ---------------- SHOW / HIDE ----------------
function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "flex";
}

// ---------------- MENU ACTIVE ----------------
function setActive(btn) {
  menuPlay.classList.remove("active");
  menuEdit.classList.remove("active");
  btn.classList.add("active");
}

// ---------------- NAVIGATION ----------------
menuPlay.addEventListener("click", () => {
  setActive(menuPlay);
  show(dom_start);
  hide(dom_quiz);
  hide(dom_scoreContainer);
  hide(dom_editor);
});

menuEdit.addEventListener("click", () => {
  setActive(menuEdit);
  hide(dom_start);
  hide(dom_quiz);
  hide(dom_scoreContainer);
  show(dom_editor);

  if (typeof renderEditor === "function") {
    renderEditor();
  }
});

// INITIAL STATE
show(dom_start);
hide(dom_quiz);
hide(dom_scoreContainer);
hide(dom_editor);
