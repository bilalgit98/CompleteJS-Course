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

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`There is a problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(
//         `The Country that you are currently in ${data.city} , ${data.country}`
//       );

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })

//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}💥`));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

//the event loop in practise
// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);

// Promise.resolve('Resolved Promise 1').then(response => console.log(response));
// Promise.resolve('Resolve Promise 2').then(response => {
//   for (let i = 0; i < 100; i++) {}
//   console.log(response);
// });

// console.log('TEST END');

//promisifying the geolocation api
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

// console.log('GETTING CURRENT POSITION');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })

//     .then(response => {
//       console.log(response);
//       if (!response.ok)
//         throw new Error(`There is a problem with geocoding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(
//         `The Country that you are currently in ${data.city} , ${data.country}`
//       );

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country not found (${response.status})`);
//       return response.json();
//     })

//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}💥`));
// };
// btn.addEventListener('click', whereAmI);

//coding challenge 2

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
// const imgCotainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgCotainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('image not found'));
//     });
//   });
// };

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image 1 successfully loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image 2 successfully loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

//consuming promises with await/async

// console.log('GETTING CURRENT POSITION');

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function (country) {
//   try {
//     //geolocation
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     // reverseGeo
//     const responseGeo = await fetch(
//       `https://geocode.xyz/${lat},${lng}?geoit=json`
//     );
//     if (!responseGeo.ok) throw new Error('Problem getting geolocation data');

//     const dataGeo = await responseGeo.json();

//     //country data

//     const response = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     );
//     if (!response.ok) throw new Error('Problem getting geolocation data');
//     console.log(response);
//     const data = await response.json();
//     renderCountry(data[0]);
//     return `you are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (error) {
//     console.error(error);
//     renderError(`${error.message}`);

//     //reject promise from async
//     throw error;
//   }
// };

// console.log('1 is going to get the location');

// // whereAmI()
// //   .then(city => console.log(city))
// //   .catch(error => console.error(`2 : ${error.message}`))
// //   .finally(() => console.log('2 has finished loading Geolocation Data'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (error) {
//     console.error(`2: ${error.message}`);
//   }
//   console.log(' 3 : FINISHED GETTING LOCATION!');
// })();

//running promises in parallel
// const get3Countries = async function (country1, country2, country3) {
//   try {
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${country1}`),
//       getJSON(`https://restcountries.com/v2/name/${country2}`),
//       getJSON(`https://restcountries.com/v2/name/${country3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (errors) {
//     console.error(errors);
//   }
// };

// get3Countries('GB', 'FRA', 'USA');

//promises.race

// (async function () {
//   const response = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/GB`),
//     getJSON(`https://restcountries.com/v2/name/FRA`),
//     getJSON(`https://restcountries.com/v2/name/USA`),
//   ]);
//   console.log(response[0]);
// })();

// const timer = function (second) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('request took too long '));
//     }, second * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v2/name/FRA`), timer(0.1)])
//   .then(res => console.log(res[0]))
//   .catch(error => console.error(error));

// //promise.allsettled
// Promise.allSettled([
//   Promise.resolve('success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(errors => console.error(errors));

//coding challenge 3
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgCotainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgCotainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('image not found'));
    });
  });
};

// let currentImg;
// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('image 1 successfully loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('image 2 successfully loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

const loadNpause = async function () {
  try {
    //loading images 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 Successfully Loaded');
    await wait(2);
    img.style.display = 'none';

    //loading images 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 Successfully Loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (errors) {
    console.error(errors);
  }
};

loadNpause();

//part 2
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);
    const imgsEL = await Promise.all(imgs);
    console.log(imgsEL);
    imgsEL.forEach(img => img.classList.add('parallel'));
  } catch (errors) {
    console.error(errors);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
