---
title: For i vs reduce vs for of
setup: |
  const arr = Array(1000).fill(10);
  let start = 0;
tests:
  -
    name: For i
    code: |
      start = 0;
      for (let i = 0; i < arr.length; i++) {
         start += i;
      }
  -
    name: reduce
    code: |
      start = 0;
      start = arr.reduce((acc, el) => acc + el, 0);
  -
    name: for of
    code: |
      start = 0;
      for (let i of arr) {
         start += i;
      }
---
test for of, for, reduce, map
