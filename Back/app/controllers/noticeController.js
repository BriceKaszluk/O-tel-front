
const {Notice} = require('../models');


module.exports = {

    getAllNotices: async (request, response) => {

        try {
            const notices = await Notice.findAll({
                include: [
                    {association: 'user'},
                    {association: 'house'} 
                ]
            });
            response.json({data: notices}); 

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }

    },

    getOneNotice: async (request, response) => {
        const noticeId = request.params.id; 

        try {
            const notice = await Notice.findOne({
                where: {id: noticeId},
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

    createNotice: async (request, response) => {

        const noticeData = {
            comments: request.body.comments,
            rate: request.body.rate,
            housing_id: request.body.housing_id,
            user_id: request.body.user_id
        }

        try {
            const createdNotice = await Notice.create(noticeData); 
            response.status(201).json({data: createdNotice});
        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    },

    updateNotice: async (request, response) => {

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

    deleteNotice: async (request, response) => {
        const noticeId = request.params.id;

        try {
            const deletedNotice = await Notice.findOne({
                where: {id: noticeId}
            });

            if(!deletedNotice){
                response.status(404).json({error: "aucuns commentaires"});
                return;
            }

            await deletedNotice.destroy();

            response.json({data: deletedNotice}); 

        } catch (error) {
            console.log(error);
            response.status(500).json({ error });
        }
    }
 

}