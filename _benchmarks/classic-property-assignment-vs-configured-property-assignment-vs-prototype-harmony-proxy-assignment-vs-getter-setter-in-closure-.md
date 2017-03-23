---
title: Classic property assignment. vs Configured property assignment. vs Prototype harmony proxy assignment. vs Getter/Setter in Closure.
setup: |
  var _i = 0, _j = 0, _k = 0, _l = 0;
  
  var A = { value: null };
  
  var B = {};
  Object.defineProperty(B, "value", {
      value: 0,
      enumerable: true,
      configurable: false,
      writable: true
  });
  
  function proxify(target) {
      return new Proxy(target,{
          get: function(receiver, name) {
              return target[name];
          },
          set: function(receiver, name, value) {
              target[name] = value;
              return true;
          }
      });
  }
  var C = proxify({ value: 0 });
  
  function Closure() {
      var _value = 0;
  
      Object.defineProperty(this, 'value', {
          enumarable: true,
          get: function() { return _value; },
          set: function(v) { _value = v; }
      });
  }
  var D = new Closure();
tests:
  -
    name: Classic property assignment.
    code: |
      A.value += _i++;
  -
    name: Configured property assignment.
    code: |
      B.value += _j++;
  -
    name: Prototype harmony proxy assignment.
    code: |
      C.value += _k++;
  -
    name: Getter/Setter in Closure.
    code: |
      D.value += _l++;
---
Profile difference between regular object property accesses and access controlled by a Harmony Proxy. I wanted to see how much slower these proxies are compared to the regular properties.

For Chrome, please activate Harmony proxy support by enabling the option named "Enable Experimental JavaScript" in "chrome://flags/" page.
