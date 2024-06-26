
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'
import adminRoutes from './routes/admin.route.js'
import cookieParser from 'cookie-parser'
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db connected");
}).catch((err)=>console.log(err))

const app = express()
app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.listen(3001,()=>{   
console.log('server running');
})

app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/admin",adminRoutes)


app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500
  const message = err.message||'internal server error'
  return res.status(statusCode).json({
    success:false,
    message,
    statusCode
  })
})
