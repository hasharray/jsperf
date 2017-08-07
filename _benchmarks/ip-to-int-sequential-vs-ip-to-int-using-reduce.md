---
title: IP to int sequential vs IP to int using reduce
setup: |
  let ip = "10.0.2.2";
tests:
  -
    name: IP to int sequential
    code: |
      function ipToInt(ip) {
          var parts = ip.split(".");
          var res = 0;
          res += parseInt(parts[0], 10) << 24;
          res += parseInt(parts[1], 10) << 16;
          res += parseInt(parts[2], 10) << 8;
          res += parseInt(parts[3], 10);
          return res;
      }
      
      let ipValue = ipToInt(ip);
  -
    name: IP to int using reduce
    code: |
      let ipValue = ip.split('.').reduce(function(sum, value, index) {
        return sum + (value << 8 * (4 - ++index));
      }, 0);
---

