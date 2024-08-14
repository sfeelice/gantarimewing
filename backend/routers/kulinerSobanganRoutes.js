const express = require('express')
const router = express.Router()
const KulinerSobangan = require('../models/kulinerSobanganModels')
const multer = require('multer')
const {
  addItem,
  getAllItems,
  getItem,
  updateItem,
  deleteItem,
} = require('../controllers/genericController')

const storage = multer.memoryStorage()
const upload = multer({ storage: storage }).single('image')

// Define routes using the generic controller
router.post('/add', upload, addItem(KulinerSobangan))
router.put('/update/:id', upload, updateItem(KulinerSobangan))
router.get('/', getAllItems(KulinerSobangan))
router.get('/:id', getItem(KulinerSobangan))
router.delete('/:id', deleteItem(KulinerSobangan))

module.exports = router
