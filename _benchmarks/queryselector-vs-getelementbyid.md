---
title: querySelector vs getElementById
setup: |
  
tests:
  -
    name: querySelector
    code: |
      document.querySelector('form[name=partner]');
  -
    name: getElementById
    code: |
      document.getElementById('partner');
---

