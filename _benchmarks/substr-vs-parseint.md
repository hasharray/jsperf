---
title: substr vs parseInt
setup: |
  var height = "320px";
tests:
  -
    name: substr
    code: |
      height.substr(0, height.indexOf("px"));
  -
    name: parseInt
    code: |
      parseInt(height);
---

