/*
Write a function snakeToPascal that takes in a snake_cased string and returns a
PascalCased version of the string. snakecase is where each word is separated
with underscores (``). PascalCase is a string where the first char of each word
is capital, all other chars lowercase.
*/

// Your code here 
function snakeToPascal(snake_cased){
    
    let wordArr=snake_cased.split('_');

    for(let i=0; i<wordArr.length; i++){
        let charArr= wordArr[i].split('');
        charArr[0]=charArr[0].toUpperCase();
        for(let j=1; j<charArr.length; j++){
            charArr[j]=charArr[j].toLowerCase();
        }
        wordArr[i]=charArr.join('');
    }

    return wordArr.join('');
}

console.log(snakeToPascal('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToPascal('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToPascal('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToPascal('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = snakeToPascal;
