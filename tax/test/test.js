let chai = require('chai');
let chaiHttp = require('chai-http');
let mocha = require('mocha');
let should = chai.should();

let server = require('../server.js');

chai.use(chaiHttp);

describe('Calculate tax for an employee', function() {
  context('with a taxable income of 0', function(){
    it('reponse should have income tax of 0', function(){
      chai.request(server)
          .get('/api/tax?taxableIncome=0')
          .end(function(error, response) {
            response.body.should.have.property('incomeTax', 0);
            response.should.have.status(200);
          });
    });
  });
});
