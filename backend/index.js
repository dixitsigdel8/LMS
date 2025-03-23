import express from 'express'
import dotenv from 'dotenv'
import connectDB from './database/dbConnect.js'
const app = express()

dotenv.config({})
//database connect
connectDB()

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`)
})