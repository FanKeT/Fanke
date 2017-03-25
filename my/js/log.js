// alert("----")
app.controller("logoCtrl", ['$scope', '$http','$state', function ($scope, $http,$state) {
		
	
	
	userSpan = document.getElementById('user');
	var myUser = document.getElementById('username');
	myUser.onfocus = userFocus;
	function userFocus () {
		this.placeholder = '';
	}
	myUser.onblur = userB;
	function userB () {
		var str = myUser.value;
		var reg = /^\w+@\w+\.(com|cn|net|gov|com\.cn)$/;
		var reg1= /^1[34578]\d{9}$/;
		if (reg1.test(str)){
			userSpan.innerHTML = "√";
			return true;
		}
		else if(reg.test(str)) {
			userSpan.innerHTML = "√";
			return true;
		} else {
			return false;
	}
	}

	// 密码
	var myPwd = document.getElementById('pwd');
	myPwd.onfocus = pwdFocus;
	function pwdFocus () {
		this.placeholder = '';
	}
	myPwd.onblur = pwdB;

	function pwdB () {
		var str = myPwd.value;
		var reg = /^(\w|[!@#$%^&\*]){6,15}$/;
		if (str == '') {
			alert("密码不能为空");
			return false;
		}
		if (reg.test(str) == false) {
			return false;
		}else{
			return true;
		}
	}

	// 登录
	document.getElementById('mybtn').onclick = function () {
		if (userB() == true && pwdB() == true) {
				// alert("登录成功");
				// 跳转到页面
				$state.go('home')
			
		}else{
			alert('输入错误，请重新输入')
		}
	}
   
}]);

