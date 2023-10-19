/** Question 42
 * Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great()
 * that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 * Call show_magicians() to see that the list has actually been modified.
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
  for (let i = 0; i < magicians.length; i++) {
    magician_Names[i] = `Great ${magician_Names[i]}`;
  }
};

console.log(`Before adding Great Word Before Magican namees`);
show_magicians();

// Adding Great word by calling function make_great();
make_great(magician_Names);

console.log(`Displaying Magcian Array Names After Adding Keyword 'Great'`);
show_magicians();
