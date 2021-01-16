/** 3. Write a JavaScript program to construct the following pattern, using a
nested for loop. */

let chr = '';
for (let x = 6; x >= 1; x--) {
  for (let y = 1; y < x; y++) {
    chr = chr + '*';
  }
  document.write(chr + '<br>');
  chr = '';
}
