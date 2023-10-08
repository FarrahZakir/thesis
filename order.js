module.exports = function (app) {
  const getDB = require('./db')

  // Create or Update an Order
  app.post('/order/:key', async (req, res) => {
    const db = getDB()

    // check with carKey if the car exists in the car collection
    const carKey = req.body.car_key
    const car = await db.collection('car').get(carKey)

    if (car == null) {
      return res.status(400).json({ msg: 'The ordered car does not exist' }).end()
    }

    const key = req.params.key
    const order = await db.collection('order').set(key, req.body)

    res.json(order).end()
  })

  // Delete an Order
  app.delete('/order/:key', async (req, res) => {
    const db = getDB()

    const key = req.params.key
    const order = await db.collection('order').delete(key)

    res.json(order).end()
  })

  // Get a single Order
  app.get('/order/:key', async (req, res) => {
    const db = getDB()

    const key = req.params.key
    const order = await db.collection('order').get(key)

    res.json(order).end()
  })

  // Get a full listing of Orders
  app.get('/order', async (req, res) => {
    const db = getDB()

    const orders = await db.collection('order').list()

    res.json(orders).end()
  })
}
