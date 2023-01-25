// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi in console "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console "FizzBuzz".


// CREO DIV PER CONTENERE RISULTATO 
let DivContenitoreEl = document.createElement('div');
// INSERISCO DIV NEL BODY 
document.body.append(DivContenitoreEl);
console.log(DivContenitoreEl);

// CICLO 
for (i = 1; i < 100; i++) {

    // CREO UN TAG P PER OGNI ELEMENTO
    let numeroEl = document.createElement('p');

    // INSERISCO TUTTI I TAG P NEL DIV PRINCIPALE
    DivContenitoreEl.append(numeroEl);

    // SE IL NUMERO E' MULTIPLO DI 5 E DI 3 STAMPO FIZZBUZZ
    if (i % 3 == 0 && i % 5 == 0) {
        numeroEl.innerHTML = 'FIZZBUZZ'
    }
    // ALTRIMENTI SE IL NUMERO E' MULTIPLO DI 3 STAMPO FIZZ
    else if (i % 3 == 0) {
        numeroEl.innerHTML = 'fizz'
    }
    // ALTRIMENTI SE IL NUMERO E' MULTIPLO DI 5 STAMPO BUZZ 
    else if (i % 5 == 0) {
        numeroEl.innerHTML = 'buzz'
    }
    // ALTRIMENTI STAMPO IL NUMERO STANDARD
    else {
        numeroEl.innerHTML = i;
    }

}