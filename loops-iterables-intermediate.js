/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 *///input: array
 // /output: sum of all the #s in the array( a,b,c...) return (a+b+c...)

   var sumOfArray = function (addItUp){

      var sum = 0

     for(var i = 0; i < addItUp.length; i ++ ){

         sum = addItUp[i] + sum
      }

       return sum
}
console.assert(sumOfArray([3, 4]) === 7);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3, 4]) === 10);
console.assert(sumOfArray([10, 9, 8, 3, 4, 5, 6]) === 45);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var maxOfArray = function (numsList){
  var max = numsList[0]

  var allAreNums = true
  // console.log("")
  for(var i = 0; i < numsList.length; i ++){

    if( typeof numsList[i] != 'number'){
      allAreNums = false

    }

    if(numsList[i] > max){
      max = numsList[i]
    }
  }

  if(allAreNums === true){
    return max;
  } else {
    return null
  }
}


console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(maxOfArray([1,8,'bucklemyshoe', 7]) === null )
console.assert(maxOfArray([1,8, false, 7]) === null )

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

// function isVowel(symbol){
//   varaeiou y?
// }

var sumOfArray = function (addItUp){

   var sum = 0

  for(var i = 0; i < addItUp.length; i ++ ){

      sum = addItUp[i] + sum
   }

    return sum
}
console.assert(sumOfArray([3, 4]) === 7);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3, 4]) === 10);
console.assert(sumOfArray([10, 9, 8, 3, 4, 5, 6]) === 45);
/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
 var reverse = function (strInput){
    var newStr = ''
     for(var i = strInput.length - 1; i >= 0; i-- ){

        newStr = newStr + strInput[i]
        console.log(newStr)
       //  console.log("strInput[",i,"]", strInput[i])

       //  console.log(newStr)
     }
   return newStr //output: string in reverse
 }


console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


/**
 * Part 4
 *
 * write a function the returns a FizzBuzz string for some number N (counting up from 1).
 * - for every number that isn't a multiple of 3 or 5, return a period "."
 * - for every number that is a multiple of 3 (but not 5), return "fizz"
 * - for every number that is a multiple of 5 (but not 3), return "buzz"
 * - for every number that is a multiple of 3 and 5, return "FizZBuzZ"
 */
 var fizzbuzz = function (someNum){
    var newStr = ''

     for(var i = 1; i <=someNum; i++ ){
         if((i % 5 === 0) && (i % 3 !== 0)){
          newStr = newStr + 'buzz'
       } else if((i % 3 === 0) && (i % 5 !== 0)){
          newStr = newStr + 'fizz'
       } else if ((i % 3 === 0) && (i % 5 === 0)){
          newStr = newStr + 'FizZBuzZ'
       } else if (i % 5 === 0) {
          newStr = newStr + 'buzz'
       } else if (i % 3 === 0){
          newStr = newStr + 'fizz'
       } else {
          newStr = newStr + '.'
       }
         console.log(newStr)
     }
     return newStr
 }

console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")
console.assert(fizzbuzz(20) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz")

// /**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */

 var findLongestWord = function( bunchaWords){
   var bigWord = bunchaWords.split(' ');
   var longEst = 0;

   for(var i = 0; i < bigWord.length - 1; i++){

     if(bigWord.length > longEst){
       longEst = bigWord.length;
     }
   }
     return longEst;
}

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



/**
 * PART 6
 * -- ADVENTURE MODE --
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */



console.assert(GCD(5,1) === 1);
console.assert(GCD(15,3) === 3);
console.assert(GCD(15,5) === 5);
console.assert(GCD(50,20) === 10);
