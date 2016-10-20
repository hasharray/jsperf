---
title: Greater Than vs Not Equal
setup: |
  
tests:
  -
    name: Greater Than
    code: |
      var a = 500, b = 0, c = -500;
      
      var result1 = a > 0;
      var result2 = b > 0;
      var result3 = c > 0;
  -
    name: Not Equal
    code: |
      var a = 500, b = 0, c = -500;
      
      var result1 = a !== 0;
      var result2 = b !== 0;
      var result3 = c !== 0;
---
Greater Than vs Not Equal
