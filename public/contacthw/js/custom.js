var iPhoneContact = angular.module("iPhoneContact",["ngRoute","ngAnimate"])
iPhoneContact.directive("headerDemo",function() {
    return {
            restrict: 'AE',
            templateUrl: 'header.html'
        };
});
iPhoneContact.directive("footerDemo",function () {
    return {
        restrict: 'A',
        templateUrl: 'footer.html'
    }
});
iPhoneContact.controller("dataController",function ($scope)
{
    $scope.contacts = contacts;
});
iPhoneContact.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/haha", {
        templateUrl : "haha.html"
    });
}]);