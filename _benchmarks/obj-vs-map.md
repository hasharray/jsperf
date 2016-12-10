---
title: Obj vs Map
setup: |
  const obj = {};
  const map = new Map();
  for (let i = 0; i < 10000; i++) {
    obj[i] = i;
    map.set(i, i);
  }
  function rand() {
    return Math.floor(Math.random() * 10000);
  }
tests:
  -
    name: Obj
    code: |
      for (let i = 0; i < 100000; i++) {
        const x = obj[rand()];
      }
  -
    name: Map
    code: |
      for (let i = 0; i < 100000; i++) {
        const x = map.get(rand());
      }
---
Object lookup vs. map
