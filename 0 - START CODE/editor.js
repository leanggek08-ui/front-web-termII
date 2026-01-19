function renderEditor() {
  dom_editor.innerHTML = "<h2>Edit Quiz</h2>";

  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.textContent = q.title;
    div.style.cursor = "pointer";

    div.onclick = () => {
      const newTitle = prompt("Edit question:", q.title);
      if (newTitle) {
        questions[index].title = newTitle;
        renderEditor();
      }
    };

    dom_editor.appendChild(div);
  });
}
