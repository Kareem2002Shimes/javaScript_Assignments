let setOfNumbers = new Set([10]);

setOfNumbers.add(20);
setOfNumbers.add(setOfNumbers.size);

console.log(setOfNumbers);

console.log(Math.min(...setOfNumbers));
