var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  var x;
  //var random = Math.random() * (3) + (-1);
  var random = Math.random();
  console.log(req.query.x);
  x = req.query.x;

  // checking if url has params
  if (x == undefined) {
    x = random;
  }
  let imul = Math.imul(x,x) 
  let log =Math.log(x)
  let log10 = Math.log10(x)
  res.render('computation', {
    title: 'Computation',
    values: `applied to ` + x + ` is ` + imul ,
    v1: `applied to ` + x + ` is ` + log,
    v2: `applied to ` + x + ` is ` + log10
  });
});

module.exports = router;