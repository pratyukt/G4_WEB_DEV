const {pbkdf2} = require('node:crypto');

console.log("START");

console.log("THIS IS STATEMENT 1");

pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("THIS IS STATEMENT 2");

pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("THIS IS STATEMENT 3");

pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("THIS IS STATEMENT 4");

pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("THIS IS STATEMENT 5");

pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("THIS IS STATEMENT 6");

pbkdf2('secret', 'salt', 2000000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
});

console.log("END");


// const {
//   pbkdf2Sync,
// } = require('node:crypto');

// console.log("START");


// const key = pbkdf2Sync('secret', 'salt', 2000000, 64, 'sha512');
// console.log(key.toString('hex'));  // '3745e48...08d59ae'

// console.log("END");
