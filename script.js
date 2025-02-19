let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msgs = document.querySelector("#msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genComputerChoice =()=>{
    const options = ["rock","paper","scissors"]
    const randIndx =Math.floor(Math.random()*3);
    return options[randIndx];
};
const drawGame = () => {
    msgs.innerText = "Game was Draw. Play again.";
    msgs.style.backgroundColor = "#081b31";
  };
  const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      userScore++;
      userScorePara.innerText = userScore;
      msgs.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      msgs.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorePara.innerText = compScore;
      msgs.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      msgs.style.backgroundColor = "red";
    }
  };
  const playGame = (userChoice) => {
    //Generate computer choice
    const compChoice = genComputerChoice();
  
    if (userChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };
  choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });  
