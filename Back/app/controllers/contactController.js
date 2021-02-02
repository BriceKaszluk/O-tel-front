
const nodemailer = require('nodemailer');

// we require googleapis to get the client google auth
const {google} = require('googleapis');



const contactMail = {



 contactMailer: async(request, response) => {
        const {email, subject, message} = request.body
        console.log(request.body)
        try {
            
            // redirect URL
            const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';
            
            // information we save in .env
            const {
            EMAIL_NAME,
            SECRET_PASS,
            EMAIL_CLIENT_ID,
            EMAIL_CLIENT_SECRET,
            EMAIL_REFRESH_TOKEN
            } = process.env; 

            // we setup our auth client with information we save in .env
            const oAuth2Client = new google.auth.OAuth2(EMAIL_CLIENT_ID, EMAIL_CLIENT_SECRET, EMAIL_REFRESH_TOKEN, OAUTH_PLAYGROUND); 
            console.log('probleme: ', oAuth2Client)
            oAuth2Client.setCredentials({refresh_token: EMAIL_REFRESH_TOKEN}); // we use the refresh token to get another access token 

            const accessToken = await oAuth2Client.getAccessToken(); // now we can get a new acces token 
            
            // we now have to describe how we want to send the email using SMTP and Nodemailer
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
                }
                
            })
            
            // we give to our email some content
            const mailOption = {
                from: `${email}`,
                to: EMAIL_NAME,
                subject: `Message de ${email}: ${subject}`, 
                text: `${message}`
            }

            // we can now send our email
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

