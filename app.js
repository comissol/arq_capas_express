import 'dotenv/config';
import express from 'express'
import connectDB from './config/database.js'
import dogRouter from './routes/dogRoutes.js'
import Dog from './models/dog.js'
import { notFoundHandler, globalHandler } from './middlewares/errorHandler.js';
import swaggerUi from 'swagger-ui-express'
import { docApi } from './docs/openApi.js'

const app = express()
app.use(express.json())
app.use("/api/perros", dogRouter)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(docApi))
app.use(notFoundHandler)
app.use(globalHandler)

const start = async () => {
  try {
    connectDB()
    app.listen(3000, () => console.log('http://localhost:3000'))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()