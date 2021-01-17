/** The Temperature Converter
Create a function called Celsius to Fahrenheit:
● Store a Celsius temperature into a variable.
● Convert it to Fahrenheit and output "NN°C is NN°F".
Create a function called Fahrenheit to celsius:
● Now store a Fahrenheit temperature into a variable.
● Convert it to celsius and output "NN°F is NN°C."
10.  */
 
function celToFer(celsius) {
    var celTemp = celsius;
    var cToF = celTemp * 9 / 5 + 32;
    console.log(`${celTemp}\xB0C  is  ${cToF}\xB0F.`); 
}

function ferToCel(fahrenheit) {
  var ferTemp = fahrenheit;
  var ftoC = (ferTemp - 32) * 5 / 9;
  console.log(`${ferTemp}\xB0F  is  ${ftoC}\xB0C.`);
}

celToFer(50);
ferToCel(40);