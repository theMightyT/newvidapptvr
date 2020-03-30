var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

  connect.getConnection((err, connection) => {
    console.log('get all the movies');

    connection.query(`SELECT * FROM tbl_movies`, (error, rows) => {
      connection.release();

      if (error) {
        //throw error;
        console.log(error);
      } else {
        //console.log('rows:', rows);

        var currentMovie = rows[Math.floor(Math.random() * rows.length)];
        console.log("current movie:", currentMovie);

        res.render('home', {
          defaultMovie: rows[Math.floor(Math.random() * rows.length)],
          data: rows
        });
      }
    });
  });
});

module.exports = router;
