// Snack 1 Usa `map()` per creare un nuovo array dove ogni numero è raddoppiato. Usa `forEach()` per moltiplicare ogni numero per 2, ma senza creare un nuovo array.

const numeri = [1, 2, 3, 4];

const raddoppiati = numeri.map((e) => e * 2);
console.log(raddoppiati);

let risultato = [];
numeri.forEach((e) => risultato.push(e * 2));
console.log(risultato);

// Snack 2 Filtra solo quelli che iniziano con la lettera "L". Trasformali in maiuscolo usando `map()`.

const nomi = ["Anna", "Luca", "Giulia", "Leo"];

const conL = nomi.filter((e) => e.startsWith("L"));
console.log(conL);

const maiuscolo = nomi.map((e) => e.toUpperCase());
console.log(maiuscolo);

// Snack 3 usa reduce per sommare tutti i numeri in un array.

{
  const numeri = [10, 20, 30];

  const somma = numeri.reduce((acc, e) => acc + e, 0);
  console.log(somma);
}

// Snack 4 Verifica se almeno uno è uguale a 30 usando `some()`. Verifica se tutti i voti sono maggiori o uguali a 18 usando `every()`.

const voti = [18, 30, 28];

const almenoUnoTrenta = voti.some((e) => e === 30);
console.log(almenoUnoTrenta);

const tuttiPromossi = voti.every((e) => e >= 18);
console.log(tuttiPromossi);

//Snack 5 Trova il primo nome che inizia con "M" usando `find()`. Trova tutti i nomi che iniziano con "M" usando `filter()`

{
  const nomi = ["Anna", "Marco", "Luisa"];

  const primoConM = nomi.find((e) => e.startsWith("M"));
  console.log(primoConM);

  const tuttiConM = nomi.filter((e) => e.startsWith("M"));
  console.log(tuttiConM);
}

// Snack 6 Estrai i primi due colori in due variabili diverse usando destructuring.
const colori = ["rosso", "verde", "blu"];

const [primario, secondario] = colori;
console.log(primario, secondario);

//Snack 7 Crea un nuovo array che contenga i valori di `base` seguiti da `3` e `4`. Crea una copia dell’array esteso.

const base = [1, 2];
const esteso = [...base, 3, 4];
console.log(esteso);
const copia = [...esteso];
console.log(copia);
