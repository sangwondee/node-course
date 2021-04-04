const fs = require('fs');

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// // ทำ Object ให้เป็น JSON
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const user = JSON.parse(dataJson);
user.name = 'Wichan';
user.planet = 'Earth';
user.age = 31;
const userJson = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJson);