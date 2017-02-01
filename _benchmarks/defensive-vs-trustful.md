---
title: Defensive vs Trustful
setup: |
  
tests:
  -
    name: Defensive
    code: |
      var counter = 0;
      
      function countForward(step)
      {
          if (typeof step !== 'number') {
              throw 'Please, give me a number.';
          } else if (step < 1) {
              throw 'You can only count forward!';
          }
          
          counter += step;
      }
      
      try {
          while (counter < 100000) {
              countForward(1);
          }
      } catch (ex) {}
  -
    name: Trustful
    code: |
      var counter = 0;
      
      function countForward(step)
      {
          counter += step;
      }
      
      while (counter < 100000) {
          countForward(1);
      }
---

