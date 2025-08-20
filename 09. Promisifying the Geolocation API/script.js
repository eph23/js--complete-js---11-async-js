'use strict';

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => console.log(position),
    //   err => console.error(err)
    // );

    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = function (lat, lng) {
  const whereAmI = function () {
    getPosition()
      .then(pos => {
        const { latitude: lat, longitude: lng } = pos.coords;

        return fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
        );
      })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Problem with geocoding`);
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.countryName}`);
      })
      .catch(err => console.error(`${err.message} 💥`));
  };
};

btn.addEventListener('click', whereAmI);
