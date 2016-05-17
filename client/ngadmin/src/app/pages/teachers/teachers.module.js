/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teachers', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('teachers', {
          url: '/teachers',template : '<ui-view></ui-view>',
          abstract: true,
          title: '老师管理',
            sidebarMeta: {
                icon: 'ion-beer',
                order: 40,
            },
        })
        .state('teachers.list', {
            url: '',
            templateUrl: 'app/pages/teachers/teachers.list.html',
            title: '老师列表',
            controller: 'TeachersCtrl',
            sidebarMeta: {
                order: 0,
            },
        })
        .state('teachers.add', {
            url: '/add',
            templateUrl: 'app/pages/teachers/teachers.detail.html',
            title: '添加老师',
            sidebarMeta: {
                order: 10,
            },
        })
        .state('teachers.edit', {
            url: '/{id}',
            templateUrl: 'app/pages/teachers/teachers.detail.html',
            title: '编辑老师'

        })
    ;

      $urlRouterProvider.when('/teachers','/teachers/add');
        //sidebar的service中 过滤了没有 sidebarMeta的state

  }

})();
