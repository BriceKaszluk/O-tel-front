const express = require('express'); 

// /!\ don't forget to require others files
const bookingRouter = require('./bookingRouter'); 
const userRouter = require('./userRouter'); 
const housingRouter = require('./housingRouter'); 

const router = express.Router();

// router.use('/contact')
//router.use('/livre_d_or')
router.use('/inscription', userRouter);
router.use('/reservation', bookingRouter);
router.use('/hebergement', housingRouter);
router.use('/connection', userRouter); 
// router.use('/admin')


module.exports = router; 