'use strict';

// selecting elements

// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');
// const score0El = document.querySelector('#score--0');
// const score1El = document.getElementById('score--1'); // another way of select elements by id 
// const diceEl = document.querySelector('.dice');
// const btnRoll = document.querySelector('.btn--roll');
// const btnNew = document.querySelector('.btn--new');
// const btnHold = document.querySelector('.btn--hold');
// const current0El  = document.getElementById('current--0');
// const current1El  = document.getElementById('current--1');




// //starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden'); // hidden class we have mentioned in css which has a property display: none;

// let scores , currentScore, activePlayer, playing;



// const init = function(){

//     //starting conditions
//      scores = [0,0];
//      currentScore= 0;
//          activePlayer =  0;
//      playing = true; 

//     score0El.textContent = 0;
//     score1El.textContent = 0;
//     current0El.textContent = 0;
//     current1El.textContent =0;

//     diceEl.classList.add('hidden'); // hidden class we have mentioned in css which has a property display: none;
//     player0El.classList.remove('player--winner');
//     player1El.classList.remove('player--winner');
//     player0El.classList.add('player--active');
//     player1El.classList.remove('player--active');
    
// }
// init();

// const switchPlayer = function(){
//     document.getElementById(`current--${activePlayer}`).textContent = 0 ;
// currentScore =0;    
// activePlayer = activePlayer === 0 ? 1 : 0 ; 
// player0El.classList.toggle('player--active'); // toggle class adds a class if its not there and removes if its there.
// player1El.classList.toggle('player--active');

// }



// // rolling dice functionality

// btnRoll.addEventListener('click', function(){
//     if(playing) {
//     //1. generate random number

//     const dice = Math.trunc(Math.random()*6)+1;

//     //2.  display the dice
//         diceEl.classList.remove('hidden');

//     diceEl.src = `dice-${dice}.png`;

//     //3. check for roll 1, if true, 
//     if(dice !==1){
//         // add dice to the current score
//         currentScore += dice;
//         document.getElementById(`current--${activePlayer}`).textContent = currentScore ; // by this we are selecting player 1 first 
//     // current0El.textContent = currentScore;  // assisigning the current score to player 1 element which is score0El


//     }else{
//     //switch to next player
//     switchPlayer();
//     }
// }
// });

// // holding the scores
// btnHold.addEventListener('click' ,  function(){
//     if(playing){
//         console.log('hold button');
//         // add current score to active player's score
//         scores[activePlayer] +=  currentScore; // scores[1] = scores[1] + currentScore ; scores[0] = scores[0] + currentScore ;
        
//         document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        
        
//         // check if the score is  >= 100
        
//         if(scores[activePlayer] >= 100){
//         //finish the game
//         playing = false;
//         diceEl.classList.add('hidden');
//         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
//         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        
//         }
//         else{
//             switchPlayer();
//         }
//         // if not switch to the next player
        
//     }  
// }
// );

// btnNew.addEventListener('click', init);


//1) create varaibles for all buttons 

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl    = document.querySelector('.dice');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

let currentScore, activePlayer ,scores, playing ;


const init = function () {
  
    currentScore = 0;
    activePlayer =0;
     scores = [0,0];
     playing = true;

score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent= 0;
current1El.textContent= 0;


diceEl.classList.add('hidden');
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
document.getElementById(`name--0`).innerHTML = 'Player 1';
document.getElementById(`name--1`).innerHTML = 'Player 2';
    
}

init();

// let currentScore = 0;
// let activePlayer =0;
// const scores = [0,0];
// let playing = true;




               
btnRoll.addEventListener('click', function() {
    if(playing){
const dice = Math.trunc(Math.random()*6)+1;
diceEl.classList.remove('hidden');
diceEl.src = `dice-${dice}.png `

if(dice !==1){
 currentScore += dice;
 document.getElementById(`current--${activePlayer}`).textContent = currentScore;

}else{ // switching  the players.

switchPlayer();

    //{// document.getElementById(`current--${activePlayer}`).textContent = 0;
    // currentScore= 0;
    // activePlayer= activePlayer=== 0?1:0;
    // player0El.classList.toggle('player--active');
    // player1El.classList.toggle('player--active');}


}
    }

})

btnHold.addEventListener('click',function () {
if(playing){
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
    if(scores[activePlayer] >= 20){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        diceEl.classList.add('hidden');
document.getElementById(`name--${activePlayer}`).innerHTML = 'you won';
    }
else{

    switchPlayer();
}
}
})


const switchPlayer = function () {

     document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore= 0;
    activePlayer= activePlayer=== 0?1:0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
    
    
    btnNew.addEventListener('click', init );
//         score0El.textContent = 0;
// score1El.textContent = 0;
// current0El.textContent= 0;
// current1El.textContent= 0;
// diceEl.classList.add('hidden');
// document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
//         document.querySelector(`.player--0`).classList.add('player--active');
    


// create a state variable to check if the game is playing or not
// if the game is finished we should not play the game buttons should freeze.


