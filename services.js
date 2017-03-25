app.service("myService", [function(){
	var arr = [];
	this.addGoods = function(obj){
		var flag = true;
		for(var i = 0; i<arr.length; i++ ){
			if(arr[i].name == obj.name){
				arr[i].num+=1;
				flag = false;
			}
		}
		if(flag == true){
			obj.num = 1;
			arr.push(obj);
		}	
	};
	this.getAllGoods = function(){
		return arr;
	}

	//计数 
	this.countGoods = function(){
		return arr.length;
	}
	// 删除商品
	this.delGoods= function(obj){
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].name==obj.name) {
				arr.splice(i, 1);
			}
		}
	}

	//返回顶部
	



}]);
