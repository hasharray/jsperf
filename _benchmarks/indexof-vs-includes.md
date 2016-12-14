---
title: indexOf vs includes
setup: |
  
tests:
  -
    name: indexOf
    code: |
      var test = ["werenr", "uwe", "linus", "david"];
      test.indexOf("uwe");
      test.indexOf("werner");
  -
    name: includes
    code: |
      var test = ["werenr", "uwe", "linus", "david"];
      test.includes("uwe");
      test.includes("werner");
---

