const mongoose = require('mongoose');

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
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
});

const BeritaSobangan = mongoose.model('BeritaSobanganS', beritaSobanganSchema);
module.exports = BeritaSobangan;
