/* Define a function called rollDice */
function rollDice(){
  // create a variable called roll, set it equal to random 1-6
  let roll = Math.floor(Math.random()*6+1);
  // if roll equals 6, display "6! You win!"
  if (roll == 6) alert("6! You win!");
  // otherwise:
  else {
  // use a confirm and say: "You rolled a [roll]"
    confirm("You rolled a " + roll);
  // then call rollDice again.
    rollDice();
  // close the else block
  }
// close the function block
}