const express = require('express');
const router = express.Router();
const multer = require('multer');
const genericController = require('../controllers/genericController');
const BeritaBaha = require('../models/beritaBahaModels');

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
router.post('/add', upload, genericController.addItem(BeritaBaha));
router.get('/', genericController.getItems(BeritaBaha));
router.get('/edit/:id', genericController.editItem(BeritaBaha));
router.post('/update/:id', upload, genericController.updateItem(BeritaBaha));
router.get('/delete/:id', genericController.deleteItem(BeritaBaha));

module.exports = router;