# 04_HW

## Another day, another doozy!
This homework was definitely the most challenging assignment to date. My productivity came in ebbs and flows. I'd fly through parts of the coding, and then I'd hit a single function that would derail me for hours. I was graeful for the help I got from my TA's this week, which allowed me to overcome the bumps in the road. All-in-all, I'm pretty pleased with the finished product.

## The Pseudo-Start
Heeding my own advice from last week, I spent the first hour working on my homework parsing out a some pseudo-code. The first thing I did was sketch out the timer. I would need to have an if/else statement for if the timer ran out. Next, I had to go down the list and figure out how I would code each question and each set of answers. How would I get the buttons to appear and be responsive. Then, I had to code out how I would store the answers as a score. Finally, I had to figure out the local storage and scoreboard element. 

## Knocking out the HTML
With my javascript pseudo-coded, the index and highscore pages were pretty easy. I knew what needed to be displayed and where it needed to be displayed. 

## Beating the clock
I decided to start with the timer because it both made sense and was something that I knew how to do. I've found that starting with something I'm comfortable with gives me some quality momentum. Having some working code down really helps to power through the more difficult coding that I knew was coming. I programmed the timer to start when the start button was clicked. 

## The Boiling Point
Coding on an empty stomach produces some interesting ideas. I think this was my main inspiration for choosing to do a pasta quiz. I wrote out my questions and answers and set them as objects so that I reference them easily and loop through them when necessary. 

I had to code them so each time a button was clicked, the next question would replace the previous. I also needed to confirm if the right button was pressed, add points to the score as necessary, display a message telling the user whether or not their answer was correct, and create a timeout function to delay for a second so that the user could see whether or not they got it right before the next question appeared. 

I think in this section I did some of my best coding and also faced my biggest challenge. I knew that I was going to need to create a function to ask the questions because if I didn't, I'd have to copy and paste all of the question asking functionality a billion times, and I'd end up with 10,000 lines of code. So I created a function that looped through the questions object and asked the right questions. 

While I am pretty proud of the code I wrote, I also think that I could have tightened this up a good bit. I think that I could have eliminated more code by creating more targeted functions. But, I had just spent so long on my askQuestion functions and didn't think I would have the time to finish if I tried to condense even further. Ultimately, I made the choice to leave my code as is and move forward. 

## Pinball Wizard
Like any good game of Pinball, trivia is all about the final score. I knew going into this that local storage was my weakspot, and it proved to be a royal pain in the a**. My big problem was that I was storing the score in the local storage and then trying to create a seperate storage item that had the playername and score. I was succesful in this, but then I realized that it was going to be nearly impossible to get just the information that I wanted from local storage. So, I had to strip it down. I ended up storing the score in a variable and then creating a local storage item in the score submit page. I had to create a loop to assign a key value so that I could then call it for the scoreboard. That one sucked and took me like, 3 hours. 

## Finishing on furstrating 
With the scoreboard finished, I could no longer put off the CSS. It's by far my least favorite part. But, it needed to be done. So I gave it a shot. . . and most of it didn't work. I realized that since I created most of my text in javascript, I needed to do my formatting in javascript. It sucked. 

## Takeaways 
I think that doing some thorough pseudo-coding really helped me conceptulize what I needed for this project and ultimately helped me to move through the coding at a pretty good pace. I think that the one area where I can definitely afford to think further ahead is with my functions. I need to think about what I can code as a function so that I can condense my code and make it cleaner.

## In Conclusion
My brain is totally fried, but my quiz works and I'm pretty pumped about it. 


