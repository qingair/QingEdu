/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    //'BlurAdmin.pages.test',
    'BlurAdmin.pages.plans',
    'BlurAdmin.pages.articles',
    'BlurAdmin.pages.students',
    'BlurAdmin.pages.teachers',
    //'BlurAdmin.pages.dashboard',
    //'BlurAdmin.pages.ui',
    //'BlurAdmin.pages.components',
    'BlurAdmin.pages.form',
    //'BlurAdmin.pages.tables',
    //'BlurAdmin.pages.charts',
    //'BlurAdmin.pages.maps',
    'BlurAdmin.pages.profile',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/plans');

    baSidebarServiceProvider.addStaticItem({
      title: '系统',
      icon: 'ion-ios-more',
      subMenu: [{
        title: '多媒体管理',
        disabled: true
      },{
        title: '门店管理',
        disabled: true
      }
        , {
        title: '用户管理',
        subMenu: [{
          title: '权限管理',
          disabled: true
        }]
      }],

    });

    baSidebarServiceProvider.addStaticItem({
      title: '临时文件',
      icon: 'ion-document',
      subMenu: [{
        title: '登录',
        fixedHref: 'auth.html',
        blank: true
      }, {
        title: '注册',
        fixedHref: 'reg.html',
        blank: true
      },{
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });

  }

})();
