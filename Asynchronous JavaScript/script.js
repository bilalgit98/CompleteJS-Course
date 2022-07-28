'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// //first ajax call
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
// <article class="country">
//     <img class="country__img" src="${data.flag}" />
//    <div class="country__data">
//      <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} People</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}/p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}/p>
//   </div>
// </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('spain');

const renderCountry = function (data, className) {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
       <div class="country__data">
         <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} People</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   //AJAX call for country no:1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     //getting the neighbour country

//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     //AJAX Call for neighbour country
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       console.log(this.responseText);

//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('gb');

// promises and the fetch API

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
const request = fetch('https://restcountries.com/v2/name/portugal');
console.lo;
// helper function
//error message
const getJSON = function (url, errorMsg = 'Something went wrong!') {
  return fetch(url).then(response => {
    console.log(response);
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

//Country 1
// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country Not Found!!')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       //   const neighbour = 'hsadhidf'; // doesn t exist
//       if (!neighbour) throw new Error('No neighbour found!!');

//       //country 2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country Not Found!!'
//       );
//     })

//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}💥`);
//       renderError(`Something went wrong ${err.message}. Please Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('jordan');
// });
// getCountryData('Australia');

//consuming promises
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       //   const neighbour = data[0].borders?.[0];
//       const neighbour = 'hsadhidf'; // doesn t exist

//       //country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })

//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err}💥`);
//       renderError(`Something went wrong ${err.message}. Please Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('jordan');
// });

//coding challenge 1

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`There is a problem with geocoding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(
        `The Country that you are currently in ${data.city} , ${data.country}`
      );

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);
      return response.json();
    })

    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message}💥`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
