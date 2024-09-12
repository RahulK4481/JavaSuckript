const accountId ="145145"
let accountEmail = "rahul@gmail.com";
var accountPassword="123445"; // not recommended anymore
accountCity="Jaipur"; // not recommended

// accountId = 4; // Not Allowed , cannot change value of const

accountEmail="rahulk@gmail.com";
accountPassword="342423";
accountCity="Bengaluru";
let accountState;



/*
Prefer not to use var
because of issue in block scope & functional scope 
*/


console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

