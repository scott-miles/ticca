exports.authenticate = function(req, res, next) {
    if(req.headers['token'] == 'aaabbbccc'){
        res.send({ authenticated: 'true'});
    } else {
        res.send({ authenticated: 'false'});
    }
}
