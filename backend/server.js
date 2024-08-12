require('dotenv').config()

//variables and dependencies
const express = require('express')

const app = express()
const mongoose =require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

//database connection
const connectionString = process.env.DATABASE_URL
const connection = mongoose.connect(connectionString)
    .then(()=> console.log('connected to', connectionString))
    .catch((err) => console.log('database connection error => ', err.message))

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

//router
const adminRouter = require('./routers/adminRoutes')
const wisataBahaRouter = require('./routers/wisataBahaRoutes')
const kulinerBahaRouter = require('./routers/kulinerBahaRoutes')
// const beritaBahaRouter = require('./routers/beritaBahaRoutes')
const wisataSobanganRouter = require('./routers/wisataSobanganRoutes')
const kulinerSobanganRouter = require('./routers/kulinerSobanganRoutes')
// const beritaSobanganRouter = require('./routers/beritaSobanganRoutes')

//middleware cors
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));  
app.use(cookieParser())

//routing
app.use('/admin', adminRouter)
app.use('/wisataBaha', wisataBahaRouter)
app.use('/kulinerBaha', kulinerBahaRouter)
// app.use('/beritaBaha', beritaSobanganRouter)
app.use('/wisataSobangan', wisataSobanganRouter)
app.use('/kulinerSobangan', kulinerSobanganRouter)
// app.use('/beritaSobangan', beritaSobanganRouter)


app.listen(5000, () => console.log('Server Started'))