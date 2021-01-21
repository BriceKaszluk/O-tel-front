const express = require('express'); 

const bookingController = require('../controllers/bookingController'); 

const router = express.Router(); 

router.get('/reservations', bookingController.getAllBookings); 


module.exports = router; 