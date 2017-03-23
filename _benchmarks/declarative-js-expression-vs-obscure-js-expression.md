---
title: Declarative JS expression vs Obscure JS expression
setup: |
  var testList = Array.apply(null, {length: 100}).map(Number.call, Number);
tests:
  -
    name: Declarative JS expression
    code: |
      for (var ii = 0; ii < testList.length; ii++) {
        if (testList[ii] !== undefined) {
          console.log(testList[ii].x);
        }
      }
  -
    name: Obscure JS expression
    code: |
      for (var ii = 0; ii < testList.length; ii++) {
        if (testList[ii]) {
          console.log(testList[ii].x);
        }
      }
---
Compare declarative JS expressions. Inspired by https://twitter.com/michaelhaeu/status/845003383153025024?s=09
