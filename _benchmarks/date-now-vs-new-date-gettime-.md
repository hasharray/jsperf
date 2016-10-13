---
title: Date.now() vs (new Date).getTime()
setup: |
  var optimizerPls = null;
tests:
  -
    name: Date.now()
    code: |
      optimizerPls = Date.now();
  -
    name: (new Date).getTime()
    code: |
      optimizerPls = (new Date).getTime();
---
Measure the difference between creating a new Date instance and calling getTime() and Date.now().
