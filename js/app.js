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
