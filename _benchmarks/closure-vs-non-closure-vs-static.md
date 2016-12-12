---
title: closure vs non-closure vs static
setup: |
  var createClosure = function() {
      var a = 'hi';
      return function() {
          alert(a);
      };
  }
  
  var createNonClosure = function() {
      return function() {
          alert('hi');
      };
  }
  
  var callStatic = function() {
  alert('hi');
  }
tests:
  -
    name: closure
    code: |
      createClosure()()
  -
    name: non-closure
    code: |
      createNonClosure()()
  -
    name: static
    code: |
      callStatic()
---
asdf
