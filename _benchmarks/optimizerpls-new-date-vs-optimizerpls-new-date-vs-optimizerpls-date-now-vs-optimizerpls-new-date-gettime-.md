---
title: optimizerPls = new Date(); vs optimizerPls = +new Date(); vs optimizerPls = Date.now(); vs optimizerPls = (new Date).getTime();
setup: |
  var optimizerPls = null;
tests:
  -
    name: optimizerPls = new Date();
    code: |
      new Date()
  -
    name: optimizerPls = +new Date();
    code: |
      +new Date()
  -
    name: optimizerPls = Date.now();
    code: |
      Date.now()
  -
    name: optimizerPls = (new Date).getTime();
    code: |
      (new Date).getTime()
---

