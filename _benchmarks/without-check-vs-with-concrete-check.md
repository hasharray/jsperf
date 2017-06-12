---
title: without check vs with concrete check
setup: |
  var a = 1;
tests:
  -
    name: without check
    code: |
      var a = 1;
      
      if(a) { alert('yes') }
  -
    name: with concrete check
    code: |
      var a = 1;
      
      if(a !== undefined) { alert('yes') }
---

