/** Question 34
 * Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to 
 * print the name of each pizza.
 * 
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
  For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
  The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, 
  such as I really love pizza!
 */

const favPizzas: string[] = [
  "Marinara Pizza",
  "Calzone Pizza",
  "Pepperoni Pizza",
];

for (const favPizza of favPizzas) {
  console.log(`I Like ${favPizza}`);
}

console.log(`I enjoy classic Marinara Pizza with its rich tomato sauce and fragrant herbs. It's a timeless favorite. \n I also like eating in Calzone Pizza, a savory delight stuffed with gooey cheese, meats, and veggies, making each bite satisfying.
  Sometimes, I crave a Vegetarian Pizza loaded with colorful bell peppers and mushrooms, a delightful and healthy option. \n But above all, I must confess, I really love pizza!.
  `);
