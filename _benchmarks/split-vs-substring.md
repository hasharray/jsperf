---
title: Split vs SubString
setup: |
  var date = '2016-10-13';
tests:
  -
    name: Split
    code: |
      var parts = date.split('-');
      var year = parts[0];
      var month = parts[1];
      var day = parts[2];
  -
    name: SubString
    code: |
      var year = date.substr(0,4);
      var month = date.substr(5,2);
      var day = date.substr(8,2);
---

