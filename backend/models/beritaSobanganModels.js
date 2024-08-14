const mongoose = require('mongoose')

const beritaSobanganSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'fs.files',
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  harga: {
    type: String,
    required: false,
  },
  kontak: {
    type: String,
    required: true,
  },
})

const BeritaSobangan = mongoose.model('BeritaSobanganS', beritaSobanganSchema)
module.exports = BeritaSobangan
