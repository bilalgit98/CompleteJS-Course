'use strict';
/*
document.querySelector(".message").textContent = "correct"; //will select message from html and will change the text content.

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20
document.querySelector('.guess').value = 19;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1; //will generate a number between 0 and 20 
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click',function (){
    const ourGuess = Number(document.querySelector('.guess').value);// Guess value inputted by user

    if (!ourGuess) { //Checks to see if the Guess value is a Number (Boolean)
        document.querySelector('.message').textContent = 'No Number!!'; // If true prints the following
    } else if (ourGuess === secretNumber ) {
        document.querySelector('.message').textContent = 'Your guess is correct!';
        document.querySelector('body').style.backgroundColor = '#60b347';

        if (score > highScore ){
            highScore  = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (ourGuess > secretNumber ) {
        if(score>0){
           document.querySelector('.message').textContent = 'Your guess is too high';
           score--;
           document.querySelector('.score').textContent = score;
        } else {
           document.querySelector('.message').textContent = 'You Lose !!';
           document.querySelector('.score').textContent = 0;

        }

    } else if (ourGuess < secretNumber){

        if(score>0){
            document.querySelector('.message').textContent = 'Your guess is too low';    
            score--;
            document.querySelector('.score').textContent = score;
         } else {
            document.querySelector('.message').textContent = 'You Lose !!';
            document.querySelector('.score').textContent = 0;
         }
    }
});

document.querySelector('.again').addEventListener ('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1; //will generate a number between 0 and 20
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
});