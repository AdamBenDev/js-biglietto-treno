
//!Richiedere all'utente di inserire il numero di chilometri e l'età del passeggero

const km = parseInt(prompt("Quanti chilometri devi percorrere?"));
const age = parseInt(prompt("Quanti anni hai?"));

//!Calcola il prezzo del biglietto moltiplicando i chilometri per 0.21

const ticketPrice = km * 0.21;

//!Se l'età del passeggero è maggiore o uguale a 65 anni, applica uno sconto del 40% sul prezzo del biglietto

if (age < 18) {


//! Sconto del 20% per i minorenni


  const discount = ticketPrice * 0.2;
  const finalPrice = ticketPrice - discount;
  alert(`Il prezzo del tuo biglietto è di ${finalPrice.toFixed(2)} €`);
} 


//! Sconto del 40% per gli over 65

 else if (age >= 65) {
    // Sconto del 40% per gli over 65
    const discount = ticketPrice * 0.4;
    const finalPrice = ticketPrice - discount;
    alert(`Il prezzo del tuo biglietto è di ${finalPrice.toFixed(2)} €`);
  } else 