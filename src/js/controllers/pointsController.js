/**
 * Created by Administrator on 2016/12/2.
 */
angular.module('myApp.points',[]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('tabs.points',{
        url:'/points',
        views:{
            'tabs-points':{
                templateUrl:'points.html',
                controller:'pointsController'
            }
        }

    });
}]).controller('pointsController',['$scope','HttpFactory',function ($scope,HttpFactory) {

    var url = "http://114.112.94.166/sunny/wap/api/getGoods";
    HttpFactory.getData(url).then(function (result) {
        $scope.its = result.goodsData;
        $scope.items = result.bannerData;
        console.log($scope.items);
    });
}]);