const express = require('express'); 

const roleController = require('../controllers/roleController'); 


const router = express.Router(); 

router.get('/', roleController.getAdmin); 
router.get('/reservation', roleController.getAdminAndBookings);
router.get('/livre_d_or', roleController.getAdminAndNotice);
router.get('/reservation/:id(\\d+)', roleController.getAdminAndOneBooking); 
router.get('/livre_d_or/:id(\\d+)', roleController.getAdminAndOneNotice); 
router.patch('/reservation/:id(\\d+)', roleController.uptadeAdminBooking);
router.patch('/livre_d_or/:id(\\d+)', roleController.uptadeAdminNotice); 
router.delete('/reservation/:id(\\d+)', roleController.deleteAdminBooking); 


module.exports = router; 