/***********************************************************************
Write a function named `restSum` that accepts all incoming parameters and sums them.

**Hint**: Use rest parameter syntax!

Examples:
restSum(3,5,6); // => 14
restSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 45
restSum(0); // => 0
***********************************************************************/

function restSum(...otherNums) {
  // Your code here
  let sum = otherNums.reduce((accum, num) => {
    return accum + num;
  });

  return sum;
}

console.log(restSum(3,5,6))
console.log(restSum(0))
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9))
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = restSum;
