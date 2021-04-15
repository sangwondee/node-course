const request = require('request');

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

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1Ijoic2FuZ3dvbmRlZSIsImEiOiJja25pcDFub20wNTlqMm5wcDQ5MThqYmp0In0.GH00Svdit-esHiUaldRKWg&limit=1';

request({ url:geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connet to location services!');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.');
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
        console.log(longitude, latitude);
    }
});
