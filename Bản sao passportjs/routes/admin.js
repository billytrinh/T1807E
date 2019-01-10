var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var flash = require('connect-flash');
var User = require('../models/user');
var Cart = require('../models/cart');
var Cate = require('../models/category');
var Product = require('../models/product');
var Order = require('../models/order');
var Message = require('../models/message');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://dungntth:Lienmam123@ds038888.mlab.com:38888/project', {
  useNewUrlParser: true
});
var cate_images = [];
var thumb_images = [];
var detail_images = [];
var video = [];

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './imagecate')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

var upload = multer({
  storage: storage
});


router.get('/', function (req, res, next) {
  res.render('admin', {
    title: 'Dashboard'
  });
});
/* GET login page. */

router.post('/upload', upload.any(), function (req, res, next) {
  var temp = req.files[0].path
  cate_images.push(temp);
  // console.log(cate_images);
  res.status(200).send(req.files);
});
router.post('/uploadthumb', upload.any(), function (req, res, next) {
  var temp = req.files[0].path
  thumb_images.push(temp);
  // console.log(thumb_images);
  res.status(200).send(req.files);
});
router.post('/uploadimgs', upload.any(), function (req, res, next) {
  var temp = req.files[0].path
  detail_images.push(temp);
  // console.log(detail_images);
  res.status(200).send(req.files);
});
router.post('/uploadvideo', upload.any(), function (req, res, next) {
  var temp = req.files[0].path
  video.push(temp);
  // console.log(detail_images);
  res.status(200).send(req.files);
});


// router.post('/add-new-product', function (req, res, next) {
//   var pro_name = req.body.pro_name;
//   var pro_desc = req.body.pro_desc;
//   var pro_qty = req.body.pro_qty;
//   var pro_price = req.body.pro_price;
//   var aproduct = {
//     "pro_name": pro_name,
//     "pro_desc": pro_desc,
//     "pro_price": pro_price,
//     "pro_qty": pro_qty,
//     "big_image": thumb_images,
//     "small_image": detail_images
//   }
//   var dulieu = new Product(aproduct);
//   if(pro_qty > 0){
//     dulieu.isAvailable = true;
//   }
//   thumb_images = [];
//   detail_images = [];
//   dulieu.save();
//   res.redirect('/admin/list-products');
// });


//category
//add category

router.get('/add-new-cat', function (req, res, next) {
  res.render('add-cat', {
    title: 'Add category'
  });
});

//list category

router.get('/list-categories/:page', function (req, res, next) {
  var perPage = 5; /* perPage - số dòng dữ liệu trên mỗi trang */
  var page = req.params.page || 1; /* page - biến chứa số trang hiện tại (Lấy từ request) */
  Cate.find({})
    .sort('-date')
    .skip((perPage * page) - perPage) /* mỗi trang chúng ta cần phải bỏ qua ((perPage * page) - perPage) giá trị (trên trang đầu tiên giá trị của bỏ qua phải là 0): */
    .limit(perPage)
    .exec(function (err, data_cates) {
      Cate.countDocuments().exec(function (err, count) { /* dùng count để tính số trang */
        if (err) throw err;
        //console.log(count);
        res.render('list-cat', { /* hiển thị và gửi dữ liệu đi kèm */
          title: 'List Categories',
          data: data_cates,
          current: page,
          pages: Math.ceil(count / perPage)
        });
      });
    });
});

router.post('/add-new-cat', function (req, res, next) {
  var cate_name = req.body.cate_name;
  var cate_desc = req.body.cate_desc;
  var acategory = {
    "cate_name": cate_name,
    "cate_desc": cate_desc,
    "cate_images": cate_images
  }
  var dulieu = new Cate(acategory);
  dulieu.save();
  cate_images = [];
  res.redirect('/admin/list-categories/1');
});


