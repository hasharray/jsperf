---
title: indexOf array vs includes array
setup: |
  
tests:
  -
    name: indexOf array
    code: |
      let n = [1, 2, 5, 12];
      
      n.indexOf(5);
  -
    name: includes array
    code: |
      let n = [1, 2, 5, 12];
      
      n.includes(5);
---

