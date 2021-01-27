const express = require('express'); 

const noticeController = require('../controllers/noticeController');

const router = express.Router(); 

router.get('/', noticeController.getAllNotices);
router.get('/:id(\\d+)', noticeController.getOneNotice); 
router.post('/', noticeController.createNotice); 
router.patch('/:id(\\d+)', noticeController.updateNotice); 
router.delete('/:id(\\d+)', noticeController.deleteNotice); 



module.exports = router;