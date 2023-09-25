/**Question # 6*/
// Stripping Names: Store a person’s name, and include some whitespace characters at
// the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once.
// Print the name once, so the whitespace around the name is displayed. Then print the name
// after striping the white spaces.

let personName = `\t\n  Haris   \t\n`;
console.log(`With White Spaces : ${personName}`);
//using a prediffed function named as trim to remove whitespaces.
const strippedName = personName.trim();
console.log(`Without White Spaces : ${strippedName}`);
