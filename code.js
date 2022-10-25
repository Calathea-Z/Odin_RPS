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

   
    alert(getComputerChoice());
