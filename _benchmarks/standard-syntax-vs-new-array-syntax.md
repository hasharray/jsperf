---
title: Standard Syntax vs new Array() Syntax
setup: |
  var len = 10000000;
tests:
  -
    name: Standard Syntax
    code: |
      let a = [];
      	for (let i = 0; i < len; i++) {
      		a[i] = 'a';
      	}
  -
    name: new Array() Syntax
    code: |
      let a = new Array(len);
      	for (let i = 0; i < len; i++) {
      		a[i] = 'a';
      	}
---
Array assignment using standard vs new Array syntax
