const express = require('express');
const router = express.Router();
const KulinerBaha = require('../models/kulinerBahaModels');
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
router.post('/add', upload, genericController.addItem(KulinerBaha));
router.get('/', genericController.getItems(KulinerBaha));
router.get('/edit/:id', genericController.editItem(KulinerBaha));
router.post('/update/:id', upload, genericController.updateItem(KulinerBaha));
router.get('/delete/:id', genericController.deleteItem(KulinerBaha));

module.exports = router;