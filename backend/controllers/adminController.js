// controllers/adminController.js
const adminModels = require('../models/adminModels')
const jwt = require('jsonwebtoken')

const getAdminStatus = async (req, res) => {
  try {
    // Extract admin ID from the request object populated by VerifyJWT

    let hashedToken = req?.headers?.['authorization']?.split(' ')?.[1]

    if (!hashedToken) {
      return res.status(403).send({ message: 'No token provided!' })
    }
    const decodedToken = await jwt.verify(hashedToken, process.env.JWT_SECRET_KEY)
    const admin_id = decodedToken.id

    const admin = await adminModels.findOne({ _id: admin_id })

    res.status(200).json({ status: admin.status })
  } catch (error) {
    console.error('Error fetching admin status:', error)
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAdminStatus,
}
