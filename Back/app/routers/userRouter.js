const express = require('express'); 

const userController = require('../controllers/userController'); 


const router = express.Router(); 


router.get('/signup', userController.signUpForm);
router.post('/signup', userController.signUpForm)
router.get('/log', userController.loginForm);
router.post('/log', userController.loginForm); 
router.patch('/modify/:id(\\d+)', userController.updateUser);
router.delete('/delete/:id(\\d+)', userController.deleteUser); 

module.exports = router; 