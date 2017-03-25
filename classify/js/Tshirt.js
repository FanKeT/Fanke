app.controller("TshirtCtrl", ['$scope', '$http', "myService",'$state', function ($scope,
 $http, myService,$state) {
 	// 请求数据
	$http.get("data/TiXuNew.json").success(function(data){
   		 $scope.data = data;
   })
	// 显示商品详情
	$scope.showDetail=function(){
		$state.go('goodDetail',{id : JSON.stringify(this.item)})
	}

}]);