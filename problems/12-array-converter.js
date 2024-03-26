/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

function arrayConverter(array) {
  // Your code here
  //1. Declare an empty object
  let obj = {};
  //2. Iterate through the array
  for (let i = 0; i < array.length; i++){
    let key = array[i];

    if (obj[key] === undefined){
      obj[key] = 1;
    } else {
      obj[key]++;
    }
  }
  //3. Check if the string is in the object
  //3a. If it's not, set the string as the key and the value as one
  //3b. If it is, just increment its value

  return obj;
}

console.log(arrayConverter(["apple", "apple"]));
console.log(arrayConverter(["mango", "pineapple"]));
console.log(arrayConverter(["apple", "banana", "potato", "banana"]));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
