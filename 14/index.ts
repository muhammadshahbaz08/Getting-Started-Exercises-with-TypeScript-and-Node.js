/** Question 14
 * Guest List: If you could invite anyone, living or deceased, to dinner,
 * who would you invite?Make a list that includes at least three people you’d
 * like to invite to dinner.Then use your list to print a message
 * to each person, inviting them to dinner.
 */
const guest: string[] = ["John", "Tyson", "Alex", "Ben"];
console.log("Following Persons are Invited to th Dinner");
guest.forEach((person) => {
  console.log(
    `Dear , ${person} \n You are cordially invitted to join me for the Dinner. It would be great honour for me to have you as a guest \n Sincelry Shahbaz.`
  );
});
