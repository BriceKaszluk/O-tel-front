const express = require('express'); 

const bookingController = require('../controllers/bookingController'); 

const router = express.Router(); 

router.get('/', bookingController.getAllBookings); 
router.get('/:id(\\d+)', bookingController.getOneBooking); 


module.exports = router; 