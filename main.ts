let placesToVisit:string[]=["America","Canada","Sri lanka","Dubai","China"];
// // ORIGINAL ORDER
console.log("Original order:",placesToVisit);

// // print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:",[...placesToVisit].sort());

// // show that the array is still in its original order
console.log("Original order after sorting:",placesToVisit);

// // print the array in reverse alphabetical order without changing the order of the original order;
console.log("Reverse alphabetical order:",[...placesToVisit].sort().reverse());
// // show the array is still in its original order:
console.log("Original order reverse sorting:",placesToVisit);

// // reverse the order of the list

placesToVisit.reverse();
console.log("Reversed order:",placesToVisit);

// // sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:",placesToVisit);

// // sort the array in reverse alphabetical order 
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order", placesToVisit);



