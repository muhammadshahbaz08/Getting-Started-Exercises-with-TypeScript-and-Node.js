/** Question 41
 * Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of
 * each magician in the array.
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
    console.log(mag_name);
  });
};

show_magicians();
