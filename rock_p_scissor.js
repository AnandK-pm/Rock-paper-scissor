//const prompt=require('prompt-sync')();
player_points=0;
computer_points=0;
function getComputerChoice()
{
    let randnum=Math.random();
    randnum=randnum*100;
    if (randnum<33)
    {
        return "rock";
    }
    else if (randnum>=33 && randnum<66)
    {
        return "paper";
    }
    else if (randnum>=66)
    {
        return "scissor";
    }
}
function playRound(playerSelection, computerSelection) 
{
    let pl=playerSelection.toLowerCase();
    let co=computerSelection.toLowerCase();
    console.log(pl);
    console.log(co);
    if((pl=="rock" && co=="scissor" )||(co=="rock" && pl=="scissor") )
    {
        let winner=(pl==="rock")?"You":"Computer";
        console.log("rock beats scissor,"+winner+" wins");
        if (winner=="You")
        player_points+=1;
        else
        computer_points+=1;
    }
    else
    {
        let dictionary={};
        dictionary["rock"]=1;
        dictionary["paper"]=2;
        dictionary["scissor"]=3;
        if (dictionary[pl]>dictionary[co])
        {
            player_points+=1
            return(pl+" beats "+ co+",You wins");
            
        }
        else if (dictionary[pl]<dictionary[co])
        {
            computer_points+=1
            return(co+" beats "+ pl+",Computer wins");
            
        }
        else
        {
            return("its a Draw! Play next round");
        }
    }
}
function playGame()
{
    let choice=document.createElement("div");
    let score=document.querySelector("#score");
    let rockbut=document.querySelector("#rock");
    let paperbut=document.querySelector("#paper");
    let scissorbut=document.querySelector("#scissor");
    let resetbut=document.querySelector("#reset");
    let res=document.querySelector("#results");
    let turn=document.querySelector("#turn");
    let final=document.querySelector("#final");
    let final1=document.querySelector("#final1");
    let count=0;
    turn.textContent="Turn number :0";  
    score.textContent="Computer Score : 0 || Your Score : 0";
    function checkGameStatus() 
    {
        if (computer_points === 5 || player_points===5) 
        {
            score.textContent=`Computer Score : ${computer_points} || Your Score : ${player_points}`;
            if (player_points > computer_points)
                final.textContent = "CONGRATULATIONS !! YOU WON ";
            else
                final1.textContent = "Sorry, GAME OVER !";            
        }
    }
        resetbut.addEventListener("click",()=>{
            count = 0;
            res.textContent='';
            player_points = 0;
            computer_points = 0;
            turn.textContent = "Turn number: 0";
            score.textContent = `Computer Score : 0 || Your Score : 0`;
            final.textContent='';
            final1.textContent='';
        });
        rockbut.addEventListener("click",()=>
        {
            const computerSelection = getComputerChoice();
            let result=playRound("rock",computerSelection);
            choice.textContent=`Computer choice: ${computerSelection} , Your Choice: rock`;
            res.textContent=result;
            res.appendChild(choice);
            turn.textContent = `Turn number: ${++count}`;
            score.textContent=`Computer Score : ${computer_points} || Your Score : ${player_points}`;
            checkGameStatus();
        });
        paperbut.addEventListener("click",()=>
        {
            const computerSelection = getComputerChoice();
            let result=playRound("paper",computerSelection);
            choice.textContent=`Computer choice: ${computerSelection} , Your Choice: paper`;
            res.textContent=result;
            res.appendChild(choice);
            turn.textContent = `Turn number: ${++count}`;
            score.textContent=`Computer Score : ${computer_points} || Your Score : ${player_points}`;
            checkGameStatus();
        });
        scissorbut.addEventListener("click",()=>
        {
            const computerSelection = getComputerChoice();
            let result=playRound("scissor",computerSelection);
            choice.textContent=`Computer choice: ${computerSelection} , Your Choice: scissor`;
            res.textContent=result;
            res.appendChild(choice);
            turn.textContent = `Turn number: ${++count}`;
            score.textContent=`Computer Score : ${computer_points} || Your Score : ${player_points}`;
            checkGameStatus();
        });

} 
playGame();

//https://dbrah-design.github.io/rock-paper-scissors/