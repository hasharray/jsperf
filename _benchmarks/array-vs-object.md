---
title: Array vs Object
setup: |
  
tests:
  -
    name: Array
    code: |
      x = [];
      for (var i=0; i<20; i++) {
        x[i*5] = i
      }
      for (var i=0; i<20; i++) {
        x[i*3] = i
      }
      for (var i=0; i<20; i++) {
        console.log(x[i*5]);
      }
      for (var i=0; i<20; i++) {
        console.log(x[i*3]);
      }
  -
    name: Object
    code: |
      x = {};
      for (var i=0; i<20; i++) {
        x[i*5] = i
      }
      for (var i=0; i<20; i++) {
        x[i*3] = i
      }
      for (var i=0; i<20; i++) {
        console.log(x[i*5]);
      }
      for (var i=0; i<20; i++) {
        console.log(x[i*3]);
      }
---

