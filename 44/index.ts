/** Question 44
 * Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 * The function should have one parameter that collects as many items as the function call provides,
 * and it should print a summary of the sandwich that is being ordered. Call the function three times,
 * using a different number of arguments each time.
 */

const sandwich = ([...ingredients]: string[]) => {
  console.log(
    `Following are the Ingredients that are Included In Your Sandwich:`
  );
  ingredients.forEach((item, i) => {
    console.log(`${1 + i}.${item}`);
  });
};

sandwich(["Olives", "Chicken", "Boiled Egg Slice's"]);
sandwich(["Olives", "Beaf"]);
sandwich(["Mashroom"]);
