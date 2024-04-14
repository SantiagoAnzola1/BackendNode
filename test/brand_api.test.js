const request = require('supertest')
const app=require('../index')
const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema')
chai.use(chaiJsonSchema)
const { expect } = chai

const brandSchema = {
    title: 'Brand schema',
    type: 'object',
    required: ['_id', 'brandName'],
    properties: {
      _id: {
        type: 'string',
      },
      brandName: {
        type: 'string',
      }
    },
  };
describe('GET /brands', function() {
    it('responds with json containing a list of all brands', function(done) {
      request(app)
        .get('/brands')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err)
          expect(res.body).to.be.an('array')
          res.body.forEach(brand => {
            expect(brand).to.be.jsonSchema(brandSchema);
          })
          done()
        })
    })
  })