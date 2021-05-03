const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public/')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serv
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title : 'Weather',
        name : 'Sangwondee'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About me",
        name: 'Sangwondee'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText : 'This is some helpful Text',
        title: 'Help',
        name: 'Sangwondee'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "You must provide a address"
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {

            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location: location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error : "You must provide a search term"
        })
    }

    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'sangwondee',
        errorMessage: 'Help article not found.'
    })
})

// มาอันสุดท้าย ตัว express ถ้ามันเจอ Route ที่มันเรียกหาแล้วมันจะหยุดทำงานทันที
app.get('*', (req, res) => {
    res.render('404', {
      title: '404',
      name: 'sangwondee',
      errorMessage: 'Page not found.'
    })
})

// port 3000 is develop port
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})