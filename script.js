var timer = 20;
var score = 0;
var hitrn = 0;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}

function getHitValue(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";
    for(var i =1; i<=85; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble"> ${rn}</div>`;
    }
    
    document.querySelector("#pbottom").innerHTML = clutter;
}

function runTimer(){
   var timerStop = setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timerValue").textContent = timer;
    }
    else{
        clearInterval(timerStop);
        document.querySelector("#pbottom").innerHTML= `<h1>Game Over!!</h1>`;
    }
   }, 1000);
}

document.querySelector("#pbottom").addEventListener("click", function(details){
 var numberClicked = Number(details.target.textContent);
 if(numberClicked === hitrn){
    increaseScore();
    makeBubble();
    getHitValue();
 }
});



runTimer();
makeBubble();
getHitValue();
