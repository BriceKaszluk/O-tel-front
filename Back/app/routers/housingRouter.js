const express = require('express'); 

const housingController = require('../controllers/housingController'); 

const router = express.Router(); 

router.get('/', housingController.getAllHouses);
router.get('/:id(\\d+)', housingController.getOneHouse);

module.exports = router; 