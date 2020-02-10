// https://github.com/mysqljs/mysql

const args = process.argv;
const ip = args[2];
const port = args[3];
const user = args[4];
const pw = args[5];


var sql = require("mssql");

var config = {
	server: ip,
 connectionTimeout: 0,
    requestTimeout: 0,	
	authentication: {
      type: "default",
      options: {  
      userName: user,
	  password: pw,
	  port: port
	}
    }
  };
	
	
	var fs = require('fs');
	var sqlinfo = fs.readFileSync("./sql/create_database.sql");
	var query = sqlinfo.toString();
	
	sql.connect(config, function (err) {
    
        if(err) {
            console.log("Database connection is not established: \n"+err);
            process.exit(0);
        } 

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query(query , function (err, recordsets) {
            
            if (err) {
        console.log(err);
      } else {
        console.log( recordsets + 'row');
//		process.exit(0);
        sql.close();
      }

            // send records as a response
           
            
        });
    });
	
	

	console.log("database hello has benn created.");
