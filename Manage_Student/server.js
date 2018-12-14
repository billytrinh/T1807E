var express = require("express");
var app = express();

// Dung de chay cac file tinh html
app.use(express.static('public'));

app.listen("3003",function(){
	console.log("Server is running");
});

var bodyParser = require('body-parser');
var multer = require("multer");
const multerConfig = {
    
	storage: multer.diskStorage({
	 //Setup where the user's file will go
	 destination: function(req, file, next){
	   next(null, './public/uploads');
	   },   
	    
	    //Then give the file a unique name
	    filename: function(req, file, next){
	        next(null, file.originalname);
	      }
	    }),   
	    
	    //A means of ensuring only images are uploaded. 
	    fileFilter: function(req, file, next){
	          if(!file){
	            next();
	          }
	        const image = file.mimetype.startsWith('image/');
	        if(image){
	          //console.log('photo uploaded');
	          next(null, true);
	        }else{
	          //console.log("file not supported");
	          
	          //TODO:  A better message response to user on failure.
	          return next();
	        }
	    }
  };

var upload = multer(multerConfig);  
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json 
app.use(bodyParser.json());


var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://root:root123@ds038888.mlab.com:38888/t1807e';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {

  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    var database = db.db();
    var collection = database.collection("students");
    var class_collection = database.collection("class");
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
    //app.post("/save-student",function(req,res){
    app.post("/save-student",upload.single("image"),function(req,res){
      var originalFileName = req.file.originalname
      //console.log(req.body);
    	//res.send('aa');

        var id = req.body.id;
        var mssv = req.body.mssv;
        var name = req.body.name;
        var birthday = req.body.birthday;
        var class_id = req.body.class_id;
        var gender = req.body.gender;
        var avatar = "/uploads/"+originalFileName;
        var student = {
            id: id,
            student_name: name,
            mssv: mssv,
            birthday: birthday,
            class_id: class_id,
            gender: gender,
            avatar: avatar
        };
        collection.insert([student], function (err, result) {
          if (err) {
            res.send("error");
         } else {
            res.send('Inserted');
          }
        });
    });
  }
});





