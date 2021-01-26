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
                    {association: 'notices'}
                ]
            });

            response.json({data: house});

       } catch (error) {
        console.log(error);
        response.status(500).json({ error });
       }
    
    }


}