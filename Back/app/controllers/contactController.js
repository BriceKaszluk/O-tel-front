//const {Booking, Housing, Notice, Role, User} = require('../models');

const nodemailer = require('nodemailer');

module.exports = {
    contactMailer: async (request, response) => {
        const {email} = request.body
        const {subject} = request.body
        const {text} = request.body
        console.log(request.body)

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            // auth: {
            //     user: 'rosemary.buckridge95@ethereal.email',
            //     pass: 'KmtEq83WWUPHhueW3F'
            // }
            // service: 'gmail', 
            auth: {
                user:process.env.EMAIL_NAME,
                pass:process.env.SECRET_PASS
            }

        });
        const messages = {
            from: `${email}`,
            to: process.env.EMAIL_NAME,
            subject: `Message de ${email}: ${subject}`, 
            text: `${text}`
        }
        const info = await transporter.sendMail(messages);

        console.log("Message sent: %s", info.messageId);

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info)); 

        response.send('email send'); 
    }
}

