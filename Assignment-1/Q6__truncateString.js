/** Write a JavaScript function to truncate a string to a certain number of words. */
function truncate(sentence, range) {
    sentence = sentence.split(' ');
    let newSentence = '';
    for(let i=0;i<range;i++) {
        newSentence += sentence[i];
        newSentence += " ";
    }
    return newSentence;
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));