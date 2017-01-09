/**
 * Created by Administrator on 2017/1/3.
 */
angular.module('myApp.order',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('order',{
        url:'/order',
        templateUrl:'order.html',
        controller:'orderController'

    });
}]).controller('orderController',['$scope',function ($scope) {

}]);