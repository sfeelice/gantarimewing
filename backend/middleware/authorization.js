const jwt = require('jsonwebtoken')
const adminModels = require('../models/adminModels')

//Generate JWT
const GenerateJWT = (admin) => {
    return jwt.sign({
        id : admin._id
    }, 
    process.env.JWT_SECRET_KEY,
    {
        expiresIn: "6h"
    })
}

//Middleware for verifying user JWT 
const VerifyJWT = async (req,res,next) => {
    try {
        const hashedToken = req.cookies.token
        const decodedToken = await jwt.verify(hashedToken, process.env.JWT_SECRET_KEY)
        const admin_id = decodedToken.id

        const admin = await adminModels.findOne({_id : admin_id}, "nama email project")

        if(!admin){
            throw new Error()
        }

        req.admin = admin
        next()
    } catch (error) {
        return res.status(401).send({ error: error });
    }
}

module.exports = {
    GenerateJWT,
    VerifyJWT
}