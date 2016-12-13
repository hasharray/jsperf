---
title: Nested vs Not nested
setup: |
  function foo(a,b){
  function bar(){
  return a+b;
  }
  return bar();
  }
  
  function foo2(a,b){
  return bar2(a,b);
  }
  
  function bar2(a,b){
  return a+b;
  }
tests:
  -
    name: Nested
    code: |
      var something = foo(1,2);
  -
    name: Not nested
    code: |
      var something2 = foo2(1,2);
---
Nesting
