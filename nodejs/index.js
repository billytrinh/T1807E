var express = require("express");
var app = express();

// Dung de chay cac file tinh html
app.use(express.static('public'));

app.listen("3003",function(){
	console.log("Server is running");
});

var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://root:root123@ds038888.mlab.com:38888/t1807e';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    //console.log('Connection established to', url);
    var database = db.db();
    var collection = database.collection("students");
    // do some work here with the database.
    // var student1 = {
    // 	id: 1,
    // 	student_name: "Lê văn A",
    // 	mssv: "ms01",
    // 	birthday: "2000-12-03",
    // 	class_id: 1,
    // 	gender: 1
    // };
// Add 1 user to collection students
    // collection.insert([student1], function (err, result) {
    //     if (err) {
    //       console.log(err);
    //    } else {
    //       console.log('Inserted');
    //     }
    //     //Close connection
    //     db.close();
    //   });
    //Close connection

// Update student with id = 1
 //    collection.update({id:1,birthday:'2001-1-12'}, 
 //    	{$set: {student_name: 'Nguyễn Văn Phong',birthday:'2001-1-13'}}, 
 //    	function (err, updatedObj) {
	//   if (err) {
	//     console.log(err);
	//   } else if (updatedObj) {
	//     if(updatedObj.result.nModified > 0){
	//     	console.log("Updated successfully!");
	//     }else{
	//     	console.log("no record update");
	//     }
	//   }
	//   //Close connection
	//   db.close();
	// });

 // List Students
 	 // collection.find({}).toArray(function (err, result) {
   //    if (err) {
   //      console.log(err);
   //    } else if (result.length) {
   //      console.log('Found:', result);
   //    } else {
   //      console.log('No document(s) found with defined "find" criteria!');
   //    }
   //    //Close connection
   //    db.close();
   //  });

    // db.close();

    app.get("/list_students",function(req,res){
    	 collection.find({}).toArray(function (err, result) {
			if (err) {
				res.send({
					status: 0,
					message:"fail"
				});
			}else {
				if(result.length){
					res.send({
						status:1,
						message: 'success',
						data: result	
					});
				}else{
					res.send({
						status:1,
						message: 'success',
						data: []	
					});
				}
			}			
	    });
    });
  }
});