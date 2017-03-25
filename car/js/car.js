app.controller('carCtrl',['myService', '$scope', 'myFactory',function(myService,$scope,myFactory){
	$scope.data = myService.getAllGoods();
	cartShowGood();
	cartInit ();

	// 显示或影藏商品money
	function cartShowGood() {
		if($scope.data.length > 0){
		$scope.flag = true;
		}else{
		$scope.flag = false;
		}
	}
	// 购物车初始化显示
	function cartInit () {
		if($scope.data.length > 0){
		$scope.flagc = false;
		}else{
		$scope.flagc = true;
		}
	}

	

	
	// 获取服务中的所有商品
	$scope.data = myService.getAllGoods();
	$scope.allMoney = myFactory.calcPrice();
	$scope.count = compute();

	// 加号事件
	$scope.add= function(){
		this.item.num++;
		$scope.allMoney = myFactory.calcPrice();
		$scope.count = compute();
	}


	// 减号事件
	$scope.eq=function(){
		if(this.item.num>1){
			this.item.num--;
			$scope.allMoney = myFactory.calcPrice();
		}
		$scope.count = compute();
	}
	//改变input的选中状态然后计算价钱
	$scope.changeIpt = function(event){
		var event = event || window.event;
		var price = Number($(event.target).parent().find(".price span").html());
		var num   = Number($(event.target).parent().find("#price_inpt").val());
		if(event.target.checked){						
			$scope.allMoney = $scope.allMoney + price * num;
			$scope.count = $scope.count + num;
		}else{
			$scope.allMoney = $scope.allMoney - price * num;
			$scope.count = $scope.count - num;
		}		
	}; 
	

	// 全选
	var ipts = $('.check');
	var flag = true;
	$scope.allChange = function(){
		var ipts = $('.check');
		if(flag == true){
			for(var i = 0;i<ipts.length;i++){
				ipts[i].checked = true;
				flag = false;
				$scope.allMoney = myFactory.calcPrice();
				$scope.count = compute();
			}

		}else{
				var ipts = $('.check');
			for(var i = 0;i<ipts.length;i++){
				ipts[i].checked = false;
			}
				flag = true;
				$scope.allMoney= 0;
		}

	}

	// 总数
	function compute(){
		var count = 0;
		for(var i = 0; i < $scope.data.length; i++){
			count += $scope.data[i].num;
		}
		return count;
	}


	// 删除商品
	$scope.delGood = function() {
		myService.delGoods(this.item);
		$scope.allMoney = myFactory.calcPrice();
		cartShowGood();
		cartInit ();
	 }

	// nav换颜色

	 $(".cart").addClass("bg4");	
}])



