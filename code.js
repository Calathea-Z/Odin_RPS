            // set the variables for the game //
            

 const computer = {currentChoice: null};

 const player = {currentChoice: null};

 const choices = ["rock", "paper", "scissors"];
   
   
           // This code block finds a random number between 0-2 which acts as the computer's choice. //

    function getComputerChoice(){
      const randomIndex = Math.floor(Math.random() * 3);
      computer.currentChoice = choices[randomIndex];
      return choices[randomIndex];
    };

    function getPlayerChoice(){
      let playerChoice = prompt("Type Your Choice! (0) Rock, (1) Paper, (2) Scissors");
      player.currentChoice = choices[playerChoice];
      return choices[playerChoice];
    }

    getComputerChoice();
    console.log("The computer chose " + computer.currentChoice + ".");
    
    getPlayerChoice();
    console.log("You chose " + player.currentChoice + ".");

 
