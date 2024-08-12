// routers/wisataSobanganRoutes.js
const express = require('express');
const router = express.Router();
const WisataSobangan = require('../models/wisataSobanganModels');
const multer = require('multer');
const { addItem, getAllItems, getItem, updateItem, deleteItem } = require('../controllers/genericController');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('image');

// Define routes using the generic controller
router.post('/add', upload, addItem(WisataSobangan));
router.put('/update/:id', upload, updateItem(WisataSobangan));
router.get('/', getAllItems(WisataSobangan));
router.get('/:id', getItem(WisataSobangan));
router.delete('/:id', deleteItem(WisataSobangan));

module.exports = router;