let userScore = 0;
let campScore = 0;

let choices = document.querySelectorAll(".choice");
let message = document.getElementById("msg");

const gencampChoice = () => {
    // rock paper scissor
    const options = ["rock", "paper", "scissors"];
    const randIdx =  Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    message.innerText = "Game was Draw";
    document.getElementsByClassName("result-msg")[0].style.backgroundColor = "#c38edc"
}

const showWinner = (userWin,  userChoice, campChoice) => {
    if(userWin){
        message.innerText = `Congratulation You win ! Your ${userChoice} beat ${campChoice}`;1
        document.getElementsByClassName("result-msg")[0].style.backgroundColor = "green";
        userScore++;
        document.getElementById("user-score").innerText = userScore;
    } else {
        message.innerText = `You lose the game. ${campChoice} beat your ${userChoice}`;
        document.getElementsByClassName("result-msg")[0].style.backgroundColor = "red";
        campScore++;
        document.getElementById("camp-score").innerText = campScore;
    }
}

const playGame = (userChoice) => {
    // console.log("You have choose " + userChoice);
    // generate computer choice
    const campChoice = gencampChoice();
    // console.log("Computer have choose " + campChoice);
    if(userChoice === campChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // paper, scissors
            userWin = campChoice === "paper" ? false : true;
        } else if (userChoice == "paper"){
            // rock, scissors
            userWin = campChoice === "scissors" ? false : true;
        } else {
            // rock, paper
            userWin = campChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, campChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);   
    });
});