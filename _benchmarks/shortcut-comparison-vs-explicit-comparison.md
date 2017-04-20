---
title: Shortcut comparison vs Explicit comparison
setup: |
  name = 'test name'
tests:
  -
    name: Shortcut comparison
    code: |
      if (name) {
        console.log(3);
      }
  -
    name: Explicit comparison
    code: |
      if (name !== '') {
        console.log(3);
      }
---

