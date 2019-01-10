var express = require('express');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var Cart = require('../models/cart');
var User = require('../models/user');
var Product = require('../models/product');
var Cate = require('../models/category');
var Order = require('../models/order');


router.get('/alithea/service', function (req, res, next) {
	res.render('service', {
		title: 'Servie page'
	});
});

router.get('/alithea/detail-product', function (req, res, next) {
	res.render('detail-product', {
		title: 'Detail product'
	});
});

router.get('/alithea/aboutus', function (req, res, next) {
	res.render('about', {
		title: 'About us page'
	});
});

router.get('/alithea/contact', function (req, res, next) {
	res.render('contact', {
		title: 'Contact page'
	});
});

router.get('/alithea/my-order',  function (req, res, next) {
	Order.find({user: req.user[0]},function(err, orders){
		var cart;
		orders.forEach(function(order){
			cart = new Cart(order.cart);
			order.items = cart.generateArray();
		});
		res.render('my-order', {
			title: 'My order',
			orders: orders
		})
	});
});

router.get('/edit-profile/:idcansua', function (req, res, next) {
	var id = req.params.idcansua;
	User.find({
		_id: id
	}, function (err, dulieu) {
		res.render('edit-profile', {
			title: 'Edit profile',
			data: dulieu
		})
	})
});

router.post('/edit-profile/:idcansua', function (req, res, next) {
	var id = req.params.idcansua;
	// console.log(id);
	User.findById(id, function (err, dulieu) {
		if (err) return handleError(err);
		dulieu.username = req.body.username;
		dulieu.firstname = req.body.firstname;
		dulieu.lastname = req.body.lastname;
		dulieu.address = req.body.address;
		dulieu.phone = req.body.phone;
		dulieu.email = req.body.email;
		dulieu.save();
		req.session.destroy();
		res.redirect('/users/login');


	});
});



//detail product
router.get('/detail-product/:idproduct', function (req, res, next) {
	var id = req.params.idproduct;
	Product.find({
		_id: id
	}, function (err, detail) {
		var id_cate = detail[0].category;
		// console.log(id_cate);
		Cate.find({
			_id: id_cate
		}, function (err, cate) {
			// console.log(cate);
			Product.find({
				category: {
					$in: cate
				}
			}, function (err, related) {
				console.log(related);
				res.render('detail-product', {
					title: 'Detail product',
					related: related,
					detail: detail,
					category: cate
				});
			});
		});
	});
});

router.get('/search/:page/', function (req, res, next) {
	var perPage = 9;
	var page = req.params.page || 1;
	var obj = req.query;
	var search = req.query.search;
	// console.log(search);
	var str = "";
	for (var key in obj) {
		if (str != "") {
			str += "&";
		}
		str += key + "=" + obj[key];
	}
	console.log(str);
	Cate.find({}, function (err, allcate) {
		Cate.find({
			cate_name: new RegExp('^' + search, 'i')
		}, function (err, cate) {
			if (cate.length != 0) {
				Product.find({
						category: {
							$in: cate
						}
					}).populate('category').skip((perPage * page) - perPage)
					.limit(perPage)
					.exec(function (err, products) {
						Product.find({
							category: {
								$in: cate
							}
						}, function (err, count) {
							if (err) throw err;
							res.render('search', {
								title: 'Search product',
								products: products,
								query: str,
								allcate: allcate,
								current: page,
								pages: Math.ceil(count.length / perPage)
							});
						});
					});
			} else {
				Product.find({
						pro_name: new RegExp('^' + search, 'i')
					}).populate('category').skip((perPage * page) - perPage)
					.limit(perPage)
					.exec(function (err, products) {
						Product.find({
							pro_name: new RegExp('^' + search, 'i')
						}, function (err, count) {
							if (err) throw err;
							res.render('search', {
								title: 'Search product',
								products: products,
								query: str,
								allcate: allcate,
								current: page,
								pages: Math.ceil(count.length / perPage)
							});
						});
					});
			}
		})

	});
});

router.get('/list-product-filter/:page/', function (req, res, next) {
	var obj = req.query;
	var str = "";
	for (var key in obj) {
		if (str != "") {
			str += "&";
		}
		str += key + "=" + obj[key];
	}
	// console.log(str);

	var perPage = 9;
	var page = req.params.page || 1;
	var id_cate = req.query.selectpicker;
	if (req.query.size1) {
		var fromsize = 5;
		var tosize = 10;
	} else {
		var fromsize = 0;
		var tosize = 100;
	}
	if (req.query.size2) {
		var fromsize = 11;
		var tosize = 14;
	}
	if (req.query.size3) {
		var fromsize = 15;
		var tosize = 100;
	}

	if (req.query.price1) {
		var fromprice = 0;
		var toprice = 5 * 100;
	} else {
		var fromprice = 0;
		var toprice = 100 * 100;
	}

	if (req.query.price2) {
		var fromprice = 6 * 100;
		var toprice = 9 * 100;
	}
	if (req.query.price3) {
		var fromprice = 10 * 100;
		var toprice = 13 * 100;
	}
	if (req.query.price4) {
		var fromprice = 14 * 100;
		var toprice = 100 * 100;
	}
	if (id_cate != 1) {
		Cate.find({}, function (err, allcate) {
			Cate.find({
				_id: id_cate
			}, function (err, cate, next) {
				Product.find({
						pro_size: {
							$gte: fromsize,
							$lte: tosize
						},
						pro_price: {
							$gte: fromprice,
							$lte: toprice
						},
						category: {
							$in: cate
						}

					}).skip((perPage * page) - perPage)
					.limit(perPage)
					.exec(function (err, products) {
						// console.log(products.length);
						Cate.find({
							_id: id_cate
						}, function (err, cate, next) {
							Product.find({
								pro_size: {
									$gte: fromsize,
									$lte: tosize
								},
								pro_price: {
									$gte: fromprice,
									$lte: toprice
								},
								category: {
									$in: cate
								}

							}, function (err, data) {
								// console.log(data.length);
								if (err) throw err;
								res.render('filter', {
									title: 'Detail product',
									allcate: allcate,
									products: products,
									category: cate,
									query: str,
									current: page,
									pages: Math.ceil(data.length / perPage)
								});
							});
						});
					});
			});
		});
	} else {
		Cate.find({}, function (err, allcate) {
			Product.find({
					pro_size: {
						$gte: fromsize,
						$lte: tosize
					},
					pro_price: {
						$gte: fromprice,
						$lte: toprice
					}
				}).skip((perPage * page) - perPage)
				.limit(perPage)
				.exec(function (err, products) {
					Product.find({
						pro_size: {
							$gte: fromsize,
							$lte: tosize
						},
						pro_price: {
							$gte: fromprice,
							$lte: toprice
						}
					}, function (err, data) {
						// console.log(data);
						if (err) throw err;
						res.render('filter', {
							title: 'Detail product',
							allcate: allcate,
							products: products,
							category: allcate,
							current: page,
							query: str,
							pages: Math.ceil(data.length / perPage)
						});
					});

				});
		});
	}
});




