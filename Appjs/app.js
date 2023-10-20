const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/nombre', (req, res) => {
  res.send('Jose')
})

app.get('/apellido', (req, res) => {
  res.send('Zuniga')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})