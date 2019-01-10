var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://dungntth:Lienmam123@ds038888.mlab.com:38888/project', {
    useNewUrlParser: true
});
var Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;
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
        type: Currency
    },
    pro_qty: {
        type: Number, min: 0, require: true
    },
    pro_status: {
        type: String
    },
    pro_size: {
        type: Number
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    category: [{type: Schema.ObjectId, ref: 'Cate'}],
    big_image: {
        type: Array,
    },
    small_image: {
        type: Array
    },
    video: {
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