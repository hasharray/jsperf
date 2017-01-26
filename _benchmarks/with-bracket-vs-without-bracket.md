---
title: with bracket vs without bracket
setup: |
  function findMinNoBracket (a, b) {
      if (a < b) return a;
      else return b;
  }
  
  function findMinWithBracket(a, b) {
      if (a < b) {
          return a;
      } else {
          return b;
      }
  }
tests:
  -
    name: with bracket
    code: |
      console.log(findMinWithBracket(0,10));
  -
    name: without bracket
    code: |
      console.log(findMinNoBracket(0, 10));
---
if brackets
