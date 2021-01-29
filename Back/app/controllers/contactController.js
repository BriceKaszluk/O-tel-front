
const nodemailer = require('nodemailer');

module.exports = {
    contactMailer: async (request, response) => {
        const {email, subject, text} = request.body
        console.log(request.body)
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
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
        
        console.log("Message sent: ", info.messageId);
       
        response.status(200).json('email send'); 
        
    } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }
}