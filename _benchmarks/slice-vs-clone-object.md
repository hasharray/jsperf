---
title: Slice vs Clone object
setup: |
  var arr = [120,230]
  var obj = {x:120,y:230};
tests:
  -
    name: Slice
    code: |
      arr.slice(0)
  -
    name: Clone object
    code: |
      Object.create(obj)
---
Slice vs obj creation
