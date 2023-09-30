/** Question 24:
 * More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
 * If you want to try more comparisons, write more tests. Have at least one True and one False result for each 
 * of the following:
  
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and 
  less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
 */

let str1 = "Pakistan";
let str2 = "Pakistan";
console.log("Test 1: Do you think Str1 Equals to Str2 ? I predicts True");
console.log(str1 === str2);

console.log(
  "Test 2: Do you think String 1 is Not Equals to String 2 ? I predicts False"
);
console.log(str1 !== str2);

//Lower Case Function Test
let string1 = "great";
let string2 = "GREAT";
console.log(
  "Test 3: Do you think String 1 (Lower Case )Equals to String 2 (Lower Case) ? I predicts True"
);
console.log(str1.toLowerCase() === str2.toLowerCase());

let color1 = "blue";
let color2 = "red";
console.log(
  "Test 4: Do you think Color1 (Lower Case )Equals to Color 2 (Lower Case) ? I predicts False"
);
console.log(color1.toLowerCase() === color2.toLowerCase());

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1 = 22;
let number2 = 33;

console.log(
  "Test 5: Do you think, Number1 is Greater than and Eqauls to Number2, I Predcits False"
);
console.log(number1 >= number2);

console.log(
  `Test 6: Do you think, Number1  is Less than and Eqauls to Number2, I Predcits True`
);
console.log(number1 <= number2);

console.log(
  "Test 7: Do you think, Number1 is Greater than  Number2, I Predcits False"
);
console.log(number1 > number2);

console.log(
  "Test 8: Do you think, Number1 is Lesser than  Number2, I Predcits True"
);
console.log(number1 < number2);

console.log(
  "Test 9: Do you think, Number1 is Equals to  Number2, I Predcits False"
);
console.log(number1 === number2);

console.log(
  "Test 10: Do you think, Number1 is not Equals to  Number2, I Predcits True"
);
console.log(number1 !== number2);

//Tests using "and" and "or" operators

let age = 25;
let hasCNIC = true;
console.log(
  `Test 11: Do you think a Person Having age greater than 20 have CNIC ? I think True `
);
console.log(age > 20 && hasCNIC);

let clouds = false;
let rain = true;
let sun = true;

console.log("Test 12:  If it is Raining is it also Cloudy ? I Predict True");
console.log(clouds || rain);

console.log(`Test 13: If it is Sunny , There is cloud also ? I Predict False`);
console.log(sun && clouds);

//Test whether an item is in a array
let arr = [1, 2, 3, 4, "apple"];
console.log(
  `Test 14: Is the array contains "apple" item in it. I predict True`
);
console.log(arr.includes("apple"));

console.log(
  `Test 15: Is the array contains "grapes" item in it. I predict False`
);
console.log(arr.includes("grapes"));
