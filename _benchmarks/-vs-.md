---
title: ++ vs +=
setup: |
  
tests:
  -
    name: ++
    code: |
      var a =[], i = 0;
      for(i = 0; i < 1000000; ++i){
      a.push(i);
      }
  -
    name: +=
    code: |
      var a =[], i = 0;
      for(i = 0; i < 1000000; i+=1{
      a.push(i);
      }
---

