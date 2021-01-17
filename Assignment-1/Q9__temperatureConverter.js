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