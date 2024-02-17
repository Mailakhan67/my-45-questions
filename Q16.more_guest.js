"use strict";
let guestList = ["Maila", "Shaista", "Naila", "Seema", "Rehana", "Zahida"];
guestList.unshift("Fozia");
guestList.push("Shehreem");
guestList.splice(4, 0, "Sana");
for (let arrays of guestList) {
    console.log(`${arrays} you are invited by me for a dinner tonight!`);
}
