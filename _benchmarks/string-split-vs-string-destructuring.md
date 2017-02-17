---
title: String Split vs String Destructuring
setup: |
  
tests:
  -
    name: String Split
    code: |
      str = Array(1000).join('abcdefghijklmnopqrstuvwxyz');
      str = str.split('')
  -
    name: String Destructuring
    code: |
      str = Array(1000).join('abcdefghijklmnopqrstuvwxyz');
      str = [...str];
---
Destructuring
