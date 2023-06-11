// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure

// Requires npm install twilio
// Requires npm install dotenv

// importing dotenv module in node.js application
const dotenv = require("dotenv");

// providing paths of environment variables
// if we have a unique dotenv file we can use dotenv.config()
dotenv.config({path: "numbers.env"});
dotenv.config({path: "tokens.env"});

// Providing values of Twilio's authentication
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Providing values of phone numbers
const myVirtualNum = process.env.MY_VIRTUAL_NUMBER;
const myPhoneNum = process.env.MY_PHONE_NUMBER;

// Creating a Twilio client instance using the twilio module 
// and the accountSid and authToken variables.
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({   from: myVirtualNum, 
                  body: 'This is a message sent using Twilio Api', 
                  to: myPhoneNum})
      .then(message => console.log(message.sid));