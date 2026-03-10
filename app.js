const express = require('express')
const connectDB = require('./config/database')

const { Dog } = require('./models/dog')

const app = express()

app.use(express.json())

app.get('/api/perros', async (req, res) => {
  const allDogs = await Dog.find()
  return res.status(200).json(allDogs)
})

app.get('/api/perros/:id', async (req, res) => {
  const { id } = req.params
  const dog = await Dog.findById(id)
  return res.status(200).json(dog)
})

app.post('/api/perros', async (req, res) => {
  const newDog = new Dog({ ...req.body })
  const insertedDog = await newDog.save()
  return res.status(201).json(insertedDog)
})

app.put('/api/perros/:id', async (req, res) => {
  const { id } = req.params
  await Dog.updateOne({ id }, req.body)
  const updatedDog = await Dog.findById(id)
  return res.status(200).json(updatedDog)
})

app.delete('/api/perros/:id', async (req, res) => {
  const { id } = req.params
  const deletedDog = await Dog.findByIdAndDelete(id)
  return res.status(200).json(deletedDog)
})

const start = async () => {
  try {
    connectDB()
    app.listen(3000, () => console.log('Servidor levantado en el puerto 3000'))
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()