---
title: split join vs replace
setup: |
  var testString = 'test/test2/test3/test4';
tests:
  -
    name: split join
    code: |
      testString.split('/').join('-');
  -
    name: replace
    code: |
      testString.replace(/\//g, '-');
---
Split join vs replace
