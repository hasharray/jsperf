---
title: For (backwards) vs While (backwards)
setup: |
  var i = 1000;
  var j = 0;
tests:
  -
    name: For (backwards)
    code: |
      for (; i > -1; i--) j++;
  -
    name: While (backwards)
    code: |
      while (i--) j++;
---
Compare while vs for in looping over a list
