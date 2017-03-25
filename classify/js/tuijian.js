app.controller("tuijianCtrl", ['$scope', '$http', "myService", function ($scope, $http, myService) {
	$http.get("data/sort1.json").success(function(data){
   		 $scope.data = data;
   })

   
}]);