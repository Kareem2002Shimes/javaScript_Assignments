let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let reEx = /os\d*o/ig;

console.log(specialNames.match(reEx))
// Output
// ['Os10O', 'OsO', 'Os100O']