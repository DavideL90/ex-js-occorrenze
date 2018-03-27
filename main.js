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
//Chiedo all'utente un numero;
var inputNumber = parseInt(prompt("Inserisci un numero"));
while(isNaN(inputNumber)){
  alert("Hai inserito un valore errato! Reinseriscilo!");
  inputNumber = parseInt(prompt("Inserisci un numero"));
}
//genero n array con numeri random nel range min e max
var arrayContainer = [];
var arrayContainer = creaArrayContainer(arrayContainer, inputNumber);
//conto quante volte compare ogni elemento in tutti gli array
for (var i = min; i <= max; i++) {
  document.write("Il numero: " + i + " compare " + contaOccorrenzaElemento(arrayContainer, i) + "<br>");
}

//Funzione per creare un array contenente n array da 10 elementi
function creaArrayContainer(arrContainer, numbInput){
  for (var i = 0; i < numbInput; i++) {
    var tempArray = [];
    for (var x = 0; x < 10; x++) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      tempArray.push(randomNumber);
    }
    arrContainer.push(tempArray);
  }
  return arrContainer;
}
console.log(arrayContainer);

//funzione per contare gli elementi dell'array
function contaOccorrenzaElemento(arrContainer, index){
  var contatore = 0; //conta quante vole un numero compare in tutti gli array
  for (var y = 0; y < arrContainer.length; y++) {
    for (var x = 0; x < arrContainer[y].length; x++) {
      if(arrContainer[y][x] == index){
        contatore++;
      }
    }
  }
  return contatore;
}
