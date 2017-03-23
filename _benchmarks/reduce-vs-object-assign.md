---
title: reduce vs Object.assign
setup: |
  const items = Array(1000).fill().map((_, i) => [i, i * i]);
tests:
  -
    name: reduce
    code: |
      const object = items.reduce((obj, [key, val]) => {
        obj[key] = val;
        return obj;
      }, {});
  -
    name: Object.assign
    code: |
      const object = Object.assign(...items.map(([key, val]) => ({[key]: val})));
---
Compare building an object from an array of keys/values via reduce vs Object.assign
