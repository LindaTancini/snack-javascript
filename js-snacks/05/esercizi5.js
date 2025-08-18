// Esercizio 1 - Scrivi una funzione che prenda due numeri come parametri e ritorni la loro somma.
function esercizio1(n1, n2) {
  return n1 + n2;
}
console.log(esercizio1(1, 2));

// Esercizio 2 - Scrivi una funzione che riceva un numero come parametro e ritorni "pari" se il numero è pari, "dispari" se è dispari.
function esercizio2(numero) {
  if (numero % 2 == 0) {
    return "pari";
  } else if (numero % 2 !== 0) {
    return "dispari";
  }
}
console.log(esercizio2(2));
console.log(esercizio2(3));

// Esercizio 3 - Scrivi una funzione che riceva due numeri e ritorni il più grande.
function esercizio3(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else if (n2 > n1) {
    return n2;
  }
}
console.log(esercizio3(10, 5));
console.log(esercizio3(3, 6));

//Esercizio 4 - Scrivi una funzione che riceva una stringa e ritorni la stringa invertita.
function esercizio4(stringa) {
  return stringa.split("").reverse().join("");
}
console.log(esercizio4("ciao"));

//Esercizio 5 - Scrivi una funzione che riceva una stringa e ritorni il numero di vocali contenute al suo interno.
function esercizio5(stringa) {
  const vocali = "aeiouAEIOU";
  let count = 0;
  for (let char of stringa) {
    if (vocali.includes(char)) count++;
  }
  return count;
}
console.log(esercizio5("gatto"));

// Esercizio 6 - Scrivi una funzione che generi un array di n numeri casuali compresi tra 1 e 100.
function esercizio6(numero) {
  const arr = [];
  for (let i = 0; i < numero; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
  return arr;
}
console.log(esercizio6(10));

// Esercizio 7 - Scrivi una funzione che riceva un array di numeri e ritorni la loro media.
function esercizio7(arr) {
  const somma = arr.reduce((acc, num) => acc + num, 0);
  return somma / arr.length;
}
console.log(esercizio7([1, 2, 3, 4, 5]));
