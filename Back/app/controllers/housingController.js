const {Booking, Housing, Notice, Role, User} = require('../models')

module.exports = {

    getAllHouses: async (request, response) => {
        try {
            const houses = await Housing.findAll ({
                include: [
                    {association: 'notices'},
                    
                ]
            });
            console.log('houses good: ', houses)
            response.json({data: houses})
        
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }, 

    getOneHouse: async (request, response) => {
        const houseId = request.params.id; 
       
        try {
           
            const house = await Housing.findOne({
                where: {id: houseId},
                include: [
                    {association: 'notices'}, 
                    {association: 'bookings'}
                ]
            });

            response.json({data: house});

       } catch (error) {
        console.log(error);
        response.status(500).json({ error });
       }
    
    },

    createHouse: async (request, response) => {
        const houseData = {
            house_name: request.body.house_name, 
            description: request.body.description,
            place_number: request.body.place_number,
            price: request.body.price,
            picture: request.body.picture
        }

        try {
            
            const createdHouse = await Housing.create(houseData);
            response.status(201).json({data: createdHouse}); 
        
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    updateHouse: async (request, response) => {

        try {
            const updatedHouse = await Housing.findOne({
                where: {id: request.params.id}
            });

            const house_name = request.body.house_name;
            const description = request.body.description;
            const place_number = request.body.place_number;
            const price = request.body.price;
            const picture = request.body.picture


            if(house_name){
                updatedHouse.house_name = house_name;
            }
            if(description){
                updatedHouse.description = description;
            }
            if(place_number){
                updatedHouse.place_number = place_number;
            }
            if(price){
                updatedHouse.price = price;
            }
            if(picture){
                updatedHouse.picture = picture;
            }

             // we save in DB
             await updatedHouse.save(); 
             response.json({data: updatedHouse});

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    deleteHouse: async (request, response) => {
        const houseId = request.params.id; 

        try {

            const deletedHouse = await Housing.findOne({
                where: {id: houseId}
            });

            if(!deletedHouse){
                response.status(404).json({error: "Aucuns hébergements"});
                return;
            }

            await deletedHouse.destroy();

            response.json({data: deletedHouse});
            
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    associateHousingBooking: async(request, response) => {
        const houseId = request.params.id; 
       
        try {
            const associatedHouseBooking = await Housing.findOne({
                where: {id: houseId}, 
                include: [
                   { 
                       association:'bookings', 
                       model: Booking, 
                       as: 'house'
                    
                   }
                ]
              
            });
    
            response.json({data: associatedHouseBooking}); 
    
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
         
    }

}