**Simon Says, Readme!**
=======================
**1. What is Simon?**

Simon is originally an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison, with the original programming done by by Lenny Cope. The device creates a series of tones and lights and requires a user to repeat the series. If the user succeeds the series becomes progressively longer and more complex. Once the user fails, the game is over. Originally designed with four elements, here I have redesigned the game to have five options to choose, adding an extra degree of variation and (by extension) difficulty.  

![][1]
[1]:
../Simon/images/simon1.png

In addition, the game will store your best score, so you can come back and try to beat it anytime!    

**2. Technologies Used**   
This game was built using **HTML, CSS and Javascript/JQuery**

Two things of note;  
**1.** The layout was made with divs as opposed to a table due to the pentagon layout of the circles.  
**2.** The Javascript code makes heavy use of timeout functions in order to play the tones and colors.  

**3.Getting Started**  
To launch the game, click 
[Here] (https://johnmichael246.github.io/simon/) to open the page with the Simon loaded and ready to go! 

**4.Next Steps**
There are to additional features that I would like to implement in the future. The first is fixing the problem with the sound not playing when Simon selects the same div target a second time.

The second is to set a timer for the player turn function; while it is the players turn, there should be a timer that if the player does not select a cell before the time is up, the gameover is triggered. the timer will reset fter every click, and after every turn the time available to move will decrease as well.