//delete category
router.get('/delete/:idcanxoa', function (req, res, next) {
  var cate = [req.params.idcanxoa];
  Product.find({
    category: {
      $in: cate
    }
  }).populate('category').exec(function(err, dulieu){
    if(dulieu.length > 0){
      req.flash('err_msg', 'You can not delete this category!');
      res.redirect('/admin/list-categories/1');
    }else{
      Cate.findByIdAndRemove(req.params.idcanxoa).exec();
      req.flash('success_msg', 'You have successfully deleted a category!');
      res.redirect('/admin/list-categories/1');
    }
  })
});



//edit category
router.get('/edit-cat/:idcansua', function (req, res, next) {
  var id = req.params.idcansua;
  Cate.find({
    _id: id
  }, function (err, dulieu) {
    // console.log(dulieu[0].date);
    res.render('edit-cat', {
      title: 'Edit category',
      data: dulieu
    })
  })
});

router.post('/edit-cat/:idcansua', function (req, res, next) {
  var id = req.params.idcansua;
  var cate_name = req.body.cate_name;
  var cate_desc = req.body.cate_desc;
  Cate.findById(id, function (err, dulieu) {
    if (err) return handleError(err);
    dulieu.cate_desc = cate_desc;
    dulieu.cate_name = cate_name;
    // console.log(cate_images.length);
    if (cate_images.length == 0) {
      cate_images = dulieu.cate_images;
    }
    dulieu.cate_images = cate_images;
    dulieu.save();
    cate_images = [];
    res.redirect('/admin/list-categories/1');
  });
});


router.get('/login', function (req, res, next) {
  res.render('login', {
    title: 'Login'
  });
});

//products


router.get('/products', function (req, res, next) {
  res.render('list-pro', {
    title: 'Add Category'
  });
});

router.get('/add-new-product', function (req, res, next) {
  Cate.find(function (err, docs1) {
    res.render('add-product', {
      title: 'Add product',
      category: docs1
    });
  });
});

router.post('/add-new-product', function (req, res, next) {
  var pro_name = req.body.pro_name;
  var pro_desc = req.body.pro_desc;
  var pro_qty = req.body.pro_qty;
  var pro_price = req.body.pro_price;
  var pro_size = req.body.size;
  var category = req.body.selectpicker;

  var aproduct = {
    "pro_name": pro_name,
    "pro_desc": pro_desc,
    "pro_qty": pro_qty,
    "pro_size": pro_size,
    "pro_price": pro_price,
    "category": category,
    "big_image": thumb_images,
    "small_image": detail_images,
    "video": video
  }
  var dulieu = new Product(aproduct);
  if (pro_qty == 0) {
    dulieu.isAvailable = false;
  } else {
    dulieu.isAvailable == true;
  }
  dulieu.save();
  
  thumb_images = [];
  detail_images = [];
  video = [];
  res.redirect('/admin/list-product/1');
});

//xoa product

router.get('/delete/product/:idcanxoa', function (req, res, next) {
  var id = req.params.idcanxoa;
  Product.findByIdAndRemove(id).exec();
  req.flash('success_msg', 'You have successfully deleted a product!');
  res.redirect('/admin/list-product/1');
});


//edit product
router.get('/edit-product/:idcansua', function (req, res, next) {
  var id = req.params.idcansua;
  Product.find({
    _id: id
  }, function (err, dulieu) {
    var id_cate = dulieu[0].category;
    Cate.find({
      _id: id_cate
    }, function (err, docs1) {
      Cate.find({}, function (err, docs2) {
        // console.log(docs2);
        res.render('edit-product', {
          title: 'Edit product',
          all_category: docs2,
          category: docs1,
          data: dulieu,
        });
      });
    });
  })
});

