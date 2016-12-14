---
title: no temp vs temp
setup: |
  
tests:
  -
    name: no temp
    code: |
      for(var i = 0; i < 100; i++)
      {
      console.log(2+i);
      }
  -
    name: temp
    code: |
      for(var i = 0; i < 100; i++)
      {
      var j = i;
      console.log(2+j);
      }
---

