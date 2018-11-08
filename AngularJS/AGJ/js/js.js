
		var demo = angular.module("demoApp",["ngRoute","ngAnimate"]);
		
		demo.controller("demo2Controller",function($scope, $rootScope){
			$rootScope.contacts = contacts;
		});
				
		
		
		demo.controller('contactInfoCtrl', function ($scope, $rootScope, $routeParams){
		  var index = $routeParams.contact_index;
		  $scope.currentContact = contacts[index];
		  $rootScope.editContact = index;
		});


		demo.controller("formControllerEdit",function($scope,$rootScope,$routeParams){
			$scope.editContact = contacts[$routeParams.edit_index];
			$scope.submit = function(){
				$rootScope.contacts[$rootScope.edit_index] = {
					name: $scope.editContact.name,
					phone: $scope.editContact.phone,
					address: $scope.editContact.address,
				}
				// window.location.href='#!/detail/{{editContact}}';
			};
		});

		demo.directive("headerDemo",function(){
			
			return {
				restrict: 'AE',
				templateUrl : "/header.html"
			}
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
		    .when('/edit/:edit_index', {
			      templateUrl: 'formEdit.html',
			      controller: 'formControllerEdit'
		    })
		    .otherwise({ redirectTo: '/' });
		}]);
