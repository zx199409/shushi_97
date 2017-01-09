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
/**
 * Created by Administrator on 2017/1/3.
 */
angular.module('myApp.myCart',['ionic']).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('myCart',{
        url:'/myCart',
        templateUrl:'myCart.html',
        controller:'myCartController'

    });
}]).controller('myCartController',['$scope','$ionicPopup','HttpFactory',function ($scope,$ionicPopup,HttpFactory) {

    var url = 'http://114.112.94.166/sunny/wap/api/ushoppingCart';
    HttpFactory.getData(url).then(function (result){
        $scope.carts = result.shoppingCart;
        $scope.nums = result.shoppingCart.length;
        console.log($scope.nums);
    });


    $scope.showConfirm = function() {
        var alertPopup = $ionicPopup.alert({
            cssClass:'Order',
            title: '确定要删除该商品吗？',
            buttons:[{text:'取消'},{text:'确定'}]
        });
        alertPopup.then(function(res) {
        });
    };

}]);
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
/**
 * Created by Administrator on 2016/12/2.
 */
angular.module('myApp.person',['ionic']).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('tabs.person',{
        url:'/person',
        views:{
            'tabs-person':{
                templateUrl:'person.html',
                controller:'personController'
            }
        }
    });
}]).controller('personController',['$scope','$state','$ionicViewSwitcher',function ($scope,$state,$ionicViewSwitcher) {
    console.log('进入个人中心页面');
   //跳转订单详情页面
   $scope.myOrder = function () {
       $state.go('order');
       $ionicViewSwitcher.nextDirection('forward');
   };
   //跳转收藏详情页面
   $scope.loveGoods = function () {
       $state.go('collect');
       $ionicViewSwitcher.nextDirection('forward');
   };
   // 跳转购物车详情页面
   $scope.shoppingCart = function () {
       $state.go('myCart');
       $ionicViewSwitcher.nextDirection('forward');
   }
   // 跳转我的积分详情页面
   $scope.myIntegral =function () {
       $state.go('myIntegral');
       $ionicViewSwitcher.nextDirection('forward');
   }
// 跳转我的收获地址详情页面
    $scope.address =function () {
        $state.go('address');
        $ionicViewSwitcher.nextDirection('forward');
    }
// 跳转我的支付记录详情页面
    $scope.payment =function () {
        $state.go('payment');
        $ionicViewSwitcher.nextDirection('forward');
    }
}]);
/**
 * Created by Administrator on 2016/12/2.
 */
angular.module('myApp.points',[]).config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state('tabs.points',{
        url:'/points',
        views:{
            'tabs-points':{
                templateUrl:'points.html',
                controller:'pointsController'
            }
        }

    });
}]).controller('pointsController',['$scope','HttpFactory',function ($scope,HttpFactory) {

    var url = "http://114.112.94.166/sunny/wap/api/getGoods";
    HttpFactory.getData(url).then(function (result) {
        $scope.its = result.goodsData;
        $scope.items = result.bannerData;
        console.log($scope.items);
    });
}]);
/**
 * Created by Administrator on 2016/12/2.
 */
angular.module('myApp.shop',[]).config(['$stateProvider',function ($stateProvider) {
    $stateProvider.state('tabs.shop',{
        url:'/shop',
        views:{
            'tabs-shop':{
                templateUrl:'shop.html',
                controller:'shopController'
            }
        }
    });
}]).controller('shopController',['$scope','HttpFactory',function ($scope,HttpFactory) {

//请求加盟店接口
    var url = "http://114.112.94.166/sunny/wap/api/franchise";
    HttpFactory.getData(url).then(function (result) {
        $scope.shops = result.data;
        console.log($scope.shops);
    })

}]);
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
/**
 * Created by qingyun on 16/12/2.
 */
angular.module('myApp.slideBox',[]).directive('mgSlideBox',[function () {
    return{
        restrict:"E",
        scope:{sourceArray:'='},
        templateUrl:'slideBox.html',
        controller:['$scope','$state','$ionicSlideBoxDelegate','$element',function ($scope,$state,$ionicSlideBoxDelegate,$element) {
            $scope.goToDetailView = function (index) {
                // console.log('进入详情页' + index);
            };
            var lastSpan = $element[0].lastChild;
            // console.log(lastSpan,'/////');
            $scope.$watch('sourceArray',function (newVal,oldVal) {
                if (newVal && newVal.length){
                    $scope.isShowSlide = false;
                    setTimeout(function () {
                        $scope.isShowSlide = true;
                    });
                    //     //轮播标题
                    // lastSpan.innerText = ($scope.sourceArray[0]).title;
                    // $scope.slideHasChanged = function (index) {
                    //     // console.log(index);

                    //     lastSpan.innerText = $scope.sourceArray[index].title;
                    //     // $ionicSlideBoxDelegate.$getByHandle('topCarouselSlideBox').update();
                    // };
                }
            });
            $ionicSlideBoxDelegate.$getByHandle('mainSlideBox').enableSlide(false);
            $scope.drag = function (event) {
                $ionicSlideBoxDelegate.$getByHandle('mainSlideBox').enableSlide(false);
                //阻止事件冒泡
                event.stopPropagation();
            };

        }],
        replace:true,
        link:function (scope,tElement,tAtts) {
        }
    };
}]);
