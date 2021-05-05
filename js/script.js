/*
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all'utente un altro numero.
La partita termina quando il giocatore inserisce un numero "vietato" o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha inserito un numero consentito.
*/

// VARIABILI

var numeriRandom = [];
var numeriUtente = [];
var punteggio = 0;
var possibilita = 84;
var numeroUtente;
var trovato = false;
var livello;
var numeroMax;
var numeroMin;


// FUNZIONI 

// Funzione che genera un numero random
function generaNumeriRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
// Funzione che controlla che un numero sia in un certo range
function controlloRangeNumeri(min, max, number) {
    var result = false;
    if (number >= min && number <= max) {
      result = true;
    }
    return result;
  }
  
// Funzione che cerca in un array
function presenteInArray(array, element) {
    var i = 0;
    var result = false;
    while (i < array.length && result == false) {
      if (array[i] == element) {
        result = true;
      }
      i++;
    }
    return result;
  }
 
// Funzione che richiede numero corretto
function richiediNumeroCorretto() {
    while (controlloRangeNumeri(numeroMin, numeroMax, numeroUtente) == false) {
      numeroUtente = parseInt(prompt("Inserisci un numero corretto: da 1  a " + numeroMax )); 
    }
    console.log("Numero inserito: " + numeroUtente);
  }

// Funzione numero uguale inserito
function numUgualeInserito() {
    while (presenteInArray(numeriUtente, numeroUtente) == true) {
  numeroUtente = parseInt(prompt ("Hai già inserito questo numero.Riprova con un numero da " + numeroMin + " a " + numeroMax));
    }
  }

  // FINE FUNZIONI

// Chiedo il livello di difficoltà

livello = parseInt(prompt("Inserisci il livello di difficoltà: 0, 1 o 2"));
while (livello != 0 && livello != 1 && livello != 2){
  livello = parseInt(prompt("Inserisci il livello corretto di difficoltà: 0, 1 o 2"));
}

switch (livello) {
  case 0:
    numeroMin = 1;
    numeroMax = 100;
    possibilita = 84;
    var titoloDomanda = "Inserisci un numero da 1 a 100";
    break;
  case 1:
    numeroMin = 1;
    numeroMax = 80;
    possibilita = 64;
    titoloDomanda = "Inserisci un numero da 1 a 80";
    break;
  case 2:
    numeroMin = 1;
    numeroMax = 50;
    possibilita = 34;
    titoloDomanda = "Inserisci un numero da 1 a 50";
    break;
}
 
// Genero numeri random

while (numeriRandom.length < 16) {
  
// Inserisco solo se il numero non è già presente nell'array

  var numeroCasuale = generaNumeriRandom(1, numeroMax);
  var cerca = presenteInArray(numeriRandom, numeroCasuale);
  if (cerca == false) {
    numeriRandom.push(numeroCasuale);
  }
}
console.log("Numeri random " + numeriRandom);

// l'utente inserisce un numero per tot tentativi

while (numeriUtente.length < possibilita && trovato == false) {
 
    // Chiedo un numero all'utente con un ciclo per verificare che i numeri rispettino il range
  
    numeroUtente = parseInt(prompt(titoloDomanda));
    richiediNumeroCorretto();
    numUgualeInserito();

    if (presenteInArray(numeriUtente, numeroUtente) == false) {
    numeriUtente.push(numeroUtente);
    
    // Se il numero dell'utente è presente nelle bombe hai perso
    
    if (presenteInArray(numeriRandom, numeroUtente) == true) {
      console.log("Hai perso!");
      trovato = true;
    } else {
      punteggio++;
    }
  }
}
console.log("Bomba? " + trovato);
console.log("Punteggio " + punteggio);

if (numeriUtente.length == possibilita) {
  console.log("Hai vinto!");
}


