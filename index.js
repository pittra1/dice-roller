function refreshPage() {
    location.reload();
}
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceImage1 = "./images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src", diceImage1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceImage2 = "./images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img") [1];
image2.setAttribute("src", diceImage2);
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Win!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Win!";
}
else {
    document.querySelector("h1").textContent = "it's a draw!";
}