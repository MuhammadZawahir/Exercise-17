"use strict";
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise_16_1 = require("../Exercise 16");
console.log("\n\nThe new dinner table wont arrive in time so I can only invite two people.\n\n");
console.log(` ${Exercise_16_1.guests[5]}, sorry I cannot invite you to dinner.`);
Exercise_16_1.guests.pop(); //remvoves last person from the list
console.log(` ${Exercise_16_1.guests[4]}, sorry I cannot invite you to dinner.`);
Exercise_16_1.guests.pop();
console.log(` ${Exercise_16_1.guests[3]}, sorry I cannot invite you to dinner.`);
Exercise_16_1.guests.pop();
console.log(` ${Exercise_16_1.guests[2]}, sorry I cannot invite you to dinner.`);
Exercise_16_1.guests.pop();
console.log("\n");
for (let guest of Exercise_16_1.guests) {
    console.log(` ${guest}, you are still invited to the dinner.`);
}
