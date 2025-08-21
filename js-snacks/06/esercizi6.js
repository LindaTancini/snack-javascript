// Esercizio 1- Hai un array di numeri [2, 4, 6]. Aggiungi due numeri alla fine e poi rimuovi l’ultimo.
const arr = [2, 4, 6];
arr.push(8, 10);
console.log(arr);
arr.pop();
console.log(arr);
console.log("------");

// Esercizio 2- Parti da ["rosso", "verde"]. Aggiungi "blu" e "giallo" all’inizio, poi rimuovi il primo.
const colori = ["rosso", "verde"];
colori.unshift("blu", "viola");
console.log(colori);
colori.shift();
console.log(colori);
console.log("------");

// Esercizio 3- Parti da [1, 2, 3, 4, 5]. Usa splice() per rimuovere i numeri centrali e sostituirli con "X".
const numeri = [1, 2, 3, 4, 5];
numeri.splice(1, 3, "X", "X", "X");
console.log(numeri);
console.log("------");

// Esercizio 4- Dato l’array ["mela", "banana", "pera", "banana"], trova l’indice della prima "banana".
const frutti = ["mela", "banana", "pera", "banana"];
const indiceBanana = frutti.indexOf("banana");
console.log(indiceBanana);
console.log("------");

// Esercizio 5 -  Verifica se il numero 15 è presente in [5, 10, 20, 25].
const numeri2 = [5, 10, 20, 25];
const contiene15 = numeri2.includes(15);
console.log(contiene15);
console.log("------");

// Esercizio 6 - trova l’indice del primo numero maggiore di 50 in [10, 25, 60, 40, 100].
const valori = [10, 25, 60, 40, 100];
const indiceMaggiore50 = valori.findIndex((num) => num > 50);
console.log(indiceMaggiore50);
console.log("------");

// Esercizio 7 - Stampa tutti gli elementi di [1, 2, 3, 4] moltiplicandoli per 3 con forEach().
const numeri3 = [1, 2, 3, 4];
numeri3.forEach((e) => {
  console.log(e * 3);
});
console.log("------");

// Esercizio 8 - Con map(), trasforma [2, 4, 6] in un array con i loro quadrati.
const numeri4 = [2, 4, 6];
const quadrati = numeri4.map((e) => e * 2);
console.log(quadrati);
console.log("------");

// Esercizio 9 - Usa filter() per ottenere solo i numeri dispari da [1, 2, 3, 4, 5, 6].
const numeri5 = [1, 2, 3, 4, 5, 6];
const dispari = numeri5.filter((e) => e % 2 !== 0);
console.log(dispari);
console.log("------");
// Esercizio 10 - Trova con find() il primo numero maggiore di 100 in [50, 70, 120, 150].
const numeri6 = [50, 70, 120, 150];
const maggiore100 = numeri6.find((e) => e > 100);
console.log(maggiore100);
console.log("------");
