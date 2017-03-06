var uutinen = localStorage.getItem('dia');

function display() {
    $.getJSON("https://kinnara1-7c775.firebaseio.com/uutiset.json", function (data) {
        console.log(data);
        $('#eka').html(data[uutinen].otsikko);
        $('#toka').html(data[uutinen].sisältö);
        $('#kolmas').html(data[uutinen].päivämäärä);
    }); 
    setValue();
}

function setValue() {
console.log( uutinen );
localStorage.setItem( 'dia', uutinen );    
}


var isPause = false;

function nextSlide() {
    'use strict';
    if(uutinen === 0) {
        uutinen = 1;
    }
    else if(uutinen == 1){
        uutinen = 2;
    }
    else {
        uutinen = 0;
    }
    $(".xx").fadeOut("fast")
    $(".xx").fadeIn()
    display();
}

var myVar = setInterval(function () {
        nextSlide();
    }, 3000);


function previousSlide() {
    'use strict';
    if(uutinen == 1) {
        uutinen = 0;
    }
    else if(uutinen == 2){
        uutinen = 1;
    }
    else{
        uutinen = 2;
    }
    $(".xx").fadeOut("fast")
    $(".xx").fadeIn()
    display();
}

function change(){
if(!isPause){
$("#pause span").text("Play");
}
    else{
        $("#pause span").text("Pause");
    }
}

function pause(){
if(isPause === false){
change();
window.clearInterval(myVar);
}
    else{
        myVar = setInterval(function () {
        nextSlide();
    }, 3000);   
        change();
    }
    isPause = !isPause;
}

document.getElementById("previous").addEventListener("click", previousSlide);
document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("pause").addEventListener("click", pause);


window.onload = function () {
    display();
};