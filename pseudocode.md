#Simon Pseudocode
1. declare (with no initial value) global variables --**var instructionsArray, var playerArray, currentArray var count, var randomizer, var lose, var score, var player window.localStorage**.   
	--var playerArray- holds player choices.   
	--var instructions- holds radomizer and incrementing array. **(compare arrays needs to render after each turn)**.   
	--var count-counter to determine turn.  
	--var win-default win state.   
*--controller--*
2. a.) Add event handler "click" for "board" --game function.   
	b.) Add event handler "click" for start game -- start.  
	c.) add event handler "click" for reset button -- re-initialize.  
3. Set up **initialize()** --starting state of global values.  
-var currentArray[];  
-var intructionsArray[];  
-var count = 1;
var score = 0;  
-var win = lose;
-var player = false;
4. set up state()   
(currentArray[0,2,3,4,1,2]=playerArray[])
5. set up **render()**
instructionsArray[i+math random].   
reset player array.  
count +=1.   
score +=5. 
start timer - 10  

5. set up **checklose()**  
**onclick** compare instructions index[first] to current choices index [first]. if ===, check second index, then third, etc.  
   on no === index match, set lose to true. lose = true, disable event handlers, display "you lose" message.  
   else if: index match is true for length of array (.length-1), **render()**.   
   
6. setup **reset()**:
on click of reset button, re-initialize() **(see #3)**


Now for the good stuff
===
on initialize, apply math.randomWithRange(0,4) to generate random numbers between 0 and 4. number will corresond to color ID (0=blue, 1 =green, 2 = red, etc.) **and** specific tone. 

on  click of start button, initialize game.  
set a delay of 3500 before games "starts", display "get ready" message.  
using random generated number from instructions array, display color on board (corresponds to color #id). background highlight should show for 1000 and play tone, then fade out.
 
after going through all colors in instructions array(iterate with delay) , initiate player turn.  

on player turn, set timer of 3000. timer should reset after each click (aka time to make each color choice).  

player clicks colors as desired. on each click, check player choice against game instruction (array comparison).
   
if player clicks a wrong color, lose tone plays, all color backgrounds light up and fade out, game ends. game over message is displayed, and high score is sent to local storage.  

if player goes through entire array length and no wrong choices made, call render to start next game. on each render, timer should decrease by 10. continue until player lose = true.

look up map function for game




  


  

