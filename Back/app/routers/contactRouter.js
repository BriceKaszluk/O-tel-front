const express = require('express'); 

const contactController = require('../controllers/contactController'); 

const router = express.Router(); 


router.post('/', contactController.contactMailer); 



module.exports = router; 