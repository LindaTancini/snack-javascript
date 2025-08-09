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
