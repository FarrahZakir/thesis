module.exports = function (app) {
  const getDB = require('./db')

  // Create or Update a Customer
  app.post('/customer/:key', async (req, res) => {
    const db = getDB()
    const key = req.params.key

    const item = await db.collection('customer').set(key, req.body)

    res.json(item).end()
  })

  // Delete a Customer
  app.delete('/customer/:key', async (req, res) => {
    const db = getDB()
    const key = req.params.key

    const item = await db.collection('customer').delete(key)

    res.json(item).end()
  })

  // Get a single Customer
  app.get('/customer/:key', async (req, res) => {
    const db = getDB()

    const key = req.params.key
    const item = await db.collection('customer').get(key)

    res.json(item).end()
  })

  // Get a full listing of Customers
  app.get('/customer', async (req, res) => {
    const db = getDB()

    const items = await db.collection('customer').list()

    res.json(items).end()
  })
}
