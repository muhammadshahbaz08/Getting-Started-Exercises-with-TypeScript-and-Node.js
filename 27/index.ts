/** Question 27
 * Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
 */
let alien_color: "green" | "yellow" | "red" = "green";
if (alien_color === "green") {
  console.log("Player Earned 5 Points!");
} else if (alien_color == "yellow") {
  console.log("Player Earned 10 Points");
} else if (alien_color == "red") {
  console.log("Player Earned 15 Points");
}
