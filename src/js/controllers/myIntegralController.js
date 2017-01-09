/**
 * Created by Administrator on 2017/1/4.
 */
angular.module('myApp.integral',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('myIntegral',{
        url:'/myIntegral',
        templateUrl:'myIntegral.html',
        controller:'myIntegralController'
    });
}]).controller('myIntegralController',['$scope','HttpFactory',function ($scope,HttpFactory) {

    var url = "http://114.112.94.166/sunny/wap/api/uintegral";
    HttpFactory.getData(url).then(function (result) {
        $scope.integrals = result.integralData
        console.log( $scope.integrals);
    })

}]);