---
title: bullshit vs wicked
setup: |
  
tests:
  -
    name: bullshit
    code: |
      var test = 1+2+3+4+5;
  -
    name: wicked
    code: |
      var test = eval('1.2.3.4.5'.split('.').join('+'));
---
Whats faster
