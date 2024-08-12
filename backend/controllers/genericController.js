const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');
const { GridFsStorage } = require('multer-gridfs-storage');
const multer = require('multer');
const dotenv = require("dotenv");
dotenv.config();

const db = mongoose.connection.db;
const gfsBucket = db ? new GridFSBucket(db, { bucketName: 'uploads' }) : null;

// Create storage engine
const storage = new GridFsStorage({
    url: process.env.DATABASE_URL,
    file: (req, file) => {
      return {
        bucketName: 'uploads',
        filename: `file_${Date.now()}`
      };
    }
  });

const upload = multer({ storage }).single('image');


module.exports = {
    addItem: (Model) => async (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                console.error("Upload Error: ", err);
                return res.status(500).json({ error: err.message });
            }

            const { title, description, author, harga, kontak } = req.body;

            let image;
            if (req.file) {
                image = {
                    data: req.file.buffer.toString('base64'), // Convert image buffer to Base64
                    contentType: req.file.mimetype
                };
            }

            const newItem = new Model({
                title,
                description,
                image,
                author,
                harga,
                kontak
            });

            try {
                const savedItem = await newItem.save();
                return res.status(201).json(savedItem);
            } catch (error) {
                return res.status(500).json({ error: error.message });
            }
        });
    },

    updateItem: (Model) => async (req, res) => {
        upload(req, res, async (err) => {
            if (err) {
                console.error("Upload Error: ", err);
                return res.status(500).json({ error: err.message });
            }

            const { title, description, author, harga, kontak } = req.body;
            const item = await Model.findById(req.params.id);
            if (!item) {
                return res.status(404).json({ error: 'Item not found' });
            }

            item.title = title;
            item.description = description;
            item.author = author;
            item.harga = harga;
            item.kontak = kontak;

            if (req.file) {
                item.image = {
                    data: req.file.buffer.toString('base64'), // Update image data as Base64
                    contentType: req.file.mimetype
                };
            }

            try {
                await item.save();
                res.json(item);
            } catch (error) {
                res.status(500).json({ error: error.message });
            }
        });
    },

    // Retrieve all items, including Base64 images
    getAllItems: (Model) => async (req, res) => {
        try {
            const items = await Model.find();
    
            // Include image data in Base64 format
            const itemsWithBase64Images = items.map(item => ({
                ...item._doc,
                image: item.image ? `data:${item.image.contentType};base64,${item.image.data}` : null
            }));
    
            res.status(200).json(itemsWithBase64Images);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

// Retrieve a single item by ID, including Base64 image
    getItem: (Model) => async (req, res) => {
        const { id } = req.params;

        try {
            const item = await Model.findById(id);
            if (!item) {
                return res.status(404).json({ message: "Item not found" });
            }

            // Include image data in Base64 format
            const itemWithBase64Image = {
                ...item._doc,
                image: item.image ? `data:${item.image.contentType};base64,${item.image.data}` : null
            };

            res.status(200).json(itemWithBase64Image);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

// The getImage function can be removed if you're storing and serving images as Base64 strings directly.


    editItem: (Model) => async (req, res) => {
        try {
            const item = await Model.findById(req.params.id).populate('image');
            if (!item) {
                return res.status(404).json({ error: 'Item not found' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    deleteItem: (Model) => async (req, res) => {
        const { id } = req.params;

        try {
            // Find the item by ID
            const item = await Model.findById(id);
            if (!item) {
                return res.status(404).json({ message: "Item not found" });
            }

            // Extract the image ID from the item
            const imageId = item.image;

            // Delete the item from the database
            await Model.findByIdAndDelete(id);

            // Delete the associated image from GridFSn
            gfsBucket.delete(new mongoose.Types.ObjectId(imageId), (err) => {
                if (err) {
                    return res.status(500).json({ message: "Error deleting image", error: err.message });
                }
            });

            res.status(200).json({ message: "Item and image deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};