
document.querySelector(".refresh").addEventListener("click",function () {
   location.reload(); 
});

function getrandomNumber()
{
    return Math.floor((Math.random()*6)+1);
}

var randomNumber1 = getrandomNumber();
var randomNumber2 = getrandomNumber();

var image1 = "images/dice"+randomNumber1+".png";
var image2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);

document.querySelector("h1").innerHTML = "Refresh Me";

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player1 wins! 🚩";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a tie! 🏴‍☠️";
}
else
{
    document.querySelector("h1").innerHTML = "Player2 wins! 🚩";
}