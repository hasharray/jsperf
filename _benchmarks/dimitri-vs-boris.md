---
title: Dimitri vs Boris
setup: |
  "use strict";
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  var dimaMergeEntities = function mergeEntities() {
    var lhs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var rhs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
    return Object.keys(_extends({}, lhs, rhs)).reduce(function (entities, key) {
      return _extends({}, entities, _defineProperty({}, key, _extends({}, lhs[key], rhs[key])));
    }, {});
  };
  
  //
  
  
  function merge(lhs, rhs) {
    var result = _extends({}, lhs);
  
    Object.keys(rhs).forEach(function (key) {
      result[key] = _extends({}, result[key] || {}, rhs[key]);
    });
  
    return result;
  }
tests:
  -
    name: Dimitri
    code: |
      dimaMergeEntities({ '1': { a: 'b', g: { f: 'a' } } ,'2': { a: 'b' } }, { '1': { c: 'd', g: { ff: 'a' } } , '3': { c: 'd' }} )
  -
    name: Boris
    code: |
      merge({ '1': { a: 'b', g: { f: 'a' } } ,'2': { a: 'b' } }, { '1': { c: 'd', g: { ff: 'a' } } , '3': { c: 'd' }} )
---

