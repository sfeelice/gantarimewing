const express = require('express');
const router = express.Router();
const Berita = require('../models/beritaModels');
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
router.post('/add', upload, genericController.addItem(Berita));
router.get('/', genericController.getItems(Berita));
router.get('/edit/:id', genericController.editItem(Berita));
router.post('/update/:id', upload, genericController.updateItem(Berita));
router.get('/delete/:id', genericController.deleteItem(Berita));

module.exports = router;