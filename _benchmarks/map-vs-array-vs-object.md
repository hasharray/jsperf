---
title: Map vs Array vs Object
setup: |
  var iterations = 1000;
  
  var x = 0;
  var y = -7;
  var z = 20;
  
  var map = new Map([[x, new Map([[y, new Map([[z, {test: 123}]])]])]]);
  
  var array = [];
  array[x] = [];
  array[x][y] = [];
  array[x][y][z] = {test: 123};
  
  var object = {};
  object[x] = {};
  object[x][y] = {};
  object[x][y][z] = {test: 123};
tests:
  -
    name: Map
    code: |
      for (var i = 0; i < iterations; i++) {
          map.get(x).get(y).get(z);
      }
  -
    name: Array
    code: |
      for (var i = 0; i < iterations; i++) {
          array[x][y][z];
      }
  -
    name: Object
    code: |
      for (var i = 0; i < iterations; i++) {
          object[x][y][z];
      }
---

