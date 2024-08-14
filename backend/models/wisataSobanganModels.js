const mongoose = require('mongoose')

const wisataSobanganSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  image: {
    data: String, // Store image data as Base64
    contentType: String, // Store the content type of the image
  },
  harga: {
    type: String,
    required: false,
  },
  kontak: {
    type: String,
    required: false,
  },
})

const WisataSobangan = mongoose.model('WisataSobangan', wisataSobanganSchema)
module.exports = WisataSobangan
