const request = require('supertest')
const app=require('../index')
const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema')
chai.use(chaiJsonSchema)
const { expect } = chai

/**
 * Test for get all users api endpoint
 */


const userSchema = {
    title: 'User schema',
    type: 'object',
    required: ['_id', 'username', 'email'],
    properties: {
      _id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },    
      email: {
        type: 'string',
      }, 
      discountedBrands: [{
        brand: { type: 'string'},
        discountPrice: { type: 'number' }
      }]
      
    },
  };
describe('GET /users', function() {
    it('responds with json containing a list of all users', function(done) {
      request(app)
        .get('/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err)
          expect(res.body).to.be.an('array')
          res.body.forEach(user => {
            expect(user).to.be.jsonSchema(userSchema)
          })
          done()
        })
    })
  })
  
  