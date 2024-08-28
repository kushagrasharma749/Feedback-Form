let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");

function draw() {
    let msg = document.querySelector(".msgBox");
    msg.innerText = 'Draw! Try Again!';
    msg.style.backgroundColor = "#364652";
}

const showWinner = (userWin, userChoice, compChoice) => {
    let msg = document.querySelector(".msgBox");
    if (userWin) {
        msg.innerText = You win! Your ${userChoice} beats ${compChoice};
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    } else {
        msg.innerText = You lose! ${compChoice} beats your ${userChoice};
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
        draw();
    } else {
        let userWin;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else {
            userWin = compChoice === "paper";
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}