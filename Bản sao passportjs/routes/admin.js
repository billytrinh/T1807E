var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var multer = require('multer');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var flash = require('connect-flash');
var User = require('../models/user');
var Cate = require('../models/category');
var Product = require('../models/product');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://dungntth:Lienmam123@ds038888.mlab.com:38888/project', {
  useNewUrlParser: true
});
var cate_images = [];
var thumb_images = [];
var detail_images = [];

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
    title: 'Admin page ne'
  });
});
/* GET login page. */

router.post('/upload', upload.any(), function (req, res, next) {
  var temp = req.files[0].path
  cate_images.push(temp);
  console.log(cate_images);
  res.status(200).send(req.files);
});
router.post('/uploadthumb', upload.any(), function (req, res, next) {
  var temp = req.files[0].path
  thumb_images.push(temp);
  console.log(thumb_images);
  res.status(200).send(req.files);
});
router.post('/uploadimgs', upload.any(), function (req, res, next) {
  var temp = req.files[0].path
  detail_images.push(temp);
  console.log(detail_images);
  res.status(200).send(req.files);
});

// router.post('/add-new-product', function (req, res, next) {
//   var pro_name = req.body.pro_name;
//   var pro_desc = req.body.pro_desc;
//   var pro_amount = req.body.pro_amount;
//   var pro_price = req.body.pro_price;
//   var aproduct = {
//     "pro_name": pro_name,
//     "pro_desc": pro_desc,
//     "pro_price": pro_price,
//     "pro_amount": pro_amount,
//     "big_image": thumb_images,
//     "small_image": detail_images
//   }
//   var dulieu = new Product(aproduct);
//   if(pro_amount > 0){
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
  var id = req.params.idcanxoa;
  Cate.findByIdAndRemove(id).exec();
  req.flash('success_msg', 'You have successfully deleted a category!');
  res.redirect('/admin/list-categories/1');
});


//edit category
router.get('/edit-cat/:idcansua', function (req, res, next) {
  var id = req.params.idcansua;
  Cate.find({
    _id: id
  }, function (err, dulieu) {
    console.log(dulieu[0].date);
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
    console.log(cate_images.length);
    if(cate_images.length == 0 ){
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
            category : docs1
        });
    });
});

router.post('/add-new-product', function (req, res, next) {
  var pro_name = req.body.pro_name;
  var pro_desc = req.body.pro_desc;
  var pro_amount = req.body.pro_amount;
  var pro_price = req.body.pro_price;
  var category = req.body.selectpicker;

  var aproduct = {
    "pro_name": pro_name,
    "pro_desc": pro_desc,
    "pro_amount": pro_amount,
    "pro_price" : pro_price,
    "category": category,
    "big_image": thumb_images,
    "small_image": detail_images
  }
  var dulieu = new Product(aproduct);
  if(pro_amount == 0) {
    dulieu.isAvailable = false;
  }
  dulieu.save();
  console.log(dulieu);
  thumb_images = [];
  detail_images = [];
  res.redirect('/admin/list-product/1');
});

//list category

router.get('/list-product/:page', function (req, res, next) {
  var perPage = 5; /* perPage - số dòng dữ liệu trên mỗi trang */
  var page = req.params.page || 1; /* page - biến chứa số trang hiện tại (Lấy từ request) */
  Product.find({})
    .sort('-date')
    .skip((perPage * page) - perPage) /* mỗi trang chúng ta cần phải bỏ qua ((perPage * page) - perPage) giá trị (trên trang đầu tiên giá trị của bỏ qua phải là 0): */
    .limit(perPage)
    .exec(function (err, data_product) {
      Product.countDocuments().exec(function (err, count) { /* dùng count để tính số trang */
        if (err) throw err;
        //console.log(count);
        res.render('list-pro', { /* hiển thị và gửi dữ liệu đi kèm */
          title: 'List Products',
          data: data_product,
          current: page,
          pages: Math.ceil(count / perPage)
        });
      });
    });
});


router.get('/calendar', function (req, res, next) {
  res.render('calendar', {
    title: 'Calendar page'
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




// router.get('/add-to-cart/:id', function(req, res, next) {
//   var userId = req.params.id;
//   console.log(userId);
//   var cart = new Cart(req.session.cart ? req.session.cart : {});

//   User.findById(userId, function(err, product) {
//     if (err) {
//       return res.redirect('/');
//     }
//     cart.add(product, product.id);
//     req.session.cart = cart;
//     res.redirect('/');
//   });
// });



// router.post('/register', upload.single('profileimage') ,function(req, res, next) {
//     var name = req.body.name;
//     var email = req.body.email;
//     var username = req.body.username;
//     var password = req.body.password;
//     var password2 = req.body.password2;

//     if(req.file){
//         console.log('Uploading File...');
//         var profileimage = req.file.filename;
//     } else {
//         console.log('No File Uploaded...');
//         var profileimage = 'noimage.jpg';
//     }

//     // Form Validator
//     req.checkBody('name','Name field is required').notEmpty();
//     req.checkBody('email','Email field is required').notEmpty();
//     req.checkBody('email','Email is not valid').isEmail();
//     req.checkBody('username','Username field is required').notEmpty();
//     req.checkBody('password','Password field is required').notEmpty();
//     req.checkBody('password2','Passwords do not match').equals(req.body.password);

//     // Check Errors
//     var errors = req.validationErrors();
//     User.findOne().and([
//       { $or: [{email: email}, {username: username}] }
//   ]).exec(function(err,user){
//       if(user){
//         req.flash('err_msg','Username hoặc Email đã tồn tại');
//         res.redirect('/users/register');
//       }else{
//         if(errors){
//           res.render('register', {
//               errors: errors
//           });
//       } else{
//           var newUser = new User({
//           name: name,
//           email: email,
//           username: username,
//           password: password,
//           profileimage: profileimage
//         });

//         User.createUser(newUser, function(err, user){
//           if(err) throw err;
//           console.log(user);
//         });

//         req.flash('success_msg', 'Đăng ký thành công');
//         res.redirect('/users/login');
//       }
//       }

//     })

//   });
// router.post('/login', passport.authenticate('local', {
//     failureRedirect:'/users/login',
//     failureFlash: 'Invalid username or password'
// }),function(req,res){
//   req.flash('success_msg','Bạn đã đăng nhập thành công');
//   res.redirect('/');
// });

// passport.use(new LocalStrategy(function(username, password, done){
//     User.findOne({username: username}).exec(function(err, user){
//         if (err) throw err;
//         if (user && user.password == password){
//             return done(null, user);
//         }else{
//             return done(null, false);
//         }
//     });
// }));

// passport.serializeUser(function(user,done){
//   done(null, user.username);
// });

// passport.deserializeUser(function(name, done){
//   User.find({username: name}).exec(function(err, user){
//     if (err) throw err;
//     if (user){
//       return done(null, user)
//     }else{
//       return done(null, false);
//     }
//   })
// })

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//       return next(null, true);
//   }
//   res.redirect('/');
//   }

// router.get('/private', isLoggedIn, function(req,res,next){
//   res.send('welcome private');
// })
//   router.get('/private', function(req,res,next){
//     res.render('product', {
//       title: 'Trang private'
//     })
//   })

// /* GET admin page. */
// router.get('/admin', function(req, res, next) {
//   if(req.isAuthenticated()){
//     res.send('Ban co the truy cap vao trang admin');
//   }else{
//     res.redirect('/users/login');
//   }
// });

// router.get('/logout', function(req,res,next){
//   req.logout();
//   req.flash('success_msg', 'Bạn đã đăng xuất!');
//   res.redirect('/users/login');
// });
module.exports = router;