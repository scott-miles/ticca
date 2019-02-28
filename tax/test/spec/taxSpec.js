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
});
