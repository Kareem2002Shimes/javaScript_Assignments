let theName = "Elzero";

console.log([...theName]);
console.log(theName.split(""));

let anArray = [];
for (let i = 0; i < theName.length; i++) {
  anArray.push(theName[i]);
}
console.log(anArray);

console.log(Array.from(theName));

console.log([...new Set(theName)]);

console.log(Object.values(theName));
