/**
 * Created by Administrator on 2017/1/4.
 */
angular.module('myApp.address',['ionic']).config(['$stateProvider',function ($stateProvider) {


    $stateProvider.state('address',{
        url:'/address',
        templateUrl:'address.html',
        controller:'addressController'
    });
}]).controller('addressController',['$scope','$ionicPopup','HttpFactory',function ($scope,$ionicPopup,HttpFactory) {

    var url = "http://114.112.94.166/sunny/wap/api/uAddress";
    HttpFactory.getData(url).then(function (result) {
        $scope.adds = result.addressData;
        console.log( $scope.adds);
    });
    // $scope.doConcern = function (index) {
    //     $scope.add[index].state = !$scope.add[index].state;
    // };



    $scope.remove = function() {
        var alertPopup = $ionicPopup.alert({
            cssClass:'Order',
            scope:$scope,
            title: '确认要删除该地址吗?',
            buttons:[{
                text:'取消',
                onTap:function () {
                
            }
            },{
                text:'确定',
                onTap:function () {
                    // $scope.data.splice(index,1);
                }
            }]
        });
        alertPopup.then(function(res) {
        });
    };

}]);