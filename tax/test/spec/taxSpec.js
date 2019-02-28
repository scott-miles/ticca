let mocha = require('mocha');
let nock = require('nock');

let taxAPI = require('../api/taxAPI.js')

beforeEach(function() {
  nock('http://localhost:3002')
    .get('/api/session')
    .reply(200, { authenticated: 'true' });
});

describe('Calculate tax for an employee', function() {

  context('with a taxable income of 0', function(){
    it('reponse should have income tax of 0', function(done){
      taxAPI.getTaxForIncome(0, function(response) {
        response.body.should.have.property('incomeTax', 0);
        response.should.have.status(200);
        done();
      });
    });
  });

  context('with a taxable income of 20000', function(){
    it('reponse should have income tax of 342', function(done){
      taxAPI.getTaxForIncome(20000, function(response) {
        response.body.should.have.property('incomeTax', 342);
        response.should.have.status(200);
        done();
      });
    });
  });

  context('with a taxable income of 100000', function(){
    it('reponse should have income tax of 24947', function(done){
      taxAPI.getTaxForIncome(100000, function(response) {
        response.body.should.have.property('incomeTax', 24947);
        response.should.have.status(200);
        done();
      });
    });
  });

  context('without a session token', function(){
    it('reponse should return an error', function(done){
      taxAPI.getTaxWithoutTokenHeader(100000, function(response) {
        response.body.should.have.property('error', 'No token');
        response.should.have.status(406);
        done();
      });
    });
  });
});
