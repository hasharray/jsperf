---
title: arraynullcheck vs array no null check
setup: |
  
tests:
  -
    name: arraynullcheck
    code: |
      function withCheck(x) {
        if (x.length === 0) return null;
        for (const y of x) {}
        return null;
      }
      withCheck([])
  -
    name: array no null check
    code: |
      function withoutCheck(x) {
        if (x.length === 0) return null;
        for (const y of x) {}
        return null;
      }
      withoutCheck([])
---

