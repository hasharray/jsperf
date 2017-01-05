---
title: For loop vs Reverse for loop vs Array.forEach
setup: |
  
tests:
  -
    name: For loop
    code: |
      for (let i = 0; testArray.length; i++) {
        const element = testArray[i];
        window.console.log('for loop', element);
      }
  -
    name: Reverse for loop
    code: |
      for (let i = testArray.length - 1; i >= 0; i--) {
        const element = testArray[i];
        window.console.log('reverse for loop', element);
      }
  -
    name: Array.forEach
    code: |
      testArray.forEach(element => { window.console.log('Array.forEach', element); };
---
Test speed of array iteration
