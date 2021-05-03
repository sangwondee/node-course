console.log('Client side javascript file is loaded! ');

fetch('http://localhost:3000/weather?address=bangkok').then((response) => {
    response.json().then((data) => {
        console.log(data);
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})