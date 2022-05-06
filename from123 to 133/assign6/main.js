let char1 = ["A", "B", "C", "D", "E", 10, 15, 6];

let charOne = char1.copyWithin(3,0);
console.log(charOne);

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

let char2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

let charTwo = char2.copyWithin(3,4,5); //["A", "B", "C", "D", "D", "E", 10, 15, 6];
console.log(charTwo);

let char3 = ["Z", "Y", "A", "D", "E", 10, 1];

let charThree = char3.copyWithin(2,0);

console.log(charThree);

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"]
