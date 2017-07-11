---
title: check before assign vs just assign
setup: |
  let x = true;
tests:
  -
    name: check before assign
    code: |
      if ( ! x ) x = true;
  -
    name: just assign
    code: |
      x = true;
---

