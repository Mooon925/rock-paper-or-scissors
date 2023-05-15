const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock") {
    return userInput;
  } else if (userInput === "scissor") {
    return userInput;
  } else if (userInput === "paper") {
    return userInput;
  } else {
    console.log("error");
  }
};

function getComputerChoice() {
  const a = Math.floor(Math.random() * 3);
  if (a === 0) {
    return "rock";
  } else if (a === 1) {
    return "scissor";
  } else if (a === 2) {
    return "paper";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game was a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissor") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissor") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
}
function playGame() {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice,computerChoice))
}
playGame()