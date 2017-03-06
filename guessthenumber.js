document.getElementById("button").addEventListener("click", guessTheNumber);

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var number = getRandomInteger(1, 10);

function compareNumbers(first, second) {
    if (first == second) {return true; }
        else {return false; }
}

function guessTheNumber() {
    var num = parseFloat(document.getElementById("number").value, 10);
    var num2 = parseInt(document.getElementById("number").value, 10);
    if ((num === Math.round(num)) && (num2 > 0) && (num2 < 11)) {
        if (compareNumbers(num2, number)) {
            alert("Oikein meni");
             number = getRandomInteger(1, 10);
        }
            else {
                alert("Väärin meni, Oikea numero oli: " + num2);
                
                 number = getRandomInteger(1, 10);
            }
    }
        else {
            alert("Tarkista numero on väliltä 1-10 kokonaisluku");
        }
}
