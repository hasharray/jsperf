---
title: Array#filter() vs Array#splice(Array#indexOf())#slice()
setup: |
  const obj = {};
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, obj, 14, 15, 16, 17, 18, 19, 20]
tests:
  -
    name: Array#filter()
    code: |
      arr.filter(item => item !== obj);
  -
    name: Array#splice(Array#indexOf())#slice()
    code: |
      arr.splice(arr.indexOf(obj)).slice()
---

