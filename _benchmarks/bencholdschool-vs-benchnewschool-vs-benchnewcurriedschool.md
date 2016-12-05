---
title: BenchOldSchool vs BenchNewSchool vs BenchNewCurriedSchool
setup: |
  
tests:
  -
    name: BenchOldSchool
    code: |
      var BenchOldSchool = (function () {
          function BenchOldSchool() {
          }
          BenchOldSchool.prototype.demo = function (val1, val2) {
              return val1 + val2;
          };
          return BenchOldSchool;
      }());
      var a = new BenchOldSchool();
      a.demo(1, 2);
  -
    name: BenchNewSchool
    code: |
      var BenchNewSchool = (function () {
          function BenchNewSchool() {
              this.demo = function (val1, val2) {
                  return val1 + val2;
              };
          }
          return BenchNewSchool;
      }());
      var b = new BenchNewSchool();
      b.demo(1, 2);
  -
    name: BenchNewCurriedSchool
    code: |
      var BenchNewCurriedSchool = (function () {
          function BenchNewCurriedSchool() {
              this.demo = function (val1) { return function (val2) {
                  return val1 + val2;
              }; };
          }
          return BenchNewCurriedSchool;
      }());
      var c = new BenchNewCurriedSchool();
      c.demo(1)(2);
---

