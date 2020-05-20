/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;
var stillPlaying = true;


//--------------------------------------------------

 var rollBtn = document.querySelector(".btn-roll");
 var holdBtn = document.querySelector(".btn-hold");
 var newGameBtn = document.querySelector(".btn-new");

 //--------------------------------------------------

 var roleScore1 = document.querySelector("#score-0");
 var roleScore2 = document.querySelector("#score-1");
 var currentCount1 = document.querySelector("#current-0");
 var currentCount2 = document.querySelector("#current-1");


function init(){

 scores = [0,0];
 roundScore = 0;
 activePlayer = 0;
 roleScore1.textContent='0';
 currentCount1.textContent='0';
 roleScore2.textContent='0';
 currentCount2.textContent='0';
 stillPlaying=true;

 document.querySelector('.dice').style.display='none';
 document.querySelector('#name-0').textContent = "Player1";
 document.querySelector('#name-1').textContent = "Player2";
 document.querySelector('.player-0-panel').classList.remove("winner");
 document.querySelector('.player-1-panel').classList.remove("winner");
 document.querySelector('.player-0-panel').classList.remove("active");
 document.querySelector('.player-1-panel').classList.remove("active");
 document.querySelector('.player-0-panel').classList.add("active");

}
init();
//----------------------------------------------------

function roleDice(){}
function newGame(){}
function holdScore(){}

//----------------ROlling function--------------------------

rollBtn.addEventListener('click',function(){
// 1 - random number

if (stillPlaying) {


 var dice = Math.floor (Math.random() * 6) + 1;

 // 2- Display results
  var diceDom =document.querySelector('.dice');
  diceDom.style.display='block';
  diceDom.src='dice-' + dice + ".png";

  // update he numbber if not one
  if(dice !== 1){
    roundScore+= dice;
    document.querySelector('#current-'+activePlayer).textContent = roundScore;
  }else {
    SwitchPlayer();
  }
}});


//----------------- holding function -------------------------------------.

holdBtn.addEventListener('click',function(){

if(stillPlaying){

// add current score to GLOBAL score
scores[activePlayer] +=roundScore;
// update the ui
document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
// check if won
if(scores[activePlayer]>=100){
document.querySelector('#name-' + activePlayer).textContent='Winner';
document.querySelector('.dice').style.display='none';
document.querySelector('.player-'+ activePlayer+'-panel').classList.add("winner");
document.querySelector('.player-'+ activePlayer+'-panel').classList.remove("active");
stillPlaying=false;
}else{
 SwitchPlayer();
}

}
});

//================================================================================

newGameBtn.addEventListener('click', init);
//===========================================================================

function SwitchPlayer(){

 activePlayer === 0 ? activePlayer =1 : activePlayer=0;
 roundScore = 0;

 document.querySelector('#current-1').textContent = 0;
 document.querySelector('#current-0').textContent = 0;
 document.querySelector('.player-1-panel').classList.toggle("active");
 document.querySelector('.player-0-panel').classList.toggle("active");

 document.querySelector('.dice').style.display='none';

}