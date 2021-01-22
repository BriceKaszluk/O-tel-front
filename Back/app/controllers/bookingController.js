

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

    },

    deleteBooking: async (request, response) => {

    },

    updateBooking: async (request, response) => {

    }
}