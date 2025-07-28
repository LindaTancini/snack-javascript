# 🧠 JavaScript Snacks – Array, Metodi, For, Funzioni

## 1. Somma di tutti i numeri

Crea un array di numeri interi. Usando un ciclo `for`, calcola la somma di tutti i numeri contenuti nell’array.

## 2. Stampa tutti gli elementi

Crea un array di stringhe. Usa `forEach` per stampare ogni elemento con il prefisso: `Elemento: `.

## 3. Maiuscole con map

Crea un array di nomi. Usa `map` per creare un nuovo array con tutti i nomi in maiuscolo.

## 4. Filtra numeri pari

Crea un array di numeri da 1 a 20. Usa `filter` per ottenere un nuovo array contenente solo i numeri pari.

## 5. Trova elemento

Crea un array di oggetti con proprietà `nome` e `età`. Usa `find` per trovare la prima persona che ha più di 30 anni.

## 6. Controlla presenza

Crea un array di colori. Chiedi all’utente di inserire un colore e verifica se è presente nell’array usando `includes`.

## 7. Raddoppia i numeri

Crea una funzione `raddoppiaNumeri(arr)` che prende in input un array di numeri e restituisce un nuovo array con ogni numero raddoppiato, usando `map`.

## 8. Somma con funzione

Crea una funzione `sommaArray(arr)` che prende in input un array e restituisce la somma di tutti gli elementi (usa `for`).

## 9. Conta parole lunghe

Crea un array di parole. Usa `filter` per creare un nuovo array con solo le parole di lunghezza maggiore di 5 caratteri.

## 10. Stampa con indice

Crea un array di animali. Usa `forEach` per stampare ogni animale con il suo indice, tipo: `0: cane`, `1: gatto`, ecc.

## 11. Trova il primo multiplo di 7

Crea un array di numeri e usa `find` per trovare il primo multiplo di 7.

## 12. Verifica parole

Scrivi una funzione `contieneParola(arr, parola)` che ritorna `true` se `parola` è presente in `arr`, altrimenti `false` (usa `includes`).

## 13. Filtra maggiorenni

Hai un array di oggetti `{ nome, età }`. Usa `filter` per ottenere solo le persone con età ≥ 18.

## 14. Funzione di saluto

Scrivi una funzione `salutaNomi(arr)` che usa `forEach` per stampare `Ciao, <nome>` per ogni elemento.

## 15. Array al contrario con for

Crea un array di numeri. Usando un ciclo `for`, stampa gli elementi dall’ultimo al primo.

---

# 📦 Array di Partenza per gli Snack JS

```js
// 1. Somma di tutti i numeri
const numeri = [10, 5, 8, 12, 3];

// 2. Stampa tutti gli elementi
const parole = ["ciao", "mondo", "javascript", "array"];

// 3. Maiuscole con map
const nomi = ["luca", "marta", "giulia", "andrea"];

// 4. Filtra numeri pari
const numeriInteri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 5. Trova elemento
const persone = [
  { nome: "Anna", eta: 25 },
  { nome: "Luca", eta: 34 },
  { nome: "Marta", eta: 29 },
  { nome: "Gianni", eta: 45 },
];

// 6. Controlla presenza
const colori = ["rosso", "blu", "verde", "giallo", "viola"];

// 7. Raddoppia i numeri
const numeriDaRaddoppiare = [1, 4, 6, 9];

// 8. Somma con funzione
const numeriDaSomma = [3, 7, 2, 8, 10];

// 9. Conta parole lunghe
const elencoParole = ["banana", "cane", "automobile", "sole", "computer"];

// 10. Stampa con indice
const animali = ["cane", "gatto", "coniglio", "criceto", "pesce"];

// 11. Trova il primo multiplo di 7
const numeriMultipli = [4, 10, 21, 35, 5, 14, 2];

// 12. Verifica parole
const dizionario = ["ciao", "grazie", "per favore", "scusa"];

// 13. Filtra maggiorenni
const utenti = [
  { nome: "Marco", eta: 17 },
  { nome: "Chiara", eta: 22 },
  { nome: "Paolo", eta: 15 },
  { nome: "Elena", eta: 30 },
];

// 14. Funzione di saluto
const nomiDaSalutare = ["Marco", "Elisa", "Sandro", "Luna"];

// 15. Array al contrario con for
const sequenza = [10, 20, 30, 40, 50];
```
