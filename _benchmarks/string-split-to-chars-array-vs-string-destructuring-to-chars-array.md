---
title: String split to chars array vs String destructuring to chars array
setup: |
  let str
tests:
  -
    name: String split to chars array
    code: |
      str = Array(1000).join('abcdefghijklmnopqrstuvwxyz');
      str = str.split('')
  -
    name: String destructuring to chars array
    code: |
      var str = Array(1000).join('abcdefghijklmnopqrstuvwxyz');
      str = [...str]
---
Will compare string split to string destructuring to obtain an array of chars
