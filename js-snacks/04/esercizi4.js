// Esercizio 1 - Usa un ciclo `for` per stampare i numeri da 1 a 10.
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log("-------");

// Esercizio 2 - Usa un ciclo for per stampare solo i numeri pari da 0 a 20.
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
console.log("-------");

// Esercizio 3 -  usa un ciclo for per stamparli.
const nomi1 = ["Anna", "Luca", "Marco", "Giulia"];
for (let i = 0; i < nomi1.length; i++) {
  console.log(nomi1[i]);
}
console.log("-------");

// Esercizio 4 - usa un ciclo for per calcolare la somma di tutti gli elementi.
const numeri1 = [5, 10, 15, 20];
let somma = 0;
for (let i = 0; i < numeri1.length; i++) {
  somma += numeri1[i];
}
console.log(somma);
console.log("-------");

// Esercizio 5 - usa un ciclo for per determinare il numero massimo.
const numeri2 = [3, 9, 2, 14, 7];
let massimo = numeri2[0];
for (let i = 0; i < numeri2.length; i++) {
  if (numeri2[i] > massimo) {
    massimo = numeri2[i];
  }
}
console.log(massimo);
console.log("-------");

// Esercizio 6 - usa un ciclo for per contare quanti elementi sono maggiori di 10.
const numeri3 = [8, 12, 5, 20, 3, 15];
let count = 0;
for (let i = 0; i < numeri3.length; i++) {
  if (numeri3[i] > 10) {
    count++;
  }
}
console.log(count);

// Esercizio 7 - Stampali in console uno alla volta con un ciclo for
const nomi = ["Luca", "Maria", "Anna", "Giorgio", "Elena"];
for (let i = 0; i < nomi.length; i++) {
  console.log(nomi[i]);
}
console.log("-------");

// Esercizio 8 - Stampa solo i numeri dispari compresi tra 1 e 15.
for (let i = 0; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
console.log("-------");

// Esercizio 9 - Calcola il prodotto (moltiplicazione) dei numeri da 1 a 5.
let prodotto = 1;
for (let i = 1; i <= 5; i++) {
  prodotto *= i;
}
console.log(prodotto);
console.log("-------");

// Esercizio 10 - Stampa ogni colore con il formato: Colore:
const colori = ["Rosso", "Verde", "Blu", "Giallo", "Viola"];
for (let i = 0; i < colori.length; i++) {
  console.log("Colore:", colori[i]);
}
console.log("-------");

// Esercizio 11 - Calcola la somma di tutti gli elementi dell'array
const numeri8 = [5, 10, 15, 20, 25];
let somma11 = 0;
for (let i = 0; i < numeri8.length; i++) {
  somma11 += numeri8[i];
}
console.log(somma11);
console.log("-------");
