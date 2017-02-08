---
title: || operator vs Array method some
setup: |
  
tests:
  -
    name: || operator
    code: |
      var arr = [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true];
      t = false;
      
      for (var i = 0, len = arr.length; i < len; i++) {
          t = t || arr[i];
      }
  -
    name: Array method some
    code: |
      var arr = [true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true, false, true];
      t = false;
      
      t = arr.some(Boolean);
---

