module.exports = function(app) {
  
  const db = require('@cyclic.sh/dynamodb')

  // Create or Update a Car
  app.post('/car/:key', async (req, res) => {
    console.log(req.body)
    const key = req.params.key
    console.log(`from collection: car delete key: ${key} with params ${JSON.stringify(req.params)}`)
    const item = await db.collection('car').set(key, req.body)
    console.log(JSON.stringify(item, null, 2))
    res.json(item).end()
  })

  // Delete a Car
  app.delete('/car/:key', async (req, res) => {
    const key = req.params.key
    console.log(`from collection: car delete key: ${key} with params ${JSON.stringify(req.params)}`)
    const item = await db.collection('car').delete(key)
    console.log(JSON.stringify(item, null, 2))
    res.json(item).end()
  })

  // Get a single Car
  app.get('/car/:key', async (req, res) => {
    const key = req.params.key
    console.log(`from collection: car get key: ${key} with params ${JSON.stringify(req.params)}`)
    const item = await db.collection('car').get(key)
    console.log(JSON.stringify(item, null, 2))
    res.json(item).end()
  })

  // Get a full listing of Cars
  app.get('/car', async (req, res) => {
    console.log(`list collection: car with params: ${JSON.stringify(req.params)}`)
    const items = await db.collection('car').list()
    console.log(JSON.stringify(items, null, 2))
    res.json(items).end()
  })

}
