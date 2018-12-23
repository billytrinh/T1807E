var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://dungntth:Lienmam123@ds038888.mlab.com:38888/project',{ useNewUrlParser: true });

var db = mongoose.connection;

// User Schema
var AdminSchema = mongoose.Schema({
	firstname: {
		type: String,
		index: true
	},
	lastname: {
		type: String,
		index: true
	},
	username: {
		type: String,
		index: true
	},
	phone: {
		type: String,
		index: true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	address: {
		type: String
	},
	profileimage:{
		type: String
	}
},{collection: 'admins'});
var User = module.exports = mongoose.model('Admin', AdminSchema);

// module.exports.getUserById = function(id, callback){
// 	User.findById(id, callback);
// }

// module.exports.getUserByUsername = function(username, callback){
// 	var query = {username: username};
// 	User.findOne(query, callback);
// }

// module.exports.comparePassword = function(candidatePassword, hash, callback){
// 	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
//     	callback(null, isMatch);
// 	});
// }

module.exports.createUser = function(newAdmin, callback){
   			newUser.save(callback);
};