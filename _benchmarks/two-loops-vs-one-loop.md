---
title: two loops vs one loop
setup: |
  chars = []
  for (var i = 0; i < 100000; i++) chars.push({})
tests:
  -
    name: two loops
    code: |
      for (var i = 0; i < 100000; i++) chars[i].fname = 'bob';
      
      for (var i = 0; i < 100000; i++) chars[i].lname = 'loblaw';
  -
    name: one loop
    code: |
      for (var i = 0; i < 100000; i++) {
      chars[i].fname = 'bob';
      chars[i].lname = 'loblaw';
      }
---

