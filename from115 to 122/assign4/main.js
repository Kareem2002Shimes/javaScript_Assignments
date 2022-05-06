const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"], //array
    "Ark Of Napishtim": { //obj
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here

// let {title:t}=game;

// console.log(`My Favourite Games Style Is ${t} Style`);
// // My Favourite Games Style Is YS Style

// let {developer:d}=game;

// console.log(`And I Love ${d} Games`);
// // And I Love Falcom Games

let {releases: {"Oath In Felghana": [u],"Oath In Felghana": [, j]}} = game;

// console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// // My Best Release Is Oath In Felghana It Released in USA & Japan

// console.log(`Although I Love ${a}`);
// // Although I Love Ark Of Napishtim

// console.log(`${a} Price in USA Is ${u_price}`);
// // Ark Of Napishtim Price in USA Is 20 USD

// console.log(`${a} Price in USA Is ${j_price}`);
// // Ark Of Napishtim Price in USA Is 10 USD

// console.log(`Origin Price Is ${or}`);
// // Origin Price Is 30 USD
