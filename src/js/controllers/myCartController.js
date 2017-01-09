/**
 * Created by Administrator on 2017/1/3.
 */
angular.module('myApp.myCart',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('myCart',{
        url:'/myCart',
        templateUrl:'myCart.html',
        controller:'myCartController'

    });
}]).controller('myCartController',['$scope','$ionicPopup','HttpFactory',function ($scope,$ionicPopup,HttpFactory) {

    var url = 'http://114.112.94.166/sunny/wap/api/ushoppingCart';
    HttpFactory.getData(url).then(function (result){
        $scope.carts = result.shoppingCart;
        $scope.nums = result.shoppingCart.length;
        console.log($scope.nums);
    });


    $scope.showConfirm = function() {
        var alertPopup = $ionicPopup.alert({
            cssClass:'Order',
            title: '确定要删除该商品吗？',
            buttons:[{text:'取消'},{text:'确定'}]
        });
        alertPopup.then(function(res) {
        });
    };

}]);