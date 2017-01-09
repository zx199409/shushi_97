/**
 * Created by Administrator on 2016/12/2.
 */
angular.module('myApp.shop',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.shop',{
        url:'/shop',
        views:{
            'tabs-shop':{
                templateUrl:'shop.html',
                controller:'shopController'
            }
        }
    });
}]).controller('shopController',['$scope','HttpFactory',function ($scope,HttpFactory) {

//请求加盟店接口
    var url = "http://114.112.94.166/sunny/wap/api/franchise";
    HttpFactory.getData(url).then(function (result) {
        $scope.shops = result.data;
        console.log($scope.shops);
    })

}]);