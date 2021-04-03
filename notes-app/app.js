// ถ้าหาก export node ออกมาเป็น function ต้องเอาตัวแปล function มารองรับด้วย
const getNotes = require('./notes.js');
const msg = getNotes();
console.log(msg);
