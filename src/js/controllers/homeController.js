/**
 * Created by Administrator on 2016/12/2.
 */
angular.module('myApp.home',[]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('tabs.home',{
        url:'/home',
        views:{
            'tabs-home':{
                templateUrl:'home.html',
                controller:'homeController'
            }
        }
    })
}]).controller('homeController',['$scope','$ionicModal','RongCustomerService','$state','$ionicViewSwitcher','HttpFactory',function ($scope,$ionicModal,RongCustomerService,$state,$ionicViewSwitcher,HttpFactory) {

    $scope.home ={
        changeNum:changeNum,
        goodsNum:1,

    }
     //请求首页内容接口
     var url = "http://114.112.94.166/sunny/wap/api/getGoods";
    HttpFactory.getData(url).then(function (result) {
        $scope.its = result.goodsData;
        $scope.items = result.bannerData;
        console.log($scope.items);

    });

    //模态
    $ionicModal.fromTemplateUrl('modal.html',{
        scope:$scope,
        animation:'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();

    };
    $scope.$on('modal.removed',function () {

    });


    //    购买数量的变化
    function changeNum(str) {
        if(str=='add'){
            $scope.home.goodsNum++;
        }
        if(str=='reduce'&$scope.home.goodsNum>1){
            $scope.home.goodsNum--;
        }
    }
    //融云
    var dWidth = document.body.offsetWidth;
    var dHeight = document.body.offsetHeight;
    RongCustomerService.init({
        appkey: "8brlm7uf8biy3",
        token: "EjzV/HAYCM4R/XU+vwCVgqfYJyLwTpiXPNFBcUjph1giqU/Eh9ISSbV/C9IiC4N6M0GSHGMEd92m2G1kBu8F1Q==",
        customerServiceId:"KEFU148301002880692",
        position: RongCustomerService.Position.right,
        reminder: "",
        style:{
            width:window.screen.width,
            height:window.screen.height+5,
            displayMinButton:false,
            positionFixed:true
        },
        onSuccess:function(){
            //初始化完成
            //设置客服按钮位置
            var kf = angular.element(document.getElementById('rong-widget-minbtn'));
            kf.css('bottom','80px');
            kf.css('right','20px');
            var rongSendBtn = angular.element(document.getElementById('rong-sendBtn'));
            rongSendBtn.css('backgroundColor','#E60012');
            kf.on('click',function () {
                // $rootScope.hideTabs = true;
                // $state.reload();
                // $scope.openModal();
                // $state.go('rykf');
                // console.log(indexRY);
                // indexRY.style.position = 'absolute';
                // indexRY.style.height = '800px';
                // indexRY.style.width = '300px';
                // indexRY.style.backgroundColor = 'red';
                // document.body.removeChild(mm);
                // rongConversation.removeClass('ng-hide');

            });

            var minBtn = angular.element(document.getElementById('header').childNodes[1].childNodes[1]);
            minBtn.on('click',function () {
                // $rootScope.hideTabs = false;
                // $state.reload();
            });
            // WebIMWidget.onClose = function() {
            //     // $rootScope.hideTabs = false;
            //     $state.reload();
            // };


        },
        onError:function(){
            //初始化错误
        }

    });

    //跳转首页详情页
    $scope.goToHomeDetail =function (index) {
        $state.go('homeDetail');
        $ionicViewSwitcher.nextDirection('forward');
    };


}]);