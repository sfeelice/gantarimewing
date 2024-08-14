// controllers/adminController.js
const adminModels = require('../models/adminModels')

const getAdminStatus = async (req, res) => {
  try {
    // Extract admin ID from the request object populated by VerifyJWT
    const admin = req.admin

    if (!admin) {
      return res.status(404).json({ error: 'Admin not found' })
    }

    res.status(200).json({ status: admin.status })
  } catch (error) {
    console.error('Error fetching admin status:', error)
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAdminStatus,
}
