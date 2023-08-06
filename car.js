const express = require('express')
const app = express()
const db = require('@cyclic.sh/dynamodb')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Create or Update a Car
app.post('/:car/:key', async (req, res) => {
  console.log(req.body)

  const car = req.params.car
  const key = req.params.key
  console.log(`from collection: ${car} delete key: ${key} with params ${JSON.stringify(req.params)}`)
  const item = await db.collection(car).set(key, req.body)
  console.log(JSON.stringify(item, null, 2))
  res.json(item).end()
})

// Delete a Car
app.delete('/:car/:key', async (req, res) => {
  const car = req.params.car
  const key = req.params.key
  console.log(`from collection: ${car} delete key: ${key} with params ${JSON.stringify(req.params)}`)
  const item = await db.collection(car).delete(key)
  console.log(JSON.stringify(item, null, 2))
  res.json(item).end()
})

// Get a single Car
app.get('/:car/:key', async (req, res) => {
  const car = req.params.car
  const key = req.params.key
  console.log(`from collection: ${car} get key: ${key} with params ${JSON.stringify(req.params)}`)
  const item = await db.collection(car).get(key)
  console.log(JSON.stringify(item, null, 2))
  res.json(item).end()
})

// Get a full listing of Cars
app.get('/:car', async (req, res) => {
  const car = req.params.car
  console.log(`list collection: ${car} with params: ${JSON.stringify(req.params)}`)
  const items = await db.collection(car).list()
  console.log(JSON.stringify(items, null, 2))
  res.json(items).end()
})

// Catch all handler for all other request.
app.use('*', (req, res) => {
  res.json({ msg: 'no route handler found' }).end()
})

// Start the server
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`index.js listening on ${port}`)
})
