/*
Write a function shortestWord that accepts a sentence as an argument. The
function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.
*/

// Your code here 
function shortestWord(sentence){
    let wordArr=sentence.split(' ');
    let shortest=wordArr[0].length;
    let shortestWord= wordArr[0];

    for(let i =0; i <wordArr.length ; i++){
        if(wordArr[i].length <= shortest ){
            shortest=wordArr[i].length;
            shortestWord=wordArr[i];
        }            
    }

    return shortestWord;
}

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = shortestWord;
