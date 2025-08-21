'use strict';

const renderCountry = function (data, className = '') {
  const btn = document.querySelector('.btn-country');
  const countriesContainer = document.querySelector('.countries');

  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function (country) {
  try {
    /*  
   const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}?geoit=json`
    );

    if(!resGeo.ok) {
    throw new Error("Problem getting location data")
    }
    const dataGeo = resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    ); 
    */

    const res = await fetch(`https://restcountries.com/v2/name/${country}`);

    const data = await res.json();
    renderCountry(data[0]);
  } catch (err) {
    console.error(err.message);
    renderError(`${err.message}`);
  }
};

whereAmI('canada');
whereAmI('sdfgsdg');
