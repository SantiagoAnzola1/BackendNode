const request = require('supertest')
const app=require('../index')
const chai = require('chai')
const chaiJsonSchema = require('chai-json-schema');
chai.use(chaiJsonSchema)
const { expect } = chai

describe('GET /price/:user_id/:nombre_producto', function() {
  it('responds with json containing the special price', function(done) {
    const userId = '6619f1c65fa41c67a8b21c23'//user exist
    const productName = 'Gazelle'//product exist, brand product with special price for the user

    request(app)
      .get(`/price/${userId}/${productName}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err)
        expect(res.body).to.be.an('object')
        expect(res.body.discountPrice).to.be.a('number')

        expect(res.body).to.have.property('discountPrice')
        done()
      })
  })
  it('responds with json containing the base price', function(done) {
    const userId = '6619f1fb5fa41c67a8b21c26'//user exist
    const productName = 'Club C Revenge'//product exist, brand product without special price for the user

    request(app)
      .get(`/price/${userId}/${productName}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err)
        expect(res.body).to.be.an('object')

        expect(res.body.price).to.be.a('number')

        expect(res.body).to.have.property('price')
        done()
      })
  })

  it('responds with 404 when user does not exist', function(done) {
    const userId = '5411f1fb5fa41c67a7b19c12'//user not exist
    const productName = 'Gazelle'//product exist

    request(app)
      .get(`/price/${userId}/${productName}`)
      .set('Accept', 'application/json')
      .expect(404, done)
  })

  it('responds with 404 when product does not exist', function(done) {
    const userId = '6619f1c65fa41c67a8b21c23'//user exist
    const productName = 'Reebok air force 1'//product not exist

    request(app)
      .get(`/price/${userId}/${productName}`)
      .set('Accept', 'application/json')
      .expect(404, done)
  })
})