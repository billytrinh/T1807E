var app = angular.module("appDemo",["ngRoute","ngAnimate"]);
app.directive("headerApp",function(){
	return {
		restrict: "A",
		templateUrl: "/header.html"
	}
});
app.directive("footerApp",function(){
	return {
		restrict: "A",
		templateUrl: "/footer.html"
	}
});
app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "list.html"
    })
    //.when("/detail/:contact_id", {
      //  templateUrl : "detail.html",
       // controller: "detailController"
    //}).otherwise({ redirectTo: '/' });
}]);
app.controller("dataController",function($scope){
	$scope.contacts = contacts;
	$scope.isHome = true;
	// $scope.changePage = function(){
	// 	if($scope.isHome){
	// 		$scope.isHome = false;
	// 	}else{
	// 		$scope.isHome = true;
	// 	}
	// }
});
// app.controller("detailController",function($scope,$routeParams){
// 	$scope.isHome = false;
// 	$scope.contact_id = $routeParams.contact_id;
// 	$scope.detail = contacts[$scope.contact_id];
// });