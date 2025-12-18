let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorep=document.querySelector("#user-score");
const compScorep=document.querySelector("#comp-score");
const gencompChoice=()=>{
    const option=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
};
const drawGame=()=>{
    msg.innerText="game was draw ,play again!";
    msg.style.backgroundColor="yellow";
};
const showWinner=(userWin,userChoice,comChoice)=>{
    if(userWin){
        userScore++;
        userScorep.innerText=userScore;
        msg.innerText=`you win! your ${userChoice}beats${comChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorep.innerText=compScore; 
        msg.innerText=`you lose !${comChoice}beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    //console.log("Your choice=",userChoice); not necessary
    //Generate computer choice
    const compChoice=gencompChoice();
    //console.log("compChoice=",compChoice); not necessary
if (userChoice===compChoice){
    //Draw Game
    drawGame();
}
else{
    let userWin=true;
    if(userChoice==="rock"){
        //scissor,paper
        userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        //rock,scissors
        userWin=compChoice==="scissors"?true:true;
    }else{
        //paper,rock
        userWin=compChoice==="rock"?false:true;
    }
showWinner(userWin,userChoice,compChoice);
    }
    };
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("Id");
        playGame(userChoice);
    });
});