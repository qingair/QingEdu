/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.students', ['BlurAdmin.pages.students.amCharts'])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('students', {
          url: '/students',template : '<ui-view></ui-view>',
          abstract: true,
          title: '学生管理',
            sidebarMeta: {
                icon: 'ion-icecream',
                order: 20,
            },
        })
        .state('students.list', {
            url: '',
            templateUrl: 'app/pages/students/students.list.html',
            title: '学生列表',
            controller: 'StudentsCtrl',
            sidebarMeta: {
                order: 0,
            },
        })
        .state('students.add', {
            url: '/add',
            templateUrl: 'app/pages/students/students.detail.html',
            title: '添加学生',
            sidebarMeta: {
                order: 10,
            },
        })
        .state('students.edit', {
            url: '/{id}',
            templateUrl: 'app/pages/students/students.detail.html',
            title: '编辑学生'

        })
    ;

      $urlRouterProvider.when('/students','/students/add');
        //sidebar的service中 过滤了没有 sidebarMeta的state

  }

})();
