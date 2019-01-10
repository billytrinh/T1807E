var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://dungntth:Lienmam123@ds038888.mlab.com:38888/project', {
    useNewUrlParser: true
});

var db = mongoose.connection;

// User Schema
var ProductSchema = mongoose.Schema({
    pro_name: {
        type: String,
        index: true
    },
    pro_desc: {
        type: String
    },
    pro_price: {
        type: Number
    },
    pro_amount: {
        type: Number
    },
    pro_status: {
        type: String
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    big_image: {
        type: Array,
    },
    small_image: {
        type: Array
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'products'
});
module.exports = mongoose.model('Product', ProductSchema);