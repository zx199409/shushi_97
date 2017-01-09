/**
 * Created by Administrator on 2016/12/2.
 */
angular.module('myApp',['ionic','RongWebIMWidget','myApp.slideBox','myApp.tabs','myApp.http','myApp.home','myApp.points','myApp.shop','myApp.person','myApp.homeDetail','myApp.order','myApp.collect','myApp.myCart','myApp.integral','myApp.address','myApp.payment']).config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function ($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
    //配置安卓
    $ionicConfigProvider.views.transition('ios');
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.navBar.alignTitle('center');
    $ionicConfigProvider.tabs.style('standard');
    //路由跳转
    $stateProvider.state('tabs',{
        url:'/tabs',
        abstract:true,
        templateUrl:'tabs.html',
        controller:'tabsController'
    });
    $urlRouterProvider.otherwise('tabs/home');
}]);