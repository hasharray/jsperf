---
title: Watch on name vs Watch on function vs Multiple field watch by value vs Multiple field watch stringified
setup: |
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.20/angular.min.js"></script>
  
  <div ng-app>
  <div id="controllerScope" ng-controller="myController"></div>
  </div>
  </div>
  <script>
  var myController = function($scope) {
  
  }
  
  var $scope;
  var $rootScope;
  $(function() {
  $scope = $("#controllerScope").scope();
  $rootScope = $scope.$rootScope;
  });
  </script>
tests:
  -
    name: Watch on name
    code: |
      $scope.$watch("myProperty", function() { });
      $scope.$apply(function() { $scope["myProperty"] = 5 });
  -
    name: Watch on function
    code: |
      $scope.$watch(function() { return $scope["myProperty"] }, function() { });
      $scope.$apply(function() { $scope["myProperty"] = 5 });
  -
    name: Multiple field watch by value
    code: |
      $scope.$watch("{ a: myProperty1, b: myProperty2, c: myProperty3 }", function() { }, true);
      $scope.$apply(function() { $scope["myProperty1"] = 5 });
  -
    name: Multiple field watch stringified
    code: |
      $scope.$watch("myProperty1 + '_' + myProperty2 + '_' + myProperty3", function() { });
      $scope.$apply(function() { $scope["myProperty1"] = 5 });
---

