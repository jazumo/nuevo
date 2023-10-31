import express, { json } from 'express'
const app = express()
const port = 3000
import mongoose, { Schema } from 'mongoose'
import studentRoute from './Routes/StudentRoutes.js'
import dotenv from 'dotenv'
dotenv.config()

app.use(express.json())

mongoose.connect(process.env.MONGOOSE_KEY, {
  useNewUrlParser: true,
})
//ESQUEMA DE ELEMENTOS
const Cat = mongoose.model('Cat', { name: String });

//EJEMPLO DE POST
app.post('/testpost', (req, res) => {
  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));
  res.send('succesful post')
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

//EJEMPLO DE MODELO Y CONTROLADOR
app.use(studentRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}\nhttp://localhost:${port}/`)
  console.log(process.env.MONGOOSE_KEY)
})