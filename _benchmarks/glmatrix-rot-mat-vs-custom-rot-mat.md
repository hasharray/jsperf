---
title: glmatrix rot mat vs custom rot mat
setup: |
  
tests:
  -
    name: glmatrix rot mat
    code: |
      var glmrot = function(axis, deg) {
          var rad = deg * Math.PI / 180;
          var x = axis[0], y = axis[1], z = axis[2],
              len = Math.sqrt(x * x + y * y + z * z),
              s, c, t;
      
          len = 1 / len;
          x *= len;
          y *= len;
          z *= len;
      
          s = Math.sin(rad);
          c = Math.cos(rad);
          t = 1 - c;
      
          var out = new Float32Array(16);
          out[0] = x * x * t + c;
          out[1] = y * x * t + z * s;
          out[2] = z * x * t - y * s;
          out[3] = 0;
          out[4] = x * y * t - z * s;
          out[5] = y * y * t + c;
          out[6] = z * y * t + x * s; // (az * ny) - (s * nx);
          out[7] = 0;
          out[8] = x * z * t + y * s;
          out[9] = y * z * t - x * s;
          out[10] = z * z * t + c;
          out[11] = 0;
          out[12] = 0;
          out[13] = 0;
          out[14] = 0;
          out[15] = 1;
          return out;
      };
      
      var xaxis = new Float32Array([1, 0, 0]);
      var yaxis = new Float32Array([0, 1, 0]);
      var zaxis = new Float32Array([0, 0, 1]);
      for(var i = 0; i < 360; ++i) {
          glmrot(xaxis, i);
          glmrot(yaxis, i);
          glmrot(zaxis, i);
      }
  -
    name: custom rot mat
    code: |
      var customrot = function(axis, deg) {
          var rad = deg * Math.PI / 180;
          var s = Math.sin(rad),
              c = Math.cos(rad),
              t = 1.0 - c;
      
          var x = axis[0], y = axis[1], z = axis[2];
          var invLen = 1.0 / Math.sqrt((x * x) + (y * y) + (z * z));
          var nx = x * invLen, ny = y * invLen, nz = z * invLen;
          var ax = nx * t, ay = ny * t, az = nz * t;
          
          var result = new Float32Array(16);
          result[0] = c + (ax * nx);
          result[1] = (ay * nx) + (s * nz);
          result[2] = (az * nx) - (s * ny);
          result[3] = 0;
      
          result[4] = (ax * ny) - (s * nz);
          result[5] = c + (ay * ny);
          result[6] = (az * ny) + (s * nx);
          result[7] = 0;
          
          result[8]  = (ax * nz) + (s * ny);
          result[9]  = (ay * nz) - (s * nx);
          result[10] = c + (az * nz);
          result[11] = 0;
          
          result[12] = 0;
          result[13] = 0;
          result[14] = 0;
          result[15] = 1;
          return result;
      };
      
      var xaxis = new Float32Array([1, 0, 0]);
      var yaxis = new Float32Array([0, 1, 0]);
      var zaxis = new Float32Array([0, 0, 1]);
      for (var i = 0; i < 360; ++i) {
          customrot(xaxis, i);
          customrot(yaxis, i);
          customrot(zaxis, i);
      }
---

