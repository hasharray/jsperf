---
title: for vs AngularJS v1.5.8 forEach
setup: |
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js">
  </script>
  <script>
    var len = 1000;
    var arr = new Array();
    while (len--) {
      arr[len] = (Date.now() + len).toString(16);
    }
    var fun = function(a) {
      var b = '_' + a[0];
      return a + b;
    };
  </script>
tests:
  -
    name: for
    code: |
      var leng_arr = arr.length
      for(var idx = 0; idx < leng_arr; idx++){
        fun(arr[idx]);
      }
  -
    name: AngularJS v1.5.8 forEach
    code: |
      angular.forEach(arr, function(item) {fun(item);});
---

