const express = require('express'); 

const housingController = require('../controllers/housingController'); 

const router = express.Router(); 

router.get('/', housingController.getAllHouses);
router.get('/:id(\\d+)', housingController.getOneHouse);
router.get('/:id(\\d+)/reservation', housingController.associateHousingBooking); 
router.post('/', housingController.createHouse);
router.patch('/:id(\\d+)', housingController.updateHouse);
router.delete('/:id(\\d+)', housingController.deleteHouse); 

module.exports = router; 