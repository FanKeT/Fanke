

app.controller("homeCtrl", ["myService","$scope",'$http','$state', function(myService,$scope,$http,$state){
  $scope.arr = ["home/imgs/slider1.jpg", "home/imgs/slider2.jpg", "home/imgs/slider3.jpg", "home/imgs/slider4.jpg", "home/imgs/slider6.jpg","home/imgs/slider.jpg"];
      // 回到顶部

  
     // 轮播图

    new Swiper ('.swiper-container', {
          loop: true,
          autoplay: 1000,
          observer:true,
          autoplayDisableOnInteraction : false,
          // 如果需要分页器
          pagination: '.swiper-pagination',
    })

    $('.top-left').on('click', function(){    
        $('.searchPage').css('display','block');         
    });
    $(".searchPage").on("click", function(){
        $(this).css('display','none'); 
    });

    // 春季精品数据
    $http.get("data/chunjixp.json").success(function(data){
       $scope.data = data;
   })
    
    // 显示商品详情
  $scope.showDetail=function(){
    $state.go('goodDetail',{id : JSON.stringify(this.item)})
  }

    // footer换肤

    $(".fanke").addClass("bg1");




}]);


 


