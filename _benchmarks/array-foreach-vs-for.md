---
title: Array#forEach vs for
setup: |
  let count = 1000 * 1000
  const a = [];
  const b = [];
  
  
  do {
    a.push({
      title: 'item ' + count
    });
  } while(--count);
tests:
  -
    name: Array#forEach
    code: |
      a.forEach(x => {
        b.push(x);
      });
  -
    name: for
    code: |
      for (let i = 0; i < a.length; i++) {
        b.push(a[i]);
      });
---

