---
title: Includes indexOf vs Includes Match
setup: |
  function includesIndexOf(a, b) {
      return a.match(b) !== null;
  }
  
  function includesMatch(a, b) {
      return a.match(b) !== null;
  }
tests:
  -
    name: Includes indexOf
    code: |
      includesIndexOf('abcdefg', 'cde');
  -
    name: Includes Match
    code: |
      includesMatch('abcdefg', 'cde');
---

