const express = require('express');
const router = express.Router();
const KulinerBaha = require('../models/kulinerBahaModels');
const multer = require('multer');
const { addItem, getAllItems, getItem, updateItem, deleteItem } = require('../controllers/genericController');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');

// Define routes using the generic controller
router.post('/add', upload, addItem(KulinerBaha));
router.put('/update/:id', upload, updateItem(KulinerBaha));
router.get('/', getAllItems(KulinerBaha));
router.get('/:id', getItem(KulinerBaha));
router.delete('/:id', deleteItem(KulinerBaha));

module.exports = router;