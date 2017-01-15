---
title: === true || false vs toString.call vs typeof
setup: |
  var value = false;
tests:
  -
    name: === true || false
    code: |
      function testA(value) {
      return value === true || value === false;
      }
      
      testA(value);
  -
    name: toString.call
    code: |
      function testB(value) {
      return toString.call(value) === '[object Boolean]';
      }
      
      testB(value);
  -
    name: typeof
    code: |
      function testC(value) {
      return typeof value === 'boolean';
      }
      
      testC(value);
---
boolean check
