---
title: typeof vs triple-equals vs truthy or ===false
setup: |
  const data = [];
  for (i =1; i<10000; i++) {
    data.push(true);
    data.push(false);
    data.push(null);
    data.push(undefined);
    data.push(1);
    data.push(0);
    data.push({});
  }
tests:
  -
    name: typeof
    code: |
      data.forEach(function(x) { return typeof x === 'boolean' })
  -
    name: triple-equals
    code: |
      data.forEach(function(x) { return x===true || x===false })
  -
    name: truthy or ===false
    code: |
      data.forEach(function(x) { return x || x===false })
---
Is typeof boolean slower than ===true || === false
