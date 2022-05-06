
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
[1, 2, 3, 4, 5, 6]

// one

// let newArr=numsOne.concat(numsTwo);

//  console.log(newArr);


// let newArr=[...numsOne,...numsTwo];


//  console.log(newArr);


// two

//  function merge(arr1,arr2){

//    arr2.forEach(e => {
//       arr1.push(e);
//    });
//    return arr1;
// }
//  console.log(merge(numsOne,numsTwo));

// three


// numsOne.push(...numsTwo);

//  console.log(numsOne);

// four

// for (let i=0;i<numsTwo.length;i++){

//     numsOne.push(numsTwo[i]);
// }
// console.log(numsOne);


// five

// let merge = numsTwo.reduce((arr1,arrItem2)=>{


//     arr1.push(arrItem2);
//     return arr1;
// },numsOne);

// console.log(merge)