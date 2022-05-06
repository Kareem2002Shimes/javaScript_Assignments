// Write Your Code Here


// Do Not Edit Below
let myStr = "Elzero";

myStr.__proto__.addLove = function(val){
  return `I Love ${this} Web School`
}
console.log(myStr.addLove()); // I Love Elzero Web School


