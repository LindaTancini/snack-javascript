// 1- Crea un array di numeri interi. Usando un ciclo for, calcola la somma di tutti i numeri contenuti nell’array.
{
  const numeri = [10, 5, 8, 12, 3];
  let somma = 0;
  function sommaNumeri() {
    for (let i = 0; i < numeri.length; i++) {
      somma += numeri[i];
    }
    return somma;
  }
  console.log(sommaNumeri());
}

// 2- Crea un array di stringhe. Usa forEach per stampare ogni elemento con il prefisso: Elemento:
{
  const parole = ["ciao", "mondo", "javascript", "array"];
  parole.forEach((e) => {
    console.log(`Elemento: ${e}`);
  });
}

//3 - Crea un array di nomi. Usa map per creare un nuovo array con tutti i nomi in maiuscolo.
{
  const nomi = ["luca", "marta", "giulia", "andrea"];
  const nomiMiuscoli = nomi.map((e) => e.toUpperCase());
  console.log(nomiMiuscoli);
}

//4- Crea un array di numeri da 1 a 20. Usa filter per ottenere un nuovo array contenente solo i numeri pari.
{
  const numeriInteri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numeriPari = numeriInteri.filter((e) => e % 2 === 0);
  console.log(numeriPari);
}

// 5- Crea un array di oggetti con proprietà nome e età. Usa find per trovare la prima persona che ha più di 30 anni.
{
  const persone = [
    { nome: "Anna", eta: 25 },
    { nome: "Luca", eta: 34 },
    { nome: "Marta", eta: 29 },
    { nome: "Gianni", eta: 45 },
  ];
  const personeTrenta = persone.find((e) => e.eta > 30);
  console.log(personeTrenta);
}

// 6- Crea un array di colori. Chiedi all’utente di inserire un colore e verifica se è presente nell’array usando includes.
{
  const colori = ["rosso", "blu", "verde", "giallo", "viola"];
  //const coloreUtente = prompt("Inserisci un colore:");
  //const isPresente = colori.includes(coloreUtente);
  //if (isPresente) {
  //  console.log(`Il colore ${coloreUtente} è presente nell'array.`);
  //} else {
  //  console.log(`Il colore ${coloreUtente} non è presente nell'array.`);
  //}
}

// 7- Crea una funzione raddoppiaNumeri(arr) che prende in input un array di numeri e restituisce un nuovo array con ogni numero raddoppiato, usando map.
{
  const numeriDaRaddoppiare = [1, 4, 6, 9];
  function raddoppiaNumeri(arr) {
    return arr.map((e) => e * 2);
  }
  console.log(raddoppiaNumeri(numeriDaRaddoppiare));
}

// 8- Crea una funzione sommaArray(arr) che prende in input un array e restituisce la somma di tutti gli elementi (usa for).
{
  const numeriDaSomma = [3, 7, 2, 8, 10];
  function sommaArray(arr) {
    let somma = 0;
    for (let i = 0; i < arr.length; i++) {
      somma += arr[i];
    }
    return somma;
  }
  console.log(sommaArray(numeriDaSomma));
}

// 9 -Crea un array di parole. Usa filter per creare un nuovo array con solo le parole di lunghezza maggiore di 5 caratteri.
{
  const elencoParole = ["banana", "cane", "automobile", "sole", "computer"];
  const paroleLunghe = elencoParole.filter((e) => e.length > 5);
  console.log(paroleLunghe);
}

//10 -Crea un array di animali. Usa forEach per stampare ogni animale con il suo indice, tipo: 0: cane, 1: gatto, ecc.
{
  const animali = ["cane", "gatto", "coniglio", "criceto", "pesce"];
  animali.forEach((animale, indice) => {
    console.log(`${indice}: ${animale}`);
  });
}

// 11- Crea un array di numeri e usa find per trovare il primo multiplo di 7.
{
  const numeriMultipli = [4, 10, 21, 35, 5, 14, 2];
  const primoMultiploSette = numeriMultipli.find((e) => e % 7 === 0);
  console.log(primoMultiploSette);
}

// 12- Scrivi una funzione contieneParola(arr, parola) che ritorna true se parola è presente in arr, altrimenti false (usa includes).
{
  const dizionario = ["ciao", "grazie", "per favore", "scusa"];
  function contieneParola(arr, parola) {
    if (arr.includes(parola)) {
      return true;
    } else {
      return false;
    }
  }
  console.log(contieneParola(dizionario, "grazie"));
  console.log(contieneParola(dizionario, "arrivederci"));
}

// 13- Hai un array di oggetti { nome, età }. Usa filter per ottenere solo le persone con età ≥ 18.
{
  const utenti = [
    { nome: "Marco", eta: 17 },
    { nome: "Chiara", eta: 22 },
    { nome: "Paolo", eta: 15 },
    { nome: "Elena", eta: 30 },
  ];
  const maggiorenni = utenti.filter((e) => e.eta > 18);
  console.log(maggiorenni);
}

// 14- Scrivi una funzione salutaNomi(arr) che usa forEach per stampare Ciao, <nome> per ogni elemento.
{
  const nomiDaSalutare = ["Marco", "Elisa", "Sandro", "Luna"];
  function salutaNomi(arr) {
    arr.forEach((e) => {
      console.log(`Ciao, ${e}`);
    });
  }
  salutaNomi(nomiDaSalutare);
}

// 15- Crea un array di numeri. Usando un ciclo for, stampa gli elementi dall’ultimo al primo.
{
  const sequenza = [10, 20, 30, 40, 50];
  for (let i = sequenza.length - 1; i >= 0; i--) {
    console.log(sequenza[i]);
  }
}
