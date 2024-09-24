/*
Write a function mostVowels that takes in a sentence string and returns the
word of the sentence that contains the most vowels.
Vowels are the letters "a", "e", "i", "o", "u".
*/

// Your code here 
function mostVowels( sentence ){
    let wordArr=sentence.split(' ');
    let vowels='aeiou';
    let vowelCountArr=[]

    for(let i = 0; i< wordArr.length; i++){
        let charArr=wordArr[i].split('');
        let vowelCount=0;
        for(let j=0; j < charArr.length; j++){
            if(vowels.includes(charArr[j]))
                vowelCount++;
        }
        vowelCountArr.push(vowelCount);
    }

    if (vowelCountArr.length > 0) {
        let max = vowelCountArr[0];
        let maxIndex=0;
        for (let k = 1; k < vowelCountArr.length; k++) {
            if(max < vowelCountArr[k]){
                max= vowelCountArr[k];
                maxIndex=k;
            }
        }
        return wordArr[maxIndex];
    }
    else{
        return '';
    }

    
}

console.log(mostVowels("what a wonderful life")); // "wonderful"
console.log(mostVowels("the quick brown fox jumps")); // "quick"
console.log(mostVowels("")); // ""

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = mostVowels;
