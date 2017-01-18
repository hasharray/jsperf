---
title: Overload Arguments in Function declaration vs Locally scoped variables
setup: |
  
tests:
  -
    name: Overload Arguments in Function declaration
    code: |
      (function overload(a,b,c){
      a=1;
      b=1:
      c=1;
      return a + b + c;
      })();
  -
    name: Locally scoped variables
    code: |
      (function localscope(){
      var a = 1,b = 1, c =1;
      return a+b+c;
      })();
---
Javascript Memory and Performance test when overloading arguments vs declaring local variables.
