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
}
)