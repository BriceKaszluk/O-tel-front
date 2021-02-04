
const nodemailer = require('nodemailer');

// we require googleapis to get the client google auth
const {google} = require('googleapis');

const {Booking} = require('../models');


module.exports = {
    getAllBookings: async (request, response) => {
        try {
            const bookings = await Booking.findAll({
                include: [
                    
                        {association: 'house'},
                        {association: 'user'}
                    
                ]
            });
               response.json({data: bookings}); 
               
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }, 

    getOneBooking: async (request, response) => {
            const bookingId = request.params.id;
            try {
                const booking = await Booking.findOne({
                  where: {id: bookingId},
                  include: [
                    {association: 'user'}, 
                    {association: 'house'}
                  ]
                });

                response.json({data: booking})
                
            } catch (error) {
                console.log(error);
                response.status(500).json({ error });
            }
    },

    createBooking: async (request, response) => {
          const bookingData = {
              begining_date: request.body.begining_date,
              ending_date: request.body.ending_date,
              email: request.body.email,
              housing_id: request.body.housing_id,
              user_id: request.body.user_id
          }  

          try {
              const booking = await Booking.create(bookingData); 
              
              const {email, begining_date, ending_date} = request.body
        
        
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
                  to: `${email}`,
                  subject: "Message de " + EMAIL_NAME + " Confirmation d'inscription", 
                  text: `Bonjour merci pour votre réservation du ${begining_date} au ${ending_date}, a bien été prise en compte.`
              }
      
              const info = await transport.sendMail(mailOption);
              console.log("Message sent: ", info.messageId);
              
              response.status(201).json({data: booking}); 
          
            } catch (error) {
            console.log(error);
            response.status(500).json({ error });
          }
    },

    deleteBooking: async (request, response) => {
        const bookingId = request.params.id;

        try {
            const deletedBooking = await Booking.findOne({
                where: {id: bookingId}
            }); 
            if(!deletedBooking){
                response.status(404).json({error: "aucunes réservations"});
                return;
            }

            await deletedBooking.destroy(); 

            response.json({data: deletedBooking}); 

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    updateBooking: async (request, response) => {
       

        try {
            
            const updatedBooking = await Booking.findOne({
                where: {id: request.params.id}
            });

                // we retrieve the values ​​to modify
               const begining_date = request.body.begining_date;
               const ending_date = request.body.ending_date;

               // we check to verify if the values ​​are there, if they are they will be modified
               if (begining_date){
                   updatedBooking.begining_date = begining_date;
               }
               if (ending_date){
                   updatedBooking.ending_date = ending_date;
               }

               // we save in DB
               await updatedBooking.save(); 
               response.json({data: updatedBooking});
        

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }
}