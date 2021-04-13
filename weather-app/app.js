const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=bb981d53439168c1c872dab82a496fcf&query=New%20York';

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
});