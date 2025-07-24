# 🧠 Esercizi Snack – TypeScript (Array tipizzati, Oggetti, Reduce)

Esercizi pratici su array tipizzati, oggetti, funzioni con `filter()` e `reduce()`.

---

## 🧠 SNACK 1 – `filter()` su oggetti tipizzati

**Consegna:**  
Hai un array di oggetti `Studente`, con `nome` e `voto`.

1. Filtra solo gli studenti con voto maggiore o uguale a 26.

```ts
type Studente = {
  nome: string;
  voto: number;
};

const studenti: Studente[] = [
  { nome: "Marco", voto: 28 },
  { nome: "Sara", voto: 18 },
  { nome: "Luca", voto: 30 },
];

const promossi = // ...
```

---

## 🧠 SNACK 2 – Tipizzazione avanzata + `reduce()`

**Consegna:**  
Hai un array `carrello` di oggetti `Prodotto` con `nome` e `prezzo`.

1. Calcola il totale dei prezzi con `reduce()`.
2. Tipizza tutto correttamente con TypeScript.

```ts
type Prodotto = {
  nome: string;
  prezzo: number;
};

const carrello: Prodotto[] = [
  { nome: "Laptop", prezzo: 1000 },
  { nome: "Mouse", prezzo: 50 },
];

const totale = // ...
```

---
