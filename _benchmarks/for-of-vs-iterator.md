---
title: for of vs iterator
setup: |
  var bla =[];
  for(var i =0;i++;i<20000)
   bla.push("bla")
  
  function f(){}
tests:
  -
    name: for of
    code: |
      for (const errorResult of bla) {
        f(errorResult)
      }
  -
    name: iterator
    code: |
      "use strict";
      
      for (var _iterator = bla, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;
      
        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }
      
        var errorResult = _ref;
      
        f(errorResult);
      }
---
babeliterator vs for of vs underscore
