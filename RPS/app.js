const computerChoiceDisplay = document.getElementById("computer-choice");
const yourChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let yourChoice;
let computerChoice;
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    yourChoice = e.target.id;
    yourChoiceDisplay.innerHTML = yourChoice;
    generateComputerChoice();
    getResult();
  })
);
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) computerChoice = "rock";
  if (randomNumber === 1) computerChoice = "paper";
  if (randomNumber === 2) computerChoice = "scissor";
  computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult() {
  if (computerChoice === yourChoice) {
    result = "its a draw!!";
  }
  if (computerChoice === "rock" && yourChoice === "paper") {
    result = "You Win :)";
  }
  if (computerChoice === "Scissor" && yourChoice === "rock") {
    result = "You Win :)";
  }
  if (computerChoice === "paper" && yourChoice === "scissor") {
    result = "You win :)";
  }
  if (computerChoice === "rock" && yourChoice === "scissor") {
    result = "You loose :(";
  }
  if (computerChoice === "scissor" && yourChoice === "paper") {
    result = "You loose :(";
  }
  if (computerChoice === "paper" && yourChoice === "rock") {
    result = "You loose :(";
  }
  resultDisplay.innerHTML = result;
}
