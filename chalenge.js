/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/

var scores, roundscore, activePlayer, dice, gamePlaying;
 
 var lastdice;
 
 
 init();

 /********************************************* START***********************************************
**********************************"Roll Buttom" click event to "Roll Dice" **********************/

 document.querySelector('.btn-roll').addEventListener('click', function(){

   if(gamePlaying){
       
        //1. Rondome number
         var dice0 = Math.floor(Math.random()*6)+1;
         var dice1 = Math.floor(Math.random()*6)+1;

      
         //2. Display the result
         document.getElementById('dice-0').style.display = 'block';
         document.getElementById('dice-1').style.display = 'block';
         document.getElementById('dice-0').src = 'dice-' + dice0 + '.png';
         document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';


         //3. Update the round score if the rollled number was not a 1

         if(dice0 !== 1 && dice1 !== 1){
            //Add score
            roundscore += dice0 + dice1;
            document.querySelector('#current-' + activePlayer).textContent = roundscore;
         }
         else{
            //next player
            nextPlayer();
         }
      }

      });

   //        if (dice === 6 && lastdice ===6){
   //         scores[activePlayer] = 0;
   //         document.querySelector('#score-' + activePlayer).textContent = '0';
   //         nextPlayer();
   //        } 
   //       else if(dice !== 1){
   //          //Add score
   //          roundscore += dice;
   //          document.querySelector('#current-' + activePlayer).textContent = roundscore;
   //       }
   //       else{
   //          //next player
   //          nextPlayer();
   //       }
   //          }
   //        lastdice = dice;

/********************************************* END***********************************************/



/********************************************* START***********************************************
**********************************"Hold Buttom" click event to "hold the score" **********************/
      document.querySelector('.btn-hold').addEventListener('click', function(){
         if(gamePlaying){
         
            //Add CURRENT score to GLOBLE score
         scores[activePlayer] += roundscore;

         //Update the Ui
         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
          var input = document.querySelector('.finalScore').value;
          var winningScore;
          if(input){
              winningScore = input;
          }
          else {
              winningScore = 100;
          }
         //Check if user won the game
         if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-0').style.display = 'none';
            document.getElementById('dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
         }
         else{
            nextPlayer();
         }
         
         }
         });
/********************************************* END***********************************************/



/********************************************* START***********************************************
**********************************"New Button" click event to start "NEW GAME" **********************/

         document.querySelector('.btn-new').addEventListener('click', init);

         function nextPlayer(){

            activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
            roundscore = 0;
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            // document.querySelector('.player-0-panel').classList.remove('active');
            // document.querySelector('.player-1-panel').classList.add('active');

            document.getElementById('dice-0').style.display = 'none';
            document.getElementById('dice-1').style.display = 'none';
         }
/********************************************* END***********************************************/

/*************Using function to avoid DRY */
         function init(){
            scores = [0, 0];
            activePlayer = 0;
            roundscore = 0;
            gamePlaying = true;
            document.getElementById('dice-0').style.display = 'none';
            document.getElementById('dice-1').style.display = 'none';


            document.getElementById('score-0').textContent = '0';
            document.getElementById('score-1').textContent = '0';
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';

            document.getElementById('name-0').textContent = 'Player 1';
            document.getElementById('name-1').textContent = 'Player 2';

            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
      
        }
/*
 Logic
        /*dice = Math.floor(Math.random()*6)+1;
 document.querySelector('#current-' + activePlayer).textContent = dice;

 var x = document.querySelector('#score-0').textContent;
 console.log(x);
 */