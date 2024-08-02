const express = require('express');
const router = express.Router();
const WisataBaha = require('../models/wisataBahaModels');
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
router.post('/add', upload, genericController.addItem(WisataBaha));
router.get('/', genericController.getItems(WisataBaha));
router.get('/edit/:id', genericController.editItem(WisataBaha));
router.post('/update/:id', upload, genericController.updateItem(WisataBaha));
router.get('/delete/:id', genericController.deleteItem(WisataBaha));

module.exports = router;