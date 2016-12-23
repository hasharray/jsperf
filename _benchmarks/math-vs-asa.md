---
title: Math vs asa
setup: |
  
tests:
  -
    name: Math
    code: |
      function sum(n) {
      if (n === 1) {
        return 1;
      }
      return sum (n - 1) + n;
      
      }
      console.log(sum(Math.pow(100, 2)));
  -
    name: asa
    code: |
      function suma(n) {
       let result = 0;
       for (let i = 0; i <= n; i++) {
      
         result += i;
       }
       return result;
      }
      console.log(suma(Math.pow(100, 2)));
---

