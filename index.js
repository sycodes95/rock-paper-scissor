

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
        computerScore++;
        return 'You Lose';
        
                    
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++;    
        return 'You Win';
                
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++; 
        return 'You Win';
                  
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'Tie!';
                
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        computerScore++;  
        return 'You Lose';
        
              
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore++; 
        return 'You Lose';
              
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++ 
        return 'You Win';
               
    } else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
        return 'Tie!';
                
    } else {
        return 'Input Correct Weapon';
                
    }
}

let playerScore = 0;
let computerScore = 0;

/* playerScore and computerScore sets starting score to "0" and is used in playRound function to increment score depending on
who won the round */


function game (){
    /* This game function is created to allow the playRound function to be executed 5 times and also return the result of those 5 rounds */

    for (let i = 0; i < 5; i++) {

        /* This for loop, loops the prompt needed to get user to input "rock, paper, or scissor". It also loops the randomly generated 
        computerSelection. Both these variables are then used as parameters for playRound() function to return the result of each round.
        Note: I had a really tough time trying to figure out why just placing <playRound(playerSelection, computerSelection)> alone in the for loop wasn't looping the playerSelection and computerSelection variable so that a new prompt would pop up each round as well as generate a random choice for computer selection. I eventually figured out the playerSelection and computerSelection variables needs to be in the loop as well. Before this debug, I had them placed in global. */
        
        let playerSelection = prompt('rock, paper, or scissor?').toLowerCase()
        let computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
        
        console.log(playRound(playerSelection, computerSelection))
        
        
        


    }

    if (playerScore > computerScore){
        alert('You Won The Game!');

    } else if (playerScore < computerScore){
        alert('You Lost The Game!');

    } else {
        alert('Tie Game!');
    }

    /* This if else statement takes the total score from both playerScore and computerScore variables and returns who won and lost and if
    the game was a tie. */

    

    
}
    
game()
console.log(game);

    
    

    
    
    


    









    
            


   
        
            
            
        
            
            
        
            
        
        










        

            
            




            
        
        
        
        
        
        

        
        
        
        
        
      




        

        
        
        
        








    
    

    

    



















