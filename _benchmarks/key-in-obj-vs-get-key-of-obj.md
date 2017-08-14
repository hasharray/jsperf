---
title: key in obj vs get key of obj
setup: |
  var obj = {};
  for (var i = 0; i < 100; i++) {
    obj[(Math.random() * 10000) | 0] = 'a';
  }
tests:
  -
    name: key in obj
    code: |
      ((Math.random() * 10000) | 0) in obj
  -
    name: get key of obj
    code: |
      !!obj[(Math.random() * 10000) | 0]
---

