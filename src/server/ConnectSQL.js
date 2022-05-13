const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
var cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  //Enabling CORS
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization',
  );
  next();
});

app.use(express.json());
var dbConfig = {
  user: 'sa',
  password: '123',
  server: 'IT5\\TIALUAVIET',
   host: 'localhost', 
  database: '53007013262021',
  port: 1430,
  options: {
    enableArithAbort: true,
  },
};

//Function to connect to database and execute query
const executeQuery = function (res, query) {
  sql.connect(dbConfig, function (err) {
    if (err) {
      console.log('Error while connecting database :- ' + err);
      res.send(err);
    } else {
      // create Request object
      var request = new sql.Request();
      // query to the database
      request.query(query, function (err, res) {
        if (err) {
          console.log('Error while querying database :- ' + err);
          res.send(err);
        } else {
          res.send(res);
        }
      });
    }
  });
};

app.get('/user', function (req, res) {
  var query =
  'select * from dbo.ct0';
  executeQuery(res, query);
});

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
