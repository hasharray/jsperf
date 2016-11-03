---
title:  Math vs Bits vs Array
setup: |
  
tests:
  -
    name:  Math
    code: |
      function math(str, n) {
        var ret = '';
      
        do {
          if (n % 2) {
            ret += str;
          }
      
          n = Math.floor(n / 2);
          str += str;
        } while (n > 0);
        return ret;
      };
      math('unicorn ', 100);
  -
    name: Bits
    code: |
      function bits(str, n) {
        var ret = '';
        do {
          if (n & 1) ret += str;
          str += str;
        } while (n = n >> 1);
        return ret;
      }
      bits('unicorn ', 100);
  -
    name: Array
    code: |
      function array(str, n) {
        return (new Array(n + 1)).join(str);
      };
      array('unicorn ', 100);
---
Repeating Strings from https://jsperf.com/js-repeating-strings
