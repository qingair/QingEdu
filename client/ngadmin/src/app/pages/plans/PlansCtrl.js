/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.plans')
    .controller('PlansCtrl', PlansCtrl);

  /** @ngInject */
  function PlansCtrl($scope) {
      $scope.models={}
      $scope.models.page=
      $scope.models.data=[
        {
          id:1,
          name:'plan1',
          teachers:[{id:1,name:'Peter'}],
          students:[
            {id:1,name:'Lucy'},{id:2,name:'HanMeimei'},{id:3,name:'LiLei'},
            {id:4,name:'Fucker'},{id:5,name:'Ben'},{id:6,name:'Batman'}

          ],
          states:'待上课',
          startTime:'2015-02-13 16:30',
          endTime:'2015-02-13 16:40',
          location:'room1'

        },
        {
          id:2,
          name:'plan2',
          teachers:[{id:1,name:'Ben'}],
          students:[
            {id:1,name:'Lucy'},{id:2,name:'HanMeimei'},{id:3,name:'LiLei'},
            {id:4,name:'Fucker'},{id:5,name:'Peter'},{id:6,name:'Batman'}

          ],
          states:'完成',
          startTime:'2015-02-13 16:30',
          endTime:'2015-02-13 16:40',
          location:'room4'
        }
      ]
  }

})();
