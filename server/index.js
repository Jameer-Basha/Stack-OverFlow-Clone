import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js'
import questionRoutes from './routes/question.js'
import answerRoutes from './routes/answer.js'

const app = express(); /* creating an express server */
dotenv.config();
app.use(express.json({limit:"30mb" , extend :true}))
app.use(express.urlencoded({limit:"30mb" , extended:true})) /* */
app.use(cors());

app.get('/',(req,res) =>{
    res.send("This is stackoverflow clone")
})

app.use('/user' , userRoutes)
app.use('/question', questionRoutes)
app.use('/answer',answerRoutes)

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))