// Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const firstName = ["Dario", "Giacomo", "Marco", "Severino", "Fausto", "Leandro"];
const lastName = ["Rago", "Berlusconi", "Silvestre", "Renzi", "Pavarotti", "Marino"];
const falseList = [];
let randomFirstNameIn;
let randomLastNameIn;
let randomFirstName;
let randomLastName;
let falseGuest;


for (let i = 0; i < 3; i++) {
    randomFirstNameIn = Math.floor(Math.random()*firstName.length);
    console.log(randomFirstNameIn);
    randomFirstName = firstName[randomFirstNameIn]
    randomLastNameIn = Math.floor(Math.random()*lastName.length);
    console.log(randomLastNameIn);
    randomLastName = lastName[randomLastNameIn]
    console.log(`${randomFirstName} ${randomLastName}`);
    falseGuest = (`${randomFirstName} ${randomLastName}`);
    falseList.push(falseGuest);
}
console.log(falseList);