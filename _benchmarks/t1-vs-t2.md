---
title: t1 vs t2
setup: |
  
tests:
  -
    name: t1
    code: |
      "Test abc test test abc test...".replace(/([ ])/g, "_")
  -
    name: t2
    code: |
      "Test abc test test abc test...".split(" ").join("_");
---
test
