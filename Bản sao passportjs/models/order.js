var mongoose = require('mongoose');

mongoose.connect('mongodb://dungntth:Lienmam123@ds038888.mlab.com:38888/project', {
    useNewUrlParser: true
});
var Schema = mongoose.Schema;
var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cart: {type: Object, required: true},
    address: {type: String, required: true},
    name: {type: String, required: true},
    phone: {type: String, required: true},
    message: {type: String},
    paymentId: {type: String, required: true},
    date: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'orders' 
});

module.exports = mongoose.model('Order', schema);