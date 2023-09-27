/** 
 * Question 16:
 * More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
 • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
   people that you found a bigger dinner table.
 • Add one new guest to the beginning of your array.
 • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
 • Print a new set of invitation messages, one for each person in your list.
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
