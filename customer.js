module.exports = function(app, db) {

  // Create or Update a Customer
  app.post('/customer/:key', async (req, res) => {
    console.log(req.body)
    const key = req.params.key
    console.log(`from collection: customer delete key: ${key} with params ${JSON.stringify(req.params)}`)
    const item = await db.collection('customer').set(key, req.body)
    console.log(JSON.stringify(item, null, 2))
    res.json(item).end()
  })

  // Delete a Customer
  app.delete('/customer/:key', async (req, res) => {
    const key = req.params.key
    console.log(`from collection: customer delete key: ${key} with params ${JSON.stringify(req.params)}`)
    const item = await db.collection('customer').delete(key)
    console.log(JSON.stringify(item, null, 2))
    res.json(item).end()
  })

  // Get a single Customer
  app.get('/customer/:key', async (req, res) => {
    const key = req.params.key
    console.log(`from collection: customer get key: ${key} with params ${JSON.stringify(req.params)}`)
    const item = await db.collection('customer').get(key)
    console.log(JSON.stringify(item, null, 2))
    res.json(item).end()
  })

  // Get a full listing of Customers
  app.get('/customer', async (req, res) => {
    console.log(`list collection: customer with params: ${JSON.stringify(req.params)}`)
    const items = await db.collection('customer').list()
    console.log(JSON.stringify(items, null, 2))
    res.json(items).end()
  })

}
