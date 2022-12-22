// Assignment code here


// Get references to the #generate element

//Paso 1. Declaro todas las posibles variables 
//Selector para setear el password o escribir 
var textpassword = document.querySelector("#password");
//Selector para la longitud del password
var passwordlength = document.querySelector(".passwordsize span");
//Selector del Boton Generador
var generateBtn = document.querySelector("#generate");
//Selector para el icono de copiar la clave 
var copy = document.querySelector(".copy");


// Paso 2. VAriables para Selectores Checkbox
var upper = document.querySelector("#upper");
var lower = document.querySelector("#lower");
var number = document.querySelector("#number");
var symbol = document.querySelector("#symbol");

//DEfinir si se deja ono 
var password = '';


//Paso 3. Variables para las condiciones del password 
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+=',-./:;<>?[\]`{|}~";

// Paso 5 . Add event listener to generate button


// Uno todos los eventos 
addEventLinsteners();
function addEventLinsteners() {
  generateBtn.addEventListener("click", writePassword);

  //clipboard.addEventListener('click', copyPw);
}


//Paso 7 - Lógica para generar el password
// Write password to the #password input

// Con esta función iteramos al menos una sola vez cada array
function writePassword(e) {
  password = ''; // llamar nuevamente esta variable me permite reiniciarla para que no concatene los password.
    if (upper.checked) {
        password += getUpperCase();
    }if (lower.checked) {
        password += getLowerCase();
    }if (number.checked) {
        password += getNumbersCase();
    }if (symbol.checked) {
        password += getSymbolsCase();
    }

    //Con este comando veririfico si el dato que traigo es de tipo number o string
    //console.log(typeof(passwordsize.textContent));

    // Condicion que evalua si hay una opcion chequeada
    if (upper.checked || lower.checked || number.checked || symbol.checked) {
      fullpassword();
  }

  // funcion que permite ingresar a un ciclo dependiendo de la condicion anterior
    function fullpassword(){
      while (password.length < parseInt(passwordlength.textContent)) {
          var numberandom = getRandom();
          if (upper.checked && numberandom === 0) {
              password += getUpperCase();
          }if (lower.checked && numberandom === 1) {
              password += getLowerCase();
          }if (number.checked && numberandom === 2) {
              password += getNumbersCase();
          }if (symbol.checked && numberandom === 3) {
              password += getSymbolsCase();
          }
      }
      
      //permite mostrar o setear el password creado, ya sea en la consola o en el espacio 
      //dedicaco en el front. Se puede usar
      console.log(password);
      //textPw.innerHTML = passwordAll;
      textpassword.textContent = password; // Muestra el password en la caja 
  }

  //if (upper.checked || lower.checked || number.checked || symbol.checked) {
    //completePw();
  //}
  //console.log(typeof(displaySize.textContent));

}



// Paso 4. Funciones 

//Funcion para definir el tamaño máximo de los arreglos 
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}
function getRandom() {
  return Math.floor(Math.random() * 4);
}


//Paso 6. Establezco las funciones de las condiciones y que al presionar el 
// Boton generar password se habilite deacuerdo a esas condiciones 

//A esta funcion le pasamos el tamaño de la cadena para mayusculas
function getUpperCase() {
  return upperLetters[getRandomNumber(upperLetters.length)];
}

//A esta funcion le pasamos el tamaño de la cadena para minusculas
function getLowerCase() {
  return lowerLetters[getRandomNumber(lowerLetters.length)];
}

//A esta funcion le pasamos el tamaño de la cadena para los numeros
function getNumbersCase() {
  return numbers[getRandomNumber(numbers.length)];
}

//A esta funcion le pasamos el tamaño de la cadena para los simbolos
function getSymbolsCase() {
  return symbols[getRandomNumber(symbols.length)];
}

//Establezco la funcion para mostrar el selector de tamaño de password 
function showVal(value) {
  passwordlength.textContent = value;
}

//function showVal(value){
  //console.log(value)
  //passwordsize.textContent = value;
//}




//Testeadores esta funcion comprueba que este funcionando el random
//function writePassword(e){
//console.log(getRandomNumber(5));
//}
//Testeadores esta funcion comprueba que este funcionando el random de las mayusculas
//function writePassword(e){
//console.log(getUpperCase());
//}


//function writePassword(e){
//console.log(getLowerCase());
//}
//function writePassword(e){
//console.log(getNumbersCase());
//}
//function writePassword(e){
//console.log(getSymbolsCase());
//}




//Compruebo que recive ordenes //Testeador
//function writePassword(e) {
  //console.log(getSymbolsCase());
//}

