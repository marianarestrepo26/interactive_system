//Funcion para validar que los datos ingresados sean letras
function isString(name) {
//Valida que sea letra y espacio y devuelve un valor booleano
  let isAlphabetic = /^[A-Za-z\s]+$/.test(name);
  while (isAlphabetic === false){
//En caso de no ser letras validas, aparecerá un alert y un mansaje de error en la consola
    alert("Error, enter a valid name.");
    console.error("Error, enter a valid name");
//Vuelve a pedir el nombre para ser evaluado nuevamente
    name = prompt("What is your name?");
    isAlphabetic = /^[A-Za-z]+$/.test(name);
  }
  return name;  
}

//Funcion para validar que los datos ingresados sean números enteros mayores a 0
function isNumberInteger(number) {
  while (isNaN(number) || number < 0){
    alert("Error, enter a valid age.");
    console.error("Error, enter a valid age");
//Vuelve a pedir la edad para ser evaluado nuevamente
    number = prompt("How old are you?");
  }
  return number;  
}

let userName = prompt("What is your name?");
let nameValidate = isString(userName)

let userAge = prompt("How old are you?");
if (isNumberInteger(userAge)) {
  userAge = parseInt(userAge);
  if (userAge < 18) {
    alert(`Hello ${nameValidate}, you're a little young at the moment, but don't get discouraged. You can join the team soon.`);
    console.error(`Sorry, we'll see you next time ${nameValidate}.`)
  } 
  else {
    alert(`Hello ${nameValidate}, you are of legal age. welcome to this learning space.`);
    console.log(`Welcome to my crib ${nameValidate}`)
  }
} 

