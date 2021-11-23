'use strict';

console.log('app.js is connected.');


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



// Lab 8 Requirements
// 1. Add validation on one of the user inputs, Keep asking until an acceptable value is entered.

// 2. Show an image related to your page’s topic, repeated within your page.
// Prompt the user with a relevant question for a number (e.g.: “How many cats do you want?” or “What star rating would you give, 1-5?”)
// Use a loop in your JavaScript code to show the image that many times.
// How could you use functions to make your code more readable?

let imageElement = document.getElementById('imageSection');

let userInput = prompt('How many shirts do you want to buy?');
console.log('Our customer wants: ',typeof(userInput));

let userInputParsed = parseInt(userInput);
console.log('user input parsed to int: ', userInputParsed)

if(!isNaN(userInputParsed)){
    console.log('we have a valid number for input');
} else {
    userInputParsed = parseInt(prompt('How many shirts? Enter a Number.'));
}
console.table(typeof(userInput));

for(let i = 0; i < userInputParsed; i++){
    let listImage = document.createElement('li');
    listImage.textContent = 'image number ${i + 1}';
    let image = document.createElement('img');
    image.setAttribute('src', 'images/BUYIT.jpg');
    listImage.appendChild(image);
    console.log(listImage);
    imageElement.appendChild(listImage);
}