/** Question 22
 * Intentional Error: If you haven’t received an array index error in one of your programs yet,
 * try to make one happen. Change an index in one of your programs to produce an index error.
 * Make sure you correct the error before closing the program.
 */

const cities: string[] = [
  "Lahore",
  "Karachi",
  "Rawalpindi",
  "Peshawar",
  "Quetta",
];
//accessing an array element which is not Defined Yet Will Result in an a error
console.log(cities[6]); //undefined

//Correcting the error
console.log(cities[2]); //Rawalpindi
