function isNumberInt(age) {
  return !isNaN(age) && Number.isInteger(parseFloat(age));
}

function isString(name) {
    
}

let userName = prompt("What is your name?");

if (!userName || userName.trim() === "") {
  alert("Error, enter a valid name");
} 
else {
  let userAge = prompt("How old are you?");
    if (isNumberInt(userAge)) {
    userAge = parseInt(userAge);
    if (userAge < 18) {
      alert(`Hello ${userName}, you're a little young at the moment, but don't get discouraged. You can join the team soon.`);
      console.error(`Sorry, we'll see you next time ${userName}.`)
    } 
    else {
      alert(`Hola ${userName}, you are of legal age. welcome to this learning space.`);
      console.log(`Welcome to my crib ${userName}`)
    }
  } 
  else {
    console.error("Error: Por favor, ingresa una edad válida en números.");
    alert("La edad ingresada no es válida. Inténtalo nuevamente.");
  }
}
