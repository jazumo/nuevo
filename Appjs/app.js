const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json())

mongoose.connect(process.env.MONGOOSE_KEY, {
  useNewUrlParser: true,
})

app.get('/get', (req, res) => {
  res.send('Request GET')
})

app.post('/post', (req, res) => {
  res.send('Request POST')
})

app.put('/put', (req, res) => {
  res.send('request PUT')
})

app.delete('/delete', (req, res) => {
  res.send('request DELETE')
})

app.get('/', (req, res) => {
  res.send('Hola Mundo!')
})

app.get('/nombre', (req, res) => {
  res.send('Jose')
})

app.get('/apellido', (req, res) => {
  res.send('Zuniga')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}\nhttp://localhost:${port}/`)
  console.log(process.env.MONGOOSE_KEY)
})