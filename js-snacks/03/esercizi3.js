// Esercizio 1  - usa map per ottenere un nuovo array con ogni numero moltiplicato per 3.
const numeri1 = [2, 5, 8, 10];
const es1 = numeri1.map((e) => e * 3);
console.log(es1);

// Esercizio 2 - Usa filter per ottenere solo i negativi e stampa quanti sono.
const numeri2 = [4, -3, -7, 0, 12, -1];
const es2 = numeri2.filter((e) => e < 0);
console.log(es2);

// Esercizio 3 - Usa find per trovare il primo nome con più di 7 lettere.
const nomi1 = ["Lorenzo", "Marta", "Giovannino", "Anna"];
const es3 = nomi1.find((e) => e.length > 7);
console.log(es3);
