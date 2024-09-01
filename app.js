let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll (".choice");

const msg = document.querySelector ("#msg");
const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score');

const genCompChoice = () => {
    const option = ["rock", "paper" , "scissors"];
    // rock , paper , scissors

    const randIdx = Math.floor(Math.random () * 3 );
    return option[randIdx];
}

const drawGame = () => {
    // console.log ("game was draw");
    msg.innerText = "Game Was Draw, play again ";
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin, userChoice, compChoice ) => {
    if (userWin){
        // console.log ("You Win!");
        userScore ++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win !! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        // console.log ("You Lose");
        compScore ++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose  ${compChoice} beats your  ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log ("User Choice is = ", userChoice);

    // Generate computer Choice 
    const compChoice = genCompChoice();
    // console.log ("computer choice is = ", compChoice); 


    // for Result
    if (userChoice === compChoice){
        // Draw Game
        drawGame ();
    }
    else {
        let userWin = true;
        if (userChoice === "rock"){
            //seissors , paper 
            userWin = compChoice === "paper" ? false : true;

        }
        else if (userChoice === "paper") {
            //rock , scissor 
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            // rock , paper 
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice, compChoice);
    }
     
}

choices.forEach((choice) => {
    // console.log (choice);
    choice.addEventListener ("click", () => {
        const userChoice =  choice.getAttribute("id");
        // console.log ("choice is clicked", userChoice);
        playGame (userChoice);
    });
});