const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=bb981d53439168c1c872dab82a496fcf&query=New%20York&units=f';

request({ url: url, json: true}, (error, response) => {

    const temperature = response.body.current.temperature;
    const feelslike = response.body.current.feelslike;
    const weather_descriptions = response.body.current.weather_descriptions[0];

    console.log(`${weather_descriptions} It is currently ${temperature} degress. It feels like ${feelslike} degress out.`);
});

