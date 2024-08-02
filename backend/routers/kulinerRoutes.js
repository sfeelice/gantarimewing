const express = require('express');
const router = express.Router();
const Kuliner = require('../models/kulinerModels');
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
router.post('/add', upload, genericController.addItem(Kuliner));
router.get('/', genericController.getItems(Kuliner));
router.get('/edit/:id', genericController.editItem(Kuliner));
router.post('/update/:id', upload, genericController.updateItem(Kuliner));
router.get('/delete/:id', genericController.deleteItem(Kuliner));

module.exports = router;