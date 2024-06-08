const accountId = 1228594
let accountEmail = "shubham@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sp@sp.com"
accountPassword = "212121"
accountCity = "Lucknow"

console.log(accountId);

/*
prefer not to use VAR
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])