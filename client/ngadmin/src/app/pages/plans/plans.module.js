/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.plans', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('plans', {
          url: '/plans',template : '<ui-view></ui-view>',
          abstract: true,
          title: '课程安排',
            sidebarMeta: {
                icon: 'ion-calendar',
                order: 10,
            },
        })
        .state('plans.list', {
            url: '',
            templateUrl: 'app/pages/plans/plans.list.html',
            title: '课程列表',
            controller: 'PlansCtrl',
            sidebarMeta: {
                order: 0,
            },
        })
        .state('plans.add', {
            url: '/add',
            templateUrl: 'app/pages/plans/plans.detail.html',
            title: '添加课程',
            sidebarMeta: {
                order: 10,
            },
        })
        .state('plans.forget', {
            url: '/forget',
            templateUrl: 'app/pages/plans/plans.list.html',
            title: '补课管理',
            sidebarMeta: {
                order: 40,
            },
        })
        .state('plans.edit', {
            url: '/{id}',
            templateUrl: 'app/pages/plans/plans.detail.html',
            title: '编辑课程'

        });


      $urlRouterProvider.when('/plans','/plans/add');
        //sidebar的service中 过滤了没有 sidebarMeta的state



  }


})();
