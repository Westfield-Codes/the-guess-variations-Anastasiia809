/* Simple Guess Program */
function Guesser() {
// create variable called guess, set to 0
    var guess = 0;
// create variable called answer and store a random integer 1-100
    var answer = Math.floor(Math.random()*100+1);
// display the answer for testing purposes only
    alert(answer);
// set guess equal to prompt asking user to "Guess a number, 1-100"
    var guess = prompt("Guess a number, 1-100");
// if guess equals answer display "Correct!" 
    if (guess == answer) alert("Correct!");
// or if guess is greater than answer display "Too high!" 
    else if (guess > answer) alert("Too high!");
// or display "Too low!" 
    else alert("Too low!");
}