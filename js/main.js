// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi in console "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5 stampi in console "FizzBuzz".


// CREO DIV PER CONTENERE RISULTATO 
let DivContenitoreEl = document.createElement('div');
// ASSEGNO CLASSE ROW AL DIV 
DivContenitoreEl.classList.add('row');

// OTTENGO IL CONTAINER DELLA PAGINA
let containerEl = document.getElementById('main-container')
// INSERISCO DIV NEL CONTAINER
containerEl.append(DivContenitoreEl);

// CICLO DI 100 A PARTIRE DA 1
for (i = 1; i <= 100; i++) {

    // CREO UN TAG DIV PER OGNI ELEMENTO E GLI ASSEGNO CLASSE BOX
    let numeroEl = document.createElement('div');
    numeroEl.classList.add('box');

    // INSERISCO TUTTI I TAG DIV NEL DIV PRINCIPALE
    DivContenitoreEl.append(numeroEl);

    // SE IL NUMERO E' MULTIPLO DI 5 E DI 3 STAMPO FIZZBUZZ E ASSEGNO LA CLASSE ADATTA
    if (i % 3 == 0 && i % 5 == 0) {
        numeroEl.innerHTML = 'FIZZBUZZ';
        numeroEl.classList.add('fizz-buzz');

    }
    // ALTRIMENTI SE IL NUMERO E' MULTIPLO DI 3 STAMPO FIZZ E ASSEGNO LA CLASSE ADATTA
    else if (i % 3 == 0) {
        numeroEl.innerHTML = 'fizz';
        numeroEl.classList.add('fizz');
    }
    // ALTRIMENTI SE IL NUMERO E' MULTIPLO DI 5 STAMPO BUZZ E ASSEGNO LA CLASSE
    else if (i % 5 == 0) {
        numeroEl.innerHTML = 'buzz';
        numeroEl.classList.add('buzz');

    }
    // ALTRIMENTI STAMPO IL NUMERO STANDARD
    else {
        numeroEl.innerHTML = i;
    }

}