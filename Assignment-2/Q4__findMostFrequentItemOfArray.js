var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mostFrequent = 1;
var x = 0;
var element;
for (var i = 0; i < arr1.length; i++) {
  for (var j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) {
      x++;
    }
    if (mostFrequent < x) {
      mostFrequent = x;
      element = arr1[i];
    }
  }
  x = 0;
}
document.write(`${element} (  ${mostFrequent}  times )`);
