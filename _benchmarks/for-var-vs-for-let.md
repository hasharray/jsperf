---
title: for-var vs for-let
setup: |
  
tests:
  -
    name: for-var
    code: |
      var tmp = 0;
      
      for (var i = 0; i < 1000000; i++) {
        i++;
        tmp = i;
      }
      
      if (tmp !== 1000000) {
        console.error('simulate usage');
      }
  -
    name: for-let
    code: |
      let tmp = 0;
      
      for (let i = 0; i < 1000000; i++) {
        i++;
        tmp = i;
      }
      
      if (tmp !== 1000000) {
        console.error('simulate usage');
      }
---

