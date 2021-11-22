'use strict';

console.log('app.js is connected.');



// Requirements
// 1. Add at least 3 dynamic components to your web page. 
//What 
//A. Done = These can be based on user input, 
// or other dynamic input data.
//How
// Done = At least one dynamic component should be based on user input.
// At least one dynamic component should use a conditional statement to determine the output.










alert('Welcome to my clothing website!');

let newUser = prompt('What is your name?');

console.log('this is the new user', typeof(newUser));

let userNumber = prompt('Guess a number between one and ten');

console.log('this is the user number',typeof(userNumber));

let userNumberParsed = parseInt(userNumber);
console.log('parsed number', userNumberParsed);

//this a conditional logic to use for req. 
if(userNumberParsed >= 10){
    alert('Try again to high');
} else {
    alert('You entered a good number');
}




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