// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

const numberList = [];
const userNumber = parseInt(prompt("Dammi un numero"));
let counter = 1;
let cubeNumber;


while (counter <= userNumber) {
    cubeNumber = counter * counter * counter;
    console.log(cubeNumber);
    counter++;
    numberList.push(cubeNumber);
}

console.log(numberList);