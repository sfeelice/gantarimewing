const mongoose = require('mongoose');

const beritaBahaSchema = new mongoose.Schema({
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

const BeritaBaha = mongoose.model('BeritaBaha', beritaBahaSchema);
module.exports = BeritaBaha;
