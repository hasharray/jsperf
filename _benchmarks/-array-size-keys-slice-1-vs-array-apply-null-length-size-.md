---
title: [...Array(size).keys()].slice(1) vs Array.apply(null, {length: size})
setup: |
  var lengths = [...Array(101).keys()].slice(1);
tests:
  -
    name: [...Array(size).keys()].slice(1)
    code: |
      for (let i = 0; i < 1000; i++) {
        [...Array(i + 1).keys()].slice(1);
      }
  -
    name: Array.apply(null, {length: size})
    code: |
      for (let i = 0; i < 1000; i++) {
        Array.apply(null, { length: i});
      }
---
Create an array of given length
