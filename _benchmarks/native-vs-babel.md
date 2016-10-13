---
title: Native vs Babel
setup: |
  "use strict";
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
tests:
  -
    name: Native
    code: |
      for (let i = 0; i < 10000; i++) {
          const x = {};
          x.y = 1;
      }
  -
    name: Babel
    code: |
      for (let i = 0; i < 10000; i++) {
        var x = {};
      
        x = _extends({}, x, {
          y: 1
        });
      }
---

