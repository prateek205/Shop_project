const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const URI = process.env.MONGO_URI
mongoose.connect(URI)
.then(()=>{console.log("Mongodb is Connected Successfully!!!")})
.catch(error => console.log("Mongodb is Not Connected", error))

const PORT = process.env.SERVER_PORT
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT} Successfully!!!`)
})