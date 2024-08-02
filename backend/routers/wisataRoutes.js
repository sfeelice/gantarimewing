const express = require('express');
const router = express.Router();
const Wisata = require('../models/wisataModels');
const multer = require('multer');
const genericController = require('../controllers/genericController');

// Image upload configuration
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

var upload = multer({ storage: storage }).single('image');

// Define routes using the generic controller
router.post('/add', upload, genericController.addItem(Wisata));
router.get('/', genericController.getItems(Wisata));
router.get('/edit/:id', genericController.editItem(Wisata));
router.post('/update/:id', upload, genericController.updateItem(Wisata));
router.get('/delete/:id', genericController.deleteItem(Wisata));

module.exports = router;