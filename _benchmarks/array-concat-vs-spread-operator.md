---
title: Array concat vs spread operator
setup: |
  
tests:
  -
    name: Array concat
    code: |
      const params = [ "hello", true, 7 ];
      const other = [ 1, 2 ].concat(params);
  -
    name: spread operator
    code: |
      var params = [ "hello", true, 7 ]
      var other = [ 1, 2, ...params ]
---

