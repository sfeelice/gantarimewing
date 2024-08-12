// // beritaBahaRoutes.js
// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const { addItem, getItems, editItem, updateItem, deleteItem } = require('../controllers/genericController');
// const BeritaBaha = require('../models/beritaBahaModels');

// // Set up multer for in-memory file storage
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage }).single('image');

// // Define routes
// router.post('/add', upload, addItem(BeritaBaha));
// router.get('/', getItems(BeritaBaha));
// router.get('/edit/:id', editItem(BeritaBaha));
// router.post('/update/:id', upload, updateItem(BeritaBaha));
// router.get('/delete/:id', deleteItem(BeritaBaha));

// module.exports = router;