const express = require('express'); 

// /!\ ne pas oublie de require les autres fichier routers
const bookingRouter = require('./bookingRouter'); 

const router = express.Router();

// router.use('/contact')
// router.use('/livre_d_or')
router.use('/reservation', bookingRouter)
// router.use('/hebergement')
// router.use('/profil')
// router.use('/admin')


module.exports = router; 