const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=bb981d53439168c1c872dab82a496fcf&query=' + longitude  + ',' + latitude + '&units=f';

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.error) {
            console.log('Unable to find location', undefined);
        } else {
            const temperature = response.body.current.temperature;
            const feelslike = response.body.current.feelslike;
            const weather_descriptions = response.body.current.weather_descriptions[0];
            callback(undefined, `${weather_descriptions} It is currently ${temperature} degress. It feels like ${feelslike} degress out.`);
        }
    })
}

module.exports = forecast;