router.post('/edit-product/:idcansua', function (req, res, next) {
  var id = req.params.idcansua;
  var pro_name = req.body.pro_name;
  var pro_desc = req.body.pro_desc;
  var pro_qty = req.body.pro_qty;
  var pro_size = req.body.size;
  var pro_price = req.body.pro_price;
  var category_them = req.body.selectpicker_edit;
  Product.findById(id, function (err, dulieu) {
    // console.log(pro_qty);
    if (err) return handleError(err);
    dulieu.pro_name = pro_name;
    dulieu.pro_desc = pro_desc;
    dulieu.pro_qty = pro_qty;
    dulieu.pro_size = pro_size;
    dulieu.pro_price = pro_price;
    if (thumb_images.length == 0) {
      thumb_images = dulieu.big_image;
    }
    if (detail_images.length == 0) {
      detail_images = dulieu.small_image;
    }
    if (video.length == 0) {
      video = dulieu.video;
    }
    // console.log(category.length);
    if (category_them && category_them.length > 0) {
      dulieu.category = category_them;
    }
    if (pro_qty > 0) {
      dulieu.isAvailable = true;
    } else {
      dulieu.isAvailable = false;
    }
    dulieu.big_image = thumb_images;
    dulieu.small_image = detail_images;
    dulieu.save();
    // console.log(dulieu);
    thumb_images = [];
    detail_images = [];
    video = [];
    res.redirect('/admin/list-product/1');
  });

});


//list product

router.get('/list-product/:page', function (req, res, next) {
  var perPage = 5;
  var page = req.params.page || 1;
  Product.find({})
    .sort('-date')
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec(function (err, data_product) {
      // console.log(data_product);
      Product.countDocuments().exec(function (err, count) {
        if (err) throw err;
        //console.log(count);
        res.render('list-pro', {
          title: 'List Products',
          data: data_product,
          current: page,
          pages: Math.ceil(count / perPage)
        });
      });
    });
});


router.get('/view-message', function (req, res, next) {
  res.render('view-message', {
    title: 'View message'
  });
});
// router.get('/add-new-cat', function(req, res, next) {
//   res.render('add-cat', {title: 'Add user page'});
// });
// router.get('/list-user', function(req, res, next) {
//   User.find(function(err, users){
//     if(err) throw err;
//     res.render('user', {
//       title: 'Danh sach',
//       data: users
//     })
//   })
// });



//users

router.get('/list-users/:page', function (req, res, next) {
  var perPage = 6; /* perPage - số dòng dữ liệu trên mỗi trang */
  var page = req.params.page || 1; /* page - biến chứa số trang hiện tại (Lấy từ request) */
  User.find({})
    .skip((perPage * page) - perPage) /* mỗi trang chúng ta cần phải bỏ qua ((perPage * page) - perPage) giá trị (trên trang đầu tiên giá trị của bỏ qua phải là 0): */
    .limit(perPage)
    .exec(function (err, data_users) {
      User.countDocuments().exec(function (err, count) { /* dùng count để tính số trang */
        if (err) throw err;
        console.log(count);
        res.render('list-user', { /* hiển thị và gửi dữ liệu đi kèm */
          title: 'List users',
          data: data_users,
          current: page,
          pages: Math.ceil(count / perPage)
        });
      });
    });
});

//delele users
router.get('/delete/user/:idcanxoa', function (req, res, next) {
  var id = req.params.idcanxoa;
  User.findByIdAndRemove(id).exec();
  req.flash('success_msg', 'You have successfully deleted one user!');
  res.redirect('/admin/list-users/1');
});


//edit users
router.get('/edit/:idcansua', function (req, res, next) {
  var id = req.params.idcansua;
  User.find({
    _id: id
  }, function (err, dulieu) {
    res.render('edit', {
      title: 'Edit user',
      data: dulieu
    })
  })
});

