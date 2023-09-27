/** Question 15
 Changing Guest List: You just heard that one of your guests can’t make the dinner
  so you need to send out a new set of invitations. You’ll have to think of 
  someone else to invite.Start with your program from Exercise 14. 
  Add a print statement at the end of your program stating the name of the 
  guest who can’t make it.Modify your list, replacing the name of the guest 
  who can’t make it with the name of the new person you are inviting.Print a 
  second set of invitation messages, one for each person who is still in your 
  list.
*/
const guest: string[] = ["John", "Tyson", "Alex", "Ben"];
let guestWhoCantCome = "Tyson";
let newGuest = "Kevin";

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
guest.forEach((person) => {
  console.log(
    `Dear , ${person} \n You are cordially invitted to join me for the Dinner. It would be great honour for me to have you as a guest \n Sincelry Shahbaz.`
  );
});
