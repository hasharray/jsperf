---
title: string property vs symbol property
setup: |
  var count = 2;
  var strs = [];
  var syms = [];
  var obj_str = {};
  var obj_sym = {};
  
  for (var i = 0; i < count; i++) {
      var str = "A large string " + i;
      var sym = Symbol(str);
      strs.push(str);
      syms.push(sym);
      obj_str[str] = i;
      obj_sym[sym] = i;
  }
  
  var dummy = 0;
tests:
  -
    name: string property
    code: |
      dummy += obj_str[strs[Math.floor(Math.random() * 5)]];
  -
    name: symbol property
    code: |
      dummy += obj_sym[sym[Math.floor(Math.random() * 5)]];
---
Object property access: ES6 symbol vs string
