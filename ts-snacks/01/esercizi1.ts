// Snack 1 Filtra solo gli studenti con voto maggiore o uguale a 26.

type Studente = {
  nome: string;
  voto: number;
};

const studenti: Studente[] = [
  { nome: "Marco", voto: 28 },
  { nome: "Sara", voto: 18 },
  { nome: "Luca", voto: 30 },
];

const promossi = studenti.filter((studente) => studente.voto >= 26);
console.log(promossi); //

// Snack 2 Calcola il totale dei prezzi con `reduce()`. Tipizza tutto correttamente con TypeScript.
type Prodotto = {
  nome: string;
  prezzo: number;
};

const carrello: Prodotto[] = [
  { nome: "Laptop", prezzo: 1000 },
  { nome: "Mouse", prezzo: 50 },
];

const totale = carrello.reduce((accumulatore, prodotto) => {
  return accumulatore + prodotto.prezzo;
}, 0);
console.log(totale);
