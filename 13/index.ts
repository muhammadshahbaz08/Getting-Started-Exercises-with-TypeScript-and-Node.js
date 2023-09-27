/** Question 13
 * Your Own Array: Think of your favorite mode of transportation, such as a motorcycle
 * or a car, and make a list that stores several examples. Use your list to print a
 * series of statements about these items, such as “I would like to own a Honda motorcycle.”
 */

let transport: string[] = [
  "Honda Civic Car",
  "Yamaha-Ybr-125G Motorbike",
  "Boieng 747 Airplane",
];
console.log("Following are my Favourite Modes of transportation");
transport.forEach((item) => {
  console.log(`I would like to own ${item}`);
});
