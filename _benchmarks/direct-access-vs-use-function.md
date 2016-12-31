---
title: Direct access vs "use" function
setup: |
  use = function (o, fn) {  fn.call(o); };
  obj = {
    test: function () {
      console.log("test");
    }
  
  };
tests:
  -
    name: Direct access
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
      obj.test()
  -
    name: "use" function
    code: |
      use(obj, function () {
      this.x = 1;
      this.y = 2;
      this.z = 3;
      this.a = 4;
      this.b = 5;
      this.c = function () { console.log("test");};
      this.d = [1,2,3,4,5,6,7,8,9];
      this.e = {next: "now", future: "never", python: "idle"};
      this.f = [10, 11, 12, 13, 14, 14, 16, 17];
      this.g = false;
      this.test();
      });
---

