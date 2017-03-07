---
title: mod vs minus vs bitwise
setup: |
  var crowdNum = 0;
tests:
  -
    name: mod
    code: |
      crowdNum = ++crowdNum % 2;
  -
    name: minus
    code: |
      crowdNum = 1 - crowdNum;
  -
    name: bitwise
    code: |
      crowdNum ^= 1;
---
toggle
