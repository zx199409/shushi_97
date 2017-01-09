/**
 * Created by Administrator on 2016/12/29.
 */
angular.module('myApp.homeDetail',[]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('homeDetail',{
        url:'/homeDetail',
        templateUrl:'homeDetail.html',
        controller:'homeDetailController'


    });

}]).controller('homeDetailController',['$scope','$ionicViewSwitcher',function ($scope,$ionicViewSwitcher) {


    $scope.homeDetail = {
        goodsDetail:'homeDetail1.html',
        changeDetail:changeDetail

    };


    $scope.goBack = function () {
        window.history.go(-1);
        $ionicViewSwitcher.nextDirection('back');
    }

    //商品详情和评论切换
    function changeDetail(e) {
        var detail_for = angular.element(document.querySelector('.detail_for')).children();
        detail_for.removeClass('active');
        angular.element(e.target).addClass('active');
        if(e.target.innerHTML=='商品详情'){
            $scope.homeDetail.goodsDetail='homeDetail.html'
        }
        if(e.target.innerHTML=='商品参数'){
            $scope.homeDetail.goodsDetail='homeDetail2.html'
        }
        if(e.target.innerHTML.indexOf('评价') !=-1){
            $scope.homeDetail.goodsDetail='homeDetail3.html'
        }

    }

}]);