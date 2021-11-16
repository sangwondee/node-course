var API_KEY = '816c5e1d58e6fb7031fd9841c3df7e52-adf6de59-7d22f190'
var DOMAIN = 'sandbox51d3c2591a234af08c0bc4bc96d7b55f.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'sangwondee@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, (error, body) => {
  console.log(body);
});