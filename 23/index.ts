/** Question 23
 * Conditional Tests: Write a series of conditional tests. Print a statement describing each test 
 * and your prediction for the results of each test. Your code should look something like this:
  
  let car = 'subaru';
  console.log("Is car == 'subaru'? I predict True.")
  console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */

//Test 1
let age = 20;
console.log("Test 1: Is age === 20? I Predict True");
console.log(age === 20); //true

//Test 2
let firstName = "Alex";
console.log("Test 2: Is the First Name === 'Alex' ? I Predict True");
console.log(firstName === "Alex"); //true

//Test 3
let cityName = "Quetta";
console.log(`Test 3: Is the First Name === "Quetta" ? I Predict True`);
console.log(cityName === "Quetta"); //true

//Test 4
let temperature = 40;
console.log(
  `Test 4: Is the Temperatur Out-Side is Less than 40 Degree Celcius? I  Predict False`
);
console.log(temperature < 40); //false

//test 5:
console.log(
  `Test 5: Is the Temperatur Out-Side is greater than 40 Degree Celcius? I  Predict False`
);
console.log(temperature > 40); //false

//test 6:
console.log(
  `Test 6: Is the Temperatur Out-Side is equal to 40 Degree Celcius? I  Predict True`
);
console.log(temperature === 40); //true

//Test 7
let color = "Green";
console.log(`Test 7: Is the Color is White ? I Predict False `);
console.log(color === "White"); //false

//test 8
console.log(`Test 8: Is the Color is Grey ? I Predict False `);
console.log(color === "White"); //false

//test 9
console.log(`Test 9: Is the Color is Green ? I Predict True `);
console.log(color === "Green"); //false

//Test 10
let carCompany = "TOYOTA";
console.log(`Test 10: Is the Car Company is HONDA ? I Predict False `);
console.log(carCompany === "HONDA"); //false
