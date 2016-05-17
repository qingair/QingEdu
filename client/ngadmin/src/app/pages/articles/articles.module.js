/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.articles', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('articles', {
          url: '/articles',template : '<ui-view></ui-view>',
          abstract: true,
          title: '文章管理',
            sidebarMeta: {
                icon: 'ion-university',
                order: 20,
            },
        })
        .state('articles.list', {
            url: '',
            templateUrl: 'app/pages/articles/articles.list.html',
            title: '文章列表',
            controller: 'ArticlesCtrl',
            sidebarMeta: {
                order: 0,
            },
        })
        .state('articles.add', {
            url: '/add',
            templateUrl: 'app/pages/articles/articles.detail.html',
            title: '添加文章',
            sidebarMeta: {
                order: 10,
            },
        })
        .state('articles.edit', {
            url: '/{id}',
            templateUrl: 'app/pages/articles/articles.detail.html',
            title: '编辑文章'

        })
    ;

      $urlRouterProvider.when('/articles','/articles/add');
        //sidebar的service中 过滤了没有 sidebarMeta的state

  }

})();
