---
title: array dynamic length vs array preallocated
setup: |
  const len = 1000000;
tests:
  -
    name: array dynamic length
    code: |
      var arr1 = [];
      for (let i = 0; i < len; i++) {
      	arr1[i]=i;
      }
  -
    name: array preallocated
    code: |
      var arr2 = new Array(len)
      for (let i = 0; i < len; i++) {
      	arr2[i]=i;
      }
---
Compare populating pre-sized array compared to an empty array that grows dynamically
