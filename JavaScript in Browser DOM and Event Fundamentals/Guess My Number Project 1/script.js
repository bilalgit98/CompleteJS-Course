'use strict';
/*
document.querySelector(".message").textContent = "correct"; //will select message from html and will change the text content.

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20
document.querySelector('.guess').value = 19;
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;//math.random (random number between 0 and 1)
let score = 20;
//handling click events
document.querySelector('.check').addEventListener // This function will check if our guess is high,low or Correct
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(typeof guess, guess);

        if (!guess) {
            document.querySelector(".message").textContent = "No Number";
        } else if (guess === secretNumber) { // checks to see if our guess is = to the secret number.
            document.querySelector(".message").textContent = "correct";
        } else if (guess > secretNumber) {  // checks if our guess is greater than the secret number.
             if(score > 1){
                document.querySelector(".message").textContent = "Too High";
                score--; // If the condition is true (OUR guess value is greater than secret number) then the score will reduce by 1
                 document.querySelector(".score").textContent = score;
             } else {
                document.querySelector(".message").textContent = "You Lost";
                document.querySelector(".score").textContent = 0;
             }
            
        } else if (guess < secretNumber) {// checks if our guess is less than the secret number.
            if(score > 1){
            document.querySelector(".message").textContent = "Too Low";
            score--; // If the condition is true (OUR guess value is less than secret number) then the score will reduce by 1
            document.querySelector(".score").textContent = score;
            } else {
                document.querySelector(".message").textContent = "You Lost";
                document.querySelector(".score").textContent = 0;
            }

        }});
