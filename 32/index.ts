/** Question 32
 * Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users
• Make another list of five usernames called new_users.Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a
   message that the person will need to enter a new username. If a username has not been used, 
   print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 * 
 */

const current_users: string[] = [
  "john",
  "shane",
  "warner",
  "lee",
  "ben",
  "anderson",
];
const new_users: string[] = [
  "Anderson",
  "Chris",
  "Jordan",
  "ben",
  "lee",
  "Newton",
];
console.log(`\n Name Avalabilty Check!\n`);
for (const new_user of new_users) {
  const lowerCaseNewUser = new_user.toLowerCase();
  if (current_users.includes(lowerCaseNewUser)) {
    console.log(
      `\n=> UserName ${new_user} is not Availabel . You Need to  Enter a New Name to Continue with.`
    );
  } else {
    console.log(`\n=>UserName ${new_user} is  Availabel.`);
  }
}