---
title: string concatenation vs string array join
setup: |
  
tests:
  -
    name: string concatenation
    code: |
      var a = '';
      if (Math.random() > 0) {
        a += 'foo';
      }
      if (Math.random() > 0) {
        a += 'foo';
      }
      if (Math.random() > 0) {
        a += 'foo';
      }
      if (Math.random() > 0) {
        a += 'foo';
      }
  -
    name: string array join
    code: |
      var a = [];
      if (Math.random() > 0) {
        a.push('foo');
      }
      if (Math.random() > 0) {
        a.push('foo');
      }
      if (Math.random() > 0) {
        a.push('foo');
      }
      if (Math.random() > 0) {
        a.push('foo');
      }
      a.join('')
---

