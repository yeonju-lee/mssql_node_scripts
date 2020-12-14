const args = process.argv;
const ip = args[2];
const port = args[3];
const user = args[4];
const pw = args[5];
const iter = args[6];

console.log("insert data start")

var sql = require("mssql");
// var Sequelize = require('sequelize');

var config = {
    connectionTimeout: 0,
    requestTimeout: 0,
    user: user,
    database: "myTable",
    password: pw,
    server: ip,
    port: parseInt(port),
    options: {
        encrypt: true,
        packetSize: 32768
    }
};


var fs = require('fs');
var forEach = require('async-foreach').forEach;

var fruits = [];
for (var i = 0; i < iter; i++) {
    fruits.push("data_big.sql");
}

var sqlinfo = fs.readFileSync("./sql/data_big.sql");
var query = sqlinfo.toString();

forEach(fruits, function(item, index, arr) {
sql.connect(config, function(err) {
    var request = new sql.Request();
    request.stream = true;
    request.query(query);




    request.on('row', function(columns) {
       // console.log('name : '+ row.rows);
        console.log(rowCount + 'rows');
        sql.close();
    });

    request.on('error', function(err) {
        console.log(err);
        sql.connect = null;
        sql.close();
    });

    request.on('done', function(returnValue) {
        console.log('Data End');
        sql.connect = null;
        sql.close();
    });
});

});




//
//
// sql.connect(config, function (err) {
//
//     var request = new sql.Request();
//     request.stream = true;
//
//     if (err) {
//         console.log("Database connection is not established: \n" + err);
//         process.exit(0);
//     }
//
//
//     forEach(fruits, function (item, index, arr) {
//         request.query(query, function (err, recordsets) {
//             console.log("1");
//             if (err) {
//                 console.log("error: ", err.sqlMessage);
//                 process.exit(100);
//             } else {
//
//                 console.log('insert data: %d / %d', index, iter);
//                 console.log("2");
//                 console.log(recordsets + ' rows');
//             }
// // sql.close();
//         });
//
//     });
//
// });
//
// console.log("insert.");

