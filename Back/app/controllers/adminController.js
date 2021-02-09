
const {Booking, Notice, Role, User} = require('../models');
const {google} = require('googleapis');
const nodemailer = require('nodemailer');


module.exports = {
    getAdmin: async (request, response) => {
        try {
            const roles = await Role.findAll({
                include: [
                  {association: 'users'},
                ]
            }); 
            
            response.json({data: roles});
        
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }, 
    
    getAdminAndBookings: async (request, response) => {
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

    getAdminAndNotice: async (request, response) => {
        try {
           
            const notice = await Notice.findAll({
                include: [
                    {association: 'user'}, 
                    {association: 'house'}
                ]
            });
            response.json({data: notice}); 
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    getAdminAndOneBooking: async (request, response) => {
        
        const bookingId = request.params.id;

        try {
            
         
            const booking = await Booking.findOne({
                where: {id: bookingId}, 
                include: [
                   { association:'house'}
                ]
            });
            
            
            response.json({data: booking});
        
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },
    
    getAdminAndOneNotice: async (request, response) => {
        
        const noticeId = request.params.id;

        try {
            
    
            const notice = await Notice.findOne({
                where: {id: noticeId}, 
                include: [
                   {association:'house'},
                   {association: 'user'},
                   
                ]
            });
            
    
            response.json({data: notice});
        
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    createAdmin: async(request, reponse) => {
        try {
            const roles = await Role.findAll({
                include: [
                  {
                      association: 'users'

                },
                ]
            }); 
            
            response.json({data: roles});
        
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }, 
    

    createAdminBooking: async(request, response) => {
        const bookingData = {
            last_name: request.body.last_name, 
            first_name: request.body.first_name,
            phone_number: request.body.phone_number,
            email: request.body.email,
            message: request.body.message, 
            begining_date: request.body.begining_date,
            ending_date: request.body.ending_date,
            housing_id: request.body.housing_id
        }  

        try {
            const booking = await Booking.create(bookingData); 
            
            const {last_name, first_name, email, begining_date, ending_date} = request.body
      
      
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
            }); 
    
            const mailOption = {
                from: EMAIL_NAME,
                to: `${email}`,
                subject: "Message de " + EMAIL_NAME + " Confirmation d'inscription", 
                text: `Bonjour ${last_name} ${first_name}, merci pour votre réservation du ${begining_date} au ${ending_date}, a bien été prise en compte.`
            }
    
            const info = await transport.sendMail(mailOption);
            console.log("Message sent: ", info.messageId);
            
            response.status(201).json({data: booking}); 

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }    
    }, 

    uptadeAdminBooking: async (request, response) => {
        
        try {
            
            const updatedBooking = await Booking.findOne({
                where: {id: request.params.id},
                include: [{
                    model: User, 
                    as: 'user'
                }]
                
            });

            console.log("la réservation modifiée ---> : ",updatedBooking)
            
                const last_name = request.body.last_name;
                const first_name = request.body.first_name; 
                const email = request.body.email;
                const phone_number = request.body.phone_number; 
                const house_name = request.body.house_name; 
                const begining_date = request.body.begining_date;
                const ending_date = request.body.ending_date;
               
                
               
               
             // we check to verify if the values ​​are there, if they are they will be modified
            if (begining_date){
                updatedBooking.begining_date = begining_date;
            }
            if (ending_date){
                updatedBooking.ending_date = ending_date;
            }
            if (last_name){
                updatedBooking.last_name = last_name;
            }
            if (first_name){
                updatedBooking.first_name = first_name;
            }
            if (email){
                updatedBooking.email = email;
            }
            if (phone_number){
                updatedBooking.phone_number = phone_number;
            }
            if (house_name){
                updatedBooking.house_name = house_name;
            }
           
               // we save in DB
               await updatedBooking.save(); 
               
               response.json({data: updatedBooking});
        

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    uptadeAdminNotice: async (request, response) => {
        try {
            const updatedNotice = await Notice.findOne({
                where: {id: request.params.id}
            });

            const comments = request.body.comments; 
            const rate = request.body.rate; 

            if(comments){
                updatedNotice.comments = comments;
            }
            if(rate){
                updatedNotice.rate = rate; 
            }

            await updatedNotice.save();
            response.json({data: updatedNotice}); 

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }

    },

    deleteAdminBooking: async (request, response) => {
        const bookingId = request.params.id;

        try {
            
            const booking = await Booking.findOne({
                where: {id: bookingId}
    
            });
            console.log('réservation: ', booking); 
            await booking.destroy(); 
            response.json({data: booking});
        
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    deleteAdminNotice: async (request, response) => {
        const noticeId = request.params.id;

        try {
            
            const notice = await Booking.findOne({
                where: {id: noticeId}
    
            });
            
            await booking.destroy(); 
            response.json({data: notice});
        
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }

}