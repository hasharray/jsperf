---
title: Array.prototype.concat vs spread operator
setup: |
  const LIMIT = 1000;
  const a = [];
  const b = [];
  
  for (let i = 0; i < LIMIT; i++) {
    const aa = [];
    const bb = [];
    for (let j = 0; j <= i; j++) {
      aa.push(j);
      bb.push(j);
    }
    a.push(aa);
    b.push(bb);
  }
tests:
  -
    name: Array.prototype.concat
    code: |
      const c = [];
      for (let i = 0; i < LIMIT;  i++) {
        c.push(a.concat(b));
      }
  -
    name: spread operator
    code: |
      const c = [];
      for (let i = 0; i < LIMIT;  i++) {
        c.push([...a, ...b]);
      }
---
fa
