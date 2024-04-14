const request = require('supertest')
const app=require('../index')
const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema')
chai.use(chaiJsonSchema)
const { expect } = chai

const productSchema = {
    title: 'Product schema',
    type: 'object',
    required: ['_id', 'name', 'price', 'stock', 'brand'],
    properties: {
      _id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },    
      price: {
        type: 'number',
      }, 
      brand: {
        type: 'string',
      }, 
     
    },
  };
describe('GET /products', function() {
    it('responds with json containing a list of all products', function(done) {
      request(app)
        .get('/products')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err)
          expect(res.body).to.be.an('array')
          res.body.forEach(product => {
            expect(product).to.be.jsonSchema(productSchema)
          })
          done()
        })
    })
  })