---
title: LP Array vs LP Binary
setup: |
  
tests:
  -
    name: LP Array
    code: |
      function leftPad(str, len, ch) {
          str = str + '';
          if (len <= str.length) return str;
      
          len = len - str.length;
          ch = (ch || ch === 0 ? ch + '' : ' ');
      
          return (new Array(len)).join().split(',').forEach(function () {
              return ch;
          });
      }
      
      leftPad('', 0);
      leftPad('', 10);
      leftPad('test', 0);
      leftPad('test', 10);
      leftPad('test', 100);
      leftPad(1, 0, 0);
      leftPad(1, 10, 0);
      leftPad(1, 100, 0);
  -
    name: LP Binary
    code: |
      var cache = [
          ' ',
          '  ',
          '   ',
          '    ',
          '     ',
          '      ',
          '       ',
          '        ',
          '         ',
      ];
      
      function leftPad (str, len, ch) {
          str = str + '';
          len = len - str.length;
      
          if (len <= 0) return str;
          if (!ch && ch !== 0) ch = ' ';
      
          ch = ch + '';
      
          if (ch === ' ' && len < 10) return cache[len] + str;
      
          var pad = '';
          while (true) {
              // add `ch` to `pad` if `len` is odd
              if (len & 1) pad += ch;
              // divide `len` by 2, ditch the remainder
              len >>= 1;
              // "double" the `ch` so this operation count grows logarithmically on `len`
              // each time `ch` is "doubled", the `len` would need to be "doubled" too
              // similar to finding a value in binary search tree, hence O(log(n))
              if (len) ch += ch;
              // `len` is 0, exit the loop
              else break;
          }
          // pad `str`!
          return pad + str;
      }
      
      leftPad('', 0);
      leftPad('', 10);
      leftPad('test', 0);
      leftPad('test', 10);
      leftPad('test', 100);
      leftPad(1, 0, 0);
      leftPad(1, 10, 0);
      leftPad(1, 100, 0);
---

