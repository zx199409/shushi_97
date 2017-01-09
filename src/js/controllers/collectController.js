/**
 * Created by Administrator on 2017/1/3.
 */
angular.module('myApp.collect',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('collect',{
        url:'/collect',
        templateUrl:'collect.html',
        controller:'collectController'
    })
}]).controller('collectController',['$scope','HttpFactory','$ionicPopup',function ($scope,HttpFactory,$ionicPopup) {


    var url = 'http://114.112.94.166/sunny/wap/api/ucollection';
    HttpFactory.getData(url).then(function (result){
        $scope.collects = result.collectionData;
        console.log($scope.collects);
    });


    $scope.goShare = function() {
        var alertPopup = $ionicPopup.alert({
            cssClass:'Order',
            title: '确定要删除该商品吗？',
            buttons:[{text:'取消'},{text:'确定'}]
        });
        alertPopup.then(function(res) {
        });
    };
}]);