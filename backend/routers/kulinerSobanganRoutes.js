// const express = require('express');
// const router = express.Router();
// const KulinerSobangan = require('../models/kulinerSobanganModels');
// const multer = require('multer');
// const { addItem, getItems, editItem, updateItem, deleteItem } = require('../controllers/genericController');

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage }).single('image');

// // Define routes using the generic controller
// router.post('/add', upload, genericController.addItem(KulinerSobangan));
// router.get('/', genericController.getItems(KulinerSobangan));
// router.get('/edit/:id', genericController.editItem(KulinerSobangan));
// router.post('/update/:id', upload, genericController.updateItem(KulinerSobangan));
// router.get('/delete/:id', genericController.deleteItem(KulinerSobangan));

// module.exports = router;