---
title: RegExp vs if...else - RegExp vs RegExp vs if...else - if...else
setup: |
  var r = document.createElement('div');
  var e = document.createElement('div');
  r.style.position = 'absolute';
  e.style.position = 'absolute';
tests:
  -
    name: RegExp vs if...else - RegExp
    code: |
      if (!/absolute|fixed|relative/i.test(r.style.position)) console.log(true);
  -
    name: RegExp vs if...else - if...else
    code: |
      if (e.style.position != 'absolute' || e.style.position != 'fixed' || e.style.position != 'relative'){ console.log(true) };
---

