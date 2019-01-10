var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://dungntth:Lienmam123@ds038888.mlab.com:38888/project',{ useNewUrlParser: true });

var db = mongoose.connection;

// User Schema
var UserSchema = mongoose.Schema({
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
	},
	isAdmin: {type: Boolean, 
			default: false}
},{collection: 'users'});
var User = module.exports = mongoose.model('User', UserSchema);

module.exports.createUser = function(newUser, callback){
   			newUser.save(callback);
};