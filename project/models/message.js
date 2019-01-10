var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://dungntth:Lienmam123@ds038888.mlab.com:38888/project', {
    useNewUrlParser: true
});

var db = mongoose.connection;

// User Schema
var MessageSchema = mongoose.Schema({
    customer_name: {
        type: String,
        index: true
    },
    email: {
        type: String
    },
    subject: {
        type: String
    },
    message: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'messages'
});
module.exports = mongoose.model('Message', MessageSchema);