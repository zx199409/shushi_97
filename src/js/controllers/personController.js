/**
 * Created by Administrator on 2016/12/2.
 */
angular.module('myApp.person',['ionic']).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('tabs.person',{
        url:'/person',
        views:{
            'tabs-person':{
                templateUrl:'person.html',
                controller:'personController'
            }
        }
    });
}]).controller('personController',['$scope','$state','$ionicViewSwitcher',function ($scope,$state,$ionicViewSwitcher) {
    console.log('进入个人中心页面');
   //跳转订单详情页面
   $scope.myOrder = function () {
       $state.go('order');
       $ionicViewSwitcher.nextDirection('forward');
   };
   //跳转收藏详情页面
   $scope.loveGoods = function () {
       $state.go('collect');
       $ionicViewSwitcher.nextDirection('forward');
   };
   // 跳转购物车详情页面
   $scope.shoppingCart = function () {
       $state.go('myCart');
       $ionicViewSwitcher.nextDirection('forward');
   }
   // 跳转我的积分详情页面
   $scope.myIntegral =function () {
       $state.go('myIntegral');
       $ionicViewSwitcher.nextDirection('forward');
   }
// 跳转我的收获地址详情页面
    $scope.address =function () {
        $state.go('address');
        $ionicViewSwitcher.nextDirection('forward');
    }
// 跳转我的支付记录详情页面
    $scope.payment =function () {
        $state.go('payment');
        $ionicViewSwitcher.nextDirection('forward');
    }
}]);