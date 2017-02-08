---
title: test1b vs test2b vs test1a vs test2a
setup: |
  x = {a:[1, 2, 3, 4], b:null};
tests:
  -
    name: test1b
    code: |
      if (x.b != null) {
        for (var i = 0; i < x.b.length; i++) {
          console.log(1);
        }
      }
  -
    name: test2b
    code: |
      x.b = x.b || [];
      for (var i = 0; i < x.b.length; i++) {
        console.log(1);
      }
  -
    name: test1a
    code: |
      if (x.a != null) {
        for (var i = 0; i < x.a.length; i++) {
          console.log(1);
        }
      }
  -
    name: test2a
    code: |
      x.a = x.a || [];
      for (var i = 0; i < x.a.length; i++) {
        console.log(1);
      }
---

