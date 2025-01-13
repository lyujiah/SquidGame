var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.render('main', { title: 'Express' });
  res.sendFile("/Users/lyujia/Desktop/home/node/public/admin.html");
});
module.exports = router;
