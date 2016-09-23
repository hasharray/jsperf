---
title: for vs map
setup: |
  a = "fguzsdfkghsdf".split``
tests:
  -
    name: for
    code: |
      for (var i = a.length - 1; i >= 0; i--) {
          a[i] = 5;
      };
  -
    name: map
    code: |
      a.map(u=>u=5)
---
map vs for
