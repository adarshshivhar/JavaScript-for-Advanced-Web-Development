/** Write a JavaScript function that takes a string which has lower and upper
case letters as a parameter and converts upper case letters to lower case,
and lower case letters to upper case. */

function swapCase(str) {
    let newStr = '';
    for(let i=0;i<str.length;i++){
        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else if (str[i] === str[i].toLowerCase()) {
          newStr += str[i].toUpperCase();
        }
    }
    console.log(newStr);
}

swapCase('HeLlO WoRlD');