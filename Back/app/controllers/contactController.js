// const {Booking, Housing, Notice, Role, User} = require('../models');

// require('dotenv').config();

// const nodemailer = require('nodemailer');
// const log = console.log;

// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAILO,
//         pass: process.env.PASSWORDO
//     }
// });

// let mailOptions = {
//     from: 'oteljs@gmail.com', // TODO: email sender
//     to: 'oteljs@gmail.com', // TODO: email receiver
//     subject: 'Nodemailer - Test 4',
//     text: 'Wooohooo it works!!'
// };

// transporter.sendMail(mailOptions, (err, data) => {
//     if (err) {
//         return log('Error occurs', err);
//     }
//     return log('Email sent!!!');
// });