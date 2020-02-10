const args = process.argv;
const ip = args[2];
const port = args[3];
const user = args[4];
const pw = args[5];
const iter = args[6];

var sql = require("mssql");
var Sequelize = require('sequelize');
var config = {
	server: ip,
	database :"hello",
	connectionTimeout: 0,
        requestTimeout: 0,
	stream : true ,
 pool: {
    max: 5,
    min: 1,
    idle : 20000
,    acquire: 20000

 },
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
	var forEach = require('async-foreach').forEach;
	
	var fruits = [];
	for(var i = 0; i < iter; i++) {
	fruits.push("data_big.sql");	
}
	
	var sqlinfo = fs.readFileSync("./sql/data_big.sql"); 
	var query = sqlinfo.toString();
	
	
      sql.connect(config, function (err) {
    
        if(err) {
            console.log("Database connection is not established: \n"+err);
            process.exit(0);
        } 


        var request = new sql.Request();
 	request.stream = true;                
		
	forEach(fruits, function(item, index, arr) {
        	request.query(query , function (err, recordsets) {
                console.log("1");   
            if (err) {
        	console.log("error: " , err.sqlMessage);
                process.exit(100);
           } else {

		console.log('insert data: %d / %d', index, iter);
		console.log("2");		 
		console.log(recordsets + ' rows');
      } 
// sql.close();
});
				
    });
	
	});

	console.log("insert.");
