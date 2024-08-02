const mongoose = require('mongoose');

const wisataBahaSchema = new mongoose.Schema({
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

const WisataBaha = mongoose.model('WisataBaha', wisataBahaSchema);
module.exports = WisataBaha;