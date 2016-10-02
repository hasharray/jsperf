---
title: Arrays vs Simd
setup: |
  
tests:
  -
    name: Arrays
    code: |
      var a = [1, 2, 3, 4];
      var b = [5, 6, 7, 8];
      var c = [];
      
      c[0] = a[0] + b[0];
      c[1] = a[1] + b[1];
      c[2] = a[2] + b[2];
      c[3] = a[3] + b[3];
      c; // Array[6, 8, 10, 12]
  -
    name: Simd
    code: |
      var a = SIMD.Float32x4(1, 2, 3, 4);
      var b = SIMD.Float32x4(5, 6, 7, 8);
      var c = SIMD.Float32x4.add(a,b); // Float32x4[6, 8, 10, 12]
---

