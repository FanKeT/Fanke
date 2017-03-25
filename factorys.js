app.factory('myFactory', function (myService) {
    return {
        calcPrice: function () {
            var money = 0;
            myService.getAllGoods().forEach(function (item) {
                money += Number(item.price * item.num);
            });
            return money;
        }
    };
});