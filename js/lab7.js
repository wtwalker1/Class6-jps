'use strict';

console.log('app.js is connected.');

// Requirements
// Use functions to improve the clarity and readability of your code.

// DONE- 1. Wrap related steps into a single function. Be sure you are properly defining the function,
//  calling it, and getting the return value you expect.

// 2.Can you see how you might use just a single <script> tag with a src attribute to access your JS,
//  and then specific function calls throughout the rest of your page?

// 3.Add a check to the user input you are getting, to see if the initial user input is an acceptable value. 
// If not, present the user with an error message and a second chance to enter a proper value.



    alert('Welcome to my clothing website!');
    let newUser = prompt('What is your name?');
    console.log('this is the new user', typeof(newUser));
    let userNumber = prompt('Guess a number between one and ten');
    console.log('this is the user number',typeof(userNumber));
    let userNumberParsed = parseInt(userNumber);
    console.log('parsed number', userNumberParsed);
    //this a conditional logic to use for req. 
    if(userNumberParsed >= 10){
        alert('Try again too high');
    } else {
        alert('You entered a good number');
    }


    // Lab 8
    function runAlert() {
        var userNumber = prompt('Guess a number between one and ten');
        console.log('this is the user number',typeof(userNumber));
        var userNumberParsed = parseInt(userNumber);
        console.log('parsed number', userNumberParsed);
    //this a conditional logic to use for req. 
        if(userNumberParsed >= 10){
        alert('Try again too high');
        } else {
        alert('You entered a good number');
        }
    }
    runAlert();





// const startingHours = 72;
// let time = startingHours * 24 * 60;

// const countdownEl = document.getElementById('countdown');

// setInterval(updateCountdown, 1000);

// function updateCountdown() {
//     const hours = Math.floor(time / 24)
//     let minutes = time % 60;
//     let seconds = time % 60;

//     countdownEl.innerHTML = '${hours}: ${minutes}: ${seconds}';
//     time--;
// }