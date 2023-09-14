import express from "express"
import 'express-async-errors'
import cors from "cors"
import dotenv from "dotenv"
import indexRoutes from "../routes/index.route"
import handleErrors from "../middlewares/handle.errors"

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(indexRoutes)
app.use(handleErrors)

const port = process.env.PORT || 5000;
app.listen(port,()=>{console.log(`RUNNING IN PORT ${port}`)})