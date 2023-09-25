/**Question 3 */
// Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.

let userName = `haris`;
let lowerCase = userName.toLowerCase();
let upperCase = userName.toUpperCase();
let titleCase = userName[0].toUpperCase() + userName.substring(1).toLowerCase();

console.log(
  `Lower Case : ${lowerCase} \n Upper Case: ${upperCase} \n Title Case: ${titleCase}`
);
