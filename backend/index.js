import express from 'express'
import dotenv from 'dotenv'
import connectDB from './database/dbConnect.js'
import userRoute from './routes/user.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()


dotenv.config({})
//database connect
connectDB()


//apis
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:8080",
    credentials:true
}))
app.use('/api/v1/user',userRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`)
})