var randomNumber1 = Math.floor(Math.random() *6)+1;
var randomNumber2 = Math.floor(Math.random() *6)+1;

var randomImage1 = "images/dice" + randomNumber1 +".png";
var randomImage2 = "images/dice" + randomNumber2 +".png";

document.querySelector(".img1").setAttribute("src",randomImage1);
document.querySelector(".img2").setAttribute("src",randomImage2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").style.textAlign ="right";
    document.querySelector("h1").innerHTML="🚩Player 1 Win"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").style.textAlign ="left";
    document.querySelector("h1").innerHTML="Player 2 Win🚩"
}
else if(randomNumber1=randomNumber2){
    document.querySelector("h1").innerHTML="Draw"
}