---
title: NestedFunction vs NotNestedFunction
setup: |
  function foo (a, b) {
  	function bar1 (a) {
  		return a * 2;
  	}
  
  	function bar2 (b) {
  		return b * 2;
  	}
  
  	function bar3 (a, b) {
  		return bar1(a) - bar2(b);
  	}
  
  	return bar3(a, b);
  }
  
  
  function barN1 (a) {
  	return a * 2;
  }
  
  function barN2 (b) {
  	return b * 2;
  }
  
  function barN3 (a, b) {
  	return barN1(a) - barN2(b);
  }
  
  function fooN (a, b) {  
  	return barN3(a, b);
  }
tests:
  -
    name: NestedFunction
    code: |
      var x = foo(10, 20);
  -
    name: NotNestedFunction
    code: |
      var y = fooN(10, 20);
---
Test nested function via not nested functions
