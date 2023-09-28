/** Question 18
 *Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
 */
let placestoVist: string[] = [
  "Naran",
  "Ziarat",
  "Lahore Fort",
  "ZeroPoint Muree",
  "Passu Cones",
];
//Original Order off array
console.log("Original Order of Array");
console.log(placestoVist);

console.log(`Alphabetically Sorted Array (without Modifing Orignal Array)..`);
console.log([...placestoVist].sort());

//Original Order off array
console.log("Original Order Still Same ");
console.log(placestoVist);

//Sorting array in Reverse Alphabetical Order
console.log(
  `Reverse Alphabetically Sorted Array (Withoud Modifing Actual Array)..`
);
console.log([...placestoVist].sort().reverse());

//Original Order off array
console.log("Original Order Still Same");
console.log(placestoVist);

//Now we will directly change the Order of Original array ..
console.log(`Reverse the Order of Orignal List/Array`);
console.log(placestoVist.reverse());

//Now we will again Reverse the Order of Reversed array ..
console.log(`Reverse the Order of Reversed Array to its Orignal Order`);
console.log(placestoVist.reverse());

//Now We will Sort the array
console.log("Sorting the  Array ");
console.log(placestoVist.sort());

//Now We will Sort the array
console.log("Sorting the  Array to  Reversed Alphabetical Order");
console.log(placestoVist.reverse());
