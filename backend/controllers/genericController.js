const mongoose = require('mongoose')
const { GridFSBucket, ObjectId } = require('mongodb')
const { GridFsStorage } = require('multer-gridfs-storage')
const multer = require('multer')
const dotenv = require('dotenv')
dotenv.config()
const db = mongoose.connection
let gfsBucket

db.once('open', () => {
  console.log('Database connected')
  gfsBucket = new GridFSBucket(db.db, {
    bucketName: 'uploads',
  })
})

db.on('error', (error) => {
  console.error('Database connection error:', error)
})

// Create storage engine
const storage = new GridFsStorage({
  url: process.env.DATABASE_URL,
  file: (req, file) => {
    return {
      bucketName: 'uploads',
      filename: `file_${Date.now()}`,
    }
  },
})

const upload = multer({ storage }).single('image')

module.exports = {
  addItem: (Model) => async (req, res) => {
    try {
      const { title, description, harga, kontak } = req.body
      let image
      if (req.file) {
        image = {
          data: req.file.buffer.toString('base64'),
          contentType: req.file.mimetype,
        }
      }

      const newItem = new Model({
        title,
        description,
        image,
        harga,
        kontak,
      })

      const savedItem = await newItem.save()
      return res.status(201).json(savedItem)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  updateItem: (Model) => async (req, res) => {
    try {
      const { title, description, harga, kontak } = req.body
      const item = await Model.findById(req.params.id)
      if (!item) {
        return res.status(404).json({ error: 'Item not found' })
      }

      item.title = title
      item.description = description
      item.harga = harga
      item.kontak = kontak

      if (req.file) {
        item.image = {
          data: req.file.buffer.toString('base64'),
          contentType: req.file.mimetype,
        }
      }

      const savedItem = await item.save()
      return res.status(200).json(savedItem)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  },

  // Retrieve all items, including Base64 images
  getAllItems: (Model) => async (req, res) => {
    try {
      const items = await Model.find({}, 'title description harga kontak image')
      // Include image data in Base64 format
      const itemsWithBase64Images = items.map((item) => ({
        id: item._id,
        title: item.title,
        description: item.description,
        harga: item.harga,
        kontak: item.kontak,
        image: item.image ? `data:${item.image.contentType};base64,${item.image.data}` : null,
      }))

      res.status(200).json(itemsWithBase64Images)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  // Retrieve a single item by ID, including Base64 image
  getItem: (Model) => async (req, res) => {
    const { id } = req.params

    try {
      const item = await Model.findById(id)
      if (!item) {
        return res.status(404).json({ message: 'Item not found' })
      }

      // Include image data in Base64 format
      const itemWithBase64Image = {
        ...item._doc,
        image: item.image ? `data:${item.image.contentType};base64,${item.image.data}` : null,
      }

      res.status(200).json(itemWithBase64Image)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  // The getImage function can be removed if you're storing and serving images as Base64 strings directly.

  editItem: (Model) => async (req, res) => {
    try {
      const item = await Model.findById(req.params.id).populate('image')
      if (!item) {
        return res.status(404).json({ error: 'Item not found' })
      }
      res.json(item)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },

  deleteItem: (Model) => async (req, res) => {
    const { id } = req.params
    console.log(id)

    try {
      // Find the item by ID
      const item = await Model.findById(id)
      if (!item) {
        return res.status(404).json({ message: 'Item not found' })
      }

      // Extract the image ID from the item
      const imageId = item.image
      if (!imageId) {
        return res.status(400).json({ message: 'Image ID not found in the item' })
      }

      // Delete the item from the database
      await Model.findByIdAndDelete(id)

      // Check if gfsBucket is initialized
      if (gfsBucket) {
        try {
          // Convert imageId to ObjectId if necessary
          const objectId = new ObjectId(imageId)

          // Delete the associated image from GridFS
          gfsBucket.delete(objectId, (err) => {
            if (err) {
              return res.status(500).json({ message: 'Error deleting image', error: err.message })
            }
          })
        } catch (err) {
          return res.status(400).json({ message: 'Invalid image ID format', error: err.message })
        }
      } else {
        return res.status(500).json({ message: 'GridFSBucket is not initialized' })
      }

      res.status(200).json({ message: 'Item and image deleted successfully' })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  },
}
