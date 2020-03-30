var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();



/* GET home page. */
router.get('/', function (req, res, next) {

  console.log('get all the movies');
  connect.query(`SELECT * FROM tbl_movies`, (error, rows) => {
    if (error) {
      //throw error;
      console.log(error);
    } else {
      console.log('rows:', rows);

      res.render('home', {
        defaultMovie: rows[Math.floor(Math.random() * rows.length)],
        data: rows
      });
    }
  });
});

module.exports = router;
