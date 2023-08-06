const express = require('express')
const app = express()
const db = require('@cyclic.sh/dynamodb')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Create or Update an Order
app.post('/:order/:key', async (req, res) => {
  console.log(req.body)

  const order = req.params.order
  const key = req.params.key
  console.log(`from collection: ${order} delete key: ${key} with params ${JSON.stringify(req.params)}`)
  const item = await db.collection(order).set(key, req.body)
  console.log(JSON.stringify(item, null, 2))
  res.json(item).end()
})

// Delete an Order
app.delete('/:order/:key', async (req, res) => {
  const order = req.params.order
  const key = req.params.key
  console.log(`from collection: ${order} delete key: ${key} with params ${JSON.stringify(req.params)}`)
  const item = await db.collection(order).delete(key)
  console.log(JSON.stringify(item, null, 2))
  res.json(item).end()
})

// Get a single Order
app.get('/:order/:key', async (req, res) => {
  const order = req.params.order
  const key = req.params.key
  console.log(`from collection: ${order} get key: ${key} with params ${JSON.stringify(req.params)}`)
  const item = await db.collection(order).get(key)
  console.log(JSON.stringify(item, null, 2))
  res.json(item).end()
})

// Get a full listing of Orders
app.get('/:order', async (req, res) => {
  const order = req.params.order
  console.log(`list collection: ${order} with params: ${JSON.stringify(req.params)}`)
  const items = await db.collection(order).list()
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
