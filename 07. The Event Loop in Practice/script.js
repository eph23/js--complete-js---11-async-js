'use strict';

console.log('Test start');
setTimeout(() => console.log(`This is a 0 sec timer`), 0);
Promise.resolve(`Resolved promise 1`).then(res => console.log(res));

Promise.resolve(`Resolved promise 2`).then(res => {
  for (let i = 0; i < 100000; i++) {}
  console.log(res);
});

console.log('Test end');
