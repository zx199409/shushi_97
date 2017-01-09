/**
 * Created by Administrator on 2016/12/2.
 */
angular.module('myApp.tabs',[]).controller('tabsController',['$scope',function ($scope) {

     $scope.$on('$stateChangeSuccess',function (evt,current,previous) {
            var update_wx_title = function(title) {
                var body = document.getElementsByTagName('body')[0];
                document.title = title;
                var iframe = document.createElement("iframe");
                // iframe.setAttribute("src", "../empty.png");
                iframe.addEventListener('load', function() {
                    setTimeout(function() {
                        // iframe.removeEventListener('load');
                        document.body.removeChild(iframe);
                    });
                });
                document.body.appendChild(iframe);
            };
            //根据路由跳转实现不同功能
            var kf = angular.element(document.getElementById('rong-widget-minbtn'));
            switch (current.url){
                case '/home':
                    update_wx_title("SUNNY SHU官方商城");
                    kf.css('display','block');
                    break;
                case '/points':
                    update_wx_title("积分商城");
                    kf.css('display','block');
                    break;
                case '/shop':
                    update_wx_title("加盟店");
                    kf.css('display','none');
                    break;
                case '/personal':
                    update_wx_title("个人中心");
                    kf.css('display','none');
                    break;

            }


        });

    }]);