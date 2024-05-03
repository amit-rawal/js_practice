const accountId = 112233 // for constant
let accountEmail = "amit@google.com" // for variable
var accountPassword = "12345"  // for variable
accountCity = "Jaipur" //allowed
let accountState; //allowed //undefined

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId); //112233
console.log(accountEmail); //amit@google.com
console.log(accountPassword); //12345
console.log(accountCity); //Jaipur
console.log(accountState); //undefined

//accountID = 23424 //TypeError: Assignment to constant variable.


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])