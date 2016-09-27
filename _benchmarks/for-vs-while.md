---
title: For vs While
setup: |
  var count = 1000 * 1000;
  var sum = 0;
tests:
  -
    name: For
    code: |
      for (var index = 0; index < count; index++) {
        sum += index;
      }
  -
    name: While
    code: |
      var index = count;
      while(index--) {
        sum += index;
      }
---

