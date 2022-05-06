let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Needed Output
// 210




// first solution : 
console.log([...n1, ...n2].length * Math.max(...n2)); // 210  الفكره ضرب 30 * 7

// Second solution : 
console.log([...n1, ...n2].length * new Set(n2).size * Math.min(...n1)); // 210  الفكره ضرب 3 *7 *10