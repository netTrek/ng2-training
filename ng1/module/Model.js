(function (netTrek, window, document, undefined) {
  "use strict";

  function Model() {

    console.log("erzeuge das Model!");
    this.name = "MyModel1";

  }


  var p = Model.prototype;

  p.getName = function () {
    return this.name;
  };


  var appModelModule = angular.module('app.model', []);
  appModelModule.service('model', Model);


})(netTrek = netTrek || {}, window, document);
var netTrek;
