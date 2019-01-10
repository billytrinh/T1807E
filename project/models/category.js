var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://dungntth:Lienmam123@ds038888.mlab.com:38888/project',{ useNewUrlParser: true });

var db = mongoose.connection;

// User Schema
var CateSchema = mongoose.Schema({
	cate_name: {
		type: String,
		index: true
	},
	cate_desc: {
		type: String
	},
	cate_images:{
		type: Array
	},
	date: { type: Date, default: Date.now }
},{collection: 'categories'});
module.exports = mongoose.model('Cate', CateSchema);
