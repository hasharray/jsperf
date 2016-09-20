---
title: Binary vs Ternary
setup: |

tests:
  -
    name: Binary
    code: |
      var value = Math.random() * 100;
      Math.max(value, Math.max(value + 1, value + 2));
  -
    name: Ternary
    code: |
      var value = Math.random() * 100;
      Math.max(value, value + 1, value + 2);
---
