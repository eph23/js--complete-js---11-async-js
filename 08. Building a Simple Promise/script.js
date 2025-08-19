'use strict';

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('LOTTERY DRAW is in progress');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You win');
    } else {
      reject('You loose');
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('I have waited for 1 secs');
    return wait(1);
  })
  .then(() => console.log('Waited for 2 sec'));
