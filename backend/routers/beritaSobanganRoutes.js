const express = require('express');
const router = express.Router();
const multer = require('multer');
const genericController = require('../controllers/genericController');
const BeritaSobangan = require('../models/beritaSobanganModels');

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


// Azizi Keren
// Define routes using the generic controller
router.post('/add', upload, genericController.addItem(BeritaSobangan));
router.get('/', genericController.getItems(BeritaSobangan));
router.get('/edit/:id', genericController.editItem(BeritaSobangan));
router.post('/update/:id', upload, genericController.updateItem(BeritaSobangan));
router.get('/delete/:id', genericController.deleteItem(BeritaSobangan));

module.exports = router;