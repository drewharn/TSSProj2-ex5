const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];
//Step 1:
guests.unshift("BRUTUS");

//Question 1: You can verify that "BRUTUS" was added to the beginning of the array by typing and executing guests[0] in the console.

//Step 2:
guests.push("AUGUSTUS", "LUCIA");

//Step 3:
const spartacusIndex = guests.indexOf("SPARTACUS");

//Question 2: The value of spartacusIndex would be -1 if "SPARTACUS" wasn't invited.

//Step 4:
const indexGuestRemove = guests.indexOf("CASSIUS");
guests.splice(indexGuestRemove, 1);


//Step 5:
const specialGuests = guests.slice(0, 3);

//Step 6:
const honoredGuests = guests.slice(0,2); //This step will extract the first 3 guests.
const otherGuests = guests.slice(2); //This step will extract all the other guests.
otherGuests.sort(); //This step will sort all the other guests.
const sortedGuests = honoredGuests.concat(otherGuests); //Concat will combine the 2 arrays into 1. 