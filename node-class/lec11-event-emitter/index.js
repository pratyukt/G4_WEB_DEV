// Promise.resolve("resolved").then(console.log("promise hnvi"));
// Promise.resolve("resolved").then(()=>{console.log("promise hnvi")});
// process.nextTick(()=>{
//     console.log("nexttick hnvi")
// })

const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();

function onStart() {
  console.log('chl gya');
}

eventEmitter.once('start', onStart);

eventEmitter.removeListener('start', onStart);
