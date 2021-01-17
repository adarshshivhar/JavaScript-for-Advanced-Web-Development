/** Write a JavaScript function to find a word within a string. */
function search_word(sentence, word) {
    let x = 0, y = 0;
    for (i = 0; i < sentence.length; i++) {
      if (sentence[i] == word[0]) {
        for (j = i; j < i + word.length; j++) {
          if (sentence[j] == word[j - i]) {
            y++;
          }
          if (y == word.length) {
            x++;
          }
        }
        y = 0;
      }
    }
    //return sentence;
    return `${word} was found ${x} times.`;
}


console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));