const mongoose = require('mongoose');

const beritaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
});

const Berita = mongoose.model('Berita', beritaSchema);
module.exports = Berita;
