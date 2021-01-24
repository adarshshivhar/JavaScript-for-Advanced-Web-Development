let x = 0;
let arr = [];

function addItemTOArray() {
  arr[x] = document.getElementById('text1').value;
  x++;
  document.getElementById('text1').value = '';
}

function displayArray() {
  let res = '<hr/>';

  for (let i = 0; i < arr.length; i++) {
    res += 'Element ' + i + ' = ' + arr[i] + '<br/>';
  }
  document.getElementById('Result').innerHTML = res;
}
