const express = require('express');
const router = express.Router();
const WisataSobangan = require('../models/wisataSobanganModels');
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
router.post('/add', upload, genericController.addItem(WisataSobangan));
router.get('/', genericController.getItems(WisataSobangan));
router.get('/edit/:id', genericController.editItem(WisataSobangan));
router.post('/update/:id', upload, genericController.updateItem(WisataSobangan));
router.get('/delete/:id', genericController.deleteItem(WisataSobangan));

module.exports = router;