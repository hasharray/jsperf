---
title: for loop cached array length vs for loop not cached array length
setup: |
  
tests:
  -
    name: for loop cached array length
    code: |
      var a = {
        b: {
          c: {
            d: [21,321,65,876,435]
          }
        }
      };
      
      var length = a.b.c.d.length;
      for(var i = 0; i < length; i++) {
        console.log(i);
      }
  -
    name: for loop not cached array length
    code: |
      var a = {
        b: {
          c: {
            d: [21,321,65,876,435]
          }
        }
      };
      
      for(var i = 0; i < a.b.c.d.length; i++) {
        console.log(i);
      }
---

