// Chiedi all'utente di inserire un numero massimo (chiamato max) e un numero minimo (chiamato min) con due prompt diversi.
// In seguito devi chiedere all'utente un numero positivo, che chiamiamo N.
//
// Il programma dovrà generare N array, ogni array sarà formato da 10 numeri interi random contenuti nel range min e max.
//
// Una volta costruiti questi array, il programma dovrà generare una lista delle occorrenze.
// Nello specifico, guardando tutti i numeri inclusi in tutti gli array, dovrà indicare quante volte compare ogni numero in tutti gli array.

//variabili che contengono i numeri minimo e massimo
var min;
var max;
var isEqual = true;
//Faccio un ciclo che controlla che i numeri inseriti non siano uguali. Se lo sono fossero andranno reinseriti
do{
  var num1 = parseInt(prompt("Inserisci un numero"));
  while(isNaN(num1)){
    alert("Hai inserito un valore errato! Reinseriscilo!");
    num1 = parseInt(prompt("Inserisci un numero"));
  }
  var num2 = parseInt(prompt("Inserisci un numero"));
  while(isNaN(num2)){
    alert("Hai inserito un valore errato! Reinseriscilo!");
    num2 = parseInt(prompt("Inserisci un numero"));
  }
  if(num1 < num2){
    min = num1;
    max = num2;
    isEqual = false;
  }
  else if(num1 > num2){
    min = num2;
    max = num1;
    isEqual = false;
  }
  else{
    alert("Non puoi inserire valori uguali!");
  }
}while(isEqual)
console.log(min);
console.log(max);
