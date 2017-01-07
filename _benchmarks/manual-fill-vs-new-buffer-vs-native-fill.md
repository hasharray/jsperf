---
title: Manual fill vs new Buffer vs Native fill
setup: |
  var bufferSize = 500 * 500;
  var globalBuffer = new Uint8Array(bufferSize);
tests:
  -
    name: Manual fill
    code: |
      var n = bufferSize;
      while(n--)
          globalBuffer[n] = 0;
  -
    name: new Buffer
    code: |
      var localBuffer = new Uint8Array(bufferSize);
  -
    name: Native fill
    code: |
      globalBuffer.fill(0);
---

