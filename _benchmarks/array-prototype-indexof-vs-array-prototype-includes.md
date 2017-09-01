---
title: Array.prototype.indexOf vs Array.prototype.includes
setup: |
  const baseText = '/hello';
tests:
  -
    name: Array.prototype.indexOf
    code: |
      console.log(baseText.indexOf('/hello') !== -1);
  -
    name: Array.prototype.includes
    code: |
      console.log(baseText.includes('/hello'));
---

