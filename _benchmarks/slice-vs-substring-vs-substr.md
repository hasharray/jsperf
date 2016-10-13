---
title: slice vs substring vs substr
setup: |
  var string = "I am the god of hellfire, and I bring you..."
tests:
  -
    name: slice
    code: |
      var substring = string.slice(16, 24);
  -
    name: substring
    code: |
      var substring = string.substring(16, 24);
  -
    name: substr
    code: |
      var substring = string.substr(16, 8);
---

