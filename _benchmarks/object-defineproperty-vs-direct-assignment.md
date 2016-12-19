---
title: Object.defineProperty vs Direct assignment
setup: |
  
tests:
  -
    name: Object.defineProperty
    code: |
      var target = {};
      var key = 'something';
      
      for (var i=0; i<1000; i++) {
          // property getter
          var getter = function () {
              return _val;
          };
          
          // property setter
          var setter = function (newVal) {    
              _val = newVal;
          };
          
          // Create new property with getter and setter
          Object.defineProperty(target, key+i, {
            get: getter,
            set: setter,
          });
      }
  -
    name: Direct assignment
    code: |
      var target = {};
      var key = 'something';
      
      for (var i=0; i<1000; i++) {
          target[key+1] = undefined;
      }
---

