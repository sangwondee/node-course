// const validator = require('validator'); // ดู parametor ได้ทีนี้ https://www.npmjs.com/package/validator
const getNotes = require('./notes.js'); // ถ้าหาก export node ออกมาเป็น function ต้องเอาตัวแปล function มารองรับด้วย
const chalk = require('chalk');

const msg = getNotes();
console.log(msg);
// console.log(validator.isEmail('wichan@emai.com'));
// console.log(validator.isURL('www.google.com'));

const greenMsg = chalk.blue.inverse.bold("Error!");
console.log(greenMsg);