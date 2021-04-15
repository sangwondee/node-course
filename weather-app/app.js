const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=bb981d53439168c1c872dab82a496fcf&query=New%20York&units=f';

request({ url: url, json: true }, (error, response) => {
    const temperature = response.body.current.temperature;
    const feelslike = response.body.current.feelslike;
    const weather_descriptions = response.body.current.weather_descriptions[0];

    console.log(`${weather_descriptions} It is currently ${temperature} degress. It feels like ${feelslike} degress out.`);
});

// Geocoding
// Address -> latitude,longitude => weather
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FuZ3dvbmRlZSIsImEiOiJja25pcDFub20wNTlqMm5wcDQ5MThqYmp0In0.GH00Svdit-esHiUaldRKWg&limit=1';

request({ url:geocodeURL, json: true }, (error, response) => {
    const latitude =  response.body.features[0].center[1];
    const longitude =  response.body.features[0].center[0];
    console.log(longitude, latitude);
});
