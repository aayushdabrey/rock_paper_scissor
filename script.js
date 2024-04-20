let userpoint = 0;
let computerpoint = 0;

let choice=document.querySelectorAll(".choices");
let message= document.querySelector("#final-msg");

let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice =()=>{
    let ans=["rock","paper","scissor"];
    const index= Math.floor(Math.random()*3);
    return ans[index];
}

const draw = () =>{
    message.innerText = "Game was draw , play again";
    message.style.color = "grey";
}

const showWinner =(userChoice,computerChoice,userWin)=>{
    if (userWin) {
        userpoint++;
        userScorePara.innerText = userpoint;
        message.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        message.style.color = "green";
      } else {
        computerpoint++;
        compScorePara.innerText = computerpoint;
        message.innerText = `You lost. ${computerChoice} beats your ${userChoice}`;
        message.style.color = "red";
      }
  

}

const playGame=(userChoice)=>{
    const computerChoice = genCompChoice();

    if(userChoice === computerChoice){
        draw();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin= computerChoice === "scissor" ? false: true;
        }
        else{
            userWin=computerChoice === "rock" ? false : true ;
        }
        showWinner(userChoice,computerChoice,userWin)
    }  
}

choice.forEach((userchoices) => {
    userchoices.addEventListener("click",()=>{
        const userchoice = userchoices.getAttribute("id");
        playGame(userchoice);
    })
});