router.get('/list-products/:idcategory/:page', function (req, res, next) {
	var perPage = 9;
	var data = {
		"id": req.params.idcategory,
		"page": req.params.page || 1
	};
	Cate.find({}, function (err, allcate) {
		Cate.find({
			_id: data.id
		}, function (err, cate) {
			Product.find({
					category: data.id
				}).populate('category').skip((perPage * data.page) - perPage)
				.limit(perPage)
				.exec(function (err, products) {
					// console.log(products);
					Product.find({
						category: data.id
					}, function (err, count) {
						if (err) throw err;
						res.render('products', {
							title: 'Detail product',
							allcate: allcate,
							products: products,
							category: cate,
							qty: count.length,
							current: data.page,
							pages: Math.ceil(count.length / perPage)
						});
					});
				});
		});
	});
});




router.get('/alithea', function (req, res, next) {
	Product.find({}).limit(4).sort('-date').exec(function (err, docs1) {
		// console.log(docs1);
		Cate.find(function (err, docs2) {
			//   console.log(docs2)
			res.render('home', {
				title: 'Home page',
				products: docs1,
				categories: docs2
			});
		});
	});
});

router.get('/add-to-cart/:idproduct', function (req, res, next) {
	var id = req.params.idproduct;
	var cart = new Cart(req.session.cart ? req.session.cart : {});
	Product.findById(id, function (err, product) {
		cart.add(product, product._id);
		req.session.cart = cart;
		console.log(req.session.cart);
		res.redirect('/alithea');
	});
});

router.get('/alithea/shopping-cart', function (req, res, next) {
	if (!req.session.cart) {
		return res.render('shopping-cart', {
			products: null,
			title: 'Shopping cart'
		});
	}
	var cart = new Cart(req.session.cart);
	res.render('shopping-cart', {
		title: 'Shopping cart',
		products: cart.generateArray(),
		totalPrice: cart.totalPrice,

	})
});

router.get('/alithea/check-out', function (req, res, next) {
	if (!req.session.cart) {
		return res.render('shopping-cart', {
			products: null,
			title: 'Shopping cart'
		});
	}
	var cart = new Cart(req.session.cart);
	res.render('checkout', {
		title: 'Check out',
		products: cart.generateArray(),
		totalPrice: cart.totalPrice,

	})

});

router.post('/alithea/check-out', function (req, res, next) {
	if (!req.session.cart) {
		return res.render('shopping-cart', {
			products: null,
			title: 'Shopping cart'
		});
	}
	var cart = new Cart(req.session.cart);
	var stripe = require("stripe")("sk_test_etgCwW9H9KBjCZDi1xSIhwny");

	stripe.charges.create({
		amount: cart.totalPrice * 100,
		currency: "usd",
		source: req.body.stripeToken, // obtained with Stripe.js
		description: "Charge for jenny.rosen@example.com"
	}, function (err, charge) {
		if (err) {
			req.flash('err_msg', 'Error');
			return redirect('/alithea/check-out');
		}
		if(req.user){
		var order = new Order({
			user: req.user[0],
			cart: cart,
			address: req.body.address,
			name: req.body.name,
			phone: req.body.phone,
			message: req.body.message,
			paymentId: charge.id
		})
	}else{
		var order = new Order({
			cart: cart,
			address: req.body.address,
			name: req.body.name,
			phone: req.body.phone,
			message: req.body.message,
			paymentId: charge.id
	})
}
		order.save(function (err, result) {
			req.flash('success_msg', 'You bought product!');
			req.session.cart = null;
			res.redirect('/alithea');
		});

	});
});

router.get('/alithea/remove-product/:idremove', function (req, res, next) {
	var id = req.params.idremove;
	var cart = new Cart(req.session.cart);
	cart.removeItem(id);
	req.session.cart.totalPrice = cart.totalPrice;
	req.session.cart.totalQty = cart.totalQty;
	res.render('shopping-cart', {
		title: 'Shopping cart',
		products: cart.generateArray(),
		totalPrice: cart.totalPrice,
	})
});



// router.get('/alithea/products', function (req, res, next) {
// 	res.render('products', {
// 		title: 'Products'
// 	})
// });


module.exports = router;