

const {Booking, Housing, Notice, Role, User} = require('../models');


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
                    {association: 'user'}
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
              housing_id: request.body.housing_id,
              user_id: request.body.user_id
          }  

          try {
              const booking = await Booking.create(bookingData); 
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

            response.json({statuts: "done"}); 

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
                   updatedBooking.ending_date = ending_date
               }

               // we save in DB
               await updatedBooking.save(); 
               response.json({data: updatedBooking})
        

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }
}