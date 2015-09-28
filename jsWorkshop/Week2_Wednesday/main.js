// JavaScript Looping Exercise

// 1. Output each item in the following Array to your console:
console.log('Question 1');
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];

for(i=0; i<livingRoom.length; i++){
console.log(i);}

// 2. Using a loop, log numbers 22-33 in the console.
console.log('Question 2')
for(i=22; i<=33; i++){
console.log(i);}

// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.
console.log('Question 3');
for(i=75; i<=100; i+=5){
  console.log(i);}

// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.
//     Use this as an example:
//        var counter = 0;
//        var num = 2;

//        while (num < 1000) {
//        num += num;
//        counter++;
//        }

//        console.log(counter);
console.log('Question 4');

var counter = 0;
var num = 5;

while (num < 100){
  num += num;
  counter +=5;
  console.log('This is how a professional loops.');
}


// 5. Write a conditional statement to find the largest of the numbers in the array provided.
console.log('Question 5');

var largestNum = [-5, -2, -6, 0, -1];
var largest = -50;

for(i=0; i < largestNum.length; i++){
  if(largestNum[i] > largest){
    largest = largestNum[i];
  }
  console.log(largest);}

// 6. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats." Use the number from your counter to fill in the number.
//     The numbers should range from 10 to 100, in increments of 25.
console.log("Question 6");
for(i=10; i<=100; i+=25){
  console.log("At home, I have " + i + " cats")
}

var counter = 0;
var num = 10;

while(num <= 100){
  num += 25;
  counter ++;
  console.log(counter);
  console.log("At home, I have " + num + " cats");
}

var counter = 0;
var num = 2;

while (num < 1000) {  // condition
  num += num;         // statement
  counter++;
}

// 7. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'
console.log("Question 7");

var numArray = [2, 17, 9, 24, 8];
for(i=0; i < numArray.length; i++){
  if(numArray[i]%2 == 0 && numArray[i]>10){
    console.log("Even and greater than 10");
  }
  else if(numArray[i]%2 == 0){
    console.log("Even");
  }
  else{
    console.log("Odd");
  }
}



// 8. Given the following Array, create variable primeArray with the value [2, 7, 17, 29, 41, 53, 67, 79, 97]
var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,];
var primeArray = [];

console.log("Question 8");
for(i = 0; i < primes.length; i+=3){
  primeArray.push(primes[i]);
}
console.log(primeArray);

// 9. Prompt a user to pick either a number or a word. Create a script that alerts the user whether they chose a number or a word.
// Hint: Google 'typeof'
console.log("Question 9");

var userChoice = prompt('Pick a number or a word.');
userChoice = parseFloat(userChoice);

if(isNaN(userChoice)){
  alert("You picked a string!");
}
else{
  alert("You picked a number!");
}



// 10. Write a loop that outputs the following to the console:
console.log('Question 10');
var y = '#';
console.log(y);
for(i=0; i<=6; i++){
      y += '#'.repeat(1) ;
    console.log(y);
}


// #
// ##
// ###
// ####
// #####
// ######
// #######


// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 11. Use a variable called "human" to prompt the user to type their choice.
console.log('Question 11');
var human = prompt('Choose rock, paper, or scissors');

// 12. Define an array called "choices" that consists of "paper", "rock", and "scissors".
console.log('Question 12');
var choices = ["rock", "paper", "scissors"];

// 13. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//    For reference:
//    Math.random gives you a random number between 0 and 1, which is different each time you call it.
console.log('Question 13, 14, 15');
var computer = Math.random();

if(computer === (0 < .33)){
  computer = 'rock';
}
else if(computer === (.34 < .66)){
  computer = 'paper';
}
else(computer = 'scissors');
// 14. Let's start our conditional statement. Start by reassigning the computer variable to "rock" if the random number
//    falls between 0 and .33. Run the code until the console prints out "rock" instead of the number.
//    In English, it will look like this:
//      var computer = my Math.random code here
//       if the number is between 0 and 33
//          computer = "rock"
//       log computer to the console



// 15. Now add the following conditionals to the same statement:
//    If the random number is between .34 and .66, set the computer variable to "paper".
//    If the random number is between .67 and 1, set the computer variable to "scissors". (Who the hell seriously chooses scissors first?)


// 16. Using both "human", begin another conditional statement. At this time, leave the statements blank.
//    In English, it will look like this:
//      if human is "rock"
//        leave this blank
//      if human is "paper"
//        leave this blank
//      else
//        leave this blank

