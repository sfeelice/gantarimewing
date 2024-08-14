const jwt = require('jsonwebtoken')
const adminModels = require('../models/adminModels')

//Generate JWT
const GenerateJWT = (admin) => {
  return jwt.sign(
    {
      id: admin._id,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: '30d',
    }
  )
}

//Middleware for verifying user JWT
const VerifyJWT = async (req, res, next) => {
  try {
    let hashedToken = req?.headers?.['authorization']?.split(' ')?.[1]

    if (!hashedToken) {
      return res.status(403).send({ message: 'No token provided!' })
    }
    const decodedToken = await jwt.verify(hashedToken, process.env.JWT_SECRET_KEY)
    const admin_id = decodedToken.id
    console.log(admin_id)

    const admin = await adminModels.findOne({ _id: admin_id })

    if (!admin) {
      throw new Error()
    }

    req.admin = admin
    next()
  } catch (error) {
    console.log(error)
    return res.status(401).send({ error: error })

  }
}

module.exports = {
  GenerateJWT,
  VerifyJWT,
}
