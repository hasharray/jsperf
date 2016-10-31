---
title: array.length vs let array.length
setup: |
  let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
tests:
  -
    name: array.length
    code: |
      for (let i = 0; i < myArray.length; ++i) {
          let j = myArray[i];
      }
  -
    name: let array.length
    code: |
      let l = myArray.length;
      for (let i = 0; i < l; ++i) {
          let j = myArray[i];
      }
---

