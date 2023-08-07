const getDB = require("./db")
const request = require("supertest")
const app = require("../index")

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {

});

/* Closing database connection after each test. */
afterEach(async () => {

});

describe("POST /order/:key", () => {
  it("should create an order", async () => {
    const res = await request(app).post("/order/1");
    expect(res.statusCode).toBe(200);
  });
});