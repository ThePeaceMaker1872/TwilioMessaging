// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

const dotenv = require("dotenv");
dotenv.config({path: "numbers.env"});
dotenv.config({path: "tokens.env"});


const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const myVirtualNum = process.env.MY_VIRTUAL_NUMBER;
const myPhoneNum = process.env.MY_PHONE_NUMBER;


const client = require('twilio')(accountSid, authToken);

client.messages
      .create({   from: myVirtualNum, 
                  body: 'This is a message sent using Twilio Api', 
                  to: myPhoneNum})
      .then(message => console.log(message.sid));