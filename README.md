### SIMON SAYS, README!
=======================
**1. WHAT IS SIMON?**

Simon is originally an electronic game of memory skill invented by Ralph H. Baer and Howard J. Morrison, with the original programming done by by Lenny Cope. The device creates a series of tones and lights and requires a user to repeat the series. 
![](http://i.imgur.com/EwPqGB2.png)
If the user succeeds the series becomes progressively longer and more complex. Once the user fails, the game is over. Originally designed with four elements, here I have redesigned the game to have five options to choose, adding an extra degree of variation and (by extension) difficulty.  

![](http://i.imgur.com/czXB5n1.png)

In addition, the game will store your best score, so you can come back and try to beat it anytime!    

**2. TECHNOLOGIES USED**   
This game was built using:  
**-** HTML5   
**-** CSS3   
**-** Javascript


Two things of note;  
**1.** The layout was made with divs as opposed to a table due to the pentagon layout of the circles.  
**2.** The Javascript code makes heavy use of timeout functions in order to play the tones and colors.  

**3. GETTING STARTED**  
To launch the game, click 
[Here](https://johnmichael246.github.io/simon/) to open the page with the Simon loaded and ready to go! 

**4. NEXT STEPS**   
There are to additional features that I would like to implement in the future. The first is fixing the problem with the sound not playing when Simon selects the same div target a second time.

The second is to set a decrementing timer for the player turn function; while it is the players turn, there should be a timer that if the player does not select a cell before the time is up, the gameover is triggered. the timer will reset after every click, and after every turn the time available to move will decrease as well.
