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
const annoCorrente = 2026; // si poteva fare myAge= annoCorrente - annoNascita e dunque console.log(`Oggi hai ${myAge}, tra 10 anni avrai ${myAge + 10}, cinque anni fa avevi ${myAge - 5}`);
const futuroUno = 10;
const futuroDue = 5;
console.log(`età di oggi ${annoCorrente - annoNascita}`);
console.log(`età tra dieci anni  ${annoCorrente - annoNascita + futuroUno}`);
console.log(`eta tra cinque anni ${annoCorrente - annoNascita + futuroDue}`);

let eta = `28`;
let maggiorenne = eta >= 18;
console.log(`Maggiorenne?: ${maggiorenne} `);

console.log(typeof "ciao"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object

let numberString = 5;
let numberNumber = `5`;

console.log(numberNumber == numberString); //valore o tipo uguali quindi true
console.log(numberNumber === numberString); // valore e tipo devono essere uguali ma non lo sono uno è una stringa l'altro è un numero quindi false

let numberTwo = "5";
let numberThree = "10";

console.log(`dovrebbe essere 53 ${numberTwo + 3}`);
console.log(`dovrebbe essere 2 ${numberTwo - 3}`);
console.log(`credo sia 1 ${true + 1}`); //true vale 1 mentre false 0
console.log(`credo sia 20 ${numberThree * "2"}`);

const n = 12;

const isPari = n % 2 === 0;
const isDivisibile3 = n % 3 === 0;
const isPariEDivisibile3 = isPari && isDivisibile3;

console.log(`n è pari: ${isPari}`);
console.log(`n è divisibile per 3: ${isDivisibile3}`);
console.log(`n è pari E divisibile per 3: ${isPariEDivisibile3}`);

const a = 22;
const b = 15;
const c = 18;

const perimetro = a + b + c;

let tipo;
if (a === b && b === c) {
  tipo = "equilatero";
} else if (a === b || b === c || a === c) {
  tipo = "isoscele";
} else {
  tipo = "scaleno";
}

console.log(`Triangolo ${tipo}, perimetro ${perimetro}`);
