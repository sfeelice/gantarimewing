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
const wisataRouter = require('./routers/wisataRoutes')
const kulinerRouter = require('./routers/kulinerRoutes')
const beritaRouter = require('./routers/beritaRoutes')

//middleware cors
app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true
  }));  
app.use(cookieParser())

//routing
app.use('/admin', adminRouter)
app.use('/wisata', wisataRouter)
app.use('/kuliner', kulinerRouter)
app.use('/berita', beritaRouter)


app.listen(3000, () => console.log('Server Started'))