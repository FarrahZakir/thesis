module.exports = function (app) {
  const getDB = require('./db')

  // Create or Update a Car
  app.post('/car/:key', async (req, res) => {
    const db = getDB()
    const key = req.params.key

    const item = await db.collection('car').set(key, req.body)

    res.json(item).end()
  })

  // Delete a Car
  app.delete('/car/:key', async (req, res) => {
    const db = getDB()
    const key = req.params.key

    const item = await db.collection('car').delete(key)

    res.json(item).end()
  })

  // Get a single Car
  app.get('/car/:key', async (req, res) => {
    const db = getDB()
    const key = req.params.key

    const item = await db.collection('car').get(key)

    res.json(item).end()
  })

  // Get a full listing of Cars
  app.get('/car', async (req, res) => {
    const db = getDB()

    const items = await db.collection('car').list()

    res.json(items).end()
  })
}
