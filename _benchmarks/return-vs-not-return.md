---
title: Return vs Not return
setup: |
  
tests:
  -
    name: Return
    code: |
      (function() {
      return console.log('hi mom!');
      })();
  -
    name: Not return
    code: |
      (function() {
      console.log('hi mom!');
      })();
---

