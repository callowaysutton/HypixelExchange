const Hypixel = require('hypixel-api-reborn');
const hypixel = new Hypixel.Client("0b41349c-a396-4aeb-b90e-5a1d9fa7f685", {
    cache: true,
    rateLimit: "AUTO",
    cacheSize: 10,
    cacheTime: 120
  });

// // getPlayer
// hypixel.getPlayer('xoroxa').then(player => {
//   console.log(player.level); 
//   player.getRecentGames().then(games => {
//     console.log(games);
//   });
// }).catch(e => {
//   console.error(e);
// });

hypixel.getSkyblockAuctions().then(auction => {
    console.log(auction)
})