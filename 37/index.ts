/** Question 37
 *  Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that
 *  reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and
 *  a shirt of any size with a different message.
 */
function make_shirt(
  size: string = "large",
  message: string = "I Love TypeScript"
) {
  console.log(`=>Shirt Size: ${size} \n=>Shirt Message : ${message}`);
}
make_shirt(); //calling with default values Passed
make_shirt("medium"); //Passing Only Size & using Default Message Value
make_shirt("small", "Long Live Pakistan"); // Over-Riding or Replacing Default Values...with new arguments
