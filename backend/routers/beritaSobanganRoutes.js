// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const { addItem, getItems, editItem, updateItem, deleteItem } = require('../controllers/genericController');
// const BeritaSobangan = require('../models/beritaSobanganModels');

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage }).single('image');


// // Azizi Keren
// // Define routes using the generic controller
// router.post('/add', upload, genericController.addItem(BeritaSobangan));
// router.get('/', genericController.getItems(BeritaSobangan));
// router.get('/edit/:id', genericController.editItem(BeritaSobangan));
// router.post('/update/:id', upload, genericController.updateItem(BeritaSobangan));
// router.get('/delete/:id', genericController.deleteItem(BeritaSobangan));

// module.exports = router;