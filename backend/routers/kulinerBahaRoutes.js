// const express = require('express');
// const router = express.Router();
// const KulinerBaha = require('../models/kulinerBahaModels');
// const multer = require('multer');
// const { addItem, getItems, editItem, updateItem, deleteItem } = require('../controllers/genericController');

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage }).single('image');

// // Define routes using the generic controller
// router.post('/add', upload, genericController.addItem(KulinerBaha));
// router.get('/', genericController.getItems(KulinerBaha));
// router.get('/edit/:id', genericController.editItem(KulinerBaha));
// router.post('/update/:id', upload, genericController.updateItem(KulinerBaha));
// router.get('/delete/:id', genericController.deleteItem(KulinerBaha));

// module.exports = router;