// 路由
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	// 配置默认锚点
	 $urlRouterProvider.when('', 'home');	
	 $urlRouterProvider.when('/classify', 'classify/tuijian');
	 $urlRouterProvider.when('/Tshirt', 'Tshirt/sales');

	// 配置路由
	 $stateProvider
	 .state('home',{
	 	url : '/home',
	 	templateUrl : './home/home.html',
	 	controller : "homeCtrl"
	 })

	  .state('classify',{
	 	url : '/classify',
	 	templateUrl : './classify/classify.html',
	 	controller : "classifyCtrl"
	 })
	   .state('channel',{
	 	url : '/channel',
	 	templateUrl : './channel/channel.html',
	 	controller : 'channelCtrl'
	 })
	    .state('car',{
	 	url : '/car',
	 	templateUrl : './car/car.html',
	 	controller : 'carCtrl'
	 })
	     .state('my',{ 
	 	url : '/my',
	 	templateUrl : './my/my.html',
	 	controller : 'myCtrl'
	 })
	     // 登录路由
	      .state('logo',{ 
	 	url : '/logo',
	 	templateUrl : './my/logo.html',
	 	controller : 'logoCtrl'
	 })

	     // TVchannel路由
	 .state('TVchannel',{
	 	url : '/TVchannel',
	 	templateUrl: './channel/TVchannel.html',
	 	controller : 'TvchannelCtrl'
	 })
	 .state('goodDetail',{
	 	url : '/goodDetail/:id',
	 	templateUrl : './goodDetail/goodDetail.html',
	 	controller : 'goodDetailCtrl'
	 })

	 // T恤路由
	 .state('Tshirt',{
	 	url : '/Tshirt',
	 	templateUrl : './classify/Tshirt.html',
	 	controller : 'TshirtCtrl'
	 })


	 // 分类二级路由
	 // 推荐
	 .state('classify.tuijian',{
	 	url : '/tuijian',
	 	templateUrl: './classify/tuijian.html',
	 	controller: 'tuijianCtrl'
	 })
	 // 男装
	  .state('classify.nanzhuang',{
	 	url : '/nanzhuang',
	 	templateUrl: './classify/nanzhuang.html',
	 	controller: 'nanzhuangCtrl'
	 })

	    // T恤二级路由
	   .state('Tshirt.sales',{
	 	url : '/sales',
	 	templateUrl : './classify/sales.html',
	 	controller : 'salesCtrl'
	 })

	   .state('Tshirt.newGood',{
	   	url : '/newGood',
	   	templateUrl: './classify/newGood.html',
	   	// controller : 'newGood'
	   })

}])

// 隐藏footer
app.run(['$window', '$rootScope' , 'myService','$state',function ($window, $rootScope,myService,$state) {
		//$rootScope 全局作用域，用于存储全局变量，在任何地方都可以使用
		$rootScope.$on('$locationChangeSuccess', function () {
			//如果浏览器地址包含 所点击的目标节点那么就隐藏footer
			if (($window.location.href.indexOf('goodDetail') != -1) ||($window.location.href.indexOf('logo') != -1)) {
				$rootScope.rootIsNavShow = false;
			} else {
				$rootScope.rootIsNavShow = true;
			}

			if (($window.location.href.indexOf('car') != -1)) {
				if(myService.getAllGoods().length>0){
					$rootScope.rootIsNavShow = false;
				}else if (myService.getAllGoods().length == 0){
					$rootScope.rootIsNavShow = true;
				}
				else{
					$rootScope.rootIsNavShow = true;
				}
			}



		});
	}])

app.run(['$window', '$rootScope' , function ($window, $rootScope) {
		//$rootScope 全局作用域，用于存储全局变量，在任何地方都可以使用
		$rootScope.$on('$locationChangeSuccess', function () {
			//如果浏览器地址包含 所点击路由锚点那么就显示字体颜色 
			if ($window.location.href.indexOf('newGood') != -1){
				$rootScope.rootColorShow1 = true;
			} else {
				$rootScope.rootColorShow1= false;
			}
			if ($window.location.href.indexOf('sales') != -1){
				$rootScope.rootColorShow2 = true;
			} else {
				$rootScope.rootColorShow2= false;
			}

		});
	}])


