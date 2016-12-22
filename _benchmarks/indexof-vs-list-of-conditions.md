---
title: indexOf vs list of conditions
setup: |
  var x = ~~(Math.random() * 10);
tests:
  -
    name: indexOf
    code: |
      if([0,1].indexOf(x))
  -
    name: list of conditions
    code: |
      if(x == 0 || x == 1)
---

