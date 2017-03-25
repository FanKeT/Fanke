app.controller("salesCtrl", ['$scope', '$http', "myService", function ($scope, $http, myService) {
	$http.get("data/1.json").success(function(data){
   		 $scope.data = data;
   })

   
}]);