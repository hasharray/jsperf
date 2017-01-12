---
title: matrix init for loop vs matrix init constructor
setup: |
  
tests:
  -
    name: matrix init for loop
    code: |
      var pixels = new Array();
          for (var y = 0; y < 100; y++) {
              pixels[y] = new Array();
              for (var x = 0; x < 100; x++) {
                  pixels[y][x] = 0;
              }
          }
      for (var x = 0; x < 100; x++) {
        for (var y = 0; y < 100; y++) {
          pixels[x][y] = [1,2,3];
        }
      }
  -
    name: matrix init constructor
    code: |
      var pixels = new Array();
          for (var y = 0; y < 100; y++) {
              pixels[y] = new Array(100);
          }
      
      for (var x = 0; x < 100; x++) {
        for (var y = 0; y < 100; y++) {
          pixels[x][y] = [1,2,3];
        }
      }
---

