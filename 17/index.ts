/** Question 17:
 * Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
   and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only 
  two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
  from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, 
  letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
  actually have an empty list at the end of your program
 */

const guest: string[] = ["John", "Tyson", "Alex", "Ben"];
let guestWhoCantCome = "Tyson";
let newGuest = "Kevin";
let newGuests = ["Akon", "Shaun", "James"];
console.log("Intiall Guests are Invited to the Dinner");
guest.forEach((person) => {
  console.log(
    `Dear , ${person} \n You are cordially invitted to join me for the Dinner. It would be great honour for me to have you as a guest \n Sincelry Shahbaz.`
  );
});

//finding the index of Guest going to be replace.
let indexOfMissingGuest = guest.indexOf(guestWhoCantCome);

if (indexOfMissingGuest !== -1) {
  //Using Index, we find in previous Statement we are replacing New Guest name at its place
  guest[indexOfMissingGuest] = newGuest;
}

console.log("Updated List ");
console.log("after replacing member" + guest);
guest.forEach((person) => {
  console.log(
    `Dear , ${person} \n You are cordially invitted to join me for the Dinner. It would be great honour for me to have you as a guest \n Sincelry Shahbaz.`
  );
});

console.log(
  "We had Found a Bigger Dinnin Table , We Can Accomodate three More Guest."
);

//adding first element to start of list
guest.unshift(newGuests[0]);
//insert 2nd  element in the middle of Guest array/list
const middleArrayIndex = guest.length / 2;
guest.splice(middleArrayIndex, 0, newGuests[1]);
console.log("member in middle " + guest);

//adding the last member of list to the last of list
guest.push(newGuests[2]);

// Guest Invitationn after addind 3 more guests
guest.forEach((person) => {
  console.log(
    `Dear , ${person} \n You are cordially invitted to join me for the Dinner. It would be great honour for me to have you as a guest \n Sincelry Shahbaz.`
  );
});

console.log(
  "Sorry, Guy's We Just Checked that The Table will be not delivered in Time For The Dinner and We have Only Space for 2 Guests Right Now! "
);

let guesttoCome = 2;

//using while loop to remove multiple peoples from List
while (guest.length > guesttoCome) {
  const removedGuest = guest.pop();
  if (removedGuest) {
    console.log(`Sorry, ${removedGuest}, We Cant Invite you to Dinner.`);
  }
}

console.log(`Updated List `);

//inviting remaning 2 guest in the list to the dinner
guest.forEach((person) => {
  console.log(
    `Dear , ${person} \n You are Still cordially invitted to join me for the Dinner. It would be great honour for me to have you as a guest \n Sincelry Shahbaz.`
  );
});

//Removing Last two Names of Guest's from list.
guest.splice(0, 2);

//displayed empptylist
console.log(guest);
