const assert = require('assert')

// check if the endpoint to get all orders brings orders before deploying it to production for customers
async function testGetOrders () {
  const response = await fetch('https://thesis.cyclic.app/order')
  const data = await response.json()
  // return data
  assert(response.status === 200, 'Response status code was: ' + response.status)
  console.log('Response status code was 200')
  assert(data !== null, 'Response was empty')
  console.log('Response was: ', data)
}
await testGetOrders()
