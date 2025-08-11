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

// Esercizio 4 - usa includes per verificare se il numero 100 è presente.
const numeri3 = [10, 50, 100, 200, 300];
const es4 = numeri3.includes(100);
console.log(es4);

// Esercizio 5 - Usa forEach per stampare il quadrato di ogni numero in un array.
const numeri4 = [3, 6, 9, 12];
numeri4.forEach((e) => {
  console.log(`Quadrato: ${e * 2}`);
});

// Esercizio 6 - Crea una funzione sommaPari(arr) che calcola la somma di tutti i numeri pari in un array usando un ciclo for.
const numeri5 = [1, 2, 3, 4, 5, 6, 7, 8];

function sommaPari(arr) {
  let somma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      somma += arr[i];
    }
  }
  return somma;
}

console.log(sommaPari(numeri5));

// Esercizio 7 - usa filter per ottenere solo quelle con meno di 4 lettere.
const parole1 = ["sole", "luna", "mare", "io", "tu", "noi"];
const es7 = parole1.filter((e) => e.length < 4);
console.log(es7);

// Esercizio 8 - usa map per raddoppiare solo i numeri dispari, lasciando invariati gli altri.
const numeri6 = [1, 2, 3, 4, 5, 6];
const es8 = numeri6.map((e) => (e % 2 !== 0 ? e * 2 : e));
console.log(es8);

// Esercizio 9 - Usa find per trovare l’oggetto con prodotto uguale a "pane".
const prodotti = [
  { prodotto: "latte", prezzo: 1.5 },
  { prodotto: "pane", prezzo: 1 },
  { prodotto: "uova", prezzo: 2 },
];
const es9 = prodotti.find((e) => e.prodotto === "pane");
console.log(es9);

// Esercizio 10 - Scrivi una funzione haColore(arr, colore) che ritorna true se colore è presente (usa includes).
const colori1 = ["rosso", "blu", "verde", "giallo"];
function haColore(arr, colore) {
  return arr.includes(colore);
}

console.log(haColore(colori1, "verde"));
console.log(haColore(colori1, "viola"));

// Esercizio 11 - Usando un ciclo for stampa gli elementi partendo dall’ultimo verso il primo.
const nomi2 = ["Chiara", "Luca", "Marco", "Elena"];

for (let i = nomi2.length - 1; i >= 0; i--) {
  console.log(nomi2[i]);
}

// Esercizio 12 - Usa filter per ottenere solo i maggiorenni e poi forEach per stamparne i nomi.
const persone2 = [
  { nome: "Andrea", eta: 17 },
  { nome: "Sofia", eta: 20 },
  { nome: "Paolo", eta: 15 },
  { nome: "Martina", eta: 25 },
];

const es12 = persone2.filter((e) => e.eta >= 18);
es12.forEach((e) => {
  console.log(e);
});

// Esercizio 13 - usa map per ottenere un array con i numeri convertiti in stringa.
const numeri7 = [5, 10, 15, 20];
const es13 = numeri7.map((e) => e.toString());
console.log(es13);

// Esercizio 14 - usa find per ottenere la prima parola che contiene la lettera "z".
const parole2 = ["casa", "pizza", "mare", "sole"];
const es14 = parole2.find((e) => e.includes("z"));
console.log(es14);

//Esercizio 15 - usa filter per rimuovere il numero 5 da esso.
const numeri8 = [1, 5, 7, 5, 9, 10];
const es15 = numeri8.filter((e) => e !== 5);
console.log(es15);
