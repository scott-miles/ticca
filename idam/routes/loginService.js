exports.login = function(req, res, next) {
   if(req.body.username == 'test' &&
      req.body.password == 'test')
   {
      res.setHeader('token', 'aaabbbccc');
      res.end();
   }
   else if(req.body.username == 'disabled' &&
           req.body.password == 'disabled')
   {
      res.status(403);
      res.send({ error: 'Account disabled' })
   }
   else if(req.body.username == 'locked' &&
           req.body.password == 'locked')
   {
      res.status(403);
      res.send({ error: 'Account locked' })
   }
   else
   {
      res.status(401);
      res.send({ error: 'Invalid username or password' })
   }
}
