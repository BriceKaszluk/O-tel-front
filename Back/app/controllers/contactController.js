
const nodemailer = require('nodemailer');

const {google} = require('googleapis')



const contactMail = {



 contactMailer: async(request, response) => {
    const {email, subject, text} = request.body
    console.log(request.body)
    try {
        const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

        const {
        EMAIL_NAME,
        SECRET_PASS,
        EMAIL_CLIENT_ID,
        EMAIL_CLIENT_SECRET,
        EMAIL_REFRESH_TOKEN
        } = process.env; 

    const oAuth2Client = new google.auth.OAuth2(EMAIL_CLIENT_ID, EMAIL_CLIENT_SECRET, EMAIL_REFRESH_TOKEN, OAUTH_PLAYGROUND); 
    console.log('probleme: ', oAuth2Client)
    oAuth2Client.setCredentials({refresh_token: EMAIL_REFRESH_TOKEN});

        const accessToken = await oAuth2Client.getAccessToken(); 
        
        const transport = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                type: 'OAuth2',
                user:EMAIL_NAME,
                pass:SECRET_PASS,
                clientId: EMAIL_CLIENT_ID,
                clientSecret: EMAIL_CLIENT_SECRET, 
                refreshToken: EMAIL_REFRESH_TOKEN,
                accessToken: accessToken
            },
            tls: {
                rejectUnauthorized: false
              }
        })

        const mailOption = {
            from: `${email}`,
            to: EMAIL_NAME,
            subject: `Message de ${email}: ${subject}`, 
            text: `${text}`,
            auth: {
                user:EMAIL_NAME,
                pass:SECRET_PASS,
                clientId: EMAIL_CLIENT_ID,
                clientSecret: EMAIL_CLIENT_SECRET, 
                refreshToken: EMAIL_REFRESH_TOKEN,
                accessToken: accessToken
            }
        }

        const info = await transport.sendMail(mailOption);
        console.log("Message sent: ", info.messageId);
        response.status(200).json('email send'); 

    } catch (error) {
        console.log(error);
        response.status(500).json({ error });
    }
    }
}

module.exports = contactMail 

// module.exports = {

//     contactMailer: async (request, response) => {
//         const {email, subject, text} = request.body
//         console.log(request.body)
//     try {
//         const transporter = nodemailer.createTransport({
//             host: 'smtp.gmail.com',
//             port: 587,
//             auth: {
//                 type: 'OAuth2', 
//                 user:process.env.EMAIL_NAME,
//                 pass:process.env.SECRET_PASS,
//                 clientId:process.env.EMAIL_CLIENT_ID,
//                 clientSecret:process.env.EMAIL_CLIENT_SECRET,
//                 refreshToken:process.env.EMAIL_REFRESH_TOKEN
//             }
//         });
       
//         const messages = {
//             from: `${email}`,
//             to: process.env.EMAIL_NAME,
//             subject: `Message de ${email}: ${subject}`, 
//             text: `${text}`
//         }
        
//         const info = await transporter.sendMail(messages);
        
//         console.log("Message sent: ", info.messageId);
       
//         response.status(200).json('email send'); 
        
//     } catch (error) {
//             console.log(error);
//             response.status(500).json({ error });
//         }
//     }
// }