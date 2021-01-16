/** Write a JavaScript function to capitalize the first letter of each word in astring */
function capitalize_Words(sentence) {
  let newSentence = sentence.split(' ');
  for (let i = 0; i < newSentence.length; i++) {
    newSentence[i] = newSentence[i][0].toUpperCase() + newSentence[i].substr(1);
  }
  return newSentence.join(' ');
}

console.log(capitalize_Words('hi from skillsanta'));
