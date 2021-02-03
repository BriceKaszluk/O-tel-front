
const {Booking, Housing, Notice, Role, User} = require('../models');


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
            const roles = await Role.findAll({
                include: [
                  {association: 'users'},
                ]
            }); 
            const bookings = await Booking.findAll({
                include: [
                    {association: 'house'}, 
                    {association: 'user'}
                ]
            });
            
            response.json({data: roles, bookings}); 
        
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }          
    },

    getAdminAndNotice: async (request, response) => {
        try {
            const roles = await Role.findAll({
                include: [
                  {association: 'users'},
                ]
            }); 

            const notice = await Notice.findAll({
                include: [
                    {association: 'user'}, 
                    {association: 'house'}
                ]
            });
            response.json({data: roles, notice}); 
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    getAdminAndOneBooking: async (request, response) => {
        const roleId = request.params.id 
        const bookingId = request.params.id;

        try {
            
            const role = await Role.findOne({
                where: {id: roleId},
                include: [
                    {association: 'users'}
                ]
            });
            
            const booking = await Booking.findOne({
                where: {id: bookingId}, 
                include: [
                   { association:'house'}
                ]
            });
            
            
            response.json({data: role, booking});
        
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },
    
    getAdminAndOneNotice: async (request, response) => {
        const roleId = request.params.id 
        const noticeId = request.params.id;

        try {
            
            const role = await Role.findOne({
                where: {id: roleId},
                include: [
                    {association: 'users'}
                ]
            });
            
            const notice = await Notice.findOne({
                where: {id: noticeId}, 
                include: [
                   {association:'house'},
                   {association: 'user'},
                   
                ]
            });
            
            
            
            response.json({data: role, notice});
        
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    uptadeAdminBooking: async (request, response) => {
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