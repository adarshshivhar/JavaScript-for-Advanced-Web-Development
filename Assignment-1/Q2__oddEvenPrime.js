/** Write a JavaScript for a loop that will iterate from n times. For each
iteration, it will check if the current number is odd, even or prime, and
display a message on the screen */
let n = 5;

for (let i = 0; i < n; i++) {
  if (primeCheck(i)) {
    if (i == 2) {
      document.write(i + ' is even and prime <br>');
    } else {
      document.write(i + ' is odd and prime <br>');
    }
  } else if (i % 2 == 0) {
    document.write(i + ' is even <br>');
  } else {
    document.write(i + ' is odd <br>');
  }
}

function primeCheck(x) {
  let isPrime = true;
  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (x == 0 || x == 1) {
    return false;
  } else {
    if (isPrime) {
      return true;
    } else {
      return false;
    }
  }
}
