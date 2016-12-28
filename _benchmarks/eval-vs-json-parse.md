---
title: eval vs JSON.parse
setup: |
  var a={};
  var b = '{"a":1,"b":2,"c":3}';
tests:
  -
    name: eval
    code: |
      eval("a=" + b);
  -
    name: JSON.parse
    code: |
      a = JSON.parse(b)
---
eval VS JSON.parse
