'use strict';

console.log('app.js is connected.');

let greetingMessage = alert('Welcome to my clothing website!')

const startingHours = 72;
let time = startingHours * 24 * 60;

const countdownEl = document.getElementById('countdown')

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const hours = Math.floor(time / 24)
    let minutes = time % 60;
    let seconds = time % 60;

    countdownEl.innerHTML = '${hours}: ${minutes}: ${seconds}';
    time--;
}