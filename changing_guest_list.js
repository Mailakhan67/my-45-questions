"use strict";
let guestList = ["maila", "shaista", "naila", "seema", "rehana", "zaida"];
const guestWhoCantCame = 'rehana';
console.log(`${guestWhoCantCame} can't make it to the dinner!`);
const indexOfGuestWhoCantcome = guestList.indexOf(guestWhoCantCame);
if (indexOfGuestWhoCantcome !== -1) {
    const newPerson = "laiba";
    guestList[indexOfGuestWhoCantcome] = newPerson;
    guestList.forEach(guest => {
        console.log(`Dear ${guest}, you are invited to the dinner!`);
    });
}
