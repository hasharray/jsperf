---
title: Assign-object vs Assign-explicit
setup: |
  var point = {x: 99.0, y: 36.0, z: 19.5};
tests:
  -
    name: Assign-object
    code: |
      Object.assign({}, point, {x: point.x + 15, z: point.z + 3.0});
  -
    name: Assign-explicit
    code: |
      { x: point.x + 15, y: point.y, z: point.z + 3.0}
---

