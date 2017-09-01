---
title: string equal vs RegEx
setup: |
  var tocompareMiss = 'dodo';
  var tocompareHit = 'toto'
tests:
  -
    name: string equal
    code: |
      function stringCompare(){
      (tocompareMiss == 'didi' || tocompareMiss == 'dudu' || tocompareMiss == tocompareHit) === true
      }
  -
    name: RegEx
    code: |
      function regexCompare() {
      /(didi)|(dudu)|(toto)/i.test(tocompareMiss) === true
      }
---
Multiple string equals compare versus RegEx
