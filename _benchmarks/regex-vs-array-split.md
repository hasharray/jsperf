---
title: Regex vs Array.split
setup: |
  var str = '    Word';
tests:
  -
    name: Regex
    code: |
      /^\s{3}[A-Za-zА-Яа-я]+$/.test(str)
  -
    name: Array.split
    code: |
      str.split(' ').length-1 === 4
---

