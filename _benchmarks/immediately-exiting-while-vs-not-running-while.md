---
title: Immediately exiting while vs Not running while
setup: |
  var x = 0;
tests:
  -
    name: Immediately exiting while
    code: |
      while (x--) {}
  -
    name: Not running while
    code: |
      if (x > 0) {
        while (x--) {}
      }
---
Checks whether an immediately canceling while loop is faster than a while loop that doesn't run at all.
