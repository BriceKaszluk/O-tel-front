const express = require('express'); 

const bookingController = require('../controllers/bookingController'); 

const router = express.Router(); 

router.get('/', bookingController.getAllBookings); 
router.get('/:id(\\d+)', bookingController.getOneBooking); 
router.post('/', bookingController.createBooking); 
router.patch('/:id(\\d+)', bookingController.updateBooking); 
router.delete('/:id(\\d+)', bookingController.deleteBooking); 


module.exports = router; 