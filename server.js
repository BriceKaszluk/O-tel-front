require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'abc@gmail.com', // TODO: your gmail account
        pass: process.env.PASSWORD || '1234' // TODO: your gmail password
    }
});

let mailOptions = {
    from: 'oteljs@gmail.com', // TODO: email sender
    to: 'oteljs@gmail.com', // TODO: email receiver
    subject: 'Nodemailer - Test 2',
    text: 'Wooohooo it works!!'
};

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs', err);
    }
    return log('Email sent!!!');
});