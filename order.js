module.exports = function(app) {

  const db = require('@cyclic.sh/dynamodb')

  // Create or Update an Order
  app.post('/order/:key', async (req, res) => {
    console.log('Hez hez')
    res.status(200).json({ msg: 'Working' }).end()

    //check with car_key if the car exists in the car collection
    //console.log(req.body)
    /*
    const car_key = req.body.car_key
    console.log(car_key)
    const car = await db.collection('car').get(car_key)
    console.log(car)
    if (car == null) {
      return res.status(400).json({ msg: 'The ordered car does not exist' }).end()
    }
    //console.log(req.body)
    const key = req.params.key
    console.log(`from collection: order delete key: ${key} with params ${JSON.stringify(req.params)}`)
    const item = await db.collection('order').set(key, req.body)
    console.log(JSON.stringify(item, null, 2))
    res.json(item).end()
    */
  })

  // Delete an Order
  app.delete('/order/:key', async (req, res) => {
    const key = req.params.key
    console.log(`from collection: order delete key: ${key} with params ${JSON.stringify(req.params)}`)
    const item = await db.collection('order').delete(key)
    console.log(JSON.stringify(item, null, 2))
    res.json(item).end()
  })

  // Get a single Order
  app.get('/order/:key', async (req, res) => {
    const key = req.params.key
    console.log(`from collection: order get key: ${key} with params ${JSON.stringify(req.params)}`)
    const item = await db.collection('order').get(key)
    console.log(JSON.stringify(item, null, 2))
    res.json(item).end()
  })

  // Get a full listing of Orders
  app.get('/order', async (req, res) => {
    console.log(`list collection: order with params: ${JSON.stringify(req.params)}`)
    const items = await db.collection('order').list()
    console.log(JSON.stringify(items, null, 2))
    res.json(items).end()
  })

}
