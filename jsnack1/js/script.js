// Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.
let sum = 0;
let userNumber;

// FOR
for (let i = 0; i < 5; i++) {
    userNumber = parseInt(prompt("Dammi un numero"));
    console.log(userNumber);
    sum = sum + userNumber;
    console.log(sum);
}

// WHILE
let counter = 0;

while (counter < 5) {
    userNumber = parseInt(prompt("Dammi un numero"));
    console.log(userNumber);
    sum = sum + userNumber;
    console.log(sum);
    counter++;
}