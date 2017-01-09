/**
 * Created by Administrator on 2016/12/27.
 */
angular.module('myApp.http',[]).factory('HttpFactory',['$http','$q',function ($http,$q) {
    return {
        getData:function (url,type) {
            if (url){
                var promise = $q.defer();
                // url = "http://59.110.139.104:3000/wy?myUrl=" + encodeURIComponent(url);
                type = type ? type:"GET";
                $http({
                    url:url,
                    method:type,
                    timeout:20000
                }).then(function (reslut) {

                    reslut =reslut.data;

                    promise.resolve(reslut);
                },function (err) {
                    promise.reject(err);
                });
                return promise.promise;
            }
        }
    };
}]);