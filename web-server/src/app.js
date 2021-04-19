const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.send('Hello Express !')
})

app.get('/help', (req, res) => {
    res.send('Help page test');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/weather', (req, res) => {
    res.send('Your Weather test git fork');
});

// port 3000 is develop port
app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})