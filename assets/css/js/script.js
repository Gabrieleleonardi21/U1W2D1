const nome = "Gabriele";
const cognome = "Leonardi";
console.log(`ciao mi chiamo ${nome} ${cognome}`);

let firstNumber = 10;
let secondNumber = 3;

console.log(`somma ${firstNumber + secondNumber}`);
console.log(`sottrazione ${firstNumber - secondNumber}`);
console.log(`divisione ${firstNumber / secondNumber}`);
console.log(`moltiplicazione ${firstNumber * secondNumber}`);
console.log(`percentuale ${firstNumber % secondNumber}`);
console.log(`potenza ${firstNumber ** secondNumber}`);

const annoNascita = 1998;
const annoCorrente = 2026;
console.log(`età di oggi ${annoCorrente - annoNascita}`);
console.log(`età tra dieci anni  ${annoCorrente - annoNascita + 10}`);
console.log(`eta tra cinque anni ${annoCorrente - annoNascita + 5}`);

let età = `28`;
console.log(`Eta: ${età} - Maggiorenne?: ${età >= 18} `);

console.log(typeof "ciao"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
