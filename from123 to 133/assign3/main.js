let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let keys = Object.keys(myInfo);
let myMapInfo = new Map();
for (let i = 0; i < keys.length; i++) {
  myMapInfo.set(keys[i], myInfo[keys[i]]);
}

console.log(myMapInfo);
console.log(myMapInfo.size);
console.log(myMapInfo.has("role"));
