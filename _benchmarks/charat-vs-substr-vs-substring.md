---
title: charAt vs substr vs substring
setup: |
  var test_str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
tests:
  -
    name: charAt
    code: |
      var first_char = test_str.charAt(0);
  -
    name: substr
    code: |
      var first_char = test_str.substr(0, 1);
  -
    name: substring
    code: |
      var first_char = test_str.substring(0, 1);
---
Speed of methods to get first char of string.
