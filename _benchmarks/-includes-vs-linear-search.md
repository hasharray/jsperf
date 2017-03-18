---
title: [].includes vs Linear search
setup: |
  const test = Array(10000).fill(false)
tests:
  -
    name: [].includes
    code: |
      var x = false;
      
      if (!test.includes(true)) {
       x = false;
      } else {
       x = true;
      }
  -
    name: Linear search
    code: |
      var x = false;
      
      for (let i = 0, len = test.length; i < len; i++) {
        if (test[i] == true) {
          x = false;
          break;
        } else {
          x = true;
        }
      }
---
Benchmarking [].includes on large arrays
