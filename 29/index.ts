/** Question : 29
 * Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements 
   that check for certain fruits in your array.
   Make a array of your three favorite fruits and call it favorite_fruits.
   Write five if statements. Each should check whether a certain kind of fruit is in your array. 
   If the fruit is in your array, the if block should print a statement, such as You really like bananas!
  
 */
const favorite_fruits: string[] = ["banana", "grapes", "apple"];
if (favorite_fruits.includes("orange")) {
  console.log("I really Like Oranges");
}
if (favorite_fruits.includes("mango")) {
  console.log("I really Like Mangos");
}
if (favorite_fruits.includes("banana")) {
  console.log("I really Like Banana");
}
if (favorite_fruits.includes("apple")) {
  console.log("I really Like Apples");
}
if (favorite_fruits.includes("grapes")) {
  console.log("I really Like grapes");
}
