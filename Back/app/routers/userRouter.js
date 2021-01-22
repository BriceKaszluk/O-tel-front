const express = require('express'); 

const userController = require('../controllers/userController'); 

const router = express.Router(); 


router.post('/sign', userController.signUpForm); 

router.post('/log', userController.loginForm); 

module.exports = router; 