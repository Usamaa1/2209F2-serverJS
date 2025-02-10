import express from 'express'

const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/profile', (req, res) => {
  res.send('Profile Message')
})
app.get('/aptech', (req, res) => {
  res.send('Hello Aptech!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


