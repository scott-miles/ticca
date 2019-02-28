let chai = require('chai');
let chaiHttp = require('chai-http');

let should = chai.should();
let server = require('../../server.js');

chai.use(chaiHttp);

function getTaxForIncome(income, assert) {
  chai.request(server)
      .get('/api/tax?taxableIncome=' + income)
      .end(function(error, response) {
        assert(response);
      });
}

module.exports.getTaxForIncome = getTaxForIncome;
