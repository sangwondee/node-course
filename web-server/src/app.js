const path = require('path');
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public/')

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title : 'Weather',
        name : 'Wichan'
    })
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About me",
        name: 'Wichan'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        message : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cumque quod aliquid placeat porro officiis tempore. Beatae libero vel eos dolorem aliquam minus odio quisquam, consectetur sapiente provident in atque!'
    });
});

app.get('/weather', (req, res) => {
    res.send([{
        forecast: "It is snowing !!!",
        location: "Thailand"
    }]);
});

// port 3000 is develop port
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})