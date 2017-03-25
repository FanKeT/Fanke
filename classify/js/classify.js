app.controller("classifyCtrl", ['$scope', '$http', "myService", function ($scope, $http, myService) {

   // tab 数据颜色切换

   
   $('.nav_ul').on('click','li',function(){
   		$(this).addClass('tab').siblings().removeClass('tab');
   })




   $(".sort").addClass("bg2");
}]);