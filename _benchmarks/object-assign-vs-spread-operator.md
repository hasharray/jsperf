---
title: Object assign vs spread operator
setup: |
  
tests:
  -
    name: Object assign
    code: |
      const params = {
        greeting: 'hello',
        suave: true, 
        dayOfWeek: 7,
      }
      const default = {
        something: 1,
        suave: false,
      }
      
      const result = Object.assign({}, default, params);
  -
    name: spread operator
    code: |
      const params = {
        greeting: 'hello',
        suave: true, 
        dayOfWeek: 7,
      }
      const default = {
        something: 1,
        suave: false,
      }
      const result = {
         ...default,
        ...params,
      };
---

