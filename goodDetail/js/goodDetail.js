app.controller("goodDetailCtrl", ['$scope','myService','$stateParams',function ($scope,myService, $stateParams) {

    $scope.id = JSON.parse($stateParams.id);

    $scope.addGood = function(){

		// 使用服务保存商品

		myService.addGoods($scope.id);
	$scope.count = myService.countGoods();

		// myService.countGoods() = $('.addCart span').text();

	}
	$scope.count = myService.countGoods();
		// 购物车数据条数

}]);

	
