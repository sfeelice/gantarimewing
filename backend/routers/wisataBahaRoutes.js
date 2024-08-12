const express = require('express');
const router = express.Router();
const WisataBaha = require('../models/wisataBahaModels');
const multer = require('multer');
const { addItem, getAllItems, getItem, updateItem, deleteItem } = require('../controllers/genericController');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');

// Define routes using the generic controller
router.post('/add', upload, addItem(WisataBaha));
router.put('/update/:id', upload, updateItem(WisataBaha));
router.get('/', getAllItems(WisataBaha));
router.get('/:id', getItem(WisataBaha));
router.delete('/:id', deleteItem(WisataBaha));

module.exports = router;