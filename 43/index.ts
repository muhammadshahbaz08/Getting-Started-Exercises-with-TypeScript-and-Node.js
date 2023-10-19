/** Question 43
 * Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with
 * a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array
 * and store it in a separate array. Call show_magicians() with each array to show that you have
 * one array of the original names and one array with the Great added to each magician’s name.
 */

const magician_Names: string[] = [
  "John",
  "Alex",
  "Jordan",
  "Tim Pane",
  "Joe",
  "Ben",
];

const show_magicians = () => {
  magician_Names.forEach((mag_name) => {
    console.log(` ${mag_name}`);
  });
};

const make_great = (magicians: string[]) => {
  const modified_magician_Names = magicians.map((name) => {
    return `Great ${name}`;
  });
  return modified_magician_Names;
};
console.log(`Original Array`);
show_magicians();

console.log(`Modified Array`);
const alter_arr = make_great(magician_Names);
console.log(alter_arr);

console.log(`Original Array  is still Same`);
show_magicians();
