const prompt=require('prompt-sync')();
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
    let rock;
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
    // your code here!
}
function playGame()
{
    for(let i=1;i<=5;i++)
    {
        const playerSelection =prompt("enter your choice:") ;
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(player_points);
        console.log(computer_points);
    }
    if (player_points>computer_points)
    console.log("Congratulations! You won the Game!");
    else
    console.log("GAME OVER .AI WON")
    document.getElementById('results').textContent = 'Player score: ${player_points}, Computer score: ${computer_points}'
}
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', () => {
        playGame(); 
    });
});

