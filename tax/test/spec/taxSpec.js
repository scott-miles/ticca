let mocha = require('mocha');

let taxAPI = require('../api/taxAPI.js')

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
});
