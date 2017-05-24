---
title: if single vs if else encapsulated
setup: |
  
tests:
  -
    name: if single
    code: |
      var a = 0, b = 1;
      
      if (a === 0) {
      console.log('a === 0');
      }
  -
    name: if else encapsulated
    code: |
      var a = 0, b = 1;
      
      if (a === 0) {
      	if (b === 1) {
      		console.log('a === 1');
      	} else {
      		console.log('b !== 1');
      	}
      }
---

