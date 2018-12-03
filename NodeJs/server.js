var express = require('express');
var app = express();

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://root:root123@ds038888.mlab.com:38888/t1807e';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);
    var dd = db.db("t1807e");
    var collection = dd.collection('users');
    // do some work here with the database.
    //Create some users
    var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
    var user2 = {name: 'modulus user', age: 22, roles: ['user']};
    var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};
    var query = {};
    // Insert some users
   // collection.insert([user1, user2, user3], function (err, result) {
   // collection.remove([user1, user2, user3], function (err, result) {
   // collection.update([user1, user2, user3], function (err, result) {
   	collection.find(query).toArray(function(err,result){
      if (err) {
        console.log(err);
      } else {
        console.log(result);
      }
      //Close connection
      db.close();
    });
  }
});

var server = app.listen(3000, function () {
  console.log("Ung dung Node.js dang hoat dong");
});

