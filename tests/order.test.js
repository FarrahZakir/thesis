const request = require('supertest')
const app = require('../index')

// Please fake this db
jest.mock('../db')
const getDB = require('../db')

describe('POST /order/:key', () => {
  it('should create an order', async () => {
    const car = {}
    const order = {}

    // Fake db
    getDB.mockImplementation(() => {
      return {
        // Fake collection
        collection: jest.fn().mockImplementation(collection => {
          return {
            // Fake data
            get: jest.fn().mockReturnValueOnce(car),
            set: jest.fn().mockReturnValueOnce(order)
          }
        })
      }
    })

    // Check with this data
    const res = await request(app).post('/order/1')
    expect(res.statusCode).toBe(200)
  })
})

describe('POST /order/:key', () => {
  it('should fail when creating an order of non existing car', async () => {
    // Fake db
    getDB.mockImplementation(() => {
      return {
        // Fake collection
        collection: jest.fn().mockImplementation(collection => {
          return {
            // Fake data
            get: jest.fn().mockReturnValueOnce(null)
          }
        })
      }
    })

    // Check with this data
    const res = await request(app).post('/order/1')
    expect(res.statusCode).toBe(400)
  })
})
