var express = require('express');
var router = express.Router();

var multer = require('multer');
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var flash = require('connect-flash');
var User = require('../models/user');
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('list-user', {
    title: 'Home page'
  });
});
// router.get('/admin', function(req, res, next) {
//   res.render('admin', {title: 'Admin page'});
// });
// // adminpage
// router.get('/list-user', function(req, res, next) {
//   res.render('list-user', {title: 'user page'});
// });
// router.get('/calendar', function(req, res, next) {
//   res.render('calendar', {title: 'Calendar page'});
// });
// router.get('/add-new-user', function(req, res, next) {
//   res.render('add-user', {title: 'Add user page'});
// });
// router.get('/xem', function(req, res, next) {
//   User.find(function (err,docs) {
//     var productChunks = [];
//     var limit_width = 3;
//     for(var i=0; i<docs.length ; i+= limit_width)
//       productChunks.push(docs.slice(i,i+limit_width));
//       console.log(productChunks);
//     res.render('shop/index', { title: 'Shopping Cart' , products: productChunks});
//   });
// });

/* GET login page. */
router.get('/login', function (req, res, next) {
  res.render('login', {
    title: 'Login'
  });
});

router.get('/register', function (req, res, next) {
  res.render('register', {
    title: 'Register'
  });
});

// router.get('/list-user', function (req, res, next) {
//   User.find(function (err, users) {
//     if (err) throw err;
//     res.render('list-user', {
//       title: 'Danh sach',
//       data: users
//     })
//   })
// });
router.get('/add-to-cart/:id', function (req, res, next) {
  var userId = req.params.id;
  console.log(userId);
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  User.findById(userId, function (err, product) {
    if (err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    res.redirect('/');
  });
});

//register page
router.post('/register', function (req, res, next) {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var address = req.body.address;
  var phone = req.body.phone;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;
  var adminCode = req.body.adminCode;
  console.log(firstname);
  if (req.file) {
    console.log('Uploading File...');
    var profileimage = req.file.filename;
  } else {
    console.log('No File Uploaded...');
    var profileimage = 'noimage.jpg';
  }

  // // Form Validator
  //req.checkBody('email', 'Email is not valid!').isEmail();
  // Check Errors
  var errors = req.validationErrors();
  User.findOne().and([{
    $or: [{
      email: email
    }, {
      username: username
    }]
  }]).exec(function (err, user) {
    if (user) {
      req.flash('err_msg', 'Username or Email exists');
      res.redirect('/users/register');
    } else {
      if (errors) {
        res.render('register', {
          errors: errors,
          title: 'Register'
        });
      } else {
        var newUser = new User({
          firstname: firstname,
          lastname: lastname,
          address: address,
          email: email,
          username: username,
          password: password,
          phone: phone,
          profileimage: profileimage,
          adminCode: adminCode
        });
        if(adminCode === 'secretcode123') {
          newUser.isAdmin = true;
        }
        User.createUser(newUser, function (err, user) {
          if (err) throw err;
          // console.log(user);
          passport.authenticate('local')(req, res, function () {
            req.flash('success_msg', 'Welcome to our shop! Hello ' + req.body.firstname + ' ' + req.body.lastname);
            res.redirect('/alithea');
        })
        });
      }
    }
  })
});


router.post('/login', passport.authenticate('local', {
  failureRedirect: '/users/login',
  failureFlash: 'Invalid username or password'
}), function (req, res) {
  console.log(req.user);
  req.flash('success_msg', 'Welcome to our shop!');
  res.redirect('/alithea');
});

passport.use('local', new LocalStrategy(function (username, password, done) {
  User.findOne({
    username: username
  }).exec(function (err, user) {
    if (err) throw err;
    if (user && user.password == password) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
}));


passport.serializeUser(function (user, done) {
  done(null, user.username);

});

passport.deserializeUser(function (name, done) {
  User.find({
    username: name
  }).exec(function (err, user) {
    // console.log(user);
    if (err) throw err;
    if (user) {
      //var users = JSON.stringify(user);
      //console.log(req.user.lastname);
      return done(null, user);
      
    } else {
      return done(null, false);
    }
  })
})


//find and filter

// User.
//   find({ lastname: { $regex : /bang/i } }).
//   sort('-lastname').
//   select({}).
//   exec(function(err,user){
//     if(err) throw err;
//     console.log(user);
//   });

router.get('/logout', function (req, res, next) {
  req.logout();
  req.flash('success_msg', 'You have logged out successfully!');
  res.redirect('/users/login');
});
module.exports = router;