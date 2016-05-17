/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.plans', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('plans', {
          url: '/plans',
          title: '课程安排',
          templateUrl: 'app/pages/plans/plans.html',
          controller: 'PlansCtrl',
            sidebarMeta: {
                icon: 'ion-android-home',
                order: 10,
            },
        });

        //sidebar的service中 过滤了没有 sidebarMeta的state

  }

})();
