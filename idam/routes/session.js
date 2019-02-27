var express = require('express');
var router = express.Router();
var authenticateService = require('./authenticateService');
var loginService = require('./loginService');

router.post('/session', (request, response, next) => {
    loginService.login(request, response, next);
});

router.get('/session', (request, response, next) => {
    authenticateService.authenticate(request, response, next);
});

module.exports = router;
