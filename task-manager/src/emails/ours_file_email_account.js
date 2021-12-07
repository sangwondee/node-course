const nodemailer = require('nodemailer');
// async..await is not allowed in global scope, must use a wrapper
async function main() {
// สร้างออปเจ็ค transporter เพื่อกำหนดการเชื่อมต่อ SMTP และใช้ตอนส่งเมล
let transporter = nodemailer.createTransport({
 host: 'smtp.gmail.com',
 port: 587,
 secure: false, // true for 465, false for other ports
 auth: { // ข้อมูลการเข้าสู่ระบบ
   user: 'sangwondee@gmail.com', // email user ของเรา
   pass: 'lovenamo' // email password
 }
});
// เริ่มทำการส่งอีเมล
let sendWelcomEmail = await transporter.sendMail({
from: '"Fred Foo 👻" <xxxx@gmail.com>', // อีเมลผู้ส่ง
to: 'sangwondee@gmail.com', // อีเมลผู้รับ สามารถกำหนดได้มากกว่า 1 อีเมล โดยขั้นด้วย ,(Comma)
subject: 'Hello ✔', // หัวข้ออีเมล
text: 'Hello world?', // plain text body
html: '<b>Hello world?</b>' // html body
});



console.log(sendWelcomEmail);
// log ข้อมูลการส่งว่าส่งได้-ไม่ได้
console.log('Message sent: %s', sendWelcomEmail.messageId);
}

main().catch(console.error);















// const mailgun = require("mailgun-js");
// const DOMAIN = 'YOUR_DOMsandbox51d3c2591a234af08c0bc4bc96d7b55f.mailgun.orgAIN_NAME';
// const api_key = '816c5e1d58e6fb7031fd9841c3df7e52-adf6de59-7d22f190'
// const mg = mailgun({apiKey: api_key, domain: DOMAIN});
// const data = {
// 	from: 'Excited User <me@samples.mailgun.org>',
// 	to: 'wichans@investree.co.th',
// 	subject: 'Hello',
// 	text: 'Testing some Mailgun awesomness!'
// };
// mg.messages().send(data, function (error, body) {
// 	console.log(body);
// });




// var API_KEY = '816c5e1d58e6fb7031fd9841c3df7e52-adf6de59-7d22f190'
// var DOMAIN = 'sandbox51d3c2591a234af08c0bc4bc96d7b55f.mailgun.org';
// var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

// const data = {
//   from: 'sangwondee@gmail.com',
//   to: 'wichans@investree.co.th',
//   subject: 'Thanks fo joining in!',
//   text: 'Testing some Mailgun awesomeness!'
// };

// mailgun.messages().send(data, (error, body) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(body);
// });

// const sendWelcomEmail = (email, name) => {
//     mailgun.messages().send({
//         to: email,
//         from: 'sangwondee@gmail.com',
//         subject: 'Thanks fo joining in!',
//         text: `Welcome to the app, ${name}. Let me know how you get along with the app`
//     })
// }

// module.exports = {
//     sendWelcomEmail
// }