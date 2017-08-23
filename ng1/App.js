(function (netTrek, angular, window, document, undefined) {
  "use strict";

  var appModule = angular.module('app', ['app.model']);

  appModule.run(function ($log, model) {
    console.log(model.getName());
  });

  // appModule.controller( "userCtrl", function ( /*$scope, $element*/ ) {
  //   /*
  //
  //   console.log( '$element :', $element );
  //
  //
  //   $scope.selectedUsr = undefined;
  //   $scope.users = [ {name:"Saban", age:44},
  //     {name:"Hans", age:33},
  //     {name:"Peter", age:22},
  //     {name:"Frank", age:132313123121}
  //   ];
  //
  //   $scope.selectUser = function (user) {
  //     $scope.selectedUsr = user;
  //   };
  //
  //   $scope.delUser = function (index) {
  //     //$scope.users.slice( index, 1 );
  //     $scope.users.splice( index, 1 );
  //
  //     if ( $scope.users.length === 0 )
  //       $scope.selectedUsr = undefined;
  //   };
  //   $element.hide ();
  //   $element.fadeIn ( 5000 );
  //   */
  // });

  appModule.component ('user', {
      template: "<strong>Saban Ünlü</strong>",
      controller: angular.noop
    }
  );

  console.log(appModule);
})(netTrek = netTrek || {}, angular, window, document);
var netTrek;
