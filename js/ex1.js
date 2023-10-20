// List of questions (statement + answer)
const questions = [
  {
    statement: "2+2?",
    answer: "2+2 = 4"
  },
  {
    statement: "In which year did Christopher Columbus discover America?",
    answer: "1492"
  },
  {
    statement:
      "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
    answer: "The E letter"
  }
];

for (let i = 0; i < questions.length; i++) {
  let div = document.createElement("div");
  let answer = document.createElement("div");
  let button = document.createElement("button");
  
  div.innerHTML = `Question: ${questions[i].statement}<br>`;

  button.innerHTML = "Show answer";
  button.addEventListener("click", () => {
    button.remove();
    answer.innerHTML = `${questions[i].answer}`;
  });

  div.appendChild(button);
  div.appendChild(answer);
  document.getElementById("content").appendChild(div);
}
