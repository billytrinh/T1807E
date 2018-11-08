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
    //.otherwise({ redirectTo: '/' });
}]);

app.controller('appController', function($scope,$rootScope) {
    $scope.contacts = contacts;
});

app.controller("detailController",function($scope,$rootScope,$routeParams) {
    var index_list = $routeParams.contact_id;
    $scope.detail = contacts[index_list];
    $rootScope.contact_id = index_list;
});

app.controller("editController", function($scope, $rootscope){
    $scope.index = $rootscope.contacts;
})