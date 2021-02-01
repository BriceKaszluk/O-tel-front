const nodemailer = require('nodemailer');
const {google} = require('googleapis')

const {User} = require('../models');



const contactMail = {



    confirmSignUp: async(request, response) => {
      
        // const confirmUser = new User({
        //     first_name: request.body.first_name,
        //     last_name: request.body.last_name
        // })

        // console.log('confirmation: ', confirmUser)
       
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
               }
               
           })
   
           const mailOption = {
               from: EMAIL_NAME,
               to: EMAIL_NAME,
               subject: "Message de " + EMAIL_NAME + " Confirmation d'inscription", 
               text: `Bonjour  merci pour votre inscription, voici votre confirmation.`
           }
   
           const info = await transport.sendMail(mailOption);
           console.log("Message sent: ", info.messageId);
           response.send('email send'); 
   
       } catch (error) {
           console.log(error);
           response.send({ error });
       }
       }
   }
   
   module.exports = contactMail 