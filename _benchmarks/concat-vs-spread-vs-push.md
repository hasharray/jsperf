---
title: Concat vs Spread vs Push
setup: |
  const data = Array(1000).fill(null).map((x, i) => i);
  const reduce = (func) => data.reduce((o, x) => func(o, x), []);
tests:
  -
    name: Concat
    code: |
      reduce(
        (obj, x) => obj.concat(x)
      );
  -
    name: Spread
    code: |
      reduce(
        (obj, x) => [ ...obj, x ]
      );
  -
    name: Push
    code: |
      reduce(
        (obj, x) => {
          obj.push(x);
          return obj;
        }
      );
---

