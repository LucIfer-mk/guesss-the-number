let min = 1;	
let max = 10;
let answer = Math.floor(Math.random() * (max - min + 1)) + min;
let guess;

let attempts = 0;
let play = true;
document.getElementById("btn").onclick = function() {
    guess = document.getElementById("input").value;
    if (isNaN(guess)) {
        document.getElementById("numplace").innerText=("Please enter a number");
    } else if(guess < min || guess > max){
        document.getElementById("numplace").innerText=("Please enter a number between 1 and 10");
    } else if(guess > answer){
        attempts++;
        document.getElementById("numplace").innerText=("Try a lower number");
    } else if (guess < answer) {
        attempts++;
        document.getElementById("numplace").innerText=("Try a higher number");
    } else {
        attempts++;
        document.getElementById("numplace").innerText=("Congratulations! You guessed the number in " + attempts + " attempts");
        play = false;
        resetGame();
    }
};

function resetGame() {
    answer = Math.floor(Math.random() * max) + min;
    attempts = 0;
    play = true;
}

playGame();
