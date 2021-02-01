var a = parseInt(prompt('Enter First Number'));
var b = parseInt(prompt('Enter Second Number'));
var c = a;
var d = b;
var gcd;
while (a != b) {
  if (a > b) {
    a = a - b;
  } else {
    b = b - a;
  }
}
gcd = a;
document.write(`GCD of ${c} and ${d} is: ${gcd}`);
