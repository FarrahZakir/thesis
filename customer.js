const express = require('express')
const app = express()
const db = require('@cyclic.sh/dynamodb')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Create or Update a Customer
app.post('/:customer/:key', async (req, res) => {
  console.log(req.body)

  const customer = req.params.customer
  const key = req.params.key
  console.log(`from collection: ${customer} delete key: ${key} with params ${JSON.stringify(req.params)}`)
  const item = await db.collection(customer).set(key, req.body)
  console.log(JSON.stringify(item, null, 2))
  res.json(item).end()
})

// Delete a Customer
app.delete('/:customer/:key', async (req, res) => {
  const customer = req.params.customer
  const key = req.params.key
  console.log(`from collection: ${customer} delete key: ${key} with params ${JSON.stringify(req.params)}`)
  const item = await db.collection(customer).delete(key)
  console.log(JSON.stringify(item, null, 2))
  res.json(item).end()
})

// Get a single Customer
app.get('/:customer/:key', async (req, res) => {
  const customer = req.params.customer
  const key = req.params.key
  console.log(`from collection: ${customer} get key: ${key} with params ${JSON.stringify(req.params)}`)
  const item = await db.collection(customer).get(key)
  console.log(JSON.stringify(item, null, 2))
  res.json(item).end()
})

// Get a full listing of Customers
app.get('/:customer', async (req, res) => {
  const customer = req.params.customer
  console.log(`list collection: ${customer} with params: ${JSON.stringify(req.params)}`)
  const items = await db.collection(customer).list()
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
