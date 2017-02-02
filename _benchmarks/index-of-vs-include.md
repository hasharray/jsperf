---
title: Index Of vs Include
setup: |
  
tests:
  -
    name: Index Of
    code: |
      let n = [1, 2, 5, 12];
      
      n.indexOf(7);
  -
    name: Include
    code: |
      let n = [1, 2, 5, 12];
      
      n.includes(5);
---

