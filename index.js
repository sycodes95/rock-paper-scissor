

function getComputerChoice(){

    /* getComputerChoice() function generates a random choice betweeen rock paper and scissor */

    const weapon = ['rock', 'paper', 'scissor'];
    const weaponNumber = (Math.floor(Math.random() * weapon.length));
    switch (weaponNumber) {
        case 0 :
            return 'rock';
            break;
        case 1 :
            return 'paper';
            break;  
        case 2 :
            return 'scissor'
            break;       
    }
}

function playRound (playerSelection, computerSelection){

    /* playRound function plays one round of rock paper scissors and returns the result of that one game.
    Also increments score depending on whether player or computer won the game */
    
    
    
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'Tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You Lose';
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return 'You Win';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Tie!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return 'You Lose';
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return 'You Lose';
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return 'You Win';
    } else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
        return 'Tie!';
    } else {
        return 'Input Correct Weapon';
    }
}
                
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');
const result = document.querySelector('#result');

let playerScore = 0;
let computerScore = 0;
let playerScoreCount = document.querySelector('#playerScore');
let computerScoreCount = document.querySelector('#computerScore');


rockButton.addEventListener('click', () => {
    let playerSelection = 'rock';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (playRound(playerSelection, computerSelection) === 'Tie!'){
        result.textContent = 'Tie!'
    } else if (playRound(playerSelection, computerSelection) === 'You Win'){
        result.textContent = 'You Win!';
        playerScore++;
    } else {
        result.textContent = 'You Lose!';
        computerScore++;
    }

    if (playerScore === 5){
        result.textContent = 'You win the whole game, congrats!';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5){
        result.textContent = 'You lost the whole game, congrats!';
        playerScore = 0;
        computerScore = 0;
    }

   
    
    playerScoreCount.textContent = playerScore;
    computerScoreCount.textContent = computerScore;
    
        

    

    
    console.log(playerSelection)
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection))
    console.log(playerScore);
    console.log(computerScore);
    

    
});

paperButton.addEventListener('click', () => {
    let playerSelection = 'paper';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (playRound(playerSelection, computerSelection) === 'Tie!'){
        result.textContent = 'Tie!'
    } else if (playRound(playerSelection, computerSelection) === 'You Win'){
        result.textContent = 'You Win!';
        playerScore++;
    } else {
        result.textContent = 'You Lose!'
        computerScore++;
    }

    if (playerScore === 5){
        result.textContent = 'You win the whole game, congrats!';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5){
        result.textContent = 'You lost the whole game, congrats!';
        playerScore = 0;
        computerScore = 0;
    }

  
    
    

    playerScoreCount.textContent = playerScore;
    computerScoreCount.textContent = computerScore;
    


    
    console.log(playerSelection)
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection))
    console.log(playerScore);
    console.log(computerScore);
    
});

scissorButton.addEventListener('click', () => {
    let playerSelection = 'scissor';
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (playRound(playerSelection, computerSelection) === 'Tie!'){
        result.textContent = 'Tie!'
    } else if (playRound(playerSelection, computerSelection) === 'You Win'){
        result.textContent = 'You Win!';
        playerScore++;
    } else {
        result.textContent = 'You Lose!'
        computerScore++;
    }

    if (playerScore === 5){
        result.textContent = 'You win the whole game, congrats!';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5){
        result.textContent = 'You lost the whole game, congrats!';
        playerScore = 0;
        computerScore = 0;
    }

   

    playerScoreCount.textContent = playerScore;
    computerScoreCount.textContent = computerScore;
    
    
    console.log(playerSelection)
    console.log(computerSelection)
    console.log(playRound(playerSelection, computerSelection))
    console.log(playerScore);
    console.log(computerScore);

    
});






    





         
    
        
              
        
              
        
               
                
                
        
                
        
        
                    
         
                
        
                  
    

    







    
    







/* playerScore and computerScore sets starting score to "0" and is used in playRound function to increment score depending on
who won the round */


function game (){
    /* This game function is created to allow the playRound function to be executed 5 times and also return the result of those 5 rounds */

    

    

    /* This if else statement takes the total score from both playerScore and computerScore variables and returns who won and lost and if
    the game was a tie. */

    

    
}
    


    
    

    
    
    


    









    
            


   
        
            
            
        
            
            
        
            
        
        










        

            
            




            
        
        
        
        
        
        

        
        
        
        
        
      




        

        
        
        
        








    
    

    

    



















