---
title: Convert to String vs Math.log()
setup: |
  var numbers = [10];
  
  for(var i = 1; i < 15; i++) {
      numbers[i] = numbers[i - 1] * 10;
  }
  
  console.log(111, numbers);
tests:
  -
    name: Convert to String
    code: |
      console.log(222, numbers);
  -
    name: Math.log()
    code: |
      console.log(333, numbers);
---

