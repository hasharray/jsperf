---
title: Direct assignment vs Set function
setup: |
  set = function(object, values) {
    var key, value;
    for (key in values) {
      value = values[key];
      object[key] = value;
    }
    return obj;
  };
  obj = {};
  alpha = 1;
  beta = true;
  gamma = [1,2,3,4];
  delta = new Error("only a test");
tests:
  -
    name: Direct assignment
    code: |
      obj.x = 1;
      obj.y = 2;
      obj.z = 3;
      obj.a = 4;
      obj.b = 5;
      obj.c = function () { console.log("test");};
      obj.d = [1,2,3,4,5,6,7,8,9];
      obj.e = {next: "now", future: "never", python: "idle"};
      obj.f = [10, 11, 12, 13, 14, 14, 16, 17];
      obj.g = false;
      obj.h = alpha;
      obj.i = beta;
      obj.j = gamma;
      obj.k = delta;
  -
    name: Set function
    code: |
      set(obj, {
        x: 1, y: 2, z:3,
        a: 4, b: 5, c: function () { console.log("test");},
        e: {next: "now", future: "never", python: "idle"},
        f:  [10, 11, 12, 13, 14, 14, 16, 17],
        g: false,
        h: alpha,
        i: beta,
        j: gamma,
        k: delta,
      });
---
Testing if using a "set" function is any slower.
