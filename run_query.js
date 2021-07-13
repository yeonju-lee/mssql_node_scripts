// https://github.com/mysqljs/mysql

const args = process.argv;
const ip = args[2];
const port = args[3];
const user = args[4];
const pw = args[5];
const query = args[6];


var sql = require("mssql");

var config = {
    user: user,
    password: pw,
    server: ip,
    port: parseInt(port),
    options: {
        encrypt: false,
        enableArithAbort: true
    }
};
	
	sql.connect(config, function (err) {
    
        if(err) {
            console.log("Database connection is not established: \n"+err);
            process.exit(0);
        } 

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query(query , function (err, rowCount) {
            
            if (err) {
        console.log(err);
      } else {
        console.log(rowCount + ' rows');
		process.exit(0);
      }

            // send records as a response
           
            
        });
    });
	
	console.log("databases myTable has benn deleted.");