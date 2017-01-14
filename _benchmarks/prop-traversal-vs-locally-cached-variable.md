---
title: Prop traversal vs Locally cached variable
setup: |
  const obj = {
    x: {a: 1, b: 2, c: 3},
    y: {a: 1, b: { m: 11, n: 12, o: 13}, c: 3},
    z: 20
  };
  const concat = (a, b) => a + b
tests:
  -
    name: Prop traversal
    code: |
      concat(obj.x.a, obj.y.b.m);
      concat(obj.z, obj.y.b.m);
      concat(obj.x.a, obj.z);
  -
    name: Locally cached variable
    code: |
      const xa = obj.x.a;
      const ybm = obj.y.b.m;
      let z = obj.z;
      
      concat(xa, ybm);
      concat(z, ybm);
      concat(xa, z);
---
Property traversal vs caching in local variables.
