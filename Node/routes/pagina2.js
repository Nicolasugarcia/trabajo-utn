var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pagina2', { title: 'Nicolas' });
});

module.exports = router;