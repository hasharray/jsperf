---
title: for vs forEach vs for-of vs map
setup: |
  const arr = [1,2,3,4,5,6,7,8,9,0];
tests:
  -
    name: for
    code: |
      for (let i = 0, len = arr.length; i < len; i++) {
        arr[i] += 1;
      }
  -
    name: forEach
    code: |
      arr.forEach(item => {
        item += 1;
      }
  -
    name: for-of
    code: |
      for (let item of arr) {
        item += 1;
      }
  -
    name: map
    code: |
      arr.map(item => item + 1);
---

