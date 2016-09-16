---
setup: |
  
tests:
  -
    name: Binary
    code: |
      for(var i=0; i<100000; i++) var x = Math.max(i, Math.max(i+1, i+2));
  -
    name: Ternary
    code: |
      for(var i=0; i<100000; i++) var x = Math.max(i, i+1, i+2);
---

