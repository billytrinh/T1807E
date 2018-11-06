
		var demo = angular.module("demoApp",["ngRoute","ngAnimate"]);
		// demo.controller("demoController",function($scope){
		// 	$scope.total = 0;
		// 	$scope.name = "phong";
		// 	$scope.addTotal = function(){
		// 		$scope.total++;
		// 	};
		// 	$scope.truTotal = function(){
		// 		$scope.total--;
		// 	};
		// });
		// demo.controller("demo2Controller",function($scope){
		// 	var studentAA = [
		// 		{
		// 			name: "Le Van A",
		// 			birthday: 1256
		// 		},
		// 		{
		// 			name: "Le Van B",
		// 			birthday: 1200
		// 		},
		// 		{
		// 			name: "Le Van C",
		// 			birthday: 1243
		// 		},
		// 		{
		// 			name: "Le Van D",
		// 			birthday: 1299
		// 		},
		// 		{
		// 			name: "Le Van E",
		// 			birthday: 1211
		// 		},
		// 		{
		// 			name: "Le Van F",
		// 			birthday: 1234
		// 		},
		// 	];
		// 	$scope.students = studentAA;
		// });
		demo.controller("demo2Controller",function($scope){
			$scope.contacts = contacts;
		});
				
		// demo.directive("headerDemo",function(){
		// 	var html = ''
		// 	html += '<h3 class="jumbotron col-lg-8 col-md-8 col-sm-10 col-xs-10">DANH SÁCH LIÊN HỆ</h3>'
		// 	return {
		// 		restrict: 'AE',
		// 		template : html
		// 	}
		// });
		
		demo.controller('contactInfoCtrl', function ($scope, $routeParams){
		  var index = $routeParams.contact_index;
		  $scope.currentContact = contacts[index];
		});

		demo.directive("headerDemo",function(){
			
			return {
				restrict: 'AE',
				templateUrl : "/header.html"
			}
		});

		demo.config(function($routeProvider){
			$routeProvider
			.when("/home2",{
				templateUrl: "home2.html"
			})
			
		});
		
		demo.config(['$routeProvider',function($routeProvider){
			$routeProvider
			.when('/detail/:contact_index', {
			      templateUrl: 'detail.html',
			      controller: 'contactInfoCtrl'
		    })
		    .when('/', {
			      templateUrl: 'list.html',
			      controller: 'demo2Controller'
		    })
		    .when('/add', {
			      templateUrl: 'formAdd.html',
			      controller: 'formController'
		    })
		    .when('/edit', {
			      templateUrl: 'formEdit.html',
			      controller: 'formControllerEdit'
		    })
   //     		$locationProvider.html5Mode({
			//   enabled: true,
			//   requireBase: false
			// })
		}]);
