---
title: substring vs slice
setup: |
  
tests:
  -
    name: substring
    code: |
      var a = 'I love Javascript!';
      a.substr(0, 5);
  -
    name: slice
    code: |
      var a = 'I love Javascript!';
      a.slice(0, 5);
---

