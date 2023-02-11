let computerGuess;
let userGuess = [];
let easyButton = document.getElementById("easy");
let hardButton = document.getElementById("hard");
let msg = document.getElementById("msg");
let inputNum = document.getElementById("inputbox");
let attempts = document.getElementById("attempts");
const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  console.log(computerGuess);
  document.getElementById("newGame").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};
const startGame = () => {
  document.getElementById("gameArea").style.display = "block";
  document.getElementById("welcomeScreen").style.display = "none";
};
const startNew = () => {
  document.getElementById("newGame").style.display = "block";
  inputNum.setAttribute("disabled", true);
};
const compareGuess = () => {
  const userNumber = Number(inputNum.value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;
  // comparing number
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      msg.innerHTML = "Your guess is high";
      inputNum.value = "";
      attempts.innerHTML = userGuess.length;
    } else if (userNumber < computerGuess) {
      msg.innerHTML = "Your guess is low";
      inputNum.value = "";
      attempts.innerHTML = userGuess.length;
    } else {
      msg.innerHTML = "Your guess is correct";
      inputNum.value = "";
      attempts.innerHTML = userGuess.length;
      startNew();
    }
  } else {
    if (userNumber > computerGuess) {
      msg.innerHTML = `You loose!!  correct number was ${computerGuess}`;
      inputNum.value = "";
      attempts.innerHTML = userGuess.length;
      startNew();
    } else if (userNumber < computerGuess) {
      msg.innerHTML = `You loose!!  correct number was ${computerGuess}`;
      inputNum.value = "";
      attempts.innerHTML = userGuess.length;
      startNew();
    } else {
      msg.innerHTML = "Your guess is correct";
      inputNum.value = "";
      attempts.innerHTML = userGuess.length;
      startNew();
    }
  }
};

easyButton.addEventListener("click", function (e) {
  e.preventDefault();
  maxGuess = 10;
  startGame();
});

hardButton.addEventListener("click", function (e) {
  e.preventDefault();
  maxGuess = 5;
  startGame();
});
document.getElementById("newGame").addEventListener("click", function (e) {
  e.preventDefault();
  window.location.reload();
});
