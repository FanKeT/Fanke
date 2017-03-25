app.controller("nanzhuangCtrl", ['$scope', '$http', "myService", function ($scope, $http, myService) {
	$http.get("data/sort2.json").success(function(data){
   		 $scope.data = data;
   })
}]);