/** Question 45
 * Cars: Write a function that stores information about a car in a Object. The function
 * should always receive a manufacturer and a model name. It should then accept
 * an arbitrary number of keyword arguments. Call the function with the required
 * information and two other name-value pairs, such as a color or an optional feature.
 * Print the Object that’s returned to make sure all the information was stored correctly.
 */

function getCarInfo(
  manufacturer: string,
  modelName: string,
  ...options: [string, any][] //using Rest Parameter's with Tupels For Storing Arguments In Object of Unknown Number.
) {
  const carInfo: {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
  } = {
    manufacturer: manufacturer,
    modelName: modelName,
  };

  for (const [key, value] of options) {
    carInfo[key] = value;
  }

  return carInfo;
}

const car1 = getCarInfo("Toyota", "Camri-Ariel", ["ModelYear", 2023]);
const car2 = getCarInfo("Toyota", "Corolla");
const car3 = getCarInfo(
  "Honda",
  "Civic",
  ["ModelYear", 2003],
  ["Color", "Red"]
);

console.log(car1);
console.log(car2);
console.log(car3);
