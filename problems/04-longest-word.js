/*
Write a function longestWord(sentence) that takes in a sentence string as an
argument. The function should return the longest word in the sentence. If there
is more than one "longest word", return the first of these instances.
*/

// Your code here 
function longestWord(sentence){
    let wordArr=sentence.split(' ');
    let longest=wordArr[wordArr.length - 1].length;
    let longestWord= wordArr[wordArr.length - 1];

    for(let i = wordArr.length-2; i >= 0; i--){
        if(wordArr[i].length >= longest ){
            longest=wordArr[i].length;
            longestWord=wordArr[i];
        }            
    }

    return longestWord;
}

console.log(longestWord('where did everyone go')); // 'everyone'
console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
console.log(longestWord('')); // ''

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = longestWord;
