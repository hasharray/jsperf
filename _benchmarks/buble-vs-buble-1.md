---
title: buble++ vs buble+1
setup: |
  
tests:
  -
    name: buble++
    code: |
      for (i=0; i<10; i++) {
        i++;
      }
  -
    name: buble+1
    code: |
      for (i=0; i<10; i++) {
        i = i + 1;
      }
---
buble1
