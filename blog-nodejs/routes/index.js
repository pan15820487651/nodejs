var express = require('express');
var router = express.Router();
var User = require('../models/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/edison', function(req, res, next) {
  res.send('this is edison page');
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: '注册页面' });
});

router.post('/register', function(req, res, next) {
  var name = req.body.name;
  var pwd = req.body.password;
  var newUser = new User({
    name: name,
    password: pwd
  });
  newUser.save(function (err, user) {
    //相关操作，写入session
    res.send(user);
  });
});



module.exports = router;
