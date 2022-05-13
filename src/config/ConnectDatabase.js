var express = require('express');
var app = express();
app.get('/', function (req, res) {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: '123',
        host: 'localhost', 
        server: 'localhost',
        port: 1433,
        database: '53007013262021' ,
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
          },
          options: {
            encrypt: true, // for azure
            trustServerCertificate: true // change to true for local dev / self-signed certs
          }
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log('error: ', err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from dbo.ct0', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});