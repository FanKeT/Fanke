app.controller("TvchannelCtrl", ['$scope', '$http', "myService",'$state', function ($scope, $http, myService,$state) {
	$http.get("data/1.json").success(function(data){
   		 $scope.data = data;
   })

	// 显示商品详情
	$scope.showDetail=function(){
		$state.go('goodDetail',{id : JSON.stringify(this.item)})
	}
}]);