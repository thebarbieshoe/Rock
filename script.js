//$( document ).ready(function() {

 // randomly returns 1,2,3 = Rock, Paper, or Scissors
 function computerPlay() 
 {
    var x = Math.floor((Math.random()*3)+1); 
    document.write(x);

    if (x==1) 
    { 
      document.write('Rock'+'<br>'); 
      return 'Rock';
    }
    if (x==2) 
    { 
      document.write('Paper'+'<br>'); 
      return 'Paper';
    }
    if (x==3)
    { 
      document.write('Scissors'+'<br>');
      return 'Scissors'; 
    }
    else
    {
  	  document.write('Rock'+'<br>'); 
  	  return 'Rock';}
 }
 computerPlay();
  //});

 /*who's the winner?
 	1 - Rock
 	2 - Paper
 	3 - Scissor */

 /* function playRound(playerSelection, computerSelection)
 {
 	//make all words lowercase
 	playerSelection = playerSelection.toLowerCase();
 	computerSelection = computerSelection.toLowerCase();

 	if (playerSelection == computerSelection) 
 		{return 'It\'s a Tie!'; }
 	if (computerSelection == 'rock') && (playerSelection == 'paper')
 		{return 'You win! Paper beats Rock';}
 	if (computerSelection == 'rock') && (playerSelection == 'scissors')
 		{return 'You lose! Rock beats Scissors';}
	if (computerSelection == 'paper') && (playerSelection == 'rock')
 		{return 'You lose! Paper beats Rock';}
 	if (computerSelection == 'paper') && (playerSelection == 'scissors')
 		{return 'You win! Scissors beats Papers';}
 	if (computerSelection == 'scissors') && (playerSelection == 'rock')
 		{return 'You win! Rock beats Scissors';}
 	if (computerSelection == 'scissors') && (playerSelection == 'paper')
 		{return 'You lose! Scissors beats Paper';}
 	else // ELSE PAPER
 		{	document.write(computerSelection + '<br>';
 			return 'Something went wrong';}
 }

const playerSelection = 'Rock';
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerPlay))

function game()
{
	//const computerSelection = computerPlay();
	//const playerSelection = 'Rock'
	for (var i=0; i < 5; i++)
	{
		//need computer to select something new each time
		//const computerSelection = computerPlay();
		playRound(playerSelection, computerSelection);
		document.write('did it work?' + '<br>');
	}
}

game();

});