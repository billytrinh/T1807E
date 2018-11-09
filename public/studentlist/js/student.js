var student = angular.module('studentapp',["ngRoute","ngAnimate"]);

student.controller('studentController', function($scope,$rootScope,$http){
    $http.get('/student').
    then(function(result, status, headers, config) {
        console.log(result);
        $scope.students = result.data;
    });
});