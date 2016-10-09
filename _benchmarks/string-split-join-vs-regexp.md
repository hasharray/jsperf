---
title: String split/join vs Regexp
setup: |
  var id = '9999.0.1';
tests:
  -
    name: String split/join
    code: |
      var new_id = id.split('.').join('_');
  -
    name: Regexp
    code: |
      var new_id = id.replace(/\./g, '_');
---
String split/join vs Regexp
