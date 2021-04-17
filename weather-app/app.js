const request = require('request');
const geocode = require('./utils/geocode')

// const url = 'http://api.weatherstack.com/current?access_key=bb981d53439168c1c872dab82a496fcf&query=37.8267,-122&units=f';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!');
//     } else if (response.body.error) {
//         console.log('Unable to find location');
//     } else {
//         const temperature = response.body.current.temperature;
//         const feelslike = response.body.current.feelslike;
//         const weather_descriptions = response.body.current.weather_descriptions[0];
//         console.log(`${weather_descriptions} It is currently ${temperature} degress. It feels like ${feelslike} degress out.`);
//     }
// });

geocode('Bangkok', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})