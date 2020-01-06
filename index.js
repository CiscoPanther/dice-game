
function rInt(max) {
  return Math.floor(Math.random() * max + 1);
}
var randomNumber1 = rInt(6);
var randomNumber2 = rInt(6);

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png - images/dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);


var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice2.png - dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; //images/dice2.png - images/dice6.png
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


// Winning
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
