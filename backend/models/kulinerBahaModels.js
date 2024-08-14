const mongoose = require('mongoose')

const kulinerBahaSchema = new mongoose.Schema({
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
  harga: {
    type: String,
    required: false,
  },
  kontak: {
    type: String,
    required: true,
  },
})

const KulinerBaha = mongoose.model('KulinerBaha', kulinerBahaSchema)
module.exports = KulinerBaha
