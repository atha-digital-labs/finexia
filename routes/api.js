var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.getConnection(function(err, connection) {
      if (err) return next(err);

      connection.query('SELECT * from nse_bhavcopy limit 10;', [], function(err, results) {
        if (err) return next(err);

        results[0].RESULT;
        // -> 1

        res.send(results);
      });

    });

});

module.exports = router;
