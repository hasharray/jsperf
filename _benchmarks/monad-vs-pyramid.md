---
title: monad vs pyramid
setup: |
  var object = {
      prop: {
          key: true
      }
  };
tests:
  -
    name: monad
    code: |
      var value = ((object || {}).prop || {}).key;
  -
    name: pyramid
    code: |
      var value = object &&
                  object.prop &&
                  object.prop.key;
---

