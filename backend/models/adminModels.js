const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Baha', 'Sobangan'], // Restrict the status to either 'Baha' or 'Sobangan'
  },
})

//Hashing password sebelum disimpan
adminSchema.pre('save', async function (next) {
  const user = this
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 10)
  }
  next()
})

// Method to compare passwords
adminSchema.methods.comparePassword = async function (passwordToCheck) {
  return bcrypt.compare(passwordToCheck, this.password)
}

module.exports = mongoose.model('Admin', adminSchema)
