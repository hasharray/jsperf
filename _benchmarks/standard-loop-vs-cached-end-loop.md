---
title: standard loop vs cached end loop
setup: |
  data = [];
  for(let i=0; i<5000; i++) {
    data.push({some: 15, properties: 'test'});
  }
tests:
  -
    name: standard loop
    code: |
      let sum = 0;
      for(let i=0; i<data.length; i++) {
        sum += data[i].some;
      }
  -
    name: cached end loop
    code: |
      let sum = 0;
      for(let i=0, end=data.length; i<end; i++) {
        sum += data[i].some;
      }
---
cached end loop on 5000 items
