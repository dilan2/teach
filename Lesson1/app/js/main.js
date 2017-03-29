var myApp = angular.module("myApp", [])
.controller('mycontroller', ['$scope', function($scope){
$scope.myvar = 'Hello world';

// $scope.func = function() {
// 	// return 'Привет!';
// }

$scope.inputVar = 'Тут текст инпута';

$scope.func = function() {
	console.log( $scope.inputVar );
};

$scope.flag = false;

// $scope = {};
// scope.myavar = 'Hello world';

}])