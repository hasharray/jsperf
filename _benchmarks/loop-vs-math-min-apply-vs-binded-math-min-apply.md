---
title: loop vs Math.min.apply vs binded Math.min.apply
setup: |
  var arr = [0.33083947371298106, 0.9995219008955206, 0.5750588501545906, 0.20995298357546477, 0.7751114044473026, 0.0076633949651252475, 0.08575531129969338, 0.14480951374939954, 0.1902683759354854, 0.49477204017021315, 0.6348852869859772, 0.1715578209957671, 0.4524674082866864, 0.647282863850125, 0.7324977982653217, 0.10150916314491931, 0.0739403590163118, 0.3485745026968958, 0.16562693726498035, 0.12521440420544172]
  
  var minloop = function(arr)  {
        var min = arr[0], len = arr.length, i;
        for (i = 1; i < len; ++i) {
           if (arr[i] < min) {
              min = arr[i];
           }
        }
        return min;
   };
  
  var minbind = Function.prototype.apply.bind(Math.min,null);
tests:
  -
    name: loop
    code: |
      var min = minloop(arr);
  -
    name: Math.min.apply
    code: |
      var min = Math.min.apply(Math,arr);
  -
    name: binded Math.min.apply
    code: |
      var min = minbind(arr);
---
min and array
