var loginDemo = angular.module('loginDemo', []);


loginDemo.controller("mainCtrl", ['$scope', function($scope){
    $scope.message = "angular works";
}]);