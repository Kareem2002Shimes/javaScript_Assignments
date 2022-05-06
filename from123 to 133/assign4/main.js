let theNumber = 100020003000;
let i = "0123";
//  First Solution in one Line

console.log(+[...new Set(theNumber.toString())].sort().join(""));

//  Second Solution

console.log(
  +[...theNumber.toString()]
    .map((e) => (e = +e))
    .filter((e) => e > false)
    .join("")
);