if(human === "rock"){
  if (computer === "rock"){alert('It is a tie!');}

  else if (computer ==="paper"){alert('Computer wins!');}

  else {alert('You win!');}
}
else if (human === "paper") {
  if (computer ==="rock"){alert('You win!');}

  else if (computer === "scissors") {alert('You lose!');}

}
else { alert('Its a tie!');

}
// 17. Now inside of each condition, we need to compare the "human" variable to the "computer" variable,
//    then print to the console who won the game.


// 18. Give yourself a high five for completing your first javascript game!


// 19. Use the game you made above and rework it using a switch statement.
console.log('Question 19 & 20');
var human = prompt("Pick rock, paper, or scissors").toUpperCase();
var computer = Math.random();
if(computer === (0 < .33)){
  computer = 'rock';
}
else if(computer === (.34 < .66)){
  computer = 'paper';
}
else(computer = 'scissors');


switch(human) {
  case 'ROCK': if(computer = 'rock'){alert('It is a tie!');}
              else if (computer = 'paper'){alert('You win!');}
              else ('Computer Wins!');
    break;

  case 'PAPER': if(computer = 'rock'){alert('You win!');}
                else if(computer = 'paper'){alert('It is a tie!');}
                else ('Computer Wins!');
  break;

  case 'SCISSORS': if(computer = 'paper'){alert('You win!');}
                  else if ( computer = 'rock'){alert('You lose!');}
                  else ('It is a tie!');
  break;
  default: alert("Lets try this again, please choose: rock, paper, or scissors!");
}


// 20. What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.


// HEDS ER TALES?
// 21. Use the following variable for your coin flip action:
      console.log('Question 21');

//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
// 22. Use a while loop to keep flipping the coin until you get tails.


/*    var coin = Math.floor(Math.random() * 2);
    console.log('Question 22');
      var heads = 0;
      var tails = 1;

  if (coin != tails){
    while(coin === heads){
        coin ++;
      }}
else(console.log('Tails Wins!'));*/

console.log('Question 22');
var coin = Math.floor(Math.random() * 2);


while(coin=== 0){
	console.log("Heads! Flipping again...");
	var coin = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");


// 23. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.
console.log('Question 23');

for( i = 0; i<=100; i++){
  if (i%3==0 && i%5==0){
    console.log('FizzBuzz');
  }
   else if (i%3 == 0){
    console.log('Fizz');
  }
  else if(i%5 == 0){
    console.log('Buzz');
  }
  else{console.log(i);}
}






// CHESS BOARD
// 24. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.
console.log('Question 24');

var board = "";
var space = " ";
var hash = "#";
var size = 8;

for (var i =0; i<size; i++)
{
  for( var j = 0; j<size; j++)
  {
    if ((i+j)% 2 === 0 )
  {
    board += hash;
  }
else
  {
  board += space;
  }
}
board += "\n";
}
console.log(board);
//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.


// THAR BE DACHSHUNDS
// We're going to slay some badass dachshunds.
// 25. Start by using the following variables:
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

// 26. Create a while loop that runs as long as "slaying" is equal to true. For now, set "slaying" to false
//     inside of the body of the loop so we don't break stuff with an infinite loop.
console.log('Questions 25-30');

while (slaying){
  if(youHit == 1){
    console.log("Congrats you hit the stubby thing!");
    totalDamage = totalDamage + damageThisRound;
    console.log("You need to hit him 4 times in order to rid the world of his shortness!")
  }

    if(totalDamage == 4){
    console.log("You did it, you slayed the tiny ass wiener dog!");
    slaying = false;
  }
  else if(totalDamage < 4){
      youHit = Math.floor(Math.random() * 2);
  }

  else{
    console.log("That jerk is unslayable!");
}
slaying = false;
}



// 27. Inside of your while loop, create a conditional statement. If "youHit" is 1 (which is true),
//     log to the console a congratulatory message about injuring the poor dog.
//     If "youHit" is 0 (which is false), log to the console a message about that bastard beating you.
//     The "slaying" variable should be set to false here to end the loop.
// 28. Inside of the first branch of our conditional statement, after the console.log statement,
//     set "totalDamage" to totalDamage plus damageThisRound.
// 29. Below that, begin a new conditional statement. If you hit the dachshund 4 times, you killed him! Log a success message to the console.
//     If the totalDamage is less than 4, set the youHit variable to the same expression we used at the top.
//     This will begin the loop again.
// 30. Play until you win!
