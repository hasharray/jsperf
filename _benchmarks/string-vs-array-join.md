---
title: String + vs Array join
setup: |
  
tests:
  -
    name: String +
    code: |
      var a = 'I' + ' love' + ' Javascript!';
  -
    name: Array join
    code: |
      var a = ['I', 'love', 'Javascript!'].join(' ')
---
Concatinating string: string + vs array join
