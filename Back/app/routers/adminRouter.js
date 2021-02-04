const express = require('express'); 
const adminController = require('../controllers/adminController');




const router = express.Router(); 

router.get('/', adminController.getAdmin); 
router.get('/reservation', adminController.getAdminAndBookings);
router.get('/livre_d_or', adminController.getAdminAndNotice);
router.get('/reservation/:id(\\d+)', adminController.getAdminAndOneBooking); 
router.get('/livre_d_or/:id(\\d+)', adminController.getAdminAndOneNotice);
router.post('/reservation', adminController.createAdminBooking);  
router.patch('/reservation/:id(\\d+)', adminController.uptadeAdminBooking);
router.patch('/livre_d_or/:id(\\d+)', adminController.uptadeAdminNotice); 
router.delete('/reservation/:id(\\d+)', adminController.deleteAdminBooking); 
router.delete('/livre_d_or/:id(\\d+)', adminController.deleteAdminNotice); 

module.exports = router; 