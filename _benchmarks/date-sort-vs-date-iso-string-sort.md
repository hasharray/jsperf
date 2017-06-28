---
title: Date sort vs Date ISO String sort
setup: |
  var data = [];
  var length = 500; // user defined length
  
  for(var i = 0; i < length; i++) {
      data.push(new Date().toISOString());
  }
  data = data.sort(() => Math.random() - 0.5);
tests:
  -
    name: Date sort
    code: |
      data.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)
  -
    name: Date ISO String sort
    code: |
      data.sort((a, b) => new Date(a) - new Date(b))
---

