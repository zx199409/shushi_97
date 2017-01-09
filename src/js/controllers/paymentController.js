/**
 * Created by Administrator on 2017/1/7.
 */
angular.module('myApp.payment',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('payment',{
        url:'/payment',
        templateUrl:'payment.html',
        controller:'paymentController'
    })
}]).controller('paymentController',['$scope',function ($scope) {



}]);