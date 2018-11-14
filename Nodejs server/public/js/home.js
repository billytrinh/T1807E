		function openMenu() {
			jQuery(".mobile-menu").animate({
				"left":"0"
			},500);
			jQuery(".bg-fade").show();
		}
		function closeMenu(){
			jQuery(".mobile-menu").animate({
				"left":"-67%"
			},500);
			jQuery(".bg-fade").hide();
		}
		jQuery(".has-sub").bind("mouseenter",function(){
			jQuery(this).children("ul.sub-menu").slideDown();
		});
		jQuery(".has-sub").bind("mouseleave",function(){
			jQuery(this).children("ul.sub-menu").hide();
		});
		var demo = angular.module("demoApp",["ngRoute","ngAnimate"]);
		demo.directive("header", function() {
			return {
				restrict : "C",
				templateUrl : "/header.html"
			};
		});
		demo.directive("footer", function() {
			return {
				restrict : "C",
				templateUrl : "/footer.html"
			};
		});
		demo.config(['$routeProvider',function($routeProvider) {
			$routeProvider
			.when("/", {
				templateUrl : "list.html"
			})
			.when("/detail/:contact_id", {
			   templateUrl : "detail.html",
			   controller: "detailController"
			})
			.when("/edit/:contact_id", {
			   templateUrl : "edit.html",
			   controller: "editController"
			}).otherwise({ redirectTo: '/' });
		}]);
		demo.controller("dataController",function($scope,$rootScope,$routeParams,$http){
			$http.get('/contacts').
                then(function(result, status, headers, config) {
                	console.log(result);
                	$rootScope.contacts = result.data;
                });
			$scope.showOne = function (){
				$scope.collapsed=false;
			}	
			$rootScope.page = 1;
			$scope.changePage = function(p){
				$rootScope.page = p;
			};
			$rootScope.contact_id = -1;
		});
		demo.controller("detailController",function($scope,$rootScope,$routeParams){
			var contact_id = $routeParams.contact_id;
			$scope.detail = $scope.contacts[contact_id];
			$rootScope.contact_id = contact_id;
		});
		demo.controller("editController",function($scope,$rootScope,$routeParams){
			$scope.detail = $rootScope.contacts[$rootScope.contact_id];
			$scope.submit = function(){
				$rootScope.contacts[$rootScope.contact_id] = {
					name: $scope.detail.name,
					phonenumb: $scope.detail.phonenumb,
					address: $scope.detail.address,
					studentcode: $scope.detail.studentcode,
					birth: $scope.detail.birth,
					gender: $scope.detail.gender,
					school: $scope.detail.school,
					classgrade: $scope.detail.classgrade,
					email: $scope.detail.email,
					twitter: $scope.detail.twitter,
				}
			};
		});