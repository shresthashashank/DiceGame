
function diceA(){

    var a = document.querySelector(".img1");
    random = Math.floor(Math.random() * 6 ) +1;
    a.setAttribute("src","images/dice"+random+".png");
    return random;
}
function diceB(){

    var b = document.querySelector(".img2");
    random = Math.floor(Math.random() * 6 )+ 1;
    b.setAttribute("src","images/dice"+random+".png");
    return random;
}

var diceA = diceA();
var diceB = diceB();

var c = document.querySelector("h1");
if(diceA > diceB){
    c.innerHTML="🚩Player A Wins!";
}
else if(diceB > diceA){
    
    c.innerHTML="Player B Wins!🚩";
}
else{
    c.innerHTML="It is a draw";
    
}