import express from 'express'
import dotenv from 'dotenv'
import connectDB from './database/dbConnect.js'
import userRoute from './routes/user.route.js'
const app = express()


dotenv.config({})
//database connect
connectDB()


//apis
app.use(express.json())
app.use('/api/v1/user',userRoute)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server listen at port ${PORT}`)
})