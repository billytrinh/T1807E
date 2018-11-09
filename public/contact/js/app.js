var app = angular.module('iphonecontact',["ngRoute","ngAnimate"]);

app.directive('headerApp', function() {
    return {
        restrict: 'A',
        templateUrl: 'components/header.html'
    }
});

app.directive('footerApp', function() {
    return {
        restrict: 'A',
        templateUrl: 'components/footer.html'
    }
});

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "components/list.html"
    })
    .when("/detail/:contact_id", {
        templateUrl: "components/detail.html",
        controller: "detailController"
    })
    .when("/edit/:contact_id", {
        templateUrl: "components/edit.html",
        controller: "editController"
    })
    .otherwise({ redirectTo: '/' });
}]);

app.controller('appController', function($scope,$rootScope,$http) {
    var contact_node = $http.get('/data');
    $rootScope.contacts = contact_node;
});

app.controller("detailController",function($scope,$rootScope,$routeParams) {
    var index_list = $routeParams.contact_id;
    $scope.detail = contacts[index_list];
    $rootScope.contact_id = index_list;
});

app.controller("editController", function($scope, $rootScope) {
    $scope.edit = contacts[$rootScope.contact_id];
    $scope.submit = function(){
		$rootScope.contacts[$rootScope.contact_id] = {
			name: $scope.edit.name,
			phone: $scope.edit.phone,
			address: $scope.edit.address,
		}
	};
});