router.get('/orders/:page',  function (req, res, next) {
  var perPage = 6; /* perPage - số dòng dữ liệu trên mỗi trang */
  var page = req.params.page || 1;
	Order.find({})
    .skip((perPage * page) - perPage) /* mỗi trang chúng ta cần phải bỏ qua ((perPage * page) - perPage) giá trị (trên trang đầu tiên giá trị của bỏ qua phải là 0): */
    .limit(perPage)
    .sort('date')
    .exec(function (err, orders) {
      // console.log(orders);
      var cart;
		  orders.forEach(function(order){
			cart = new Cart(order.cart);
			order.items = cart.generateArray();
      });
      
      Order.countDocuments().exec(function (err, count) { /* dùng count để tính số trang */
        if (err) throw err;
        res.render('list-orders', { /* hiển thị và gửi dữ liệu đi kèm */
          title: 'Manage orders',
          data: orders,
          current: page,
          pages: Math.ceil(count / perPage)
        });
      });
    });
});

router.get('/detail-order/:idorder', function (req, res, next) {
  var id = req.params.idorder;
  Order.find({
    _id: id
  }, function (err, orders) {
    var cart;
		  orders.forEach(function(order){
			cart = new Cart(order.cart);
			order.items = cart.generateArray();
      });
    console.log(orders);
     var iduser = orders[0].user;
     User.find({_id: iduser}, function(err, user){
      res.render('detail-order', {
        title: 'Detail order',
        data: orders,
        user: user
      })
     })
    
  })
});

router.get('/delete-order/:id_order', function (req, res, next) {
  var id = req.params.id_order;
  console.log(id);
  Order.findByIdAndRemove(id).exec();
  req.flash('success_msg', 'You have successfully deleted one order!');
  res.redirect('/admin/orders/1');
});


router.post('/edit/:idcansua', function (req, res, next) {
  var id = req.params.idcansua;
  User.findById(id, function (err, dulieu) {
    if (err) return handleError(err);
    dulieu.username = req.body.username;
    dulieu.firstname = req.body.firstname;
    dulieu.lastname = req.body.lastname;
    dulieu.address = req.body.address;
    dulieu.phone = req.body.phone;
    dulieu.email = req.body.email;
    dulieu.save();
    res.redirect('/admin/list-users/1');
  });
});



// var services = [req.params.service_id];
// Employee.find({
//   servicesProvided: {
//     $in: services
//   }
// }, ...)
router.get('/get-product/:idcansua', function (req, res, next) {
  var cate = [req.params.idcansua];
  console.log(cate);
  Product.find({
    category: {
      $in: cate
    }
  }).populate('category').exec(function(err, dulieu){
    console.log(dulieu);
  })
});

//message

router.post('/message', function (req, res, next) {
  var customer_name = req.body.customer_name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;
  
  var amessage = {
    "customer_name": customer_name,
    "email": email,
    "subject": subject,
    "message": message
  }
  console.log(amessage)
  var dulieu = new Message(amessage);
  dulieu.save();
  req.flash('success_msg', 'We have recieved your message! We will contact as soon as possible' );
  res.redirect('/alithea/contact');
});

router.get('/view-message/:page', function (req, res, next) {
  var perPage = 5; /* perPage - số dòng dữ liệu trên mỗi trang */
  var page = req.params.page || 1; /* page - biến chứa số trang hiện tại (Lấy từ request) */
  Message.find({})
    .sort('-date')
    .skip((perPage * page) - perPage) /* mỗi trang chúng ta cần phải bỏ qua ((perPage * page) - perPage) giá trị (trên trang đầu tiên giá trị của bỏ qua phải là 0): */
    .limit(perPage)
    .exec(function (err, data_message) {
      console.log(data_message);
      Message.countDocuments().exec(function (err, count) { /* dùng count để tính số trang */
        if (err) throw err;
        //console.log(count);
        res.render('view-message', { /* hiển thị và gửi dữ liệu đi kèm */
          title: 'Message',
          data: data_message,
          current: page,
          pages: Math.ceil(count / perPage)
        });
      });
    });
});
 

// pro_name: { $regex : /thiep/i },pro_qty:{$gt:10} }
module.exports = router;