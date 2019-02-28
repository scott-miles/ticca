let chai = require('chai');
let chaiHttp = require('chai-http');

let should = chai.should();
let server = require('../../server.js');

chai.use(chaiHttp);

function getTaxForIncome(income, assert) {
  getTaxForIncomeWithHeader(income, {token: "test"}, assert);
}

function getTaxWithoutTokenHeader(income, assert) {
    getTaxForIncomeWithHeader(income, {}, assert);
}

function getTaxForIncomeWithHeader(income, headers, assert) {
  let request = chai.request(server)
    .get('/api/tax?taxableIncome=' + income)

  Object.keys(headers).forEach(function(key){
    request.set(key, headers[key]);
  });

  request.end(function(error, response) {
    assert(response);
  });
}

module.exports.getTaxForIncome = getTaxForIncome;
module.exports.getTaxWithoutTokenHeader = getTaxWithoutTokenHeader;